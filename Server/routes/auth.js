const router = require("express").Router();
const bcrypt = require("bcrypt");
const UsuarioGeral = require("../models/UsuarioGeral");
const UsuarioNgo = require("../models/UsuarioNgo");
const utilsAuth = require("../utils/auth");
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const RedeSocial = require("../models/RedeSocial")

dotenv.config();

router.post("/signup-geral", async (req, res) => {
  try {
    let usuarioExistente = await UsuarioNgo.findOne({
      usuario: req.body.username,
    });

    if (!usuarioExistente) {
      const novoUsuario = new UsuarioGeral({
        usuario: req.body.username,
        nome: req.body.displayName,
        senha: await utilsAuth.gerarSenhaComHash(req.body.password),
        pais: req.body.originCountry,
        idiomas: req.body.languages,
      });

      const novoUsuarioRede = new RedeSocial({
        usuario: req.body.username,
        amigos: [],
        solicitacoes_enviadas: [],
        solicitacoes_enviadas: [],
      })

      await novoUsuarioRede.save();
      const usuario = await novoUsuario.save();
      res.status(200).json(usuario);
    } else {
      res.status(500).json("Username is already being used.");
    }
  } catch (err) {
    if (err.code == 11000)
      res.status(500).json("Username is already being used.");
    res.status(500).json("Server error.");
  }
});

router.post("/signup-ngo", async (req, res) => {
  try {
    const usuarioExistente = await UsuarioGeral.findOne({
      usuario: req.body.username,
    });

    if (!usuarioExistente) {
      const novoUsuario = new UsuarioNgo({
        usuario: req.body.username,
        nome: req.body.displayName,
        senha: await utilsAuth.gerarSenhaComHash(req.body.password),
        idiomas: req.body.languages,
        email: req.body.email,
        endereco: req.body.adress,
      });

      const novoUsuarioRede = new RedeSocial({
        usuario: req.body.username,
        amigos: [],
        solicitacoes_enviadas: [],
        solicitacoes_enviadas: [],
      })

      const usuario = await novoUsuario.save();
      await novoUsuarioRede.save();
      res.status(200).json(usuario);
    } else {
      res.status(500).json("Username is already being used.")
    }
  } catch (err) {console.log(err)
    if (err.code == 11000)
      res.status(500).json("Username is already being used.");
    else res.status(500).json("Server error.");
  }
});

router.post("/signin", async (req, res) => {
  try {
    let isPerson = true;

    var usuario = await UsuarioGeral.findOne({ usuario: req.body.username });

    if (!usuario){
      usuario = await UsuarioNgo.findOne({ usuario: req.body.username });
      isPerson = false;
    }
      

    !usuario && res.status(404).json("User not found.");

    (await utilsAuth.validarSenha(req.body.password, usuario.senha)) && res.status(400).json("Invalid password.");

    const token = jwt.sign({userId: usuario._id, isPerson: isPerson}, process.env.JWT_SECRET, {expiresIn: 3600})
    res.status(200).json({auth: true, token});
  } catch (err) {
    //res.status(500).json("Erro no servidor.");
    res.status = 500;
    res.status.json = "Server error.";
  }
});

module.exports = router;
