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
  down: () => Promise<void>;
  restart: () => Promise<void>;
  susbcribeToLogs: (name?: IContainerName) => Promise<void>;
  prune: () => Promise<void>;
  restartDaemon: () => Promise<void>;
  psql: () => Promise<void>;

  // initializer
  initialize: (hasTunnelToken: boolean) => Promise<void>;
};





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export type {
  // service
  IHostService,

  // types
  // ...
};
