const mongoose = require('mongoose')

const productionSchema = new mongoose.Schema({
    author: String,
    title: String,
    text: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Production', productionSchema)