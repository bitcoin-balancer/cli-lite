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

  // retrievers
  // ...

  // cli management
  pullSourceCode: () => Promise<void>;
  installDependencies: () => Promise<void>;
  buildCLI: () => Promise<void>;

  // initializer
  initialize: () => Promise<void>;
};





/* ************************************************************************************************
 *                                             TYPES                                              *
 ************************************************************************************************ */

/**
 * Container Name
 * The names assigned to the containers by Docker Compose.
 */
type IContainerName = 'balancer-postgres' | 'balancer-api' | 'balancer-gui' | 'balancer-ct';

/**
 * Container State
 * Object containing the state of a container. If the container is not running, it will hold the
 * latest logs.
 */
type IContainerState = {
  running: boolean;
} & (
  | {
    running: false;
    logs: string;
  }
);

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
  containers: {
    'balancer-postgres': IContainerState;
    'balancer-api': IContainerState;
    'balancer-gui': IContainerState;
    'balancer-ct'?: IContainerState;
  }
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
  IDockerProcess,
};
