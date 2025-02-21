import { isArrayValid, isObjectValid } from 'web-utils-kit';
import { IConfigSecretKey } from '../types.js';

/* ************************************************************************************************
 *                                         IMPLEMENTATION                                         *
 ************************************************************************************************ */

/**
 * Stringifies a given value based on its type.
 * @param value
 * @returns string
 */
const stringifyValue = (value: unknown): string => (
  isObjectValid(value, true) || isArrayValid(value, true)
    ? JSON.stringify(value)
    : String(value)
);


/**
 * Builds the path for a secret that will be included in the .env file.
 * @param key
 * @returns string
 */
const buildSecretPath = (key: IConfigSecretKey): string => `${key}=/run/secrets/${key}\n`;





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  stringifyValue,
  buildSecretPath,
};
