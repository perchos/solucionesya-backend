import User from "../models/user";
import { hashPassword, isUserPassword } from "../utils/bcrypt";
import { generateJWT } from "../utils/jwt";
import { JWT_COOKIE_NAME } from "../utils/constants";

const cookieOptions = {
  httpOnly: true,
  sameSite: "none",
  secure: true,
};

class AuthController {
  static async registerUser(req, res) {
    const { email, userName, password } = req.body;

    try {
      let user;

      // Checks if user name is not taken

      user = await User.findOne({ userName });

      if (user) {
        return res.status(400).send({
          msg: "User already exists",
        });
      }

      //  encrypt password
      const hashedPassword = await hashPassword(password);

      // Creates User

      user = new User({
        email,
        userName,
        password: hashedPassword,
      });

      await user.save();

      // JWT

      const token = generateJWT(user.id, user.userName);

      res.cookie(JWT_COOKIE_NAME, token, cookieOptions);

      return res.status(201).send({
        msg: "User created",
        uid: user.id,
      });
      //
    } catch (error) {
      res.status(500).send({ msg: "Error creating user" });
    }
  }

  static async loginUser(req, res) {
    const { userName, password } = req.body;

    try {
      const user = await User.findOne({ userName });

      if (!user) {
        return res.status(400).send({
          msg: "Incorrect credentials",
        });
      }

      const isValidPassword = await isUserPassword(password, user.password);

      if (!isValidPassword) {
        return res.status(400).send({
          msg: "Incorrect credentials",
        });
      }

      const token = generateJWT(user.id, user.userName);

      res.cookie(JWT_COOKIE_NAME, token, cookieOptions);

      return res.status(201).send({
        msg: "Logged-in",
        uid: user.id,
      });

      //
    } catch (error) {
      res.status(500).send({ msg: "Error login in" });
    }
    res.status(200).send({ msg: "Hello There" });
  }

  static logoutUser(req, res) {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    res.cookie(JWT_COOKIE_NAME, "", {
      expires: yesterday,
      ...cookieOptions,
    });

    res.status(200).end();
  }
}

export default AuthController;
