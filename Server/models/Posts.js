const mongoose = require("mongoose");

const PostsSchema = new mongoose.Schema(
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
        post_content: {
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

module.exports = mongoose.model("Posts", PostsSchema)