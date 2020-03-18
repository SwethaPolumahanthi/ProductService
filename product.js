const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    description: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: [true,'please enter product title']
    },
    price: {
        type: Number,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    quantity:{
        type:Number,
        required: true
    },
},
// not necessary
{
versionKey : false
});

module.exports = mongoose.model('Product', schema);