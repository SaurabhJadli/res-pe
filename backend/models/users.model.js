let mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
    }
})

let userModel = mongoose.model('userData', userSchema, 'userData')  // 'users' is the name of the collection in the database and userSchema is the schema(fields) of the collection
module.exports = userModel