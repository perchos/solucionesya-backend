import { validateFields } from "../middlewares/validateFields";

const { check } = require("express-validator");

const passwordLength = 5;

export const registerValidator = [
  check(
    "email",
    "email is mandatory and should have a email pattern"
  ).isEmail(),
  check("userName", "userName is mandatory").notEmpty(),
  check(
    "password",
    `password should have minimum ${passwordLength} characters`
  ).isLength({
    min: passwordLength,
  }),
  validateFields,
];

export const loginValidator = [
  check("userName", "userName is mandatory").notEmpty(),
  check(
    "password",
    `password should have minimum ${passwordLength} characters`
  ).isLength({
    min: passwordLength,
  }),
  validateFields,
];
