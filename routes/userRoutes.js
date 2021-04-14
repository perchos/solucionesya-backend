<<<<<<< HEAD
import express from "express";
import AuthController from "../controllers/authController";

function userRouting(app) {
  const rootPath = "/auth";

  const router = express.Router();
  app.use("/", router);

  router.post(`${rootPath}/register`, (req, res) =>
    AuthController.registerUser(req, res)
  );

  router.post(`${rootPath}/login`, (req, res) =>
    AuthController.loginUser(req, res)
  );

  router.post(`${rootPath}/logout`, (req, res) =>
    AuthController.logoutUser(req, res)
  );
}

export default userRouting;
=======
import express from "express";
import AuthController from "../controllers/authController";

function userRouting(app) {
  const rootPath = "/auth";

  const router = express.Router();
  app.use("/", router);

  router.post(`${rootPath}/register`, (req, res) =>
    AuthController.registerUser(req, res)
  );

  router.post(`${rootPath}/login`, (req, res) =>
    AuthController.loginUser(req, res)
  );

  router.post(`${rootPath}/logout`, (req, res) =>
    AuthController.logoutUser(req, res)
  );
}

export default userRouting;
>>>>>>> 9f94f01230858ba8d4eca06381ed11ef4eeb7b73
