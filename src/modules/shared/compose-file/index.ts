import { writeComposeFile } from '../fs/index.js';
import { getSecretProperties } from './utils.js';
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
 * @param hasTunnelToken
 */
const generateComposeFile = (hasTunnelToken: boolean): void => {
  // header
  let _ = 'name: balancer\n\n';
  _ += 'services:\n\n';

  // services
  _ += generatePOSTGRESService();
  _ += '\n\n\n';

  _ += generateAPIService(hasTunnelToken);
  _ += '\n\n\n';

  _ += generateGUIService();
  _ += hasTunnelToken ? '\n\n\n' : '\n\n\n\n\n';

  if (hasTunnelToken) {
    _ += generateCTService();
    _ += '\n\n\n\n\n';
  }

  // volumes
  _ += generateVolumes();
  _ += '\n\n\n\n\n';

  // secrets
  _ += generateSecrets(getSecretProperties(hasTunnelToken));

  // finally, save the file
  writeComposeFile(_);
};





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  generateComposeFile,
};
