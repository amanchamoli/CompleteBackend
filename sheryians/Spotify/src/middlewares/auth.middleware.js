const jwt = require("jsonwebtoken");

async function authArtist(req, res, next){

    const token = req.cokies.token;

    if(!token){
        return res.status(401).json({ message: "Unauthorized" })
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        if(decoded.role !== "artist"){
            return res.status(403).json({message: "not have permission to create music"});
        }

        req.user = decoded;
        
        next()
    }
    catch(err){
        console.log(err);
        return res.status(401).json({ mesage: "Unauthorized"})
    }
}

async function authUser(req, res, next){
    
        const token = req.cokies.token;

    if(!token){
        return res.status(401).json({ message: "Unauthorized" })
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        if(decoded.role !== "user" && decoded.role !== "artist"){
            return res.status(403).json({message: "not have permission to create music"});
        }

        req.user = decoded;
        
        next()
    }
    catch(err){
        console.log(err);
        return res.status(401).json({ mesage: "Unauthorized"})
    }
}
module.exports = {authArtist, authUser}