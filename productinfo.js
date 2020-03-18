const express = require('express');
const {getproducts, getproductsById } = require('../handlers/get')
const {createProduct} = require('../handlers/post')

const router = express.Router();

router.get('/:id', getproductsById)
router.get('/', getproducts)
router.route('/').post(createProduct)

module.exports = router;