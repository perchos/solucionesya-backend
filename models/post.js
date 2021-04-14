import { Schema, model } from "mongoose";

const PostSchema = Schema(
  {
    title: {
      type: String,
      require: true,
    },
    price: {
      type: Schema.Types.Mixed,
      require: true,
    },
    location: {
      type: String,
      require: true,
    },
    phone: {
      type: String,
      require: true,
    },
    desc: {
      type: String,
      require: true,
    },
    images: Array,
    ratings: {
      type: [{ type: Schema.Types.ObjectId, ref: "Rating" }],
    },
  },
  {
    collection: "posts",
    timestamps: true,
  }
);

const Post = model("Post", PostSchema);
