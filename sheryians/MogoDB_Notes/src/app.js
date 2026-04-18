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
/*DELETE */
/*PATCH */

module.exports = app;

