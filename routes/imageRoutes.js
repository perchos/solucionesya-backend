import express from "express";
import ImageController from "../controllers/imageController";

import imageUpload from "../middlewares/imagesUpload";

function mediaRouting(app) {
  const router = express.Router();
  app.use("/media", router);

  router.get("/images/download", ImageController.getImagesByIds)
  router.get("/images/:imageId", imageUpload, ImageController.updateImages)
  router.get("/images/download", ImageController.downloadImage);
}

export default mediaRouting;
