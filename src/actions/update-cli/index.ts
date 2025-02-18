import { HostService } from '../../modules/host/index.js';

/**
 * update-cli
 * Pulls the latest version of the CLI from the repository, installs its dependencies, and compiles
 * it.
 */
export default async () => {
  // pull the latest version of the source code
  console.log('1/3) Pulling source code...');
  await HostService.pullSourceCode();

  // install the dependencies
  console.log('\n\n2/3) Installing dependencies...');
  await HostService.installDependencies();

  // build the CLI
  console.log('\n\n3/3) Building the CLI...');
  await HostService.buildCLI();

  console.log('\n\nThe update-cli action was executed successfully!');
};
