import express from "express";
import PostController from "../controllers/postController";
import { apiPrefix } from "./routePrefixes";
import imageUpload from "../middlewares/imagesUpload";


function postsRouting(app) {

    // const tagsPatter = /tag*/
    // const {name} = req.query;
    // const {...allTags} = req.query;
    // const tags = []
    // const tagsKeys = Object.keys(allTags).filter(k => tagsPatter.exec(k))
    // for (let i in allTags) {
    //     if (tagsKeys.includes(i)) tags.push(allTags[i]);
    // }
    // TODO: ADD PAGINATION TO THIS ENDPOINT
    const router = express.Router();
    app.use(apiPrefix, router);

    router.get('/posts', PostController.getPosts);

    router.get('/posts/:postId', PostController.getPostById);

    router.post('/post', imageUpload, PostController.createPost);

    router.put('/posts/:postId', imageUpload, PostController.updatePost);

    router.delete('/posts/:postId', PostController.deletePost);
}

export default postsRouting;