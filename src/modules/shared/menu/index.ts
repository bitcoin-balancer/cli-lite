import { select, Separator } from '@inquirer/prompts';
import { IDecodedMenuAction } from './types.js';

/* ************************************************************************************************
 *                                           CONSTANTS                                            *
 ************************************************************************************************ */
const MENU = [
  {
    name: 'Docker',
    description: 'Run docker compose commands in the local or remote host',
    value: [
      {
        value: 'up',
        description: 'Creates and starts the containers',
      },
      new Separator(),
      {
        value: 'build-up',
        description: 'Builds all the images and starts the containers',
      },
      new Separator(),
      {
        value: 'down',
        description: 'Stops containers and removes containers, networks, volumes, and images created by up',
      },
      {
        value: 'down-build-up',
        description: 'Stops containers and removes containers, networks, volumes, and images created by up. Afterwards, it builds all the images and starts the containers',
      },
      {
        value: 'restart',
        description: 'Restarts all stopped and running services',
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
      },
      {
        value: 'update-config:TELEGRAM',
        description: 'Update the data stored in the TELEGRAM property',
      },
      {
        value: 'update-config:EXCHANGE_CONFIGURATION',
        description: 'Update the data stored in the EXCHANGE_CONFIGURATION property',
      },
      {
        value: 'update-config:EXCHANGE_CREDENTIALS',
        description: 'Update the data stored in the EXCHANGE_CREDENTIALS property',
      },
      {
        value: 'update-config:TUNNEL_TOKEN',
        description: 'Update the data stored in the TUNNEL_TOKEN property',
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
];





/* ************************************************************************************************
 *                                         IMPLEMENTATION                                         *
 ************************************************************************************************ */

/**
 * Decodes a chosen menu action by splitting it into an id and variation. For example:
 * - decodeMenuAction('up') -> { id: 'up' }
 * - decodeMenuAction('up:test-mode') -> { id: 'up', variation: 'test-mode' }
 * @param action
 * @returns IDecodedMenuAction
 */
const __decodeMenuAction = (action: string): IDecodedMenuAction => {
  if (action.includes(':')) {
    const split = action.split(':');
    return { id: split[0], variation: split[1] };
  }
  return { id: action };
};

/**
 * Displays the CLI menu and returns the chosen, encoded action.
 * @returns Promise<IDecodedMenuAction>
 */
const displayMenu = async (): Promise<IDecodedMenuAction> => {
  // display the categories menu
  const chosenCategory = await select({
    message: 'Select a category',
    choices: MENU,
    pageSize: 100,
    loop: false,
  });

  // display the actions menu
  const chosenAction = await select({
    message: 'Select an action',
    choices: chosenCategory,
    pageSize: 100,
    loop: false,
  });

  // display the actions menu and return the choice
  return __decodeMenuAction(chosenAction);
};





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  // types
  type IDecodedMenuAction,

  // implementation
  displayMenu,
};
