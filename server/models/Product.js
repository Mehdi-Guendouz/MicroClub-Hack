const mongoose = require('mongoose'); 


const { Schema } = mongoose;

const productschema = new Schema({
    name:{
        type: String,
        required : true,
    },
    price:{
        type: Number,
        required: true,
    },
    quantity:{
        type: Number,
        required: true
    },
    sales:{
        type: Number,
        required: true
    },
});
 
const productmodel = mongoose.model("products", productschema);

module.export=productmodel;