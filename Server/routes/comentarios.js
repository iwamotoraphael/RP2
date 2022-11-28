const router = require('express').Router();
const Comentario = require("../models/Comentario");

router.post("/", async (req, res) => {
    const newComentario = new Comentario({idusuario: req.body.idusuario, commentary_content: req.body.commentary_content, name: req.body.name, isngo: req.body.isngo, idpost: req.body.idpost})
    try {
        const savedPost = await newComentario.save();
        res.status(200).json(savedPost);
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get("/:postId", async (req, res) => {
    try{
        const commentaries = await Comentario.find({idpost: req.params.postId}).exec()
        console.log(commentaries)
        res.json(commentaries)
    }
    catch(err){
        res.status(500).json(err)
    }
})

module.exports = router