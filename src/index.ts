#! /usr/bin/env node
/* eslint-disable no-console */
import process from 'node:process';
import { printHeader } from './modules/shared/print/index.js';
import { HostService } from './modules/host/index.js';
import { ConfigService } from './modules/config/index.js';

(async () => {
  try {
    // initialize the modules
    await Promise.all([HostService.initialize(), ConfigService.initialize()]);

    // print the header
    printHeader(
      HostService.packageFile.version,
      HostService.systemInformation,
      {},
    );

    // check if the configuration has been initialized
    // ...

    // end the process successfully
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
