import { generateRandomInteger, generateUUID } from 'web-utils-kit';
import { IConfigFile, IConfigFileImmutable } from '../shared/types.js';
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
 * Builds the immutable part of the configuration file.
 * @returns IConfigFileImmutable
 */
const buildImmutableConfig = (): IConfigFileImmutable => ({
  NODE_ENV: 'production',
  POSTGRES_HOST: 'postgres',
  POSTGRES_USER: 'postgres',
  POSTGRES_DB: 'postgres',
  POSTGRES_PASSWORD_FILE: generatePassword(generateRandomInteger(450, 550), true, true, true, true),
  HASHING_SECRET: generateRandomBytes(generateRandomInteger(90, 110)),
  ENCRYPTING_SECRET: generateRandomBytes(generateRandomInteger(90, 110)),
  ROOT_ACCOUNT: {
    uid: generateUUID(4),
    nickname: 'root',
    password: generatePassword(generateRandomInteger(40, 60), true, true, true, true),
    otpSecret: generateOTPSecret(),
  },
  ALTCHA_SECRET: generatePassword(generateRandomInteger(80, 140), true, true, true, true),
  JWT_SECRET: {
    refresh: generateRandomBytes(generateRandomInteger(90, 110)),
    access: generateRandomBytes(generateRandomInteger(90, 110)),
  },
  COOKIE_SECRET: generatePassword(generateRandomInteger(80, 140), true, true, true, true),
});





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  getConfigFile,
  buildImmutableConfig,
};
