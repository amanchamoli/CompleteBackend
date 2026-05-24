const userModel =require("../models/user.model")
const jwt = require("jsonwebtoken")

async function registerUser(req,res){

    const{username, email, password} =req.body;

    const isUserAlreaddyExists =await userModel.findOne({
        email
    })

    if(isUserAlreaddyExists){
        return res.status(400).json({
            message:"User alreaddy exists"
        })
    }

    const user =await userModel.create({
        username,
        email,
        password
    })

    const token = jwt.sign({ 
        id: user._id
    },process.env.JWT_SECRET)

    res.cookie("token", token)

    res.status(201).json({
        message:"User registered successfully",
        user
    })
}

module.exports = { registerUser }