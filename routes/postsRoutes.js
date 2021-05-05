import express from "express";
import PostController from "../controllers/postController";
import { apiPrefix } from "./routePrefixes";
import imageUpload from "../middlewares/imagesUpload";
import validateJWT from "../middlewares/validateJWT";


function postsRouting(app) {
    const router = express.Router();
    app.use(apiPrefix, router);

    router.get('/posts', PostController.getPosts);

    router.get('/posts/:postId', PostController.getPostById);

    router.post('/post', validateJWT, imageUpload, PostController.createPost);

    router.put('/posts/:postId', validateJWT, imageUpload, PostController.updatePost);

    router.delete('/posts/:postId', validateJWT, PostController.deletePost);
}

export default postsRouting;