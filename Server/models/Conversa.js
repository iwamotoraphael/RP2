const mongoose = require('mongoose');

const ConversaSchema = new mongoose.Schema(
    {
        membros: {
            type: Array,
            default: []
        }
    },
    { timestamps: true }
)

module.exports = mongoose.model("Conversa", ConversaSchema)