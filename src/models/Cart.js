// Cart model - defines the schema for cart collection
const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  // Reference to product
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: [true, 'Product ID is required'],
  },
  // Quantity of product in cart
  quantity: {
    type: Number,
    required: [true, 'Quantity is required'],
    min: [1, 'Quantity cannot be less than 1'],
    default: 1,
  },
});

const cartSchema = new mongoose.Schema(
  {
    // Reference to user who owns this cart
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'User ID is required'],
    },
    // Array of cart items
    items: [cartItemSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Cart', cartSchema);