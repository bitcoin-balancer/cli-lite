import { isIntegerValid, isStringValid, isURLValid } from 'web-utils-kit';

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

/**
 * Ensures the given string is a valid Telegram token. Returns a string if it isn't.
 * @param val
 * @returns boolean | string
 */
const validateTelegramToken = (val: string): boolean | string => (
  isStringValid(val, 10, 200) ? true : 'Please enter a valid token'
);

/**
 * Ensures the given string is a valid Telegram Chat ID. Returns a string if it isn't.
 * @param val
 * @returns boolean | string
 */
const validateTelegramChatID = (val: string): boolean | string => (
  isIntegerValid(Number(val)) ? true : 'Please enter a valid identifier'
);





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  validateURL,
  validateTelegramToken,
  validateTelegramChatID,
};
