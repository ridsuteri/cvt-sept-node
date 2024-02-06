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


const creatAUser = (req,res)=>{
    // 1. create a object following the schema of user
    // 2. save that object to db using .save() on top of that object

    // TODO: take input from user instead of hardcoding it ...
    const newObj = new User({
        firstName: "XYZ",
        lastName: "Kumar",
        email: "xyz@gmail.com"
    });

    newObj.save().then((res)=>{
        res.json({"message":"document created successfully!"});
    }).catch((err)=>{
        // console.log(err)
        res.json({"message":err});
    })

}

module.exports = {
    getAllUsers,
    creatAUser
}