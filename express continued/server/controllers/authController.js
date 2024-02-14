const Admin = require('../models/Admin');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
dotenv.config();

const login = (req, res)=>{
    console.log('inside login controller');
    let {username, password} = req.body;
    console.log(username, password);
    Admin.findOne({username}).then(async (result)=>{
        // generate a token here and send it as a response
        console.log(result);
        let validate = await bcrypt.compare(password, result.password) 
        console.log('validate :', validate)
        if(validate){
            const token = jwt.sign({id: result._id}, process.env.JWT_SECRET, {expiresIn: '1h'});
            res.status(200).json({"token":token});
        }else{
            res.status(200).json({"message":"invalid username / password"});
        }
    }).catch((err)=>{
        console.log(err)
        res.status(500).json({"message":"nvalid username / password"});
        // send error message from here...
    });    
}

const register = async (req, res) => {
    let {username, password} = req.body;
    password = await bcrypt.hash(password,10);
    console.log('hashed password:', password);

    const newObj = new Admin({username, password});
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