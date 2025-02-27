import { Separator } from '@inquirer/prompts';
import { IDockerProcess } from '../types.js';
import { ICategoryMenuItem, IDecodedMenuAction } from './types.js';

/* ************************************************************************************************
 *                                         IMPLEMENTATION                                         *
 ************************************************************************************************ */

/**
 * Builds the CLI's menu ready to be displayed.
 * @returns ICategoryMenuItem[]
 */
const buildMenu = (dockerProcess: IDockerProcess): ICategoryMenuItem[] => [
  {
    name: 'Docker',
    description: 'Run docker compose commands',
    value: [
      {
        value: 'up',
        description: 'Pulls the latest images from the registry, creates and starts the containers',
        disabled: !dockerProcess.allDown,
      },
      new Separator(),
      {
        value: 'down',
        description: 'Stops containers and removes containers, networks, volumes, and images created by up',
        disabled: dockerProcess.allDown,
      },
      {
        value: 'down-up',
        description: 'Stops containers and removes containers, networks, volumes, and images created by up. Afterwards, it pulls the latest images from the registry, creates and starts the containers',
        disabled: dockerProcess.allDown,
      },
      {
        value: 'restart',
        description: 'Restarts all stopped and running services',
        disabled: !dockerProcess.allRunning,
      },
      new Separator(),
      {
        value: 'logs',
        description: 'Displays log output from all services',
      },
      {
        value: 'logs:postgres',
        description: 'Displays log output from the postgres service',
      },
      {
        value: 'logs:api',
        description: 'Displays log output from the api service',
      },
      {
        value: 'logs:gui',
        description: 'Displays log output from the gui service',
      },
      {
        value: 'logs:ct',
        description: 'Displays log output from the ct service',
      },
      new Separator(),
      {
        value: 'prune',
        description: 'Remove all unused containers, networks and images (both dangling and unused)',
        disabled: !dockerProcess.allDown,
      },
      new Separator(),
      {
        value: 'restart-daemon',
        description: 'Restart the Docker service on the host machine',
        disabled: !dockerProcess.allDown,
      },
    ],
  },
  {
    name: 'Configuration',
    description: 'View and/or update the configuration used by Balancer',
    value: [
      {
        value: 'view-config',
        description: 'Read the contents stored in the configuration file',
      },
      {
        value: 'update-config:GUI_URL',
        description: 'Update the data stored in the GUI_URL property',
        disabled: !dockerProcess.allDown,
      },
      {
        value: 'update-config:TELEGRAM',
        description: 'Update the data stored in the TELEGRAM property',
        disabled: !dockerProcess.allDown,
      },
      {
        value: 'update-config:EXCHANGE_*',
        description: 'Update the data stored in the EXCHANGE_CONFIGURATION & EXCHANGE_CREDENTIALS properties',
        disabled: !dockerProcess.allDown,
      },
      {
        value: 'update-config:TUNNEL_TOKEN',
        description: 'Update the data stored in the TUNNEL_TOKEN property',
        disabled: !dockerProcess.allDown,
      },
    ],
  },
  {
    name: 'CLI Management',
    description: 'Update the CLI Program',
    value: [
      {
        value: 'update-cli',
        description: 'Downloads the latest version of cli-lite, installs its dependencies, and compiles it.',
      },
    ],
  },
  {
    name: 'Database Management',
    description: 'Monitor and manage the database',
    disabled: !dockerProcess.containers.postgres.running,
    value: [
      {
        value: 'psql',
        description: 'Start the terminal-based front-end to PostgreSQL',
      },
    ],
  },
];

/**
 * Decodes a chosen menu action by splitting it into an id and variation. For example:
 * - decodeMenuAction('up') -> { id: 'up' }
 * - decodeMenuAction('up:test-mode') -> { id: 'up', variation: 'test-mode' }
 * @param action
 * @returns IDecodedMenuAction
 */
const decodeMenuAction = (action: string): IDecodedMenuAction => {
  if (action.includes(':')) {
    const split = action.split(':');
    return { id: split[0], variation: split[1] };
  }
  return { id: action };
};





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  // types
  type IDecodedMenuAction,

  // implmentation
  buildMenu,
  decodeMenuAction,
};
