import { progressPrinterFactory } from '../../modules/shared/print/progress-printer.js';
import { print } from '../../modules/shared/print/index.js';
import {
  displayGUIURLInput,
  displayTelegramInput,
  displayExchangeConfigurationInput,
  displayExchangeCredentialsInput,
  displayTunnelTokenInput,
} from '../../modules/shared/input/index.js';
import { ConfigService } from '../../modules/config/index.js';

/**
 * init-config
 * Prompts the user to initialize the configuration file.
 */
export default async () => {
  print({ title: 'CONFIGURATION', data: 'Initialize the settings that will be used by ₿alancer\n' });
  const progress = progressPrinterFactory('init-config', [
    'GUI_URL',
    'TELEGRAM',
    'EXCHANGE_CONFIGURATION',
    'EXCHANGE_CREDENTIALS',
    'TUNNEL_TOKEN',
  ]);

  // GUI_URL
  progress.step();
  const GUI_URL = await displayGUIURLInput();

  // TELEGRAM
  progress.step();
  const TELEGRAM = await displayTelegramInput();

  // EXCHANGE_CONFIGURATION
  progress.step();
  const EXCHANGE_CONFIGURATION = await displayExchangeConfigurationInput();

  // EXCHANGE_CREDENTIALS
  progress.step();
  const EXCHANGE_CREDENTIALS = await displayExchangeCredentialsInput(
    EXCHANGE_CONFIGURATION.trading,
  );

  // TUNNEL_TOKEN
  progress.step();
  const TUNNEL_TOKEN = await displayTunnelTokenInput();

  // finally, save the config
  ConfigService.initializeConfig({
    GUI_URL,
    TELEGRAM,
    EXCHANGE_CONFIGURATION,
    EXCHANGE_CREDENTIALS: { [EXCHANGE_CONFIGURATION.trading]: EXCHANGE_CREDENTIALS },
    TUNNEL_TOKEN,
  });
  progress.step();
};
