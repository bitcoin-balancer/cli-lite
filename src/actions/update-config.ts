import { printActionResult, progressPrinterFactory } from '../modules/shared/print/index.js';
import {
  displayExchangeConfigurationInput,
  displayExchangeCredentialsInput,
  displayGUIURLInput,
  displayTelegramInput,
  displayTunnelTokenInput,
} from '../modules/shared/input/index.js';
import { ConfigService } from '../modules/config/index.js';

/**
 * update-config
 * Updates the configuration file with the new values.
 */
export default async (variation: string) => {
  switch (variation) {
    case 'GUI_URL': {
      ConfigService.updateGUIURL(await displayGUIURLInput());
      break;
    }
    case 'TELEGRAM': {
      ConfigService.updateTelegram(await displayTelegramInput());
      break;
    }
    case 'EXCHANGE_*': {
      const progress = progressPrinterFactory('update-config:EXCHANGE_*', [
        'EXCHANGE_CONFIGURATION',
        'EXCHANGE_CREDENTIALS',
      ]);
      progress.step();
      const configuration = await displayExchangeConfigurationInput();
      progress.step();
      const credentials = await displayExchangeCredentialsInput(configuration.trading);
      ConfigService.updateExchangeConfigurationAndCredentials(configuration, credentials);
      break;
    }
    case 'TUNNEL_TOKEN': {
      ConfigService.updateTunnelToken(await displayTunnelTokenInput());
      break;
    }
    default: {
      throw new Error(`Invalid variation for update-config: ${variation}`);
    }
  }
  printActionResult('update-config');
};
