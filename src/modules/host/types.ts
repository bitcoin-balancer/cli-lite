import { IContainerName, IDockerProcess, IPackageFile } from '../shared/types.js';

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
  up: () => Promise<void>;
  psql: () => Promise<void>;

  // initializer
  initialize: (hasTunnelToken: boolean) => Promise<void>;
};




/* ************************************************************************************************
 *                                             TYPES                                              *
 ************************************************************************************************ */

/**
 * Command Execution Return
 * Utility type that represents the type that will be returned from a command execution.
 */
type ICommandExecutionReturn<T> = Promise<T extends true ? undefined : string>;





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export type {
  // service
  IHostService,

  // types
  ICommandExecutionReturn,
};
