
# 🌐 Elite IT - Company Website

A modern, multi-page, responsive website built for an IT services company using **React + Vite**. This project showcases services, blog articles, developer hiring, global presence, and company insights with a sleek user experience.

---

## 🚀 Tech Stack

- **Frontend**: React, React Router DOM
- **Build Tool**: Vite
- **Styling**: Tailwind CSS, CSS3
- **Icons**: Font Awesome, Lucide
- **Animation**: Framer Motion
- **Linting**: ESLint (extendable)
- **Deployment**: GitHub Pages, Vercel, or Netlify

---

## 🧩 Backend

- **Server**: Node.js, Express.js
- **Database**: MongoDB (MongoDB Atlas)
- **ODM**: Mongoose
- **Validation**: Express Validator
- **Security**: dotenv, CORS, Helmet
- **File Uploads**: Multer (for resume upload)
- **Deployment**: Render / Railway / VPS

### 📁 Backend Structure

```
backend/
├── models/
│   └── HireForm.js          # Mongoose schema
├── routes/
│   └── HireRoutes.js        # Hire form API routes
├── uploads/                 # Uploaded resumes
├── .env                     # Mongo URI and secrets
├── server.js                # Entry point
└── package.json
```

### 📨 API Endpoints

| Method | Endpoint        | Description               |
|--------|------------------|---------------------------|
| POST   | `/api/hire`      | Submit hire form data     |
| GET    | `/api/hire`      | (Optional) Get submissions|

### 🔧 Backend Setup

1. Navigate to the backend folder:

```bash
cd backend
```

2. Install backend dependencies:

```bash
npm install
```

3. Create a `.env` file with your MongoDB credentials:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

4. Start the backend server:

```bash
npm start
```

5. Test the `/api/hire` route using Postman or frontend form.

---

## 📌 Features

- ⚡ Fast and lightweight performance with Vite
- 📱 Mobile-first, responsive design
- 🧑‍💻 Hire Developers form with file upload & domain selection
- 🧩 Reusable, clean components and structure
- 🌍 Global reach, vision, mission, and team sections
- ✍️ Blog and case studies layout
- ✨ Smooth UI with Framer Motion animations

---

## 📁 Project Structure

```
elite-it-website/
├── public/                 # Static HTML and assets
│   └── index.html
├── src/
│   ├── assets/             # Icons, images
│   ├── components/         # Reusable UI components
│   ├── pages/              # Route-based pages
│   ├── App.jsx             # Route configuration
│   └── main.jsx            # App entry point
├── .gitignore
├── LICENSE
├── README.md
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

---

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/elite-it-website.git
cd elite-it-website
```

### 2. Install frontend dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

### 4. Build for production

```bash
npm run build
```

### 5. Preview the production build

```bash
npm run preview
```

---

## 📦 Linting & Code Quality

This project includes basic ESLint configuration. You can extend it with:

- `eslint:recommended`
- `plugin:react/recommended`
- `plugin:jsx-a11y/recommended`

For TypeScript support, see [Vite React + TS Template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts).

---

## 🌍 Deployment

You can deploy the production-ready build to:

- **GitHub Pages**
- **Vercel**
- **Netlify**

Make sure to configure `vite.config.js` properly for GitHub Pages (e.g., `base` path if in a subdirectory).

Backend can be deployed using:

- **Render**
- **Railway**
- **VPS / DigitalOcean / EC2**

Ensure `.env` values are set securely on the server.

---

## 📸 Screenshots

![alt text](image.png)
![alt text](image-1.png)
![alt text](image-2.png)
![alt text](image-3.png)

---

## 👨‍💻 Author

**Nikunj Hadiya**  
Web Developer | IT Consultant  
[LinkedIn](https://www.linkedin.com/in/nikunjhadiya/) • [Portfolio](Currently not available) • [Email](mailto:nikasus66@gmail.com)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
