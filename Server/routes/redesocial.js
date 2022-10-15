const router = require('express').Router();
const UsuarioGeral = require('../models/UsuarioGeral');
const RedeSocial = require('../models/RedeSocial');

router.post("/solicitacoes/:id", async (req, res) => {
    if (req.body.idUsuario !== req.params.id) {
        try {
            const adicionarUsuario = await RedeSocial.findById(req.params.id);
            const usuarioAtual = await RedeSocial.findById(req.body.idUsuario);

            if(!usuarioAtual.amigos.includes(req.params.id)){
                await adicionarUsuario.updateOne({ $push: { solicitacoes_recebidas: req.body.idUsuario }})
                await usuarioAtual.updateOne({ $push: {solicitacoes_enviadas: req.params.id }})
                res.status(200).json("Solicitação de amizade enviada.")
            } else {
                res.status(403).json("Usuário já é um amigo.")
            }
        } catch (err) {
            res.status(500).json("Erro no servidor.")
        }

    } else {
        res.status(403).json("Usuário não pode adicionar ele mesmo.")
    }
});

router.delete("/solicitacoes/:id", async (req, res) => {
    if (req.body.idUsuario !== req.params.id) {
        try {
            const adicionarUsuario = await RedeSocial.findById(req.params.id);
            const usuarioAtual = await RedeSocial.findById(req.body.idUsuario);

            await adicionarUsuario.updateOne({ $remove: { solicitacoes_recebidas: req.body.idUsuario }})
            await usuarioAtual.updateOne({ $remove: {solicitacoes_enviadas: req.params.id }})
            res.status(200).json("Solicitação de amizade deletada.")

        } catch (err) {
            res.status(500).json("Erro no servidor.")
        }
    } else {
        res.status(403).json("Usuário não pode excluir solicitações dele mesmo.")
    }
}
)

router.post("/amigos/:id", async (req, res) => {
    if (req.body.idUsuario !== req.params.id) {
        try {
            const adicionarUsuario = await RedeSocial.findById(req.params.id);
            const usuarioAtual = await RedeSocial.findById(req.body.idUsuario);

            if(!usuarioAtual.amigos.includes(req.params.id)){
                await usuarioAtual.updateOne({ $remove: { solicitacoes_enviadas: req.params.id }, $push: { amigos: req.params.id }})
                await adicionarUsuario.updateOne({ $remove: { solicitacoes_recebidas: req.body.idUsuario }, $push: { amigos: req.body.idUsuario }})

                res.status(200).json("Solicitação de amizade aceita.")
            } else {
                res.status(403).json("Usuário já é um amigo.")
            }
        } catch (err) {
            res.status(500).json("Erro no servidor.")
        }

    } else {
        res.status(403).json("Usuário não pode adicionar ele mesmo.")
    }
});


router.delete("/amigos/:id", async (req, res) => {
    if (req.body.idUsuario !== req.params.id) {
        try {
            const removerUsuario = await RedeSocial.findById(req.params.id);
            const usuarioAtual = await RedeSocial.findById(req.body.idUsuario);

            if(usuarioAtual.amigos.includes(req.params.id)){
                await usuarioAtual.updateOne({ $remove: { amigos: req.params.id }})
                await removerUsuario.updateOne({ $remove: { amigos: req.body.idUsuario }})

                res.status(200).json("Amigo deletado.")
            } else {
                res.status(403).json("Usuário não é um amigo.")
            }
        } catch (err) {
            res.status(500).json("Erro no servidor.")
        }

    } else {
        res.status(403).json("Usuário não pode adicionar ele mesmo.")
    }
});



module.exports = router;
