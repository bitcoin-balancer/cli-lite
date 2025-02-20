import { HostService } from '../modules/host/index.js';

/**
 * psql
 * Initializes a psql session in the postgres container.
 */
export default () => HostService.psql();
