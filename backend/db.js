const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
function connectDB() {
    mongoose.set("strictQuery", false);
    mongoose.connect(process.env.MONGO_URL)

    const connection = mongoose.connection
    connection.on('connected', () => {
        console.log('Mongo DB Connection Successfull')
    })
    connection.on('error', () => {
        console.log('Mongo DB Connection Error')
    })
}
connectDB()
module.exports = mongoose