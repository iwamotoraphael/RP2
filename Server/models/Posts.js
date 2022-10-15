const mongoose = require("mongoose");

const PostsSchema = new mongoose.Schema(
    {
        usuario: {
            type: String,
            require: true,
            min: 3,
            max: 20,
        },
        post_content: {
            type: String,
            require: true,
            max:200
        }
    },
    { timestamps: true }
)

module.exports = mongoose.model("Posts", PostsSchema)