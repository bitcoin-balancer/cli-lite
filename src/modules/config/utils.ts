import { generateRandomInteger, generateUUID } from 'web-utils-kit';
import { IConfigFile, IConfigFileImmutable } from '../shared/types.js';
import {
  NODE_ENV,
  ROOT_ACCOUNT_NICKNAME,
  POSTGRES_DB,
  POSTGRES_HOST,
  POSTGRES_USER,
} from '../shared/constants.js';
import { readConfigFile } from '../shared/fs/index.js';
import { generateOTPSecret } from '../shared/otp/index.js';
import { generatePassword } from '../shared/password/index.js';
import { generateRandomBytes } from '../shared/random-bytes/index.js';

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
 * Generates a password with a random length.
 * @param min
 * @param max
 * @returns string
 */
const __generatePassword = (min: number, max: number): string => (
  generatePassword(generateRandomInteger(min, max), true, true, true, true)
);

/**
 * Generates a random sequence of characters with a random length.
 * @param min
 * @param max
 * @returns string
 */
const __generateRandomBytes = (min: number, max: number): string => (
  generateRandomBytes(generateRandomInteger(min, max))
);

/**
 * Builds the immutable part of the configuration file.
 * @returns IConfigFileImmutable
 */
const buildImmutableConfig = (): IConfigFileImmutable => ({
  NODE_ENV,
  POSTGRES_HOST,
  POSTGRES_USER,
  POSTGRES_DB,
  POSTGRES_PASSWORD_FILE: __generatePassword(450, 550),
  HASHING_SECRET: __generateRandomBytes(90, 110),
  ENCRYPTING_SECRET: __generateRandomBytes(90, 110),
  ROOT_ACCOUNT: {
    uid: generateUUID(4),
    nickname: ROOT_ACCOUNT_NICKNAME,
    password: __generatePassword(40, 60),
    otpSecret: generateOTPSecret(),
  },
  ALTCHA_SECRET: __generatePassword(80, 140),
  JWT_SECRET: {
    refresh: __generateRandomBytes(90, 110),
    access: __generateRandomBytes(90, 110),
  },
  COOKIE_SECRET: __generatePassword(80, 140),
});





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  getConfigFile,
  buildImmutableConfig,
};
