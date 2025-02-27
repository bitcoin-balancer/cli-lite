import {
  IConfigFile,
  IContainerName,
  IContainerState,
  IDockerProcess,
  IPackageFile,
} from '../shared/types.js';

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
  susbcribeToLogs: (name?: IContainerName) => Promise<void>;
  prune: () => Promise<void>;
  restartDaemon: () => Promise<void>;
  down: () => Promise<void>;
  restart: () => Promise<void>;
  up: (config: IConfigFile) => Promise<void>;
  psql: () => Promise<void>;

  // initializer
  initialize: () => Promise<void>;
};




/* ************************************************************************************************
 *                                             TYPES                                              *
 ************************************************************************************************ */

/**
 * Command Execution Return
 * Utility type that represents the type that will be returned from a command execution.
 */
type ICommandExecutionReturn<T> = Promise<T extends true ? undefined : string>;

/**
 * Container State Tuple
 * Utility type that represents a tuple containing the name of a container and its state.
 */
type IContainerStateTuple = Array<[IContainerName, IContainerState]>;



/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export type {
  // service
  IHostService,

  // types
  ICommandExecutionReturn,
  IContainerStateTuple,
};
