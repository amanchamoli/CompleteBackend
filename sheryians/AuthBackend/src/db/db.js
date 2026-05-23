const mongoose = require('mongoose');

async function ConnectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Database connected Successfully")
    } catch (error) {
        console.log("Database connection error:",error)
    }
}


module.exports = ConnectDB;