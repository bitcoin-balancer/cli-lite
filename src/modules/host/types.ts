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

// ...





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export type {
  // service
  IHostService,

  // types
  // ...
};
