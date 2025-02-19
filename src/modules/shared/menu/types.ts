import { Separator } from '@inquirer/prompts';

/* ************************************************************************************************
 *                                             TYPES                                              *
 ************************************************************************************************ */

/**
 * Action Menu Item
 * An action that can be executed by the user from the menu.
 */
type IActionMenuItem = {
  // the action(:variation)? that will be executed when chosen
  value: string;

  // a short description of what the action does
  description: string;

  // whether the action is disabled or not
  disabled?: boolean;
};

/**
 * Category Menu Item
 * A group of actions that can be executed by the user from the menu.
 */
type ICategoryMenuItem = {
  // the name of the actions container
  name: string;

  // a short description of category's contents
  description: string;

  // the list of actions in the category
  value: (IActionMenuItem | Separator)[]

  // whether the action is disabled or not
  disabled?: boolean;
};

/**
 * Decoded Menu Action
 * The menu displays encoded actions to simplify the choosing process. The actions need to be
 * decoded into id and variation so they can be properly interacted with.
 */
type IDecodedMenuAction = {
  // the id of the action that will be executed
  id: string,

  // optional variation of an action
  variation?: string,
};





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export type {
  IActionMenuItem,
  ICategoryMenuItem,
  IDecodedMenuAction,
};
