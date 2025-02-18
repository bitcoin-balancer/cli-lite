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
  TELEGRAM: z.object({
    token: z.string(),
    chatID: z.number(),
  }),
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
    z.object({
      key: z.string(),
      secret: z.string(),
    }),
  ),
  TUNNEL_TOKEN: z.string(),
});
type IConfigFile = z.infer<typeof ConfigFileSchema>;





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  // package file
  PackageFileSchema,
  type IPackageFile,

  // config file
  ConfigFileSchema,
  type IConfigFile,
};
