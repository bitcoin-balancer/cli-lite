import { printActionResult } from '../modules/shared/print/index.js';
import { HostService } from '../modules/host/index.js';

/**
 * prune
 * Removes all unused containers, networks and images (both dangling and unused).
 */
export default async () => {
  await HostService.prune();
  printActionResult('prune');
};
