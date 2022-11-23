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
      default: "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=",
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
