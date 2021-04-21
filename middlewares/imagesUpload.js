import multer from "multer";
import {
  AUTH_ROUTES_PREFIX,
  ACCEPTED_IMAGE_MIME_TYPES,
  MEDIA_PATH,
  IMAGES_FORM_KEY,
  IMAGES_NUMBER_LIMIT_PER_REQUEST,
  IMAGES_MAX_SIZE,
} from "../utils/constants";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `${MEDIA_PATH}/images`);
  },
  filename: (req, file, cb) => {
    let filetype = "";
    if (file.mimetype === "image/gif") {
      filetype = "gif";
    } else if (file.mimetype === "image/png") {
      filetype = "png";
    } else if (file.mimetype === "image/jpeg") {
      filetype = "jpg";
    }
    cb(null, "image-" + Date.now() + "." + filetype);
  },
});

const fileFilter = (req, file, cb) => {
  //   console.log(file.mimetype);
  if (ACCEPTED_IMAGE_MIME_TYPES.includes(file.mimetype)) {
    // accept file
    cb(null, true);
  } else {
    // reject file
    // cb(new Error("Only images are allowed"), false);
    cb({ code: "INVALID_IMAGE_TYPE" }, false);
  }
};

const uploadConfig = {
  storage,
  limits: {
    fileSize: 1024 * 1024 * IMAGES_MAX_SIZE, // 8Mb
  },
  fileFilter,
};

const upload = multer(uploadConfig).array(
  IMAGES_FORM_KEY,
  IMAGES_NUMBER_LIMIT_PER_REQUEST
);

const imageUpload = (req, res, next) => {
  upload(req, res, function (error) {
    if (error) {
      res.status(400);
      error.success = false;
      if (error.code === "LIMIT_FILE_SIZE") {
        error.message = "File Size is too large. Allowed file size is 200KB";
      } else if (error.code === "LIMIT_UNEXPECTED_FILE") {
        error.message = "Number of files exceeded";
      } else if (error.code === "INVALID_IMAGE_TYPE") {
        error.message = "Invalid image type";
      }
      return res.send({ error: error.message });
    }

    next();
  });
};

export default imageUpload;
