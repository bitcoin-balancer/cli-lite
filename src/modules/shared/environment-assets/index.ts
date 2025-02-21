import { IConfigFile, IConfigSecretKey } from '../types.js';
import { clearSecrets } from '../fs/index.js';

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
 * Creates and saves the environment file and the secrets.
 * @param config
 * @param hasTunnelToken
 */
const buildEnvironmentAssets = (config: IConfigFile, hasTunnelToken: boolean): void => {
  // clear the secrets
  clearSecrets();
};





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  buildEnvironmentAssets,
};
