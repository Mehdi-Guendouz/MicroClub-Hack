
const { getProducts , getAndEditProduct }  = require('../services/Product');

const getAllProducts = async (req, res) => {
    try {
      const totalProducts = await getProducts({});
  
      return res.status(200).json({ data: totalProducts });
    } catch (err) {
      return res.status(400).json({ error_msg: err.message });
    }
};

const editProduct = async (req, res) => {
    try {
      handleValidation(req.body, res, 'editProduct');
      const { _id } = req.body;
      const product = await getAndEditProduct({ _id }, req.body);
      return res.json({ data: product });
    } catch (err) {
      return res.status(400).json({ error_msg: err.message });
    }
  };

  module.exports = { getAllProducts,editProduct }