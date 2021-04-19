import express from "express";
import AuthController from "../controllers/authController";
import { authPrefix } from "./routePrefixes";

function userRouting(app) {

  const router = express.Router();
  app.use("/", router);

  router.post(`${authPrefix}/register`, (req, res) =>
    AuthController.registerUser(req, res)
  );

  router.post(`${authPrefix}/login`, (req, res) =>
    AuthController.loginUser(req, res)
  );

  router.post(`${authPrefix}/logout`, (req, res) =>
    AuthController.logoutUser(req, res)
  );
}

export default userRouting;
