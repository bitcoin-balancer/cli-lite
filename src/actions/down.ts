import { printActionResult } from '../modules/shared/print/index.js';
import { HostService } from '../modules/host/index.js';

/**
 * down
 * Stops containers and removes containers, networks, volumes, and images created by up.
 */
export default async () => {
  await HostService.down();
  printActionResult('down');
};
