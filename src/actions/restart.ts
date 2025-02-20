import { printActionResult } from '../modules/shared/print/index.js';
import { HostService } from '../modules/host/index.js';

/**
 * restart
 * Restarts all stopped and running services.
 */
export default async () => {
  await HostService.restart();
  printActionResult('restart');
};
