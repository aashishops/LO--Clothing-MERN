
# 👕 LO Clothing – Graphic T-Shirt E-Commerce Website (MERN Stack)

**Live Site:** [LO Clothing](https://lo-clothing-mern.onrender.com/)

LO Clothing is a fully functional e-commerce website built using the MERN stack (MongoDB, Express.js, React.js, Node.js), focused on selling graphic t-shirts. The application features both a **Customer Portal** and an **Admin Dashboard**, with modern UI design using a **black background and yellow text** for a stylish, high-contrast aesthetic.

---

## 🚀 Features

### 🛍 Customer Features
- Browse available t-shirts on the homepage
- View detailed product information
- Login/Signup as a customer
- Add products to cart and checkout
- View order history and status
- Contact Us page for inquiries

### 🛠 Admin Features
- Admin login for secure access
- View all products in stock
- Add, edit, or delete products
- View all customer orders and purchase details
- Inventory management and product upload support
- Manage contact messages (if implemented)

---

## 🧱 Tech Stack

**Frontend**:
- React.js
- Redux Toolkit for state management
- React Router for navigation
- Axios for API calls
- CSS (custom styling with black & yellow theme)

**Backend**:
- Node.js with Express.js
- MongoDB with Mongoose
- JWT for authentication
- Bcrypt for password hashing
- Multer for image uploads

**Deployment**:
- Frontend: Render
- Backend: Render
- Database: MongoDB Atlas

---

## 📁 Project Structure

```

LO-Clothing-MERN/
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
│   ├── node\_modules/
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
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── README.md


````

---

## 🔧 Setup Instructions

### 1. Clone the repository


git clone https://github.com/aashishops/LO--Clothing-MERN.git
cd LO-Clothing-MERN


### 2. Set up the backend


cd backend
npm install
# Create a .env file and add your MongoDB URI, JWT_SECRET, etc.
npm run server


### 3. Set up the frontend

cd frontend
npm install
npm start
```

---

## 🔐 Environment Variables

Create a `.env` file inside the `backend` directory with the following variables:

```
PORT=5000
MONGO_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret
NODE_ENV=development
```

---

---



## 🤝 Contributors

* **Team LO Clothing**
  *Aashish Sekar V *
  *Arpith S Prabhu*
  *J Dwijavanthi*
  *Nandakishor MN*

---

