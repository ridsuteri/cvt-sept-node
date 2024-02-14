const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const verifyToken = (req, res, next)=>{
    const token = req.header('Authorization');
    if(token){
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    
        if(decodedToken){
            next();
        }else{
            res.status(403).json({'message':"invalid token"});
        }
    }else{
        res.status(403).json({'message':"token required"});
    }
}

module.exports = verifyToken