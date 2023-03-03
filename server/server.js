const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require("cors");
require('dotenv').config();

//import routes
const authRoutes = require('./routes/auth');
const ProductRoutes = require('./routes/Product');

//app
const app = express();


const port = process.env.PORT || 4000;

//middlewares
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

//routes middleware
app.use('/auth', authRoutes);
app.use('/', ProductRoutes);


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
