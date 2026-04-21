const mongoose = require("mongoose");

async function connectDB(){

    await mongoose.connect("mongodb+srv://Test:pXpdTJWLVtJv7_G@backend.ldnj3ct.mongodb.net/poject-1")

    console.log("connected to DB")
}

module.exports = connectDB;