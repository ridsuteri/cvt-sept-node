const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next)=>{
    const token = req.header('Authorization');
    if(token){
        const decodedToken = jwt.verify(token, 'superSecret@321');
    
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