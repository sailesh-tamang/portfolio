# Sailesh Kumar Tamang — Professional Portfolio Website

A modern, full-stack portfolio website with an admin dashboard built with **React.js**, **Node.js**, **Express**, **MongoDB**, and **Tailwind CSS**.

---

## ✨ Features

- Dark theme with purple/violet accents & glassmorphism effects
- Framer Motion animations & fully responsive design
- Sticky navbar with active link highlighting & loading splash screen
- **5 public pages:** Home, About, Skills, Portfolio, Contact
- **Admin dashboard** (JWT-protected): view, mark read/unread, and delete contact inquiries
- Contact form submissions saved to MongoDB

---

## 📁 Project Structure

```
/client   → React.js frontend (Vite + Tailwind CSS + Framer Motion)
/server   → Express.js backend API (MongoDB + JWT auth)
```

---

## ⚙️ Prerequisites

- Node.js >= 16
- MongoDB (local or Atlas)
- npm

---

## 🚀 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/sailesh-tamang/portfolio.git
cd portfolio
```

### 2. Setup the Backend (Server)

```bash
cd server
cp .env.example .env
# Edit .env and fill in your MONGODB_URI and a strong JWT_SECRET
npm install
npm run seed        # Creates the default admin account
npm run dev         # Starts server on http://localhost:5000
```

### 3. Setup the Frontend (Client)

```bash
cd client
cp .env.example .env
# Edit .env if your backend is not on port 5000
npm install
npm run dev         # Starts React app on http://localhost:5173
```

---

## 🔐 Admin Credentials (default)

| Field    | Value           |
|----------|-----------------|
| Username | `sailesh_admin` |
| Password | `Admin@1234`    |

Admin dashboard is accessible at: `http://localhost:5173/admin/login`

---

## 🌐 API Routes

All API routes are prefixed with `/api`.

### Public Routes

| Method | Route           | Description                    |
|--------|-----------------|--------------------------------|
| POST   | /api/contact    | Submit a contact form message  |

### Auth Routes

| Method | Route            | Description                          |
|--------|------------------|--------------------------------------|
| POST   | /api/auth/login  | Login with username & password → JWT |

### Inquiry Routes (Protected — requires `Authorization: Bearer <token>`)

| Method | Route                       | Description                     |
|--------|-----------------------------|---------------------------------|
| GET    | /api/inquiries              | Get all inquiries                |
| GET    | /api/inquiries/stats        | Get total & unread counts        |
| PATCH  | /api/inquiries/:id/read     | Toggle read/unread status        |
| DELETE | /api/inquiries/:id          | Delete an inquiry                |

---

## 🏗️ Tech Stack

| Layer      | Technology                          |
|------------|-------------------------------------|
| Frontend   | React.js, Vite, Tailwind CSS, Framer Motion |
| Backend    | Node.js, Express.js                 |
| Database   | MongoDB (Mongoose)                  |
| Auth       | JWT (jsonwebtoken) + bcryptjs       |

---

## 📦 Environment Variables

### Server (`/server/.env`)
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
JWT_SECRET=your_strong_secret_here
```

### Client (`/client/.env`)
```
VITE_API_URL=http://localhost:5000
```

---

## 🛠️ Available Scripts

### Server
```bash
npm start       # Production start
npm run dev     # Development with nodemon
npm run seed    # Seed default admin user
```

### Client
```bash
npm run dev     # Development server
npm run build   # Production build
npm run preview # Preview production build
```

---

## 📄 License

MIT