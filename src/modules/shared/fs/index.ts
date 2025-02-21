import {
  deleteDirectory,
  readJSONFile,
  writeJSONFile,
  writeTextFile,
} from 'fs-utils-sync';
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

// the path to the secrets' directory
const __SECRETS_DIR_PATH = 'secrets';

// the path to the environment file
const __ENV_FILE_PATH = '.env';

// the path to the compose file
const __COMPOSE_FILE_PATH = 'compose.yaml';





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

/**
 * Writes the config object to the config.json file.
 * @param config
 */
const writeConfigFile = (config: IConfigFile): void => writeJSONFile(__CONFIG_FILE_PATH, config);





/* ************************************************************************************************
 *                                       ENVIRONMENT ASSETS                                       *
 ************************************************************************************************ */

/**
 * Deletes the secrets directory and all its contents.
 */
const clearSecrets = (): void => deleteDirectory(__SECRETS_DIR_PATH);

/**
 * Creates or updates the environment file (.env).
 * @param content
 */
const writeEnvFile = (content: string): void => writeTextFile(__ENV_FILE_PATH, content);

/**
 * Creates or updates the compose file (compose.yaml).
 * @param content
 */
const writeComposeFile = (content: string): void => writeTextFile(__COMPOSE_FILE_PATH, content);





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  // package file
  readPackageFile,

  // config file
  readConfigFile,
  writeConfigFile,

  // environment assets
  clearSecrets,
  writeEnvFile,
  writeComposeFile,
};
