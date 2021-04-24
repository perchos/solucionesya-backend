import express from "express";
import AuthController from "../controllers/authController";
import { AUTH_ROUTES_PREFIX } from "../utils/constants";
import { registerValidator, loginValidator } from "../utils/validators";
import { authPrefix } from "./routePrefixes";

function authRouting(app) {
  const router = express.Router();
  app.use(authPrefix, router);

  router.post("/register", registerValidator, AuthController.registerUser);

  router.post("/login", loginValidator, AuthController.loginUser);

  router.post("/logout", AuthController.logoutUser);
}

export default authRouting;
