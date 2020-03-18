const Products = require('../models/product')

const getproducts = async (req,res,next)=>{
  try{
    const products = await Products.find();
    if(products){
      res.json({data:products});
 } else {
  res.status(404).json('products not found')
 }
  }
  catch(e){
    res.status(500).send(e);
  }
}

const getproductsById = async (req, res, next)=> {
    try{
      const { id } =  req.params; 
      const products = await Products.findById(id);
    if(products){
        res.json({ data: products});
    } else {
        res.status(404).json('products not found')
    }
}
  catch(e){
      res.status(500).send(e);
  }  
}
module.exports = {getproducts,getproductsById};