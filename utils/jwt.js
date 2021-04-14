import jwt from "jsonwebtoken";

export const generateJWT = (uid, name) => {
  const payload = { uid, name };

  return jwt.sign(payload, process.env.SECRET_JWT_SEED, { expiresIn: "1h" });
};
