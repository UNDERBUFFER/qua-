
const mongoose = require("mongoose")

const Schema = mongoose.Schema
const userScheme = new Schema({
    name: String,
    email: String // TODO: unique field
    // TODO: token
})

module.exports = mongoose.model("User", userScheme)
