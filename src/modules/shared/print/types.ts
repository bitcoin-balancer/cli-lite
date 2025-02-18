

/* ************************************************************************************************
 *                                             TYPES                                              *
 ************************************************************************************************ */

/**
 * Printable Data
 * The types of data that can be printed.
 */
type IPrintableData = string
| number
| boolean
| Record<string, unknown>
| Array<string | number | boolean | Record<string, unknown>>;

/**
 * Print Config
 * The parameters that will be used to print the data.
 */
type IPrintConfig = {
  title?: string;
  data: IPrintableData;
  marginTop?: number;
  marginBottom?: number;
};

/**
 * Progress Printer
 * Object in charge of logging the steps and the progress of a process.
 */
type IProgressPrinter = {
  step: () => void;
};





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export type {
  IPrintableData,
  IPrintConfig,
  IProgressPrinter,
};
