const router = require("express").Router();
const bcrypt = require("bcrypt");
const Usuario = require("../models/Usuario");

router.post("/signup", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const senhaCript = await bcrypt.hash(req.body.senha, salt);

    const novoUsuario = new Usuario({
      usuario: req.body.usuario,
      email: req.body.email,
      senha: senhaCript,
    });

    const usuario = await novoUsuario.save();
    res.status(200).json(usuario);
    
  } catch (err) {
    res.status(500);
  }
});

router.post("/signin", async (req, res) => {
    try {
      const usuario = await Usuario.findOne({ email: req.body.email });
      !usuario && res.status(404).json("Usuário não encontrado.")
  
      const senhaValida = await bcrypt.compare(req.body.senha, usuario.senha);
      !senhaValida && res.status(400).json("Senha incorreta.")

      res.status(200).json(usuario);
      
    } catch (err) {
      res.status(500);
    }
  });

module.exports = router;
