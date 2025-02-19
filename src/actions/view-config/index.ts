import { print } from '../../modules/shared/print/index.js';
import { ConfigService } from '../../modules/config/index.js';

/**
 * view-config
 * Reads and displays the contents of the config.json file.
 */
export default async () => {
  print({ title: 'config.json:', data: ConfigService.config });
};
