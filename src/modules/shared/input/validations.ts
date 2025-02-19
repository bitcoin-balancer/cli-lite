import { isURLValid } from 'web-utils-kit';

/* ************************************************************************************************
 *                                         IMPLEMENTATION                                         *
 ************************************************************************************************ */

/**
 * Ensures the given string is a valid URL. Returns a string if it isn't.
 * @param val
 * @returns boolean | string
 */
const validateURL = (val: string): boolean | string => (
  isURLValid(val) ? true : 'Please enter a valid URL'
);





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  validateURL,
};
