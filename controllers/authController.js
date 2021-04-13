import User from "../models/user";
import bcrypt from "bcrypt";
import { hashPassword, isUserPassword } from "../utils/bcrypt";
import { generateJWT } from "../utils/jwt";

class AuthController {
  static async registerUser(req, res) {
    try {
      const { email, userName, password } = req.body;

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

      return res.send(user);
      //
    } catch (error) {
      res.status(500).send({ msg: "Error creating user" });
    }
  }

  static loginUser(req, res) {
    res.status(200).send({ msg: "Hello There" });
  }

  static logoutUser(req, res) {
    res.status(200).send({ msg: "Bye There" });
  }
}

export default AuthController;
