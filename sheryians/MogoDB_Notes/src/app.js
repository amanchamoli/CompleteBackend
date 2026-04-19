const express = require('express')
const noteModel = require("./models/notes.model")

const app = express();
app.use(express.json());

/*POST */
app.post("/notes",async (req,res) => {
    const data = req.body

    await noteModel.create({
        title:data.title,
        description:data.description,
        type:data.type
    })

    res.status(200).json({
        message:"Note created successfully",
    })
})


/*GET */

app.get("/notes", async( req,res) => {
    const notes = await noteModel.find()

    res.status(200).json({
        message:"Notes fetched sucessfully",
        data:notes
    })
})

/*DELETE */

app.delete("/notes/:id", async(req,res) =>{
    const id = req.params.id

    await noteModel.findOneAndDelete({_id:id})

    res.status(200).json({
        message:"Note deleted successfully",
    })
})
/*PATCH */

app.patch("/notes/:id", async(req,res) => {
    const id = req.params.id
    const description = req.body.description

    await noteModel.findOneAndUpdate({_id:id},{description:description})

    res.status(200).json({
        message:"Note updated successfully",
    })
})

module.exports = app;

