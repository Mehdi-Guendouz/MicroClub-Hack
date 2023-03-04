const express = require('express');
const router = express.Router();
const { FileUploadHandler, getAlldata } = require('../controllers/file');


router.post('/fileupload', FileUploadHandler);
router.get('/getdata', getAlldata);


module.exports = router;