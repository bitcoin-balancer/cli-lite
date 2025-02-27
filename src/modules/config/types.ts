import {
  IConfigFile,
  IConfigFileMutable,
  IExchangeConfiguration,
  IExchangeCredentials,
  ITelegramConfig,
} from '../shared/types.js';

/* ************************************************************************************************
 *                                            SERVICE                                             *
 ************************************************************************************************ */

/**
 * Config Service
 * Object in charge of managing the configuration that will be used by Balancer (environment
 * variables, secrets, etc).
 */
type IConfigService = {
  // properties
  config: IConfigFile,

  // utils
  requiresInitialization: () => boolean;

  // config management
  initializeConfig: (config: IConfigFileMutable) => void;
  updateGUIURL: (newURL: string) => void;
  updateTelegram: (newConfig: ITelegramConfig) => void;
  updateExchangeConfigurationAndCredentials: (
    newConfig: IExchangeConfiguration,
    newCredentials: IExchangeCredentials,
  ) => void;
  updateTunnelToken: (newToken: string) => void;

  // initializer
  initialize: () => Promise<void>;
};





/* ************************************************************************************************
 *                                             TYPES                                              *
 ************************************************************************************************ */





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export type {
  // service
  IConfigService,

  // types
  // ...
};
