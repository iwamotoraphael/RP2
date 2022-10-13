const mongoose = require('mongoose');

const MensagemSchema = new mongoose.Schema(
    {
        idConversa: {
            type: String
        },
        emissor: {
            type: String
        },
        texto: {
            type: String
        }
    },
    { timestamps: true }
)

module.exports = mongoose.model("Mensagem", MensagemSchema)