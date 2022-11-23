const router = require('express').Router();
const UsuarioGeral = require("../models/UsuarioGeral");
const UsuarioNgo = require("../models/UsuarioNgo");
const Post = require("../models/Posts");

router.post("/", async (req, res) => {
    const newPost = new Post(req.body)
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
            res.status(403).json("you can update only your post");
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
        const post = Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json(err)
    }
})


module.exports = router