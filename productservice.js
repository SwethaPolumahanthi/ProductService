const products = await Products.find();
const newProduct = await Product.create(req.body);
module.exports = productservice

// this file is not required. Remove it