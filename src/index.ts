#! /usr/bin/env node
/* eslint-disable no-console */
import process from 'node:process';
import { printHeader } from './shared/print/index.js';
import { getLandscapeSysinfo } from './shared/host/index.js';

(async () => {
  try {
    // ...
    printHeader(
      '1.0.0',
      await getLandscapeSysinfo(),
      '',
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
