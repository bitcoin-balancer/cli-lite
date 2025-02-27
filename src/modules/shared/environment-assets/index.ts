import { IConfigFile, IConfigSecretKey } from '../types.js';
import { SECRET_PROPERTIES } from '../constants.js';
import { clearSecrets, writeEnvFile, writeSecret } from '../fs/index.js';
import { buildSecretPath, stringifyValue } from './utils.js';

/* ************************************************************************************************
 *                                         IMPLEMENTATION                                         *
 ************************************************************************************************ */

/**
 * Builds the environment file's content based on the config file.
 * @param config
 * @returns string
 */
const __buildEnvironmentFile = (config: IConfigFile): string => {
  // init values
  let env: string = '';

  // iterate over the config properties
  Object.entries(config).forEach(([key, value]) => {
    // if the property is secret, set its path instead of the value
    if (SECRET_PROPERTIES.includes(key as IConfigSecretKey)) {
      env += `${buildSecretPath(key as IConfigSecretKey)}\n`;
    } else {
      env += `${key}=${stringifyValue(value)}\n`;
    }
  });

  // finally, return the contents
  return env;
};

/**
 * Clears the secrets directory, iterates over the secret properties and saves their content in the
 * secrets' dirctory.
 * @param config
 */
const __saveSecrets = (config: IConfigFile): void => {
  clearSecrets();
  SECRET_PROPERTIES.forEach((secret) => writeSecret(secret, stringifyValue(config[secret])));
};

/**
 * Creates and saves the environment file and the secrets.
 * @param config
 */
const generateEnvironmentAssets = (config: IConfigFile): void => {
  writeEnvFile(__buildEnvironmentFile(config));
  __saveSecrets(config);
};





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  generateEnvironmentAssets,
};
