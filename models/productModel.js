const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter the product name"],
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: false,
  },
  image: {
    type: String,
    required: false,
  },
}, { timestamps: true }); // Move the timestamps option here

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
