const Joi = require('@hapi/joi');

// User edit validation
const  ProductEditValidation = (data) => {
    const schema = Joi.object({
      name: Joi.string().required(),
      price: Joi.number().required(),
      quantity: Joi.number().required(),
      sales: Joi.number().required()
    });
    return schema.validate(data);

    module.exports = { ProductEditValidation }
}