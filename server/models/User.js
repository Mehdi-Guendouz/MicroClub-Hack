const mongoose = require('mongoose'); 


const { Schema } = mongoose;

const userschema = new Schema({
    first_name:{
        type: String,
        required : true,
    },
    last_name:{
        type: String,
        required : true,
        
    },
    email:{
        type: String,
        required: true,
        unique : true ,
    },
    password:{
        type: String,
        required: true
    },
    field:{
        type: String,
        required: true
    },
    place:{
        type: String,
        required: true
    },
},
    {
        timestamps : true,
    }

);

module.exports = mongoose.model('User', userschema)