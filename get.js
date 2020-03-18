const Products = require('../models/product')

// use camelcasing (getProducts)
// instead of const, use exports.getProductsById
const getproducts = async (req,res,next)=>{
  try{
    const products = await Products.find();
    if(products){
      // res.status(200).json({data: {products}})
      res.json({data:products});
    } else {
      // if the response is error, you should return it
      res.status(404).json('products not found')
    }
  }
  catch(e){
    // avoid using send. Use json instead as show below
    // res.status(500).json({status: 'error', message: e})
    // if the response is error, you should return it
    res.status(500).send(e);
  }
}

// use camelCasing (getProductsById)
// instead of const, use exports.getProductsById
const getproductsById = async (req, res, next)=> {
  try{
    const { id } =  req.params; 
    const products = await Products.findById(id);
    if(products){
      res.json({ data: products});
    } else {
      // if the response is error, you should return it
      // if the response is in json format, give it a key. 
      res.status(404).json('products not found')
    }
  }
  catch(e){
    // if the response is error, you should return it
    // replace send with json
    res.status(500).send(e);
  }  
}

// remove if you are implementing exports.(functionName) above
module.exports = {getproducts,getproductsById};