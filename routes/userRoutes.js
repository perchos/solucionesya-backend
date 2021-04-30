import express from "express";
import UserController from "../controllers/userController";
import { userPrefix } from "./routePrefixes";

function userRouting(app) {
  const router = express.Router();
  app.use(userPrefix, router);

  router.get("/posts/:userId", UserController.getUserWithPosts);

  router.get("/:userId", UserController.getUser);

  router.put("/:userId", UserController.updateUser);
}

export default userRouting;
