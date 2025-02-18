import { readJSONFile } from 'fs-utils-sync';
import { PackageFileSchema, type IPackageFile } from '../types.js';

/* ************************************************************************************************
 *                                           CONSTANTS                                            *
 ************************************************************************************************ */

// the path to the package.json file
const __PACKAGE_FILE_PATH = 'package.json';





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
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  // package file
  readPackageFile,
};
