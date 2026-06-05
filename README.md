# ⚙️ ShoppyGlobe Backend API

<div align="center">

![ShoppyGlobe Backend Banner](https://img.shields.io/badge/ShoppyGlobe-Backend%20API-1a1a2e?style=for-the-badge&logo=node.js&logoColor=white)

[![GitHub](https://img.shields.io/badge/GitHub-Avisek14-a855f7?style=for-the-badge&logo=github)](https://github.com/Avisek14/ShoppyGlobe-Backend/tree/main)
[![Portfolio](https://img.shields.io/badge/Portfolio-Avisek%20Sahoo-3b82f6?style=for-the-badge)](https://avisek14.github.io/Avisek-portfolio/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-green?style=for-the-badge&logo=node.js)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb)](https://cloud.mongodb.com/)

**A fully functional REST API backend for the ShoppyGlobe E-Commerce application — built with Node.js, Express.js, MongoDB, and JWT Authentication.**

</div>

---

## 🎯 What is ShoppyGlobe Backend?

ShoppyGlobe Backend is a RESTful API server that powers the ShoppyGlobe e-commerce platform. It provides endpoints for product listing, cart management, user registration, and login — with JWT-based authentication to protect cart routes. Product data is dynamically fetched from DummyJSON API and stored in MongoDB Atlas.

---

## ✨ Features

- 📦 **Products API** — Fetch all products or single product by ID
- 🛒 **Cart API** — Add, update, and remove cart items
- 🔐 **JWT Authentication** — Secure register and login routes
- 🛡️ **Protected Routes** — Cart routes accessible only to logged-in users
- ✅ **Error Handling** — Proper error responses for all routes
- 🔍 **Input Validation** — Validates product ID, quantity, email, password
- 🌱 **Dynamic Seeding** — 99 products fetched from DummyJSON and saved to MongoDB

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| Node.js | Runtime environment |
| Express.js | Web framework |
| MongoDB Atlas | Cloud database |
| Mongoose | MongoDB ODM |
| JWT (jsonwebtoken) | Authentication tokens |
| bcryptjs | Password hashing |
| dotenv | Environment variables |
| cors | Cross-origin requests |
| nodemon | Development auto-restart |

---

## 📁 Project Structure
```
ShoppyGlobe-Backend/
├── src/
│   ├── data/
│   │   └── seedProducts.js        # Dynamic seed from DummyJSON API
│   ├── middleware/
│   │   └── authMiddleware.js      # JWT protect middleware
│   ├── models/
│   │   ├── Product.js             # Product schema
│   │   ├── Cart.js                # Cart schema
│   │   └── User.js                # User schema with bcrypt
│   └── routes/
│       ├── productRoutes.js       # GET /products routes
│       ├── cartRoutes.js          # Cart CRUD routes (protected)
│       └── authRoutes.js          # Register & Login routes
├── screenshots/
│   ├── mongodb/                   # MongoDB Atlas screenshots
│   └── thunderclient/             # ThunderClient API test screenshots
├── server.js                      # Entry point
├── .env                           # Environment variables (not in repo)
├── .gitignore
├── package.json
└── README.md
```

---

## 🔗 API Routes

### 🔓 Public Routes

| Method | Route | Description |
|---|---|---|
| GET | `/products` | Fetch all products from MongoDB |
| GET | `/products/:id` | Fetch single product by ID |
| POST | `/auth/register` | Register a new user |
| POST | `/auth/login` | Login and get JWT token |

### 🔒 Protected Routes (JWT Required)

| Method | Route | Description |
|---|---|---|
| POST | `/cart` | Add product to cart |
| PUT | `/cart/:productId` | Update product quantity in cart |
| DELETE | `/cart/:productId` | Remove product from cart |

---

## 🔐 Authentication

Protected routes require a JWT token in the request header:
Authorization: Bearer YOUR_JWT_TOKEN

Get the token by calling `/auth/login` or `/auth/register`.

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- MongoDB Atlas account
- Git

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/Avisek14/ShoppyGlobe-Backend.git
cd ShoppyGlobe-Backend
```

**2. Install dependencies**
```bash
npm install
```

**3. Create `.env` file**

PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/shoppyglobe
JWT_SECRET=your_jwt_secret_key

**4. Seed database with products**
```bash
node src/data/seedProducts.js
```

**5. Start the server**
```bash
# Development
npm run dev

# Production
npm start
```

**6. Server running at**
http://localhost:5000

---

## 📬 API Testing — ThunderClient

All routes tested using ThunderClient in VS Code.
Screenshots available in `/screenshots/thunderclient/` folder.

| Test | Method | URL | Status |
|---|---|---|---|
| Get all products | GET | `/products` | ✅ 200 |
| Get product by ID | GET | `/products/:id` | ✅ 200 |
| Register user | POST | `/auth/register` | ✅ 201 |
| Login user | POST | `/auth/login` | ✅ 200 |
| Add to cart | POST | `/cart` | ✅ 200 |
| Update cart | PUT | `/cart/:productId` | ✅ 200 |
| Delete from cart | DELETE | `/cart/:productId` | ✅ 200 |

---

## 🗄️ MongoDB Collections

Screenshots available in `/screenshots/mongodb/` folder.

| Collection | Fields |
|---|---|
| `products` | name, price, description, stock, category, image |
| `users` | name, email, password (hashed), timestamps |
| `carts` | userId, items[ productId, quantity ], timestamps |

---

## 🌐 Links

| Service | URL |
|---|---|
| 💻 GitHub Repo | [github.com/Avisek14/ShoppyGlobe-Backend](https://github.com/Avisek14/ShoppyGlobe-Backend/tree/main) |
| 🌐 Frontend Repo | [github.com/Avisek14/React_ShoppyGlobe_E-Commerce_APP](https://github.com/Avisek14/React_ShoppyGlobe_E-Commerce_APP/tree/main) |
| 🛍️ Live Frontend | [react-shoppy-globe-e-commerce-app.vercel.app](https://react-shoppy-globe-e-commerce-app.vercel.app/) |
| 📦 Data Source | [dummyjson.com/products](https://dummyjson.com/products?limit=99) |

---

## 👨‍💻 Developer

<div align="center">

**Avisek Sahoo**
Full Stack Developer

[![Portfolio](https://img.shields.io/badge/Portfolio-Visit-06b6d4?style=flat-square)](https://avisek14.github.io/Avisek-portfolio/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-3b82f6?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/avisek-sahoo-907186341/)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-a855f7?style=flat-square&logo=github)](https://github.com/Avisek14)
[![Email](https://img.shields.io/badge/Email-Contact-22c55e?style=flat-square&logo=gmail)](mailto:sahoo143avisek@gmail.com)

</div>

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

Made with ❤️ by **Avisek Sahoo** © 2026

⭐ **Star this repo if you liked it!** ⭐

</div>