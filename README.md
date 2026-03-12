
# 🌐 Elite IT – Modern Company Website Demo

A modern, multi-page, responsive website built for an IT services company using **React + Vite** and **Express + MongoDB**. This project showcases services, developer hiring, blogs, company insights, and more — all delivered with smooth UI and powerful backend integration.

---

## 🚀 Tech Stack

### Frontend
- ⚛️ React with Vite
- 🧩 React Router DOM
- 🎨 Tailwind CSS & CSS3
- 🖼️ Font Awesome, Lucide Icons
- 🎞️ Framer Motion for animations
- 🧹 ESLint (extendable)
- ☁️ Deployable via GitHub Pages, Vercel, or Netlify

### Backend
- 🖥️ Node.js, Express.js
- 🛢️ MongoDB (Atlas) with Mongoose
- ✅ Express Validator for form validation
- 🛡️ Helmet, CORS, dotenv for security
- 📁 Multer for file uploads
- 🚀 Deployable via Render, Railway, VPS

---

## 📁 Full Project Structure

```
elite-it/
├── backend/                     # Backend logic (Node.js + Express)
│   ├── models/                 # Mongoose schemas
│   │   └── HireForm.js
│   ├── routes/                 # Express API routes
│   │   └── HireRoutes.js
│   ├── uploads/                # Uploaded resume files
│   ├── .env                    # Environment variables
│   ├── server.js               # Backend server entry
│   └── package.json
│
├── src/                        # Frontend source files
│   ├── assets/                # Images, icons, logos
│   ├── components/            # Reusable UI components
│   ├── pages/                 # Page-based routing components
│   ├── App.jsx                # Routing configuration
│   └── main.jsx               # App entry point
│
├── public/                    # Static HTML, favicon
│   └── index.html
│
├── .gitignore
├── LICENSE
├── README.md
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── eslint.config.js
```

---

## 📌 Key Features

- 🚀 **Blazing fast Vite + React setup**
- 📱 **Mobile-first responsive UI**
- 🧑‍💼 **Hire Developers form** with domain selection & resume upload
- 🧩 **Reusable components** with clean code structure
- 🌍 **Company profile** with vision, mission, team, and reach
- ✍️ **Blog & Case Study layout**
- 🎞️ **Framer Motion animations** for smooth transitions

---

## 🧩 Backend Overview

### 📁 Backend Directory Tree

```
backend/
├── models/
│   └── HireForm.js
├── routes/
│   └── HireRoutes.js
├── uploads/
├── .env
├── server.js
└── package.json
```

### 📨 API Endpoints

| Method | Endpoint    | Description                  |
|--------|-------------|------------------------------|
| POST   | `/api/hire` | Submit hire form & file      |
| GET    | `/api/hire` | (Optional) Get submissions   |

### 🔧 Setup Instructions

```bash
cd backend
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Run the backend:

```bash
npm start
```

Use tools like **Postman** to test `/api/hire`.

---

## 🧠 Frontend Setup

### Step 1: Clone the repository

```bash
git clone https://github.com/nikunjhadiya/Elite-IT.git
cd elite-it
```

### Step 2: Install dependencies

```bash
npm install
```

### Step 3: Start the development server

```bash
npm run dev
```

### Step 4: Build for production

```bash
npm run build
```

### Step 5: Preview production build

```bash
npm run preview
```

---

## 💡 Linting & Code Quality

This project includes ESLint configuration.

You can extend it with:
- `eslint:recommended`
- `plugin:react/recommended`
- `plugin:jsx-a11y/recommended`

Optional:
- TypeScript support via [Vite + TS Template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts)

---

## 🌐 Deployment Guide

### Frontend

Deploy to:
- **Vercel** — instant CI/CD
- **Netlify** — easy integration with Git
- **GitHub Pages** — ensure `vite.config.js` has correct `base` path

### Backend

Deploy to:
- **Render**
- **Railway**
- **VPS (e.g., DigitalOcean, EC2)**

Set `.env` secrets securely on the deployment platform.

---

## 📸 UI Screenshots

![Screenshot 1](image.png)
![Screenshot 2](image-1.png)
![Screenshot 3](image-2.png)
![Screenshot 4](image-3.png)

---

## 👨‍💻 Author

**Nikunj Hadiya**  
Web Developer | IT Consultant  
📧 [ahirnikunj1122@gmail.com](mailto:ahirnikunj1122@gmail.com)  
🔗 [LinkedIn](https://www.linkedin.com/in/nikunjhadiya/)  

---

## 📄 License

Licensed under the [MIT License](LICENSE)

---
