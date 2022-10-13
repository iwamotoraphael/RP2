const router = require('express').Router();
const Conversa = require('../models/Conversa');

router.post("/", async (req, res) => {
    const novaConversa = new Conversa({
        membros: [req.body.idEmissor, req.body.idReceptor]
    })

    try {
        const conversaSalva = await novaConversa.save()
        res.status(200).json(conversaSalva)
    } catch (err) {
        res.status(500).json("Erro no servidor.")
    }
})

router.get("/:idUsuario", async (req, res) => {
    try{
        const conversa = await Conversa.find({
            membros: { $in: [req.params.idUsuario] }
        });
        res.status(200).json(conversa);
    } catch (err) {
        res.status(500).json("Erro no servidor.")
    }
})

module.exports = router;
