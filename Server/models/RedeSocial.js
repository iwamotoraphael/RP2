const mongoose = require("mongoose");

const RedeSocialSchema = new mongoose.Schema(
    {
        usuario: {
            type: String,
            require: true,
            min: 3,
            max: 20,
            unique: true,
        },
        amigos: {
            type: Array,
            define: []
        },
        solicitacoes_recebidas: {
            type: Array,
            default: []
        },
        solicitacoes_enviadas: {
            type: Array,
            default: []
        }
    },
    { timestamps: true }
)

module.exports = mongoose.model("RedeSocial", RedeSocialSchema)