import { Separator } from '@inquirer/prompts';

/* ************************************************************************************************
 *                                         IMPLEMENTATION                                         *
 ************************************************************************************************ */
const MENU = [
  {
    name: 'Docker',
    description: 'Run docker compose commands',
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
      new Separator(),
      {
        value: 'restart-daemon',
        description: 'Restart the Docker service on the host machine',
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
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  MENU,
};
