import { authenticator } from 'otplib';

/* ************************************************************************************************
 *                                         IMPLEMENTATION                                         *
 ************************************************************************************************ */

/**
 * Generates a secret that can be used to initialize an OTP instance and generate tokens.
 * @returns string
 */
const generateOTPSecret = (): string => authenticator.generateSecret();

/**
 * Generates an OTP token based on given secret.
 * @param secret
 * @returns string
 */
const generateOTPToken = (secret: string): string => authenticator.generate(secret);





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  generateOTPSecret,
  generateOTPToken,
};
