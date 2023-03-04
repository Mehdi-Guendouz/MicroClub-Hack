const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const {
   createJWT,
} = require("../utils/auth");

const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = 'fasefraw4r5r3wq45wdfgw34twdfg';

exports.signup = async (req, res) => {
  let { first_name,last_name, email, password, password_confirmation, field,place } = req.body;
  console.log(first_name,last_name,email,password,password_confirmation,field);

  const user = await User.findOne({ email })
  if (user) {
    return res.status(400).json({ message: 'User already exists with this email' })
  }
  try {
    const newUser = await User.create({first_name: first_name, last_name: last_name, email: email,  password: bcrypt.hashSync(password, bcryptSalt),field: field,place: place});
    if (newUser){
      res.status(200).json(newUser);
    }
  } catch (error) {
    res.status(400).json(error)
  }

}
exports.signin = async (req, res) => {
     let { email, password } = req.body;
     const userDoc = await User.findOne({email});
     if (userDoc) {
      const passOk = bcrypt.compareSync(password, userDoc.password);
      if (passOk) {
        jwt.sign({
          email:userDoc.email,
          id:userDoc._id
        }, jwtSecret, {}, (err,token) => {
          if (err) throw err;
          res.cookie('token', token).json(userDoc);
        });
      } else {
        res.status(422).json('pass not ok');
      }
    } else {
      res.json('not found');
    }
  }