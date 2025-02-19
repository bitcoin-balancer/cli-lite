import { describe, test, expect } from 'vitest';
import { decodeMenuAction } from './index.js';

/* ************************************************************************************************
 *                                             TESTS                                              *
 ************************************************************************************************ */

describe('decodeMenuAction', () => {
  test.each([
    ['', { id: '', variation: undefined }],
    ['build', { id: 'build', variation: undefined }],
    ['build-up', { id: 'build-up', variation: undefined }],
    ['build-up:test-mode', { id: 'build-up', variation: 'test-mode' }],
    ['build-up:restore-mode', { id: 'build-up', variation: 'restore-mode' }],
    ['update-config:EXCHANGE_CONFIGURATION', { id: 'update-config', variation: 'EXCHANGE_CONFIGURATION' }],
  ])('decodeMenuAction(%s) -> %o', (a, expected) => {
    expect(decodeMenuAction(a)).toEqual(expected);
  });
});
