import { IConfigFile, IConfigSecretKey } from '../types.js';
import { clearSecrets, writeEnvFile, writeSecret } from '../fs/index.js';
import { buildSecretPath, stringifyValue } from './utils.js';

/* ************************************************************************************************
 *                                           CONSTANTS                                            *
 ************************************************************************************************ */

// the list of properties that are considered secret and should not be saved in the environment file
const __SECRET_PROPERTIES: IConfigSecretKey[] = [
  'ALTCHA_SECRET',
  'COOKIE_SECRET',
  'ENCRYPTING_SECRET',
  'EXCHANGE_CREDENTIALS',
  'HASHING_SECRET',
  'JWT_SECRET',
  'POSTGRES_PASSWORD_FILE',
  'ROOT_ACCOUNT',
  'TELEGRAM',
  'TUNNEL_TOKEN',
];





/* ************************************************************************************************
 *                                         IMPLEMENTATION                                         *
 ************************************************************************************************ */

/**
 * Builds the environment file's content based on the config file.
 * @param config
 * @param hasTunnelToken
 * @returns string
 */
const buildEnvironmentFile = (config: IConfigFile, hasTunnelToken: boolean): string => {
  // init values
  let env: string = '';

  // iterate over the config properties
  Object.entries(config).forEach(([key, value]) => {
    // if the property is secret, set its path instead of the value
    if (__SECRET_PROPERTIES.includes(key as IConfigSecretKey)) {
      if (key === 'TUNNEL_TOKEN' && !hasTunnelToken) {
        env += `${key}=\n`;
      } else {
        env += `${key}=${buildSecretPath(key as IConfigSecretKey)}\n`;
      }
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
 * Important: if the config does not have a tunnel token, the secret file will not be generated.
 * @param config
 * @param hasTunnelToken
 */
const saveSecrets = (config: IConfigFile, hasTunnelToken: boolean): void => {
  clearSecrets();
  __SECRET_PROPERTIES.forEach((secret) => {
    if (secret === 'TUNNEL_TOKEN' && !hasTunnelToken) {
      return;
    }
    writeSecret(secret, stringifyValue(config[secret]));
  });
};

/**
 * Creates and saves the environment file and the secrets.
 * @param config
 * @param hasTunnelToken
 */
const generateEnvironmentAssets = (config: IConfigFile, hasTunnelToken: boolean): void => {
  writeEnvFile(buildEnvironmentFile(config, hasTunnelToken));
  saveSecrets(config, hasTunnelToken);
};





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  generateEnvironmentAssets,
};
