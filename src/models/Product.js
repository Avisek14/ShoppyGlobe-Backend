// Product model - defines the schema for products collection
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    // Product name
    name: {
      type: String,
      required: [true, 'Product name is required'],
      trim: true,
    },
    // Product price
    price: {
      type: Number,
      required: [true, 'Product price is required'],
      min: [0, 'Price cannot be negative'],
    },
    // Product description
    description: {
      type: String,
      required: [true, 'Product description is required'],
      trim: true,
    },
    // Stock quantity
    stock: {
      type: Number,
      required: [true, 'Stock quantity is required'],
      min: [0, 'Stock cannot be negative'],
      default: 0,
    },
    // Product category
    category: {
      type: String,
      trim: true,
      default: 'General',
    },
    // Product image URL
    image: {
      type: String,
      default: '',
    },
  },
  {
    // Automatically add createdAt and updatedAt fields
    timestamps: true,
  }
);

module.exports = mongoose.model('Product', productSchema);