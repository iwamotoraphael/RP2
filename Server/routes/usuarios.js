const router = require('express').Router();
const UsuarioGeral = require('../models/UsuarioGeral');
const UsuarioNgo = require('../models/UsuarioNgo');
const utilsAuth = require("../utils/auth");

//adicionar membro na ong
//adicionar ong a um perfil
//etc.
router.patch("/atualizar-perfil/:id", async (req, res) => {
    if (req.body.idUsuario === req.params.id) {
        if (req.body.senha) {
            try {
                req.body.senha = utilsAuth.gerarSenhaComHash(req.body.senha);
            } catch (err) {
                console.error(err);
                return res.status(500).json("Erro no servidor.");
            }
        }

        try{
            var usuario = await UsuarioGeral.findByIdAndUpdate(req.params.id, {
                $set: req.body
            });

            if (!usuario)
                usuario = await UsuarioNgo.findByIdAndUpdate(req.params.id, {
                    $set: req.body
                })

            res.status(200).json(usuario);
        } catch (err) {
            console.error(err);
            res.status(500).json("Erro no servidor.");
        }
    }
})

router.get("/find/:id", async (req, res) => {
    try {
        var usuario = await UsuarioGeral.findById(req.params.id);

        if(!usuario)
            usuario = await UsuarioNgo.findById(req.params.id);

        const {senha, updatedAt, ...other} = usuario._doc

        res.status(200).json(other);
    } catch (err) {
        console.error(err);
        res.status(500).json("Erro no servidor.");
    }
})

router.get("/ngos", async (req, res) => {
    try {
        const ngos = await UsuarioNgo.find();

        res.status(200).json(ngos);
    } catch (err) {
        res.status(500).json("Erro no servidor.")
    }
})

router.get("/persons", async (req, res) => {
    try {
        const persons = await UsuarioGeral.find();

        res.status(200).json(persons);
    } catch (err) {
        res.status(500).json("Erro no servidor.")
    }
})

module.exports = router