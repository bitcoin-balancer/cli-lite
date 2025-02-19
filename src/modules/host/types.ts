import { IPackageFile } from '../shared/types.js';

/* ************************************************************************************************
 *                                            SERVICE                                             *
 ************************************************************************************************ */

/**
 * Host Service
 * Object in charge of executing commands on the host machine.
 */
type IHostService = {
  // properties
  packageFile: IPackageFile;
  latestVersion: string;
  systemInformation: string;
  dockerProcess: IDockerProcess;

  // cli management
  pullSourceCode: () => Promise<void>;
  installDependencies: () => Promise<void>;
  buildCLI: () => Promise<void>;

  // docker


  // initializer
  initialize: (hasTunnelToken: boolean) => Promise<void>;
};





/* ************************************************************************************************
 *                                             TYPES                                              *
 ************************************************************************************************ */

/**
 * Container Name
 * The names assigned to the containers by Docker Compose.
 */
type IContainerName = 'postgres' | 'api' | 'gui' | 'ct';

/**
 * Container State
 * Object containing the state of a container. If the container is not running, it will hold the
 * latest logs.
 */
type IContainerState = {
  running: boolean;
} & (
  | {
    running: true;
  }
  | {
    running: false;
    logs: string;
  }
);
type IContainerStates = {
  'postgres': IContainerState;
  'api': IContainerState;
  'gui': IContainerState;
  'ct'?: IContainerState;
};

/**
 * Docker Process
 * The current state of the Docker Process that's running on the host.
 */
type IDockerProcess = {
  // true if all the containers are running
  allRunning: boolean;

  // true if all the containers are down
  allDown: boolean;

  // the containers' state
  containers: IContainerStates;
};





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export type {
  // service
  IHostService,

  // types
  IContainerName,
  IContainerState,
  IContainerStates,
  IDockerProcess,
};
