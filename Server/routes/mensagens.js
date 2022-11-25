const router = require('express').Router();
const Mensagem = require('../models/Mensagem');

router.post("/", async (req, res) => {
    const novaMensagem = new Mensagem(req.body);

    try {
        const mensagemSalva = novaMensagem.save();
        res.status(200).json(mensagemSalva)
    } catch (err) {
        res.status(500).json("Erro no servidor.")
    }
})

router.get("/:idConversa", async (req, res) => {
    try {
        const mensagens = await Mensagem.find({
            idConversa: req.params.idConversa
        });
        res.status(200).json(mensagens)
    } catch (err) {
        res.status(500).json("Erro no servidor.");
    }
})


module.exports = router;