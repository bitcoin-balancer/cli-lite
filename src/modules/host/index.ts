/* eslint-disable no-console */
import { extractMessage } from 'error-message-utils';
import { IPackageFile } from '../shared/types.js';
import { execute } from '../shared/command/index.js';
import { readPackageFile } from '../shared/fs/index.js';
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

  // the cli-lite's package.json file
  let __packageFile: IPackageFile;

  // the state of the host machine
  let __systemInformation: string = '';





  /* **********************************************************************************************
   *                                           RETRIEVERS                                         *
   ********************************************************************************************** */

  /**
   * Executes the landscape-sysinfo command on the host machine and returns its results.
   * @returns Promise<string>
   */
  const __getLandscapeSysinfo = async (): Promise<string> => (
    execute('landscape-sysinfo', [], 'pipe')
  );





  /* **********************************************************************************************
   *                                           INITIALIZER                                        *
   ********************************************************************************************** */

  /**
   * Initializes the essential data required by the Host Service.
   * @returns Promise<void>
   */
  const initialize = async (): Promise<void> => {
    // retrieve the package.json file
    __packageFile = readPackageFile();

    // retrieve the system information
    try {
      __systemInformation = await __getLandscapeSysinfo();
    } catch (e) {
      __systemInformation = extractMessage(e);
    }

    // retrieve the state of the Docker Containers
    // ...
  };





  /* **********************************************************************************************
   *                                         MODULE BUILD                                         *
   ********************************************************************************************** */
  return Object.freeze({
    // properties
    get packageFile() {
      return __packageFile;
    },
    get systemInformation() {
      return __systemInformation;
    },

    // retrievers
    // ...

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
