#! /usr/bin/env node
/* eslint-disable no-console */
import process from 'node:process';

(async () => {
  try {
    // ...

    // end the process successfully
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
