const mongoose = require("mongoose");

const UsuarioGeralSchema = new mongoose.Schema(
  {
    usuario: {
      type: String,
      require: true,
      min: 5,
      max: 20,
      unique: true,
    },
    nome:{
      type: String,
      require: true,
      min: 4,
      max: 20
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
    bioDesc: {
      type: String,
      default: ""
    },
    pais: {
      type: String,
      default: ""
    },
    idiomas: {
      type: Array,
      default: []
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("UsuarioGeral", UsuarioGeralSchema);
