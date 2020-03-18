
const express = require('express');

const productservice = require('./products/routes/productinfo')


const app = express()
app.use(express.json());
app.use('/api/products', productservice);
app.listen(3800)