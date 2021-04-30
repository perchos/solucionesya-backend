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

  static async getUserWithPosts(req, res) {
    const userId = req.params.userId;

      // Filter by user Id
    await mongo.join(User, "_id", "posts", "authorId")
        .then(data => {
          res.status(200).json({
            data: data,
          });
        }).catch(err => {
          console.log(err)
          res.status(500).json({
            error: "User not found",
          });
        })
  }

  static async updateUser(req, res) {
    const { userId } = req.params;
    const user = res.body;
    try {
      const data = await mongo.updateOne(User, userId, user);
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
