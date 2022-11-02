const mongoose = require("mongoose");

const UsuarioNgoSchema = new mongoose.Schema(
  {
    usuario: {
      type: String,
      require: true,
      min: 3,
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
    bioDesc: {
      type: String,
      default: ""
    },
    ngoVerificado: {
      type: Boolean,
      default: false
    },
    endereco: {
      type: String,
      default: ""
    },
    email:{
      type: String,
      default: ""
    },
    usuariosAdmins: {
      type: Array,
      default: []
    },
    idiomas: {
      type: Array,
      default: []
    },
    membros: {
      type: Array,
      default: []
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("UsuarioNgo", UsuarioNgoSchema);
