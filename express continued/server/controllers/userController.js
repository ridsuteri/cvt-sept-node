const User = require('../models/User')

const getAllUsers = (req, res)=>{
    // Make a query on db using the model that we have just imported ....
    // to find records with a specific condition ...
    // User.find({lastName:"Sharma", email:"abc@gmail.com"})
    User.find({}).then((result)=>{
        console.log('records fetched: ', result);
        res.json(result);
    }).catch((err)=>{
        res.json({"message":"error fetching records"})
    })
}


const creatAUser = async (req,res)=>{
    // 1. create a object following the schema of user
    // 2. save that object to db using .save() on top of that object

    // // TODO: take input from user instead of hardcoding it ...
    // const newObj = new User({
    //     firstName: "XYZ",
    //     lastName: "Kumar",
    //     email: "xyz@gmail.com"
    // });

    // const newObj = {
    //     firstName: req.body.f,
    //     lastName: req.body.l,
    //     email: req.body.e
    // }

    const newObj = new User(req.body);
    console.log(newObj);
    newObj.save().then((res)=>{
        res.status(201).json({"message":"document created successfully!"});
    }).catch((err)=>{
        res.status(500).json({"message":JSON.stringify(e)});
    })

    // try{
    //     await newObj.save()
    //     res.json({"message":"document created successfully!"});
    // }catch(e){
    //     console.log('err occured', e)
    //     res.status(500).json({"message":JSON.stringify(e)});
    // }
}


const showProfile = (req, res)=>{
    res.json({"message":`Welcome to profile of ${req.params.username}`});
}
module.exports = {
    getAllUsers,
    creatAUser,
    showProfile
}