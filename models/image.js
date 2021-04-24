import { Schema, model } from "mongoose";

const ImageSchema = Schema(
    {
        path: {
            type: String,
            require: true,
        },
        postId: {
            type: Schema.Types.ObjectId,
            require: true,
        },
        collection: "images",
        timestamps: true,
    }
)

const Image = model("Image", ImageSchema);

export default Image;
