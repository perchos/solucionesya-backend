import Post from "../models/post";
import { mongo } from "../app";

class PostController {
    constructor() {
    }

    static async getPosts(req, res) {
        let { limit, page, category, location ,offset } = req.query
        let paginateQuery;
        let searchQuery = {};
        if (limit === undefined) limit = 10;
        if (page === undefined) page = 1;
        paginateQuery = {limit, page}

        // TODO: THIS IFS MUST BE IN A HELPER METHOD
        if (category !== undefined) {
            searchQuery = {'category': {$in: category}}
        }

        if (location !== undefined) {
            searchQuery = {
                ...searchQuery,
                'location': {$in: location}
            }
        }

        if (offset !== undefined) {
            searchQuery = {
                ...searchQuery,
                $or: [{'desc': {$regex: '.*' + offset + '.*'}}, {'title': {$regex: '.*' + offset + '.*'}}]
            }
        }

        await mongo.paginate(Post, searchQuery, paginateQuery).then(data => {
            res.status(200).json({
                data: data,
            });
        }).catch(err => {
            res.status(500).json({
                data: err,
            });
        })
    }

    static async getPostById(req, res) {
        const { postId } = req.params;
        await mongo.findById(Post, postId)
            .then(data => {
                if (data) {
                    res.status(200).json({
                        data: data,
                    });
                } else {
                    res.status(200).json({
                        data: data,
                    });
                }
            })
            .catch(err => {
                res.status(500).json({
                    data: err,
                })
            });
    }

    static async createPost(req, res) {
        const pre_post = req.body;
        const fileNames = [];
        if (req.files) {
            req.files.forEach((file) => {
                fileNames.push(file.path);
            });
        }

        const post = {
            ...pre_post,
            "images": fileNames,
        }

        const postData = await mongo.save(Post, post)

        res.status(201).json({
            data: postData,
            message: `This is the post that you create`
        })
    }

    static async updatePost(req, res) {
        const { postId } = req.params;
        const post = req.body;

        await mongo.updateOne(Post, postId, post)
            .then(data => {
                if (data.nModified >= 1) {
                    res.status(200).json({
                        data: data,
                        message: `The object had been updated`
                    });
                } else {
                    res.status(204).json({
                        data: data,
                        message: `the action has been enacted but the element wasn't update`
                    });
                }
            })
            .catch(error => {
                res.status(500).json({
                    data: error,
                    message: `Something went wrong updating the post`
                })
            });
    }

    static async deletePost(req, res) {
        const { postId } = req.params;
        await mongo.deleteOne(Post, postId)
            .then(data => {
                res.status(200).json({
                    data: data,
                    message: `The post was deleted successfully`
                });
            })
            .catch(error => {
                res.status(500).json({
                    data: error,
                    message: `Something went wrong deleting the post`
                });
            })
    }
}

export default PostController;