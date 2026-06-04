// Product routes - GET all products and GET single product
const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// ===== GET /products =====
// Fetch all products from MongoDB
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();

    // Check if products exist
    if (products.length === 0) {
      return res.status(404).json({ message: '❌ No products found' });
    }

    res.status(200).json({
      message: '✅ Products fetched successfully',
      count: products.length,
      products,
    });
  } catch (error) {
    res.status(500).json({ message: '❌ Server error', error: error.message });
  }
});

// ===== GET /products/:id =====
// Fetch single product by ID
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    // Check if product exists
    if (!product) {
      return res.status(404).json({ message: '❌ Product not found' });
    }

    res.status(200).json({
      message: '✅ Product fetched successfully',
      product,
    });
  } catch (error) {
    // Handle invalid MongoDB ID format
    if (error.name === 'CastError') {
      return res.status(400).json({ message: '❌ Invalid product ID format' });
    }
    res.status(500).json({ message: '❌ Server error', error: error.message });
  }
});

module.exports = router;