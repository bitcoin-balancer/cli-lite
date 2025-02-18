import { select } from '@inquirer/prompts';
import { MENU } from './constants.js';
import { decodeMenuAction } from './utils.js';
import { IDecodedMenuAction } from './types.js';

/* ************************************************************************************************
 *                                         IMPLEMENTATION                                         *
 ************************************************************************************************ */

/**
 * Displays the CLI menu and returns the chosen, encoded action.
 * @returns Promise<IDecodedMenuAction>
 */
const displayMenu = async (): Promise<IDecodedMenuAction> => {
  // display the categories menu
  const chosenCategory = await select({
    message: 'Select a category',
    choices: MENU,
    pageSize: 100,
    loop: false,
  });

  // display the actions menu
  const chosenAction = await select({
    message: 'Select an action',
    choices: chosenCategory,
    pageSize: 100,
    loop: false,
  });

  // display the actions menu and return the choice
  return decodeMenuAction(chosenAction);
};





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  // types
  type IDecodedMenuAction,

  // implementation
  displayMenu,
};
