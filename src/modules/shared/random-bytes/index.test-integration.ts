import { describe, test, expect } from 'vitest';
import { generateRandomBytes } from './index.js';

/* ************************************************************************************************
 *                                             TESTS                                              *
 ************************************************************************************************ */

describe('generateRandomBytes', () => {
  test.each([
    [6],
    [16],
    [48],
    [125],
    [336],
    [2048],
    [12558],
  ])('generateRandomBytes(%i)', (size) => {
    expect(new RegExp(`^[a-zA-Z0-9-_]{${size},}$`).test(generateRandomBytes(size))).toBe(true);
  });
});
