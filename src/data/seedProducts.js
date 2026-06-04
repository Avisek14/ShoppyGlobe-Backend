// Seed file - adds sample products to MongoDB
const mongoose = require('mongoose');
const Product = require('../models/Product');
require('dotenv').config();

// Sample products data
const products = [
  {
    name: 'iPhone 15 Pro',
    price: 999,
    description: 'Latest Apple iPhone with A17 Pro chip',
    stock: 50,
    category: 'smartphones',
    image: 'https://dummyjson.com/image/150',
  },
  {
    name: 'Samsung Galaxy S24',
    price: 799,
    description: 'Samsung flagship with AI features',
    stock: 40,
    category: 'smartphones',
    image: 'https://dummyjson.com/image/150',
  },
  {
    name: 'MacBook Pro M3',
    price: 1999,
    description: 'Apple MacBook with M3 chip',
    stock: 20,
    category: 'laptops',
    image: 'https://dummyjson.com/image/150',
  },
  {
    name: 'Sony WH-1000XM5',
    price: 349,
    description: 'Best noise cancelling headphones',
    stock: 60,
    category: 'audio',
    image: 'https://dummyjson.com/image/150',
  },
  {
    name: 'Nike Air Max',
    price: 129,
    description: 'Comfortable running shoes',
    stock: 100,
    category: 'footwear',
    image: 'https://dummyjson.com/image/150',
  },
  {
    name: 'Leather Wallet',
    price: 49,
    description: 'Premium genuine leather wallet',
    stock: 80,
    category: 'accessories',
    image: 'https://dummyjson.com/image/150',
  },
  {
    name: 'Dell Monitor 27"',
    price: 399,
    description: '4K UHD IPS display monitor',
    stock: 30,
    category: 'electronics',
    image: 'https://dummyjson.com/image/150',
  },
  {
    name: 'Mechanical Keyboard',
    price: 149,
    description: 'RGB mechanical gaming keyboard',
    stock: 45,
    category: 'electronics',
    image: 'https://dummyjson.com/image/150',
  },
];

// Connect and seed
const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ MongoDB Connected!');

    // Delete existing products
    await Product.deleteMany();
    console.log('🗑️ Old products deleted!');

    // Insert new products
    await Product.insertMany(products);
    console.log('✅ Sample products added successfully!');

    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
};

seedDB();