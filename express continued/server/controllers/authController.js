const Admin = require('../models/Admin');
const jwt = require('jsonwebtoken')

const login = (req, res)=>{
    console.log('inside login controller');
    let {username, password} = req.body;
    console.log(username, password);
    Admin.findOne({username, password}).then((result)=>{
        // generate a token here and send it as a response
        console.log(result);
        const token = jwt.sign({id: result._id}, 'superSecret@321', {expiresIn: '1h'});
        res.status(200).json({"token":token});
    }).catch((err)=>{
        console.log(err)
        res.status(500).json({"message":"authentication failed"});
        // send error message from here...
    });    
}

const register = (req, res)=>{
    // let {username, password} = req.body;
    const newObj = new Admin(req.body);
    newObj.save().then((result)=>{
        res.status(201).json({"message":"user created successfully"});
    }).catch(err=>{
        res.status(500).json({"message":"failed to create user"});
    })
}


module.exports = {
    login,
    register
}