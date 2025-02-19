import { select, input } from '@inquirer/prompts';
import { IExchangeConfiguration, ITelegramConfig } from '../types.js';
import { BASE_ASSET, EXCHANGE_IDS, QUOTE_ASSETS } from '../constants.js';
import { MENU } from './constants.js';
import { decodeMenuAction } from './utils.js';
import { IDecodedMenuAction } from './types.js';
import { validateTelegramChatID, validateTelegramToken, validateURL } from './validations.js';

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
 * Displays the input prompt to select an exchange ID.
 * @returns Promise<string>
 */
const displayExchangeIDInput = (message?: string): Promise<string> => select({
  message: typeof message === 'string' ? message : 'Select an exchange',
  choices: EXCHANGE_IDS,
  loop: false,
});

/**
 * Displays the EXCHANGE_CONFIGURATION input prompt.
 * @returns Promise<IExchangeConfiguration>
 */
const displayExchangeConfigurationInput = async (): Promise<IExchangeConfiguration> => ({
  baseAsset: BASE_ASSET,
  quoteAsset: await select({
    message: 'Select the quote asset',
    choices: QUOTE_ASSETS,
    loop: false,
  }),
  window: await displayExchangeIDInput('Select the exchange that will be used by the Window Indicator'),
  liquidity: await displayExchangeIDInput('Select the exchange that will be used by the Liquidity Indicator'),
  coins: await displayExchangeIDInput('Select the exchange that will be used by the Coins Indicator'),
  trading: await displayExchangeIDInput('Select the exchange that will be used by Balancer to trade'),
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
  displayExchangeIDInput,
  displayExchangeConfigurationInput,
};
