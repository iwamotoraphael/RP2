const router = require("express").Router();
const bcrypt = require("bcrypt");
const UsuarioGeral = require("../models/UsuarioGeral");
const UsuarioNgo = require("../models/UsuarioNgo");
const utilsAuth = require("../utils/auth")

router.post("/signup-geral", async (req, res) => {
  try {
      const novoUsuario = new UsuarioGeral({
      usuario: req.body.usuario,
      email: req.body.email,
      senha: await utilsAuth.gerarSenhaComHash(req.body.senha),
    });

    const usuario = await novoUsuario.save();
    res.status(200).json(usuario);
    
  } catch (err) {
    res.status(500).json("Erro no servidor.");
  }
});

router.post("/signup-ngo", async (req, res) => {
    try {
        const novoUsuario = new UsuarioNgo({
        usuario: req.body.usuario,
        email: req.body.email,
        senha: await utilsAuth.gerarSenhaComHash(req.body.senha),
      });
  
      const usuario = await novoUsuario.save();
      res.status(200).json(usuario);
      
    } catch (err) {
      res.status(500).json("Erro no servidor.");
    }
  });

router.post("/signin", async (req, res) => {
  try {
      var usuario = await UsuarioGeral.findOne({ email: req.body.email });

      if(!usuario)
        usuario = await UsuarioNgo.findOne({ email: req.body.email });
      
      !usuario && res.status(404).json("Usuário não encontrado.");

      await utilsAuth.validarSenha(req.body.senha, usuario.senha)
        && res.status(400).json("Senha Incorreta.");

      res.status(200).json(usuario);

    } catch (err) {
      res.status(500).json("Erro no servidor.");
    }
  });

module.exports = router;
