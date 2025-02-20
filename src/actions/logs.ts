import { IContainerName } from '../modules/shared/types.js';
import { HostService } from '../modules/host/index.js';

/**
 * logs
 * Susbcribes to the log stream for a given container. If none is provided, it subscribes to all.
 */
export default (variation: IContainerName) => HostService.susbcribeToLogs(variation);
