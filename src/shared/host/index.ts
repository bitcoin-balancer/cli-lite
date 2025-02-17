import { execute } from '../command/index.js';
/* ************************************************************************************************
 *                                         IMPLEMENTATION                                         *
 ************************************************************************************************ */

/**
 * Executes the landscape-sysinfo command on the host machine and returns its results.
 * @returns Promise<string>
 */
const getLandscapeSysinfo = async (): Promise<string> => execute('landscape-sysinfo', [], 'pipe');





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  getLandscapeSysinfo,
};
