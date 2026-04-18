const mongoose = require('mongoose');


async function connectDB() {
    try {
        await mongoose.connect('mongodb+srv://Test:pXpdTJWLVtJv7_G@backend.ldnj3ct.mongodb.net/halley');
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB; 