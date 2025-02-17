#! /usr/bin/env node
/* eslint-disable no-console */
import process from 'node:process';
import { printHeader } from './shared/print/index.js';

(async () => {
  try {
    // ...
    printHeader(
      '1.0.0',
      `  System load:  2.73                Processes:                435
  Usage of /:   11.8% of 456.34GB   Users logged in:          1
  Memory usage: 50%                 IPv4 address for enp42s0: 192.168.1.14
  Swap usage:   0%                  IPv4 address for tun0:    100.64.100.6
  Temperature:  55.0 C

  => There is 1 zombie process.`,
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
