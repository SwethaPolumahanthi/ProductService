const Product = require('../models/product');

exports.createProduct = async (req, res, next) => {
    try {
        const newProduct = await Product.create(req.body);
        res.status(200).json({
            status: "success",
            data: {
                product: newProduct
            }
        })
    } catch (error) {
        return res.status(500).json({
            status: 'error',
            message: "Something went wrong"
        })
    }
}
