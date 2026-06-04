const musicModel = require("../models/music.model.js");
const {uploadFile} = require("../services/storage.service.js");
const jwt = require("jsonwebtoken")


async function createMusic(req, res){

    const token = req.cookies.token;

    if (!token){
        return res.status(400).json({ message: "Unauthorized"})
    }
     
    try{
        const decoded =jwt.verify(token, process.env.JWT_SECRET)

        if(decoded.role !== "artist"){
            return res.status(403).json({message: "not have permission to create music"});
        }
    

    const {title} = req.body;
    const {file} = req.file;
    
    const result = await uploadFile(file.buffer.toString('base64'));
    
    const music = await musicModel.create({
        uri: result.url,
        title,
        artist: decoded.id,
    })

    res.ststus(201).json({
        messsage: "Music Created successfully",
        music:{
            id: music._id,
            uri: music.uri,
            title: music.title,
            artist: music.artist
        }
    })
    }catch{
        console.log(err);
        return res.status(401).json({ message: "Unauthorized"})
    }
}

module.exports = {createMusic}