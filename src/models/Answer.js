
const mongoose = require("mongoose")

const Schema = mongoose.Schema
const answerScheme = new Schema({
    text: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question'
    }
})

module.exports = mongoose.model("Answer", answerScheme)
