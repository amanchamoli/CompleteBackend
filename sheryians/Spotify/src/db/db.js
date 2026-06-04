require("dotenv").config();
const mongoose = require("mongoose");


async function connectDB(){

    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Database Connection Successful");
    }
    catch(error){
        console.error("Database Connection Error:", error)
    }
}

module.exports = connectDB;