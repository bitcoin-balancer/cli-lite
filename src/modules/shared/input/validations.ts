import { isIntegerValid, isURLValid } from 'web-utils-kit';

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
 * Ensures the given string is a valid Telegram Chat ID. Returns a string if it isn't.
 * @param val
 * @returns boolean | string
 */
const validateTelegramChatID = (val: string): boolean | string => (
  isIntegerValid(Number(val)) ? true : 'Please enter a valid identifier'
);

/**
 * Ensures the given string is a valid API key. Returns a string if it isn't.
 * @param val
 * @returns boolean | string
 */
const validateAPIKey = (val: string): boolean | string => (
  val.length > 0 ? true : 'Please enter a valid API key'
);

/**
 * Ensures the given string is a valid secret key. Returns a string if it isn't.
 * @param val
 * @returns boolean | string
 */
const validateSecretKey = (val: string): boolean | string => (
  val.length > 0 ? true : 'Please enter a valid secret key'
);

/**
 * Ensures the given string is a valid tunnel token. Returns a string if it isn't.
 * @param val
 * @returns boolean | string
 */
const validateTunnelToken = (val: string): boolean | string => (
  val.length > 0 ? true : 'Please enter a valid tunnel token'
);





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  validateURL,
  validateTelegramChatID,
  validateAPIKey,
  validateSecretKey,
  validateTunnelToken,
};
