/* eslint-disable no-console */
import { isArrayValid, isObjectValid } from 'web-utils-kit';
import { IPrintableData, IPrintConfig } from './types.js';

/* ************************************************************************************************
 *                                         IMPLEMENTATION                                         *
 ************************************************************************************************ */

/**
 * Applies a margin to the console.
 * @param margin
 */
const __printMargin = (margin: number): void => {
  for (let i = 0; i < margin; i += 1) {
    console.log('');
  }
};

/**
 * Prints the title to the console (if any).
 * @param title
 */
const __printTitle = (title: string | undefined): void => {
  if (title) {
    console.log(title);
    // console.log(`${'='.repeat(title.length)}`);
  }
};

/**
 * Prints the data based on its type.
 * @param data
 */
const __printData = (data: IPrintableData): void => {
  if (isObjectValid(data, true) || isArrayValid(data, true)) {
    console.log(JSON.stringify(data, null, 2));
  } else {
    console.log(data);
  }
};

/**
 * Prints custom data to the console based on its type.
 * @param config
 */
const print = ({
  title,
  data,
  marginTop = 0,
  marginBottom = 0,
}: IPrintConfig): void => {
  __printMargin(marginTop);

  __printTitle(title);

  __printData(data);

  __printMargin(marginBottom);
};





/* ************************************************************************************************
 *                                        HEADER UTILITIES                                        *
 ************************************************************************************************ */

/**
 * Prints the CLI's logo to the console.
 * @param version
 */
const __printLogo = (version: string): void => {
  const nameStr = '₿ALANCER';
  const versionStr = `* cli-lite@v${version} *`;
  console.log('*'.repeat(versionStr.length));
  console.log(`* ${nameStr}${' '.repeat(versionStr.length - nameStr.length - 4)} *`);
  console.log(versionStr);
  console.log('*'.repeat(versionStr.length));
};

/**
 * Builds and prints the header of the CLI to the console.
 * @param version
 * @param landscapeSysinfo
 * @param dockerProcess
 */
const printHeader = (
  version: string,
  landscapeSysinfo: string,
  dockerProcess: string,
): void => {
  __printLogo(version);

  print({ title: 'landscape-sysinfo:', data: landscapeSysinfo, marginTop: 1 });

  print({ title: 'Docker:', data: dockerProcess, marginTop: 1 });
};





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  print,
  printHeader,
};
