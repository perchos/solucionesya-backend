class MediaController {
  static async uploadImage(req, res) {
    // console.log(req.files);
    console.log(req.body.name);
    console.log(req.body.service);

    const fileNames = [];
    if (req.files) {
      req.files.forEach((file) => {
        // fileNames.push(file.filename);
        fileNames.push(file.path);
      });
    }
    // console.log(fileNames);
    // if (!req.files.length) {
    //   return res.status(400).send({ error: "invalid image type" });
    // }
    // res.json({ fileUrl: "http://localhost:5000/images/" + req.file.filename });

    // res.json({ fileUrl: "http://localhost:5000/images/" });

    res.send(fileNames);
  }

  static async downloadImage(req, res) {
    const path = "uploads/images/image-1618976243976.jpg";

    res.download(path);
  }
}

export default MediaController;
