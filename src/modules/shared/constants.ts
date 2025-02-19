

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
};
