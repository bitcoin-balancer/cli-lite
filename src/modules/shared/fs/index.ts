import { readJSONFile } from 'fs-utils-sync';
import {
  PackageFileSchema,
  type IPackageFile,
  ConfigFileSchema,
  IConfigFile,
} from '../types.js';

/* ************************************************************************************************
 *                                           CONSTANTS                                            *
 ************************************************************************************************ */

// the path to the package.json file
const __PACKAGE_FILE_PATH = 'package.json';

// the path to the config.json file
const __CONFIG_FILE_PATH = 'config.json';





/* ************************************************************************************************
 *                                          PACKAGE FILE                                          *
 ************************************************************************************************ */

/**
 * Reads and returns the contents of the package.json file.
 * @returns IPackageFile
 * @throws
 * - if the file does not exist or it doesn't have the required properties
 */
const readPackageFile = (): IPackageFile => PackageFileSchema.parse(
  readJSONFile(__PACKAGE_FILE_PATH),
);





/* ************************************************************************************************
 *                                           CONFIG FILE                                          *
 ************************************************************************************************ */

/**
 * Reads and returns the contents of the config.json file.
 * @returns IConfigFile
 * @throws
 * - if the file does not exist or it doesn't have the required properties
 */
const readConfigFile = (): IConfigFile => ConfigFileSchema.parse(
  readJSONFile(__CONFIG_FILE_PATH),
);





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  // package file
  readPackageFile,

  // config file
  readConfigFile,
};
