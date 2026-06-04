// Seed file - fetches products from DummyJSON API and saves to MongoDB
const mongoose = require('mongoose');
const Product = require('../models/Product');
require('dotenv').config();

const seedDB = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ MongoDB Connected!');

    // Fetch products from DummyJSON API dynamically
    console.log('🔄 Fetching products from DummyJSON API...');
    const response = await fetch('https://dummyjson.com/products?limit=99');
    const data = await response.json();

    // Map DummyJSON fields to our Product schema
    const products = data.products.map(p => ({
      name: p.title,
      price: p.price,
      description: p.description,
      stock: p.stock,
      category: p.category,
      image: p.thumbnail,
    }));

    console.log(`📦 ${products.length} products fetched from DummyJSON!`);

    // Delete existing products
    await Product.deleteMany();
    console.log('🗑️ Old products deleted!');

    // Insert all fetched products
    await Product.insertMany(products);
    console.log(`✅ ${products.length} products saved to MongoDB successfully!`);

    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
};

seedDB();