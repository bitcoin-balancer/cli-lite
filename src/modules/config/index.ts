import { writeConfigFile } from '../shared/fs/index.js';
import { IConfigFile, IConfigFileMutable } from '../shared/types.js';
import { IConfigService } from './types.js';
import { getConfigFile, buildImmutableConfig } from './utils.js';

/* ************************************************************************************************
 *                                         IMPLEMENTATION                                         *
 ************************************************************************************************ */

/**
 * Config Service Factory
 * Generates the object in charge of managing the configuration that will be used by
 * Balancer (environment variables, secrets, etc).
 * @returns IConfigService
 */
const configServiceFactory = (): IConfigService => {
  /* **********************************************************************************************
   *                                          PROPERTIES                                          *
   ********************************************************************************************** */

  // object containing the configuration that will be used to run Balancer
  let __config: IConfigFile | undefined;





  /* **********************************************************************************************
   *                                             UTILS                                            *
   ********************************************************************************************** */

  /**
   * Verifies if the initial configuration values must be set.
   * @returns boolean
   */
  const requiresInitialization = (): boolean => __config === undefined;





  /* **********************************************************************************************
   *                                       CONFIG MANAGEMENT                                      *
   ********************************************************************************************** */

  /**
   * Updates the config file with the new values.
   * @param newConfig
   */
  const __update = (newConfig: IConfigFile): void => {
    writeConfigFile(newConfig);
    __config = newConfig;
  };

  /**
   * Initializes the configuration with the provided values.
   * @param config
   */
  const initializeConfig = (config: IConfigFileMutable): void => __update({
    ...config,
    ...buildImmutableConfig(),
  });





  /* **********************************************************************************************
   *                                          INITIALIZER                                         *
   ********************************************************************************************** */

  /**
   * Initializes the essential data required by the Config Service.
   * @returns Promise<void>
   */
  const initialize = async (): Promise<void> => {
    // retrieve the current config (if any)
    __config = getConfigFile();

    // ...
  };





  /* **********************************************************************************************
   *                                         MODULE BUILD                                         *
   ********************************************************************************************** */
  return Object.freeze({
    // properties
    get config() {
      return __config as IConfigFile;
    },

    // utils
    requiresInitialization,

    // config management
    initializeConfig,

    // initializer
    initialize,
  });
};





/* ************************************************************************************************
 *                                        GLOBAL INSTANCE                                         *
 ************************************************************************************************ */
const ConfigService = configServiceFactory();





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  ConfigService,
};
