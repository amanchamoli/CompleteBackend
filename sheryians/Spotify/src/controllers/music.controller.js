const musicModel = require("../models/music.model.js");
const albumModel = require("../models/album.model.js");
const {uploadFile} = require("../services/storage.service.js");
const jwt = require("jsonwebtoken")


async function createMusic(req, res){

    const {title} = req.body;
    const file = req.file;
    
    const result = await uploadFile(file.buffer.toString('base64'));
    
    const music = await musicModel.create({
        uri: result.url,
        title,
        artist: req.user.id,
    })

    res.status(201).json({
        message: "Music Created successfully",
        music:{
            id: music._id,
            uri: music.uri,
            title: music.title,
            artist: music.artist
        }
    })
}

async function createAlbum(req, res){

    // const token = req.cookies.token;

    // if (!token){
    //    return res.status(400).json({ message: "Unauthorized"})
    // }
     
    //try{

    //    const decoded =jwt.verify(token, process.env.JWT_SECRET)

    //    if(decoded.role !== "artist"){
    //        return res.status(403).json({message: "not have permission to create album"});
    //    }

        const { title ,musics}  = req.body;

        const album = await albumModel.create({
            title,
            artist: req.user.id,
            musics: musics,
        })

        res.status(201).json({
            message: "Album created successfully",
            album: {
                id: album._id,
                title: album.title,
                artist: album.artist,
                musics: album.musics,
            }
        })

    //}catch(err){
        //console.log(err);
        //return res.status(401).json({ message: "Unauthorized" })
    //}

}

async function getAllMusic(req,res){
    
    const musics = await musicModel
    .find()
    .limit(20)
    .populate("artist", "username email")

    res.status(200).json({
        message: "Music fetched successfully",
        musics: musics,
    })
}

async function getAllAlbum(req, res){

    const albums = await albumModel.find().select("title artist").populate("artist", "username email").populate("musics")

    res.status(200).json({
        message: "Album fetched successfully",
        albums: albums,
    })
}

async function getAlbumById(req, res){

    const albumId = req.params.albumId;

    const album = await albumModel.findById(albumId).populate("artist", "username email").populate("musics")

    res.status(200).json({
        message: "Album fetched successfully",
        album: album,
    })
}

module.exports = {createMusic, createAlbum, getAllMusic, getAllAlbum, getAlbumById}