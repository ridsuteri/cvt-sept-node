const mongoose = require('mongoose');

// create a structure of how you want the data to be stored
const adminSchema = mongoose.Schema({
    username: {
        required:true,
        unique: true,
        type: String
    },
    password:{
        type:String,
        required: true
    }
});


// give this structure a name ... it will be a model
const Admin = mongoose.model('Admin',adminSchema);
module.exports = Admin;