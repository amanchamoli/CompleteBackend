const express = require('express');

const app = express() 

app.get("/",(req,res) => {
    res.send("Hello Aman")
});

app.get("/about", (req,res) => {
    res.send("about aman")
});

app.listen(3000);