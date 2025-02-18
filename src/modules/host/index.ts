/* eslint-disable no-console */
import { extractMessage } from 'error-message-utils';
import { sendGET } from 'fetch-request-node';
import { IPackageFile, PackageFileSchema } from '../shared/types.js';
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

  // the latest version of the cli-lite package
  let __latestVersion: string;

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
      console.log(data);
      return PackageFileSchema.parse(data).version;
    } catch (e) {
      // console.log(e);
      return __packageFile.version;
    }
  };





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

    // retrieve the latest version of the cli-lite package
    __latestVersion = await __getLatestVersion();

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
    get latestVersion() {
      return __latestVersion;
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
