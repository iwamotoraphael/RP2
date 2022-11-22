const router = require('express').Router();
const RedeSocial = require('../models/RedeSocial');

router.get("/rede/:id", async (req, res) => {
    try{
        const rede = await RedeSocial.findOne({'usuario': req.params.id}).exec()
        res.status(200).json(rede)
    }
    catch(err){
        res.status(500).json("Server error")
    }
})

router.post("/solicitacoes/:id", async (req, res) => {
    if (req.body.idusuario !== req.params.id) {
        try {
            const adicionarUsuario = await RedeSocial.findOne({usuario: req.params.id});
            const usuarioAtual = await RedeSocial.findOne({usuario: req.body.idusuario});

            if(!usuarioAtual.amigos.includes(req.params.id)){
                await adicionarUsuario.updateOne({ $push: { solicitacoes_recebidas: req.body.idusuario }})
                await usuarioAtual.updateOne({ $push: {solicitacoes_enviadas: req.params.id }})
                res.status(200).json("Friend request sent.")
            } else {
                res.status(403).json("The user is already your friend")
            }
        } catch (err) {
            res.status(500).json("Server error")
        }

    } else {
        res.status(403).json("You can't add yourself.")
    }
});

router.delete("/solicitacoes/:id", async (req, res) => {
    if (req.body.idusuario !== req.params.id) {
        try {
            console.log(req.body)
            console.log(req.body.idusuario)
            const adicionarUsuario = await RedeSocial.findOne({usuario: req.params.id});
            const usuarioAtual = await RedeSocial.findOne({usuario: req.body.idusuario});

            await adicionarUsuario.updateOne({ $pull: { solicitacoes_recebidas: req.body.idusuario }})
            await usuarioAtual.updateOne({ $pull: {solicitacoes_enviadas: req.params.id }})
            res.status(200).json("Solicitação de amizade deletada.")

        } catch (err) {
            console.log(err)
            res.status(500).json("Server error")
        }
    } else {
        res.status(403).json("Usuário não pode excluir solicitações dele mesmo.")
    }
}
)

router.post("/amigos/:id", async (req, res) => {
    if (req.body.idusuario !== req.params.id) {
        try {
            const adicionarUsuario = await RedeSocial.findOne({usuario: req.params.id});
            const usuarioAtual = await RedeSocial.findOne({usuario: req.body.idusuario});

            if(!usuarioAtual.amigos.includes(req.params.id)){
                await usuarioAtual.updateOne({ $pull: { solicitacoes_enviadas: req.params.id }, $push: { amigos: req.params.id }})
                await adicionarUsuario.updateOne({ $pull: { solicitacoes_recebidas: req.body.idusuario }, $push: { amigos: req.body.idusuario }})

                res.status(200).json("Friend request accepted.")
            } else {
                res.status(403).json("User is already a friend.")
            }
        } catch (err) {
            res.status(500).json("Server error")
        }

    } else {
        res.status(403).json("Usuário não pode adicionar ele mesmo.")
    }
});


router.delete("/amigos/:id", async (req, res) => {
    if (req.body.idusuario !== req.params.id) {
        try {
            const adicionarUsuario = await RedeSocial.findOne({usuario: req.params.id});
            const usuarioAtual = await RedeSocial.findOne({usuario: req.body.idusuario});

            if(usuarioAtual.amigos.includes(req.params.id)){
                await usuarioAtual.updateOne({ $pull: { amigos: req.params.id }})
                await removerUsuario.updateOne({ $pull: { amigos: req.body.idusuario }})

                res.status(200).json("Friend removed.")
            } else {
                res.status(403).json("User is not a friend.")
            }
        } catch (err) {
            res.status(500).json("Server error")
        }

    } else {
        res.status(403).json("Usuário não pode adicionar ele mesmo.")
    }
});



module.exports = router;
