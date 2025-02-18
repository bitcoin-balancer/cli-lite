import { IConfigFile } from '../shared/types.js';
import { readConfigFile } from '../shared/fs/index.js';

/* ************************************************************************************************
 *                                         IMPLEMENTATION                                         *
 ************************************************************************************************ */

/**
 * Retrieves the contents of the configuration file (if any). Returns undefined if the file
 * doesn't exist or is broken.
 * @returns IConfigFile | undefined
 */
const getConfigFile = (): IConfigFile | undefined => {
  try {
    return readConfigFile();
  } catch (e) {
    return undefined;
  }
};





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  getConfigFile,
};
