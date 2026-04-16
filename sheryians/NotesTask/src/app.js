const express =require('express')

const app = express()
app.use(express.json())

const notes = []


/*post notes*/
app.post('/notes',(req,res) =>{
        console.log(req.body)
        notes.push(req.body)
        res.status(201).json({
                messsage: "note created successfully"
        })
})

/* get notes*/
app.get('/notes',(req,res) =>{

        res.status(200).json({
                message:"notes fetched successfully",
                notes: notes
        })

})

/*delete notes*/ 
app.delete('/notes/:index',(req,res) => {

     const index = req.params.index   
     delete notes[index]

     res.status(200).json({
        message:"note deleted successfully"
     })
})


/* patch notes */
app.patch('/notes/:index',(req,res) => {

        const index =req.params.index
        const title = req.body.title
        const description = req.body.description

        notes[index].title = title
        notes[index].description = description

        res.status(200).json({
                message:"note updated successfully"
        })
        
})


module.exports = app