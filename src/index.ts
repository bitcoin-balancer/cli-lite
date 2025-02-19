#! /usr/bin/env node
/* eslint-disable no-await-in-loop */
/* eslint-disable no-constant-condition */
/* eslint-disable no-console */
import process from 'node:process';
import { printHeader } from './modules/shared/print/index.js';
import { displayMenuInput } from './modules/shared/input/index.js';
import { HostService } from './modules/host/index.js';
import { ConfigService } from './modules/config/index.js';

/**
 * Displays the main menu and executes the chosen action.
 */
const main = async () => {
  // initialize the modules
  await Promise.all([HostService.initialize(), ConfigService.initialize()]);

  // print the header
  printHeader(
    HostService.packageFile.version,
    HostService.latestVersion,
    HostService.systemInformation,
    {},
  );

  // check if the configuration requires initialization. Otherwise, display the menu
  const action = ConfigService.requiresInitialization()
    ? { id: 'init-config' }
    : await displayMenuInput(ConfigService.hasTunnelToken());

  // execute the chosen action
  const actionModule = await import(`./actions/${action.id}.js`);
  await actionModule.default(action.variation);
};



/**
 * Executes the main function in a loop until it errors or is manually stopped by the user.
 */
(async () => {
  try {
    let isRelaunch: boolean = false;
    while (true) {
      if (isRelaunch) {
        console.log('\n\n\n');
      }
      await main();
      isRelaunch = true;
    }
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
