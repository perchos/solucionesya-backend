import User from "../models/user";
import { mongo } from "../app";

class UserController {
  static async getUser(req, res) {
    const { userId } = req.params;
    try {
      const data = await mongo.findById(User, userId);
      res.status(200).json({
        data: data,
      });
    } catch (err) {
      res.status(500).json({
        error: "User not found",
      });
    }
  }
}

export default UserController;
