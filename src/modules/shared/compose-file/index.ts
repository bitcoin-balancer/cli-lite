import { SECRET_PROPERTIES } from '../constants.js';
import { writeComposeFile } from '../fs/index.js';
import {
  generateAPIService,
  generateCTService,
  generateGUIService,
  generatePOSTGRESService,
  generateSecrets,
  generateVolumes,
} from './templates.js';

/* ************************************************************************************************
 *                                         IMPLEMENTATION                                         *
 ************************************************************************************************ */

/**
 * Builds and stores the compose.yaml file based on the configuration file.
 */
const generateComposeFile = (): void => {
  // header
  let _ = 'name: balancer\n\n';
  _ += 'services:\n\n';

  // services
  _ += generatePOSTGRESService();
  _ += '\n\n\n';

  _ += generateAPIService();
  _ += '\n\n\n';

  _ += generateGUIService();
  _ += '\n\n\n';

  _ += generateCTService();
  _ += '\n\n\n\n\n';

  // volumes
  _ += generateVolumes();
  _ += '\n\n\n\n\n';

  // secrets
  _ += generateSecrets(SECRET_PROPERTIES);

  // finally, save the file
  writeComposeFile(_);
};





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  generateComposeFile,
};
