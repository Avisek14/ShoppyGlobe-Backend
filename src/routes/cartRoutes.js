// Cart routes - Add, Update, Delete cart items (Protected routes)
const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');
const Product = require('../models/Product');
const { protect } = require('../middleware/authMiddleware');

// All cart routes are protected - JWT required
// ===== POST /cart =====
// Add product to cart
router.post('/', protect, async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    // Validate input
    if (!productId || !quantity) {
      return res.status(400).json({ message: '❌ ProductId and quantity are required' });
    }

    // Check if product exists in database
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: '❌ Product not found' });
    }

    // Check stock availability
    if (product.stock < quantity) {
      return res.status(400).json({ message: '❌ Insufficient stock' });
    }

    // Find cart for logged in user
    let cart = await Cart.findOne({ userId: req.user._id });

    if (cart) {
      // Cart exists - check if product already in cart
      const itemIndex = cart.items.findIndex(
        item => item.productId.toString() === productId
      );

      if (itemIndex > -1) {
        // Product exists in cart - update quantity
        cart.items[itemIndex].quantity += quantity;
      } else {
        // Product not in cart - add new item
        cart.items.push({ productId, quantity });
      }
      await cart.save();
    } else {
      // No cart for user - create new cart
      cart = await Cart.create({
        userId: req.user._id,
        items: [{ productId, quantity }],
      });
    }

    // Populate product details in response
    await cart.populate('items.productId');

    res.status(200).json({
      message: '✅ Product added to cart successfully',
      cart,
    });
  } catch (error) {
    if (error.name === 'CastError') {
      return res.status(400).json({ message: '❌ Invalid product ID format' });
    }
    res.status(500).json({ message: '❌ Server error', error: error.message });
  }
});

// ===== PUT /cart/:productId =====
// Update quantity of product in cart
router.put('/:productId', protect, async (req, res) => {
  try {
    const { quantity } = req.body;
    const { productId } = req.params;

    // Validate quantity
    if (!quantity || quantity < 1) {
      return res.status(400).json({ message: '❌ Quantity must be at least 1' });
    }

    // Find cart for logged in user
    const cart = await Cart.findOne({ userId: req.user._id });
    if (!cart) {
      return res.status(404).json({ message: '❌ Cart not found' });
    }

    // Find item in cart
    const itemIndex = cart.items.findIndex(
      item => item.productId.toString() === productId
    );

    if (itemIndex === -1) {
      return res.status(404).json({ message: '❌ Product not found in cart' });
    }

    // Update quantity
    cart.items[itemIndex].quantity = quantity;
    await cart.save();
    await cart.populate('items.productId');

    res.status(200).json({
      message: '✅ Cart updated successfully',
      cart,
    });
  } catch (error) {
    if (error.name === 'CastError') {
      return res.status(400).json({ message: '❌ Invalid product ID format' });
    }
    res.status(500).json({ message: '❌ Server error', error: error.message });
  }
});

// ===== DELETE /cart/:productId =====
// Remove product from cart
router.delete('/:productId', protect, async (req, res) => {
  try {
    const { productId } = req.params;

    // Find cart for logged in user
    const cart = await Cart.findOne({ userId: req.user._id });
    if (!cart) {
      return res.status(404).json({ message: '❌ Cart not found' });
    }

    // Check if product exists in cart
    const itemIndex = cart.items.findIndex(
      item => item.productId.toString() === productId
    );

    if (itemIndex === -1) {
      return res.status(404).json({ message: '❌ Product not found in cart' });
    }

    // Remove item from cart
    cart.items.splice(itemIndex, 1);
    await cart.save();

    res.status(200).json({
      message: '✅ Product removed from cart successfully',
      cart,
    });
  } catch (error) {
    if (error.name === 'CastError') {
      return res.status(400).json({ message: '❌ Invalid product ID format' });
    }
    res.status(500).json({ message: '❌ Server error', error: error.message });
  }
});

module.exports = router;