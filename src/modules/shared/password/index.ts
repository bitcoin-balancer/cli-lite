import { generate } from 'generate-password';

/* ************************************************************************************************
 *                                           CONSTANTS                                            *
 ************************************************************************************************ */

// the list of characters that won't be included into passwords in order to avoid issues. e.g.
// when using one of these values in a .env file.
const __EXCLUDE_CHARACTERS = '"\'={}`$';





/* ************************************************************************************************
 *                                         IMPLEMENTATION                                         *
 ************************************************************************************************ */

/**
 * Generates a brand new "random" password based on the given configuration. Note that if the
 * strength of the password is Weak or less, it will throw an error.
 * @param passwordLength
 * @param includeNumbers
 * @param includeLowerCase
 * @param includeUpperCase
 * @param includeSymbols
 * @returns string
 */
const generatePassword = (
  passwordLength: number,
  includeNumbers: boolean,
  includeLowerCase: boolean,
  includeUpperCase: boolean,
  includeSymbols: boolean,
): string => generate({
  length: passwordLength,
  numbers: includeNumbers,
  lowercase: includeLowerCase,
  uppercase: includeUpperCase,
  symbols: includeSymbols,
  exclude: __EXCLUDE_CHARACTERS,
  strict: true,
});





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  generatePassword,
};
