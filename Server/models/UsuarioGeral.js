const mongoose = require("mongoose");

const UsuarioGeralSchema = new mongoose.Schema(
  {
    usuario: {
      type: String,
      require: true,
      min: 3,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      max: 50,
      unique: true,
    },
    senha: {
      type: String,
      require: true,
      min: 6,
    },
    fotoPerfil: {
      type: String,
      default: "",
    },
    ngoParticipante: {
      type: Array,
      default: []
    },
    amigos: {
      type: Array,
      default: []
    },
    bioDesc: {
      type: String,
      default: ""
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("UsuarioGeral", UsuarioGeralSchema);
