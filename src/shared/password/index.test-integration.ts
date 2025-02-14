import { describe, test, expect } from 'vitest';
import { generatePassword } from './index.js';

/* ************************************************************************************************
 *                                             TYPES                                              *
 ************************************************************************************************ */

describe('generatePassword', () => {
  test.each<[RegExp, [number, boolean, boolean, boolean, boolean], boolean]>([
    [/^[0-9]{7}$/, [7, true, false, false, false], true],
    [/^[0-9a-z]{10}$/, [10, true, true, false, false], true],
    [/^[0-9a-zA-Z]{85}$/, [85, true, true, true, false], true],
    [/^[a-zA-Z]{221}$/, [221, false, true, true, false], true],
    [/^[!@#$%^&*()+_\-=}{[\]|:;"/?.><,`~]{334}$/, [334, false, false, false, true], true],
    [/^[0-9a-zA-Z!@#$%^&*()+_\-=}{[\]|:;"/?.><,`~]{669}$/, [669, true, true, true, true], true],
  ])('%s.test(generatePassword(%o)) => %s', (regex, args, expected) => {
    expect(regex.test(generatePassword(...args))).toBe(expected);
  });
});
