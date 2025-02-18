import { randomBytes } from 'node:crypto';

/* ************************************************************************************************
 *                                         IMPLEMENTATION                                         *
 ************************************************************************************************ */

/**
 * Generates a random sequence of bytes and encodes the result with the Base64URL scheme.
 * @param {*} size
 * @returns string
 */
const generateRandomBytes = (size: number): string => randomBytes(size).toString('base64url');





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  generateRandomBytes,
};
