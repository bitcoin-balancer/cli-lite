import { z } from 'zod';

/* ************************************************************************************************
 *                                          PACKAGE FILE                                          *
 ************************************************************************************************ */

/**
 * Package File
 * The contents of cli-lite's package.json file.
 */
const PackageFileSchema = z.object({
  name: z.string(),
  description: z.string(),
  private: z.boolean(),
  version: z.string(),
  type: z.string(),
  main: z.string(),
  scripts: z.record(z.string(), z.string()),
  repository: z.record(z.string(), z.string()),
  keywords: z.array(z.string()),
  author: z.string(),
  license: z.string(),
  bugs: z.record(z.string(), z.string()),
  homepage: z.string(),
  devDependencies: z.record(z.string(), z.string()),
  dependencies: z.record(z.string(), z.string()),
});
type IPackageFile = z.infer<typeof PackageFileSchema>;





/* ************************************************************************************************
 *                                          CONFIG FILE                                           *
 ************************************************************************************************ */

/**
 * Telegram Config
 * The contents of the TELEGRAM property in cli-lite's config.json file.
 */
const TelegramConfigSchema = z.object({
  token: z.string(),
  chatID: z.number(),
});
type ITelegramConfig = z.infer<typeof TelegramConfigSchema>;

/**
 * Exchange Configuration
 * The contents of the EXCHANGE_CONFIGURATION property in cli-lite's config.json file.
 */
const ExchangeConfigurationSchema = z.object({
  baseAsset: z.string(),
  quoteAsset: z.string(),
  window: z.string(),
  liquidity: z.string(),
  coins: z.string(),
  trading: z.string(),
});
type IExchangeConfiguration = z.infer<typeof ExchangeConfigurationSchema>;

/**
 * Exchange Credentials
 * The contents of the EXCHANGE_CREDENTIALS property in cli-lite's config.json file.
 */
const ExchangeCredentialsSchema = z.object({
  key: z.string(),
  secret: z.string(),
});
type IExchangeCredentials = z.infer<typeof ExchangeCredentialsSchema>;

/**
 * Config File
 * The contents of cli-lite's config.json file.
 */
const ConfigFileSchema = z.object({
  NODE_ENV: z.string(),
  GUI_URL: z.string(),
  POSTGRES_HOST: z.string(),
  POSTGRES_USER: z.string(),
  POSTGRES_DB: z.string(),
  POSTGRES_PASSWORD_FILE: z.string(),
  HASHING_SECRET: z.string(),
  ENCRYPTING_SECRET: z.string(),
  ROOT_ACCOUNT: z.object({
    uid: z.string(),
    nickname: z.string(),
    password: z.string(),
    otpSecret: z.string(),
  }),
  TELEGRAM: TelegramConfigSchema,
  ALTCHA_SECRET: z.string(),
  JWT_SECRET: z.object({
    refresh: z.string(),
    access: z.string(),
  }),
  COOKIE_SECRET: z.string(),
  EXCHANGE_CONFIGURATION: z.object({
    baseAsset: z.string(),
    quoteAsset: z.string(),
    window: z.string(),
    liquidity: z.string(),
    coins: z.string(),
    trading: z.string(),
  }),
  EXCHANGE_CREDENTIALS: z.record(
    z.string(),
    ExchangeCredentialsSchema,
  ),
  TUNNEL_TOKEN: z.string(),
});
type IConfigFile = z.infer<typeof ConfigFileSchema>;

/**
 * Config File Mutable/Immutable
 * Utility types to separate what can and cannot be modified.
 */
type IConfigFileMutable = Pick<IConfigFile, 'GUI_URL' | 'TELEGRAM' | 'EXCHANGE_CONFIGURATION'
| 'EXCHANGE_CREDENTIALS' | 'TUNNEL_TOKEN'>;
type IConfigFileImmutable = Omit<IConfigFile, 'GUI_URL' | 'TELEGRAM' | 'EXCHANGE_CONFIGURATION'
| 'EXCHANGE_CREDENTIALS' | 'TUNNEL_TOKEN'>;

/**
 * Config Secret Key
 * Utility type to identify which properties are secret and should not be included in the .env file.
 */
type IConfigSecretKey = 'ALTCHA_SECRET' | 'COOKIE_SECRET' | 'ENCRYPTING_SECRET'
| 'EXCHANGE_CREDENTIALS' | 'HASHING_SECRET' | 'JWT_SECRET' | 'POSTGRES_PASSWORD_FILE'
| 'ROOT_ACCOUNT' | 'TELEGRAM' | 'TUNNEL_TOKEN';





/* ************************************************************************************************
 *                                            DOCKER                                              *
 ************************************************************************************************ */

/**
 * Container Name
 * The names assigned to the containers by Docker Compose.
 */
type IContainerName = 'postgres' | 'api' | 'gui' | 'ct';

/**
 * Container State
 * Object containing the state of a container. If the container is not running, it will hold the
 * latest logs.
 */
type IContainerState = {
  running: boolean;
} & (
  | {
    running: true;
  }
  | {
    running: false;
    logs: string;
  }
);
type IContainerStates = {
  [key in IContainerName]: IContainerState;
};

/**
 * Docker Process
 * The current state of the Docker Process that's running on the host.
 */
type IDockerProcess = {
  // true if all the containers are running
  allRunning: boolean;

  // true if all the containers are down
  allDown: boolean;

  // the containers' state
  containers: IContainerStates;
};





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  // package file
  PackageFileSchema,
  type IPackageFile,

  // config file
  type ITelegramConfig,
  type IExchangeConfiguration,
  type IExchangeCredentials,
  ConfigFileSchema,
  type IConfigFile,
  type IConfigFileMutable,
  type IConfigFileImmutable,
  type IConfigSecretKey,

  // docker
  type IContainerName,
  type IContainerState,
  type IContainerStates,
  type IDockerProcess,
};
