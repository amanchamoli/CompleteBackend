const mongoose = requir("mongoose");

const albumSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    musics:[{
        type: mongoose.Schema.Type.ObjectId,
        ref: "music"
    }],
    artist:{
        type: mongoose.Schema.Type.ObjectId,
        ref: "user" ,
        required: true           
    }
})

const albumModel = mongoose.model("album", albumSchema);

module.exports = albumModel;