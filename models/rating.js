import { Schema, model } from "mongoose";

const RatingSchema = Schema(
  {
    consumerId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
    providerId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
    postId: {
      type: Schema.Types.ObjectId,
      ref: "Post",
      require: true,
    },
    value: {
      type: Number,
      require: true,
    },
    confirmed: {
      type: Boolean,
      require: true,
    },
  },
  {
    collection: "ratings",
    timestamps: true,
  }
);

const Rating = model("Rating", RatingSchema);

export default Rating;
