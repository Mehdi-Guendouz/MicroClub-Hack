const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require("cors");
const cookieParser = require('cookie-parser');
require('dotenv').config();

//import routes
const authRoutes = require('./routes/auth');
const { db } = require('./models/User');
//app
const app = express();


const port = process.env.PORT || 4000;

//middlewares
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(cookieParser());



//routes middleware
app.use('/auth', authRoutes);

// mongoose.connect(uri,{useNewUrlParser : true, useCreateIndex : true });

// const connection = mongoose.connection;

// connection.once('open', ()=> {
//     console.log("mongodb database connection established successfully ")
// }); 

mongoose.set("strictQuery", true);
mongoose.connect(process.env.ATLAS_URI)
    .then(() => {
        app.listen(process.env.PORT, ()=>{
            console.log('listing on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })
