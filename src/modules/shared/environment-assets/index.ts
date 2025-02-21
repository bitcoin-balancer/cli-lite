import { IConfigFile } from '../types.js';
import { clearSecrets } from '../fs/index.js';

/* ************************************************************************************************
 *                                         IMPLEMENTATION                                         *
 ************************************************************************************************ */


const buildEnvironmentAssets = (config: IConfigFile, hasTunnelToken: boolean): void => {
  // clear the secrets
  clearSecrets();
};



/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  buildEnvironmentAssets,
};
