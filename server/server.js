const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require("cors");
require('dotenv').config();

//import routes
const authRoutes = require('./routes/auth');
const { db } = require('./models/User');
//app
const app = express();


const port = process.env.PORT || 5000;

//middlewares
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

//routes middleware
app.use('/auth', authRoutes);

const uri = process.env.ATLAS_URI;

mongoose.connect(uri,{useNewUrlParser : true, useCreateIndex : true });

const connection = mongoose.connection;

connection.once('open', ()=> {
    console.log("mongodb database connection established successfully ")
}); 




app.listen(port, () => {
 console.log(`Welcome to !Server is running on ${port}`)
});