import jwt from "jsonwebtoken";

const validateJWT = (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({
        sucess: false,
        msg: "there is no token",
      });
    }

    const payload = jwt.verify(token, process.env.SECRET_JWT_SEED);

    req.uid = payload.uid;
    req.name = payload.name;
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      success: false,
      msg: "invalid token",
    });
  }

  next();
};

export default validateJWT;
