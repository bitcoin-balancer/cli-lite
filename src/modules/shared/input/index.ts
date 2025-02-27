import { select, input } from '@inquirer/prompts';
import {
  IDockerProcess,
  IExchangeConfiguration,
  IExchangeCredentials,
  ITelegramConfig,
} from '../types.js';
import { BASE_ASSET, EXCHANGE_IDS, QUOTE_ASSETS } from '../constants.js';
import { buildMenu, decodeMenuAction, type IDecodedMenuAction } from '../menu/index.js';
import {
  validateAPIKey,
  validateSecretKey,
  validateTelegramChatID,
  validateTunnelToken,
  validateURL,
} from './validations.js';

/* ************************************************************************************************
 *                                         IMPLEMENTATION                                         *
 ************************************************************************************************ */

/**
 * Displays the CLI menu and returns the chosen, decoded action.
 * @returns Promise<IDecodedMenuAction>
 */
const displayMenuInput = async (dockerProcess: IDockerProcess): Promise<IDecodedMenuAction> => {
  // display the categories menu
  const chosenCategory = await select({
    message: 'Select a category',
    choices: buildMenu(dockerProcess),
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
    message: 'Enter the Telegram Bot Token - Leave blank if not using Telegram',
  }),
  chatID: Number(await input({
    default: '0',
    message: 'Enter the Chat ID - Leave 0 if not enabling Telegram',
    validate: validateTelegramChatID,
  })),
});

/**
 * Displays the input prompt to select an exchange ID.
 * @returns Promise<string>
 */
const displayExchangeIDInput = (message?: string, choices?: string[]): Promise<string> => select({
  message: typeof message === 'string' ? message : 'Select an exchange',
  choices: Array.isArray(choices) ? choices : EXCHANGE_IDS,
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
  trading: await displayExchangeIDInput('Select the exchange that will be used by Balancer to trade', ['binance']),
});

/**
 * Displays the EXCHANGE_CREDENTIALS input prompt
 * @param id
 * @returns Promise<IExchangeCredentials>
 */
const displayExchangeCredentialsInput = async (id: string): Promise<IExchangeCredentials> => ({
  key: await input({ message: `Enter your ${id} API key`, validate: validateAPIKey }),
  secret: await input({ message: `Enter your ${id} secret key`, validate: validateSecretKey }),
});

/**
 * Displays the TUNNEL_TOKEN input prompt.
 * @returns Promise<string>
 */
const displayTunnelTokenInput = async (): Promise<string> => (
  input({ message: 'Enter the Tunnel Token', validate: validateTunnelToken })
);





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
  displayExchangeCredentialsInput,
  displayTunnelTokenInput,
};
