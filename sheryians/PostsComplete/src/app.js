const express = require("express");
const multer = require("multer");

const app = express();


const upload = multer({storage: multer.memoryStorage() })

app.post('/create-post', upload.single("image"), async(req,res) =>{
    console.log(req.body);
    console.log(req.file)
})

app.use(express.json());


module.exports = app;