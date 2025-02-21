import { progressPrinterFactory } from '../modules/shared/print/index.js';
import { ConfigService } from '../modules/config/index.js';
import { HostService } from '../modules/host/index.js';

/**
 * down-up
 * Stops containers and removes containers, networks, volumes, and images created by up. Afterwards,
 * it pulls the latest images from the registry, creates and starts the containers
 */
export default async () => {
  const progress = progressPrinterFactory('down-up', [
    'Executing \'down\'...',
    'Executing \'up\'...',
  ]);
  progress.step();
  await HostService.down();
  progress.step();
  await HostService.up(ConfigService.config);
  progress.step();
};
