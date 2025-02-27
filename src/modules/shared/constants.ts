import { IConfigSecretKey, IContainerName } from './types.js';

/* ************************************************************************************************
 *                                         IMPLEMENTATION                                         *
 ************************************************************************************************ */

/**
 * Environment Name
 * The name of the kinds of environments that can be used when running Node.js processes.
 */
const NODE_ENV = 'production';

/**
 * Root Account Nickname
 * The nickname that will be used to identify the root account.
 */
const ROOT_ACCOUNT_NICKNAME = 'root';

/**
 * POSTGRES_*
 * The values that will be used to initialize the PostgreSQL connection.
 */
const POSTGRES_HOST = 'postgres';
const POSTGRES_USER = 'postgres';
const POSTGRES_DB = 'postgres';

/**
 * Base Asset
 * Refers to the asset that is the quantity of a symbol. For the symbol BTCUSDT, BTC would be the
 * base asset.
 */
const BASE_ASSET = 'BTC';

/**
 * Quote Asset
 * Refers to the asset that is the price of a symbol. For the symbol BTCUSDT, USDT would be the
 * quote asset.
 */
const QUOTE_ASSETS = ['USDT', 'USDC'];

/**
 * Exchange ID
 * Each exchange is identified by an ID and can be installed in any of the modules.
 */
const EXCHANGE_IDS = ['binance', 'bitfinex', 'kraken'];

/**
 * Secret Properties
 * The list of properties that are considered secret and should not be saved in the environment
 * file.
 */
const SECRET_PROPERTIES: IConfigSecretKey[] = [
  'ALTCHA_SECRET',
  'COOKIE_SECRET',
  'ENCRYPTING_SECRET',
  'EXCHANGE_CREDENTIALS',
  'HASHING_SECRET',
  'JWT_SECRET',
  'POSTGRES_PASSWORD_FILE',
  'ROOT_ACCOUNT',
  'TELEGRAM',
  'TUNNEL_TOKEN',
];

/**
 * Container Names
 * The list of container names (services) that are used in the system.
 */
const CONTAINER_NAMES: IContainerName[] = ['postgres', 'api', 'gui', 'ct'];





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  NODE_ENV,
  ROOT_ACCOUNT_NICKNAME,
  POSTGRES_HOST,
  POSTGRES_USER,
  POSTGRES_DB,
  BASE_ASSET,
  QUOTE_ASSETS,
  EXCHANGE_IDS,
  SECRET_PROPERTIES,
  CONTAINER_NAMES,
};
