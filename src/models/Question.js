
const mongoose = require("mongoose")

const Schema = mongoose.Schema
const questionScheme = new Schema({
    title: String,
    description: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
    // TODO: tags
})

module.exports = mongoose.model("Question", questionScheme)
