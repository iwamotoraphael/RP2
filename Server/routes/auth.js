const router = require("express").Router();
const bcrypt = require("bcrypt");
const UsuarioGeral = require("../models/UsuarioGeral");
const UsuarioNgo = require("../models/UsuarioNgo");
const utilsAuth = require("../utils/auth");

router.post("/signup-geral", async (req, res) => {
  try {
      const novoUsuario = new UsuarioGeral({
      usuario: req.body.username,
      nome: req.body.displayName,
      senha: await utilsAuth.gerarSenhaComHash(req.body.password),
      pais: req.body.originCountry,
      idiomas: req.body.languages 
    });

    const usuario = await novoUsuario.save();
    res.status(200).json(usuario);
    
  } catch (err) {
    if(err.code == 11000)
      res.status(500).json("Username is already being used.");
    else
      res.status(500).json("Server error.");
  }
});

router.post("/signup-ngo", async (req, res) => {
    try {
        const novoUsuario = new UsuarioNgo({
          usuario: req.body.username,
          nome: req.body.displayName,
          senha: await utilsAuth.gerarSenhaComHash(req.body.password),
          pais: req.body.originCountry,
          idiomas: req.body.languages,
          email: req.body.email,
          endereco:req.body.adress
      });
  
      const usuario = await novoUsuario.save();
      res.status(200).json(usuario);
      
    } catch (err) {
      if(err.code == 11000)
      res.status(500).json("Username is already being used.");
      else
        res.status(500).json("Server error.");
    }
  });

router.post("/signin", async (req, res) => {
  try {
      var usuario = await UsuarioGeral.findOne({ usuario: req.body.username });

      if(!usuario)
        usuario = await UsuarioNgo.findOne({ usuario: req.body.username });
      
      !usuario && res.status(404).json("User not found.");

      await utilsAuth.validarSenha(req.body.password, usuario.senha)
        && res.status(400).json("Invalid password.");

      res.status(200).json(usuario);

    } catch (err) {
      //res.status(500).json("Erro no servidor.");
      res.status = 500
      res.status.json = "Server error."
    }
  });

module.exports = router;
