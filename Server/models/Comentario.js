const mongoose = require("mongoose");

const ComentarioSchema = new mongoose.Schema(
    {
        idusuario: {
            type: String,
            require: true,
            min: 3,
            max: 30,
        },
        name: {
            type: String,
            require: true,
            min: 3,
            max: 20,
        },
        idpost: {
            type: String,
            require: true,
            min: 3,
            max: 30,
        },
        commentary_content: {
            type: String,
            require: true,
            max:200
        },
        isngo:{
            type: Boolean,
            require: true
        },

    },
    { timestamps: true }
)

module.exports = mongoose.model("Comentario", ComentarioSchema)