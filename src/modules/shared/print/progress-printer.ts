/* eslint-disable no-console */
import { IProgressPrinter } from './types.js';

/* ************************************************************************************************
 *                                         IMPLEMENTATION                                         *
 ************************************************************************************************ */

/**
 * Progress Printer Factory
 * Generates the object in charge of logging the steps and the progress of a process.
 * @returns IProgressPrinter
 */
const progressPrinterFactory = (action: string, steps: string[]): IProgressPrinter => {
  /* **********************************************************************************************
   *                                          PROPERTIES                                          *
   ********************************************************************************************** */

  // the steps that will be printed
  let __currentStep = 1;





  /* **********************************************************************************************
   *                                            ACTIONS                                           *
   ********************************************************************************************** */

  /**
   * Invoked when a step is about to start. Prints the step number and the step description.
   */
  const step = (): void => {
    if (__currentStep > steps.length) {
      console.log(`\n\nThe action '${action}' was executed successfully!`);
    } else {
      console.log(`${__currentStep > 1 ? '\n\n' : ''}${__currentStep}/${steps.length}) ${steps[__currentStep - 1]}`);
      __currentStep += 1;
    }
  };





  /* **********************************************************************************************
   *                                         MODULE BUILD                                         *
   ********************************************************************************************** */
  return Object.freeze({
    // properties
    // ...

    // actions
    step,
  });
};





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  progressPrinterFactory,
};
