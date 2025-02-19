import { IDecodedMenuAction } from './types.js';

/* ************************************************************************************************
 *                                         IMPLEMENTATION                                         *
 ************************************************************************************************ */

/**
 * Decodes a chosen menu action by splitting it into an id and variation. For example:
 * - decodeMenuAction('up') -> { id: 'up' }
 * - decodeMenuAction('up:test-mode') -> { id: 'up', variation: 'test-mode' }
 * @param action
 * @returns IDecodedMenuAction
 */
const decodeMenuAction = (action: string): IDecodedMenuAction => {
  if (action.includes(':')) {
    const split = action.split(':');
    return { id: split[0], variation: split[1] };
  }
  return { id: action };
};





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  decodeMenuAction,
};
