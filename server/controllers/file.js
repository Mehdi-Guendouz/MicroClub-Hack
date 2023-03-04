const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose'); 
const fileData = require('../models/fileModel');

exports.FileUploadHandler = async (req, res) => {
  const data = req.body;
  if (!Array.isArray(data)) {
      res.status(400).send('Data must be an array');
      return;
  }
  try {
      const result = await fileData.insertMany(data);
      // console.log('Documents inserted:', result);
      res.status(200).json(result);
  } catch (error) {
      console.error(error);
      res.status(500).send('Internal server error');
  }
};


exports.getAlldata = async (req, res) => {
  const dataUser = await fileData.find({}).sort({createdAt: -1})

    res.status(200).json(dataUser)
}