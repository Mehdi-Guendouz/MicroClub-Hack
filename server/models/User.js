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
 
const usermodel = mongoose.model("users", userschema);
module.export=usermodel;