import {
  IConfigFile,
  IConfigFileMutable,
  IExchangeConfiguration,
  IExchangeCredentials,
  ITelegramConfig,
} from '../shared/types.js';
import { writeConfigFile } from '../shared/fs/index.js';
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

  /**
   * Updates the GUI_URL in the configuration file.
   * @param newURL
   */
  const updateGUIURL = (newURL: string): void => __update({ ...__config!, GUI_URL: newURL });

  /**
   * Updates the TELEGRAM in the configuration file.
   * @param newConfig
   */
  const updateTelegram = (newConfig: ITelegramConfig): void => __update({
    ...__config!,
    TELEGRAM: newConfig,
  });

  /**
   * Updates the EXCHANGE_CONFIGURATION and EXCHANGE_CREDENTIALS in the configuration file.
   * @param newConfig
   * @param newCredentials
   */
  const updateExchangeConfigurationAndCredentials = (
    newConfig: IExchangeConfiguration,
    newCredentials: IExchangeCredentials,
  ): void => __update({
    ...__config!,
    EXCHANGE_CONFIGURATION: newConfig,
    EXCHANGE_CREDENTIALS: { [newConfig.trading]: newCredentials },
  });


  /**
   * Updates the TUNNEL_TOKEN in the configuration file.
   * @param newToken
   */
  const updateTunnelToken = (newToken: string): void => __update({
    ...__config!,
    TUNNEL_TOKEN: newToken,
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
    updateGUIURL,
    updateTelegram,
    updateExchangeConfigurationAndCredentials,
    updateTunnelToken,

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
