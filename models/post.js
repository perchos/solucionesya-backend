import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

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
    category: {
        type: String,
        require: true,
    },
    desc: {
      type: String,
      require: true,
    },
    images: Array,
    authorId: Schema.Types.ObjectId,
    ratings: {
      type: [{ type: Schema.Types.ObjectId, ref: "Rating" }],
    },
  },
  {
    collection: "posts",
    timestamps: true,
  }
);

PostSchema.plugin(mongoosePaginate)

const Post = model("Post", PostSchema);

export default Post;
