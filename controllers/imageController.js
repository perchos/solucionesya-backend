import Image from "../models/image";
import { mongo } from "../app";

class ImageController {
  static async getImagesByIds(req, res) {
    const { imageIds } = req.body;

    await mongo
      .findManyById(Image, imageIds)
      .then((data) => {
        if (data) {
          res.status(200).json({
            data: data,
          });
        } else {
          res.status(200).json({
            data: data,
          });
        }
      })
      .catch((err) => {
        res.status(500).json({
          data: err,
        });
      });
  }

  static async chargeImage(req, res) {
    const { postId } = req.params;

    const fileNames = [];
    if (req.files) {
      req.files.forEach((file) => {
        fileNames.push(file.path);
      });
    }
    // TODO: This must create the image and make the relation with post
  }

  static async downloadImage(req, res) {
    const path = "uploads/images/image-1618976243976.jpg";

    res.download(path);
  }

  static async updateImages(req, res) {
    const path = "uploads/images/image-1618976243976.jpg";

    res.download(path);
  }
}

export default ImageController;
