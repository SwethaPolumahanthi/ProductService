const express = require('express');

const productservice = require('./products/routes/productinfo')

const app = express()

app.use(express.json());

app.use('/api/products', productservice);

// give it a callback function with a console in it. So that you know it is working
// app.listen(3800, () => console.log("Server is running on PORT 3800"))
app.listen(3800)