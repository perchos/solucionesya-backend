<<<<<<< HEAD
import jwt from "jsonwebtoken";

export const generateJWT = (uid, name) => {
  const payload = { uid, name };

  return jwt.sign(payload, process.env.SECRET_JWT_SEED, { expiresIn: "1h" });
};
=======
import jwt from "jsonwebtoken";

export const generateJWT = (uid, name) => {
  const payload = { uid, name };

  return jwt.sign(payload, process.env.SECRET_JWT_SEED, { expiresIn: "1h" });
};
>>>>>>> 9f94f01230858ba8d4eca06381ed11ef4eeb7b73
