import { progressPrinterFactory } from '../../modules/shared/print/progress-printer.js';
import { print } from '../../modules/shared/print/index.js';
import { displayGUIURLInput } from '../../modules/shared/input/index.js';

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
};
