/* eslint-disable @typescript-eslint/indent */
import { execute } from '../shared/command/index.js';

/* ************************************************************************************************
 *                                         IMPLEMENTATION                                         *
 ************************************************************************************************ */

/**
 * Executes a command on the host machine.
 * @param command
 * @param args
 * @param inherit
 * @returns Promise<T>
 */
const __execute = <T>(
  command: string,
  args: string,
  inherit: boolean,
): Promise<T> => execute(command, args.split(' '), inherit ? 'inherit' : 'pipe') as Promise<T>;

/**
 * Executes a git command on the host machine.
 * @param args
 * @param inherit
 * @returns Promise<T extends true ? undefined : string>
 */
const git = async <T extends boolean>(
  args: string,
  inherit: T,
): Promise<T extends true ? undefined : string> => __execute('git', args, inherit);

/**
 * Executes a npm command on the host machine.
 * @param args
 * @param inherit
 * @returns Promise<T extends true ? undefined : string>
 */
const npm = async <T extends boolean>(
  args: string,
  inherit: T,
): Promise<T extends true ? undefined : string> => __execute('npm', args, inherit);





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  git,
  npm,
};
