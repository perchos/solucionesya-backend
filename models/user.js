import { Schema, model } from "mongoose";

const UserSchema = Schema(
  {
    name: {
      type: String,
      require: true,
    },
    lastName: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      immutable: true,
    },
    userName: {
      type: String,
      require: true,
      immutable: true,
    },
    password: {
      type: String,
      require: true,
      immutable: true,
    },
    // "posts": ["ids"],
    // "ratedPosts": ["ids"],
  },
  {
    collection: "users",
    timestamps: true,
  }
);

const User = model("User", UserSchema);

export default User;
