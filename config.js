const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config();
mongoose.connect('mongodb://127.0.0.1:27017/product', {
 useNewUrlParser: true,
 useUnifiedTopology: true
}).then(() => {
 console.log("DB Connection Successful!!");
});
