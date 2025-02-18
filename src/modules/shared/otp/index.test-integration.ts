import { describe, test, expect } from 'vitest';
import { isOTPSecretValid, isOTPTokenValid } from 'web-utils-kit';
import { generateOTPSecret, generateOTPToken } from './index.js';

/* ************************************************************************************************
 *                                             TESTS                                              *
 ************************************************************************************************ */

describe('generateOTPSecret', () => {
  test.each([
    [generateOTPSecret()],
    [generateOTPSecret()],
    [generateOTPSecret()],
    [generateOTPSecret()],
    [generateOTPSecret()],
    [generateOTPSecret()],
    [generateOTPSecret()],
    [generateOTPSecret()],
    [generateOTPSecret()],
    [generateOTPSecret()],
    [generateOTPSecret()],
    [generateOTPSecret()],
  ])('isOTPSecretValid(%s) -> true', (input) => {
    expect(isOTPSecretValid(input)).toBe(true);
  });
});

describe('generateOTPToken', () => {
  test.each([
    [generateOTPToken(generateOTPSecret())],
    [generateOTPToken(generateOTPSecret())],
    [generateOTPToken(generateOTPSecret())],
    [generateOTPToken(generateOTPSecret())],
    [generateOTPToken(generateOTPSecret())],
    [generateOTPToken(generateOTPSecret())],
    [generateOTPToken(generateOTPSecret())],
    [generateOTPToken(generateOTPSecret())],
    [generateOTPToken(generateOTPSecret())],
    [generateOTPToken(generateOTPSecret())],
    [generateOTPToken(generateOTPSecret())],
    [generateOTPToken(generateOTPSecret())],
  ])('isOTPTokenValid(%s) -> true', (input) => {
    expect(isOTPTokenValid(input)).toBe(true);
  });
});
