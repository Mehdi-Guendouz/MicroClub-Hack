const express = require('express');
const router = express.Router();

const { getAllProducts,editProduct } = require('../controllers/Product.js');

router.post('/', getAllProducts);
router.post('/editProduct', editProduct);

module.exports = router;