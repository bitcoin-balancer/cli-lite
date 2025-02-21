/* eslint-disable @typescript-eslint/indent */
import { execute } from '../shared/command/index.js';
import { ICommandExecutionReturn } from './types.js';

/* ************************************************************************************************
 *                                       COMMAND EXECUTION                                        *
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
 * Executes a landscape-sysinfo command on the host machine.
 * @param args
 * @param inherit
 * @returns ICommandExecutionReturn<T>
 */
const landscapeSysinfo = async <T extends boolean>(
  args: string,
  inherit: T,
): ICommandExecutionReturn<T> => __execute('landscape-sysinfo', args, inherit);


/**
 * Executes a git command on the host machine.
 * @param args
 * @param inherit
 * @returns ICommandExecutionReturn<T>
 */
const git = async <T extends boolean>(args: string, inherit: T): ICommandExecutionReturn<T> => (
  __execute('git', args, inherit)
);

/**
 * Executes a npm command on the host machine.
 * @param args
 * @param inherit
 * @returns ICommandExecutionReturn<T>
 */
const npm = async <T extends boolean>(args: string, inherit: T): ICommandExecutionReturn<T> => (
  __execute('npm', args, inherit)
);

/**
 * Executes a docker command on the host machine.
 * @param args
 * @param inherit
 * @returns ICommandExecutionReturn<T>
 */
const docker = async <T extends boolean>(args: string, inherit: T): ICommandExecutionReturn<T> => (
  __execute('docker', args, inherit)
);

/**
 * Executes a docker compose command on the host machine.
 * @param args
 * @param inherit
 * @returns ICommandExecutionReturn<T>
 */
const dockerCompose = async <T extends boolean>(
  args: string,
  inherit: T,
): ICommandExecutionReturn<T> => __execute('docker', `compose ${args}`, inherit);

/**
 * Executes a systemctl command on the host machine.
 * @param args
 * @param inherit
 * @returns ICommandExecutionReturn<T>
 */
const systemctl = async <T extends boolean>(
  args: string,
  inherit: T,
): ICommandExecutionReturn<T> => __execute('systemctl', args, inherit);





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  // command execution
  landscapeSysinfo,
  git,
  npm,
  docker,
  dockerCompose,
  systemctl,
};
