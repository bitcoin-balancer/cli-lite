import { IConfigSecretKey } from '../types.js';
import { SECRET_PROPERTIES } from '../constants.js';

/* ************************************************************************************************
 *                                         IMPLEMENTATION                                         *
 ************************************************************************************************ */

/**
 * Retrieves the list of secret properties that will be included in the compose file.
 * @param hasTunnelToken
 * @returns IConfigSecretKey[]
 */
const getSecretProperties = (hasTunnelToken: boolean): IConfigSecretKey[] => (
  hasTunnelToken
    ? SECRET_PROPERTIES
    : SECRET_PROPERTIES.filter((secret) => secret !== 'TUNNEL_TOKEN')
);





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  getSecretProperties,
};
