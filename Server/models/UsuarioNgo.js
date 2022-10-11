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
    usuariosAdmins: {
      type: Array,
      default: []
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("UsuarioNgo", UsuarioNgoSchema);
