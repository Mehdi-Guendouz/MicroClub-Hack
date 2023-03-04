const mongoose = require('mongoose');
const { Schema } = mongoose;

const fileschema = new Schema({
    date:{
        type: String,
    },
    name:{
        type: String,
    },
    region:{
        type: String,
    },
    price:{
        type: Number,
    },
    quantity:{
        type: Number,
    },
});

module.exports = mongoose.model("fileData", fileschema);