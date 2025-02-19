import { progressPrinterFactory } from '../../modules/shared/print/progress-printer.js';
import { HostService } from '../../modules/host/index.js';

/**
 * update-cli
 * Pulls the latest version of the CLI from the repository, installs its dependencies, and compiles
 * it.
 */
export default async () => {
  const progress = progressPrinterFactory('update-cli', [
    'Pulling source code...',
    'Installing dependencies..',
    'Building the CLI...',
  ]);

  // pull the latest version of the source code
  progress.step();
  await HostService.pullSourceCode();

  // install the dependencies
  progress.step();
  await HostService.installDependencies();

  // build the CLI
  progress.step();
  await HostService.buildCLI();
  progress.step();
};
