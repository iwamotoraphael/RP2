const router = require('express').Router();
const RedeSocial = require("../models/RedeSocial");
const Post = require("../models/Posts");

router.post("/", async (req, res) => {
    const newPost = new Post({idusuario: req.body.idusuario, post_content: req.body.post_content, name: req.body.name, isngo: req.body.isngo})
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (err) {
        res.status(500).json(err)
    }
})

router.put("/:id", async (req, res) => {
    const post = Post.findById(req.params.id);
    try {
        if(post.usuario === req.body.username) {
            await post.updateOne({ $set: req.body });
            res.status(200).json("the post has been updated")
        } else {
            res.status(403).json("you can only update your post");
        }
    } catch (err) {
        res.status(500).json()
    }
})

router.delete("/:id", async (req, res) => {
    const post = Post.findById(req.params.id);
    try {
        if(post.usuario === req.body.username) {
            await post.deleteOne({ $set: req.body });
            res.status(200).json("the post has been deleted")
        } else {
            res.status(403).json("you can update only your post");
        }
    } catch (err) {
        res.status(500).json()
    }
})

router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id).exec();
        res.status(200).json(post);
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

router.get("/usuario/:id", async (req, res) => {
    try {
        const posts = await Post.find({idusuario: req.params.id}).exec();
        res.status(200).json(posts);
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

router.get("/timeline/:id", async (req, res) => {
    try {
        const currentUserNet = await RedeSocial.find({usuario: req.params.id}).exec();
        const friendsPosts = await Post.find({ idusuario: currentUserNet[0].amigos.concat(currentUserNet[0].usuario) }).sort({createdAt: -1})

        res.json(friendsPosts)
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
})


module.exports = router