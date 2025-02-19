import { select, input } from '@inquirer/prompts';
import { MENU } from './constants.js';
import { decodeMenuAction } from './utils.js';
import { IDecodedMenuAction } from './types.js';
import { validateTelegramChatID, validateTelegramToken, validateURL } from './validations.js';
import { IExchangeConfiguration, ITelegramConfig } from '../types.js';

/* ************************************************************************************************
 *                                         IMPLEMENTATION                                         *
 ************************************************************************************************ */

/**
 * Displays the CLI menu and returns the chosen, decoded action.
 * @returns Promise<IDecodedMenuAction>
 */
const displayMenuInput = async (): Promise<IDecodedMenuAction> => {
  // display the categories menu
  const chosenCategory = await select({
    message: 'Select a category',
    choices: MENU,
    pageSize: 100,
    loop: false,
  });

  // display the actions menu
  const chosenAction = await select({
    message: 'Select an action',
    choices: chosenCategory,
    pageSize: 100,
    loop: false,
  });

  // display the actions menu and return the choice
  return decodeMenuAction(chosenAction);
};

/**
 * Prompts the user to enter a valid URL.
 * @param message
 * @returns Promise<string>
 */
const displayURLInput = (message: string) => input({ message, validate: validateURL });

/**
 * Displays the GUI URL input prompt.
 * @returns Promise<string>
 */
const displayGUIURLInput = (): Promise<string> => (
  displayURLInput('Enter the GUI\'s URL. e.g. https://balancer.jesusgraterol.dev')
);

/**
 * Displays the TELEGRAM input prompt.
 * @returns Promise<ITelegramConfig>
 */
const displayTelegramInput = async (): Promise<ITelegramConfig> => ({
  token: await input({
    message: 'Enter the Telegram Bot Token',
    validate: validateTelegramToken,
  }),
  chatID: Number(await input({
    message: 'Enter the Telegram Bot Token',
    validate: validateTelegramChatID,
  })),
});

/**
 * Displays the EXCHANGE_CONFIGURATION input prompt.
 * @returns Promise<IExchangeConfiguration>
 */
const displayExchangeConfigurationInput = async (): Promise<IExchangeConfiguration> => ({
  token: await input({
    message: 'Enter the Telegram Bot Token',
    validate: validateTelegramToken,
  }),
  chatID: Number(await input({
    message: 'Enter the Telegram Bot Token',
    validate: validateTelegramChatID,
  })),
});




/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  // types
  type IDecodedMenuAction,

  // implementation
  displayMenuInput,
  displayURLInput,
  displayGUIURLInput,
  displayTelegramInput,
  displayExchangeConfigurationInput,
};
