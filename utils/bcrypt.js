<<<<<<< HEAD
import bcrypt from "bcrypt";

const SALT_ROUNDS = 10;

export const hashPassword = async (password) => {
  let hashedPassword;
  try {
    hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
  } catch (error) {
    throw Error("Error hashing password");
  }

  return hashedPassword;
};

export const isUserPassword = async (password, hashedPassword) => {
  let isCorrectPassword;
  try {
    isCorrectPassword = await bcrypt.compare(password, hashedPassword);
  } catch (error) {
    throw Error("Error validating password");
  }

  return isCorrectPassword;
};
=======
import bcrypt from "bcrypt";

const SALT_ROUNDS = 10;

export const hashPassword = async (password) => {
  let hashedPassword;
  try {
    hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
  } catch (error) {
    throw Error("Error hashing password");
  }

  return hashedPassword;
};

export const isUserPassword = async (password, hashedPassword) => {
  let isCorrectPassword;
  try {
    isCorrectPassword = await bcrypt.compare(password, hashedPassword);
  } catch (error) {
    throw Error("Error validating password");
  }

  return isCorrectPassword;
};
>>>>>>> 9f94f01230858ba8d4eca06381ed11ef4eeb7b73
