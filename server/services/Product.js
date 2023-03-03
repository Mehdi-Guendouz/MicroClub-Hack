const Product = require('../models/Product');

const getProduct = async (query) => {
    try {
      const product = await Product.find(editProduct)
      if (!product) {
        throw Error('not found ');
      }
      return product;
    } catch (err) {
      throw Error(err);
    }
};

const getAndEditProduct = async (query, newData) => {
  try {
    const product = await Product.findOneAndUpdate(query, newData, {
      new: true,
      runValidators: true
    });

    return product;
  } catch (err) {
    throw Error(err);
  }
};


module.exports = { getProduct,getAndEditProduct }