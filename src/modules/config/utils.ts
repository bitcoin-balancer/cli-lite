import { IConfigFile, IConfigFileImmutable } from '../shared/types.js';
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

/**
 * Builds the immutable part of the configuration file.
 * @returns IConfigFileImmutable
 */
const buildImmutableConfig = (): IConfigFileImmutable => ({
  NODE_ENV: 'production',
  POSTGRES_HOST: 'postgres',
  POSTGRES_USER: 'postgres',
  POSTGRES_DB: 'postgres',
  POSTGRES_PASSWORD_FILE: '',
  HASHING_SECRET: '',
  ENCRYPTING_SECRET: '',
  ROOT_ACCOUNT: {
    uid: '',
    nickname: '',
    password: '',
    otpSecret: '',
  },
  ALTCHA_SECRET: '',
  JWT_SECRET: {
    refresh: '',
    access: '',
  },
  COOKIE_SECRET: '',
});





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  getConfigFile,
  buildImmutableConfig,
};
