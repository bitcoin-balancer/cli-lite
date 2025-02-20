import { printActionResult } from '../modules/shared/print/index.js';
import { HostService } from '../modules/host/index.js';

/**
 * restart-daemon
 * Restarts Docker's Systemd service.
 */
export default async () => {
  await HostService.restartDaemon();
  printActionResult('restart-daemon');
};
