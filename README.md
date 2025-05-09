# 👕 LO Clothing – Graphic T-Shirt E-Commerce Website (MERN Stack)

**🔗 Live Site:** [LO Clothing](https://lo-clothing-mern.onrender.com/)

LO Clothing is a full-stack e-commerce web application for selling stylish graphic t-shirts. Built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js), the platform offers a sleek **black-and-yellow** themed interface and supports both **customer** and **admin** functionalities.

---

## 🚀 Features

### 🛍 Customer Features
- Browse all available t-shirts
- View detailed product pages
- Register and log in as a customer
- Add products to cart and place orders
- View past orders and order status
- Contact form for support and queries

### 🛠 Admin Features
- Secure admin login
- View all listed products
- Add, update, or delete products
- Monitor inventory
- View customer orders and purchase details
- Manage contact inquiries (if implemented)

---

## 🧱 Tech Stack

### 🔹 Frontend
- React.js
- Redux Toolkit
- React Router
- Axios
- Custom CSS (black background + yellow text)

### 🔹 Backend
- Node.js
- Express.js
- MongoDB & Mongoose
- JWT Authentication
- Bcrypt (password hashing)
- Multer (image upload handling)

### 🔹 Deployment
- Frontend: Render
- Backend: Render
- Database: MongoDB Atlas

---

## 📁 Project Structure

```
LO--Clothing-MERN/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── data/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── constants.js
│   ├── package-lock.json
│   ├── seeder.js
│   └── server.js
│
├── frontend/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── screens/
│   │   ├── slices/
│   │   ├── uploads/
│   │   ├── utils/
│   │   ├── App.js
│   │   ├── constants.js
│   │   ├── index.js
│   │   ├── store.js
│   │   ├── reportWebVitals.js
│   │   └── setupTests.js
│   ├── package.json
│   └── package-lock.json
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

---

## 🛠 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/aashishops/LO--Clothing-MERN.git
cd LO--Clothing-MERN
```

### 2. Set up the backend

```bash
cd backend
npm install
```

> 🔐 **Create a `.env` file in the `backend/` folder with:**

```
PORT=5000
MONGO_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret
NODE_ENV=development
```

```bash
npm run server
```

### 3. Set up the frontend

```bash
cd frontend
npm install
npm start
```

---

## 👥 Contributors

**Team LO Clothing**  
- 🧑‍💻 Aashish Sekar V  
- 🧑‍💻 Arpith S Prabhu  
- 🧑‍💻 J Dwijavanthi  
- 🧑‍💻 Nandakishor MN  

---


