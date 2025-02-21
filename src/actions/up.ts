import { printActionResult } from '../modules/shared/print/index.js';
import { ConfigService } from '../modules/config/index.js';
import { HostService } from '../modules/host/index.js';

/**
 * up
 * Pulls the latest images from the registry, creates and starts the containers.
 */
export default async () => {
  await HostService.up(ConfigService.config);
  printActionResult('up');
};
