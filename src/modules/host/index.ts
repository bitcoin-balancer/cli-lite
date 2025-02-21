/* eslint-disable no-console */
import { extractMessage } from 'error-message-utils';
import { sendGET } from 'fetch-request-node';
import {
  IPackageFile,
  PackageFileSchema,
  IContainerName,
  IContainerState,
  IContainerStates,
  IDockerProcess,
  IConfigFile,
} from '../shared/types.js';
import { readPackageFile } from '../shared/fs/index.js';
import { generateEnvironmentAssets } from '../shared/environment-assets/index.js';
import { generateComposeFile } from '../shared/compose-file/index.js';
import {
  landscapeSysinfo,
  git,
  npm,
  docker,
  dockerCompose,
  systemctl,
} from './utils.js';
import { IHostService } from './types.js';

/* ************************************************************************************************
 *                                         IMPLEMENTATION                                         *
 ************************************************************************************************ */

/**
 * Host Service Factory
 * Generates the object in charge of executing commands on the host machine.
 * @returns IHostService
 */
const hostServiceFactory = (): IHostService => {
  /* **********************************************************************************************
   *                                          PROPERTIES                                          *
   ********************************************************************************************** */

  // true if the config has a valid tunnel token
  let __hasTunnelToken: boolean;

  // the cli-lite's package.json file
  let __packageFile: IPackageFile;

  // the latest version of the cli-lite package
  let __latestVersion: string;

  // the state of the host machine
  let __systemInformation: string = '';

  // the state of the docker process
  let __dockerProcess: IDockerProcess;





  /* **********************************************************************************************
   *                                         MIST RETRIEVERS                                      *
   ********************************************************************************************** */

  /**
   * Executes the landscape-sysinfo command on the host machine and returns its results.
   * @returns Promise<string>
   */
  const __getLandscapeSysinfo = async (): Promise<string> => landscapeSysinfo('', false);

  /**
   * Retrieves the latest version of the cli-lite package from the GitHub repository.
   * @returns Promise<string>
   */
  const __getLatestVersion = async (): Promise<string> => {
    try {
      const { data } = await sendGET<IPackageFile>(
        'https://raw.githubusercontent.com/bitcoin-balancer/cli-lite/main/package.json',
        {
          requestOptions: {
            headers: new Headers({ Accept: 'text/plain' }),
          },
        },
      );
      return PackageFileSchema.parse(data).version;
    } catch (e) {
      return __packageFile.version;
    }
  };





  /* **********************************************************************************************
   *                                         CLI MANAGEMENT                                       *
   ********************************************************************************************** */

  /**
   * Pulls the latest version of the source code from the repository.
   * @returns Promise<void>
   */
  const pullSourceCode = (): Promise<void> => git('pull origin main', true);

  /**
   * Installs the dependencies of the cli-lite package.
   * @returns Promise<void>
   */
  const installDependencies = (): Promise<void> => npm('ci', true);

  /**
   * Runs the CLI's build script.
   * @returns Promise<void>
   */
  const buildCLI = (): Promise<void> => npm('run build', true);





  /* **********************************************************************************************
   *                                            DOCKER                                            *
   ********************************************************************************************** */

  /**
   * Process
   */

  /**
   * Retrieves the status of the Docker Process.
   * @returns Promise<string[]>
   */
  const __getDockerProcessStatusRows = async (): Promise<string[]> => {
    const ps = await docker('ps', false);
    if (ps && ps.length > 0) {
      return ps.split('\n').slice(1).filter((row) => row.length > 0);
    }
    return [];
  };

  /**
   * Logs
   */

  /**
   * Retrieves the latest logs for a given container. If it fails to do so, it returns the cause.
   * @param name
   * @param count?
   * @returns Promise<string>
   */
  const __getLatestContainerLogs = async (
    name: IContainerName,
    count: number = 15,
  ): Promise<string> => {
    try {
      return await dockerCompose(`logs ${name} --tail ${count}`, false);
    } catch (e) {
      return `Unable to extract logs for ${name}: ${extractMessage(e)}`;
    }
  };

  /**
   * Susbcribes to the log stream for a given container. If none is provided, it subscribes to all.
   * @param name
   * @returns Promise<void>
   */
  const susbcribeToLogs = (name?: IContainerName): Promise<void> => (
    typeof name === 'string'
      ? dockerCompose(`logs ${name} -f`, true)
      : dockerCompose('logs -f', true)
  );

  /**
   * Maintenance
   */

  /**
   * Removes all unused containers, networks and images (both dangling and unused).
   * @returns Promise<void>
   */
  const prune = (): Promise<void> => docker('system prune --all --force', true);

  /**
   * Restarts Docker's Systemd service.
   * @returns Promise<void>
   */
  const restartDaemon = (): Promise<void> => systemctl('restart docker', true);

  /**
   * Containers
   */

  /**
   * Stops containers and removes containers, networks, volumes, and images created by up.
   * @returns Promise<void>
   */
  const down = (): Promise<void> => dockerCompose('down', true);

  /**
   * Restarts all stopped and running services.
   * @returns Promise<void>
   */
  const restart = (): Promise<void> => dockerCompose('restart', true);

  /**
   * Pulls the latest images from the registry, creates and starts the containers.
   * @param config
   * @returns Promise<void>
   */
  const up = async (config: IConfigFile): Promise<void> => {
    // generate the environment assets
    generateEnvironmentAssets(config, __hasTunnelToken);

    // generate the compose file
    generateComposeFile(config, __hasTunnelToken);

    // prune the system
    await prune();
    await restartDaemon();

    // pull the latest images from the registry and create the containers
    return dockerCompose('up --pull always --no-build --detach', true);
  };

  /**
   * Database
   */

  /**
   * Initializes a psql session in the postgres container.
   * @returns Promise<void>
   */
  const psql = (): Promise<void> => dockerCompose('exec -it postgres psql -U postgres', true);





  /* **********************************************************************************************
   *                                           INITIALIZER                                        *
   ********************************************************************************************** */

  /**
   * Checks if a container is running based on the status rows.
   * @param name
   * @param statusRows
   * @returns boolean
   */
  const __isContainerRunning = (name: IContainerName, statusRows: string[]): boolean => (
    statusRows.some((row) => row.includes(`balancer-${name}`) && row.includes('Up'))
  );

  /**
   * Calculates the state of a container based on the status rows. If a container if not running,
   * it will retrieve the latest logs in order to help identifying the cause of the crash.
   * @param name
   * @param statusRows
   * @returns Promise<IContainerState>
   */
  const __calculateContainerState = async (
    name: IContainerName,
    statusRows: string[],
  ): Promise<IContainerState> => (
    __isContainerRunning(name, statusRows)
      ? { running: true }
      : { running: false, logs: await __getLatestContainerLogs(name) }
  );

  /**
   * Calculates the state for every container.
   * @param hasTunnelToken
   * @returns Promise<Array<[IContainerName, IContainerState]>>
   */
  const __calculateContainerStates = async (
    hasTunnelToken: boolean,
  ): Promise<Array<[IContainerName, IContainerState]>> => {
    // retrieve the status of the Docker Process
    const statusRows = await __getDockerProcessStatusRows();

    // calculate the state for each container
    const states: Array<[IContainerName, IContainerState]> = [
      ['postgres', await __calculateContainerState('postgres', statusRows)],
      ['api', await __calculateContainerState('api', statusRows)],
      ['gui', await __calculateContainerState('gui', statusRows)],
    ];
    if (hasTunnelToken) {
      states.push(['ct', await __calculateContainerState('ct', statusRows)]);
    }

    // finally, return the states
    return states;
  };

  /**
   * Calculates the state of the Docker Process based on the status of the containers.
   * @param hasTunnelToken
   * @returns Promise<IDockerProcess>
   */
  const __calculateDockerProcessState = async (
    hasTunnelToken: boolean,
  ): Promise<IDockerProcess> => {
    const states = await __calculateContainerStates(hasTunnelToken);
    return {
      allRunning: !states.some(([, value]) => value.running === false),
      allDown: !states.some(([, value]) => value.running === true),
      containers: Object.fromEntries(states) as IContainerStates,
    };
  };

  /**
   * Initializes the essential data required by the Host Service.
   * @returns Promise<void>
   */
  const initialize = async (hasTunnelToken: boolean): Promise<void> => {
    // true if the platform is making use of a cloudflare tunnel
    __hasTunnelToken = hasTunnelToken;

    // retrieve the package.json file
    __packageFile = readPackageFile();

    // retrieve the latest version of the cli-lite package
    __latestVersion = await __getLatestVersion();

    // retrieve the system information
    try {
      __systemInformation = await __getLandscapeSysinfo();
    } catch (e) {
      __systemInformation = extractMessage(e);
    }

    // retrieve the state of the Docker Containers
    __dockerProcess = await __calculateDockerProcessState(hasTunnelToken);
  };





  /* **********************************************************************************************
   *                                         MODULE BUILD                                         *
   ********************************************************************************************** */
  return Object.freeze({
    // properties
    get packageFile() {
      return __packageFile;
    },
    get latestVersion() {
      return __latestVersion;
    },
    get systemInformation() {
      return __systemInformation;
    },
    get dockerProcess() {
      return __dockerProcess;
    },

    // cli management
    pullSourceCode,
    installDependencies,
    buildCLI,

    // docker
    susbcribeToLogs,
    prune,
    restartDaemon,
    down,
    restart,
    up,
    psql,

    // initializer
    initialize,
  });
};





/* ************************************************************************************************
 *                                        GLOBAL INSTANCE                                         *
 ************************************************************************************************ */
const HostService = hostServiceFactory();





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  HostService,
};
