const mongoose = require("mongoose");


const carSchema = new mongoose.Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    tags: { type: String, required: true },

}, { timestamps: true }
)
const carModel = mongoose.model('cars', carSchema)
module.exports = carModel