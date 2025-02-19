/* eslint-disable object-curly-newline */
/* eslint-disable no-console */
import { isArrayValid, isObjectValid } from 'web-utils-kit';
import { IContainerName, IContainerState, IContainerStates, IDockerProcess } from '../types.js';
import { progressPrinterFactory } from './progress-printer.js';
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
 *                                          HEADER UTILS                                          *
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
 * Prints the update details to the console if there is one available.
 * @param currentVersion
 * @param latestVersion
 */
const __printUpdateDetails = (currentVersion: string, latestVersion: string): void => {
  if (currentVersion !== latestVersion) {
    print({
      title: 'Update available:',
      data: `  To update to version v${latestVersion}, use the CLI Management action: update-cli.`,
      marginTop: 1,
    });
  }
};

/**
 * Generates the string representation of a container's state.
 * @param name
 * @param state
 * @returns string
 */
const __buildContainerStateString = (name: IContainerName, state: IContainerState): string => {
  if (state.running) {
    return `  ${name} ✔`;
  }
  return `  ${name} ❗\n${state.logs}`;
};

/**
 * Generates the string representation of the Docker Process' states for all containers combined.
 * @param states
 * @returns string
 */
const __buildContainerStatesString = (states: IContainerStates) => (
  Object.entries(states).reduce(
    (accum: string, [name, state]) => (
      accum.length > 0
        ? `${accum}\n${__buildContainerStateString(name as IContainerName, state)}`
        : __buildContainerStateString(name as IContainerName, state)
    ),
    '',
  )
);

/**
 * Prints the Docker Process' state to the console.
 * @param process
 */
const __printDockerProcessState = (process: IDockerProcess): void => {
  const data = __buildContainerStatesString(process.containers);
  if (process.allDown) {
    print({ data: 'Docker: Not running', marginBottom: 1 });
  } else if (process.allRunning) {
    print({ title: 'Docker: Running', data, marginBottom: 1 });
  } else {
    print({ title: 'Docker: Partially crashed', data, marginBottom: 1 });
  }
};

/**
 * Builds and prints the header of the CLI to the console.
 * @param version
 * @param latestVersion
 * @param landscapeSysinfo
 * @param dockerProcess
 */
const printHeader = (
  version: string,
  latestVersion: string,
  landscapeSysinfo: string,
  dockerProcess: IDockerProcess,
): void => {
  __printLogo(version);

  __printUpdateDetails(version, latestVersion);

  print({ title: 'landscape-sysinfo:', data: landscapeSysinfo, marginTop: 1 });

  __printDockerProcessState(dockerProcess);
};





/* ************************************************************************************************
 *                                          MISC UTILS                                            *
 ************************************************************************************************ */

/**
 * Prints a message when an action executes succesfully.
 * @param action
 */
const printActionResult = (action: string): void => {
  console.log(`\n\nThe action '${action}' was executed successfully!`);
};





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  // implementation
  print,

  // header utils
  printHeader,

  // misc utils
  printActionResult,

  // progress printer
  progressPrinterFactory,
};
