import express from "express";
import MediaController from "../controllers/mediaController";

import imageUpload from "../middlewares/imagesUpload";

function mediaRouting(app) {
  const router = express.Router();
  app.use("/media", router);

  router.post("/images", imageUpload, MediaController.uploadImage);
  router.get("/images", MediaController.downloadImage);
}

export default mediaRouting;
