# My App — Fullstack Node.js

> **Stack:** React (Vite) + TailwindCSS · Express.js · PostgreSQL (Prisma) · JavaScript

---

## 📁 Cấu trúc dự án

```
base/
├── backend/                    # Express.js API
│   ├── prisma/
│   │   ├── schema.prisma       # Database schema
│   │   └── seed.js             # Seed data
│   ├── src/
│   │   ├── config/
│   │   │   └── prisma.js       # Prisma client singleton
│   │   ├── controllers/        # Request handlers
│   │   │   ├── auth.controller.js
│   │   │   └── user.controller.js
│   │   ├── middlewares/        # Express middlewares
│   │   │   ├── auth.middleware.js
│   │   │   ├── errorHandler.js
│   │   │   ├── notFound.js
│   │   │   └── validators/
│   │   │       └── auth.validator.js
│   │   ├── routes/             # Route definitions
│   │   │   ├── index.js
│   │   │   ├── auth.routes.js
│   │   │   └── user.routes.js
│   │   ├── services/           # Business logic
│   │   │   ├── auth.service.js
│   │   │   └── user.service.js
│   │   ├── utils/
│   │   │   └── apiResponse.js
│   │   ├── app.js              # Express app setup
│   │   └── index.js            # Entry point
│   ├── .env
│   └── package.json
│
├── frontend/                   # React (Vite) App
│   ├── src/
│   │   ├── assets/             # Static files
│   │   ├── components/         # Reusable components
│   │   │   └── ProtectedRoute.jsx
│   │   ├── hooks/              # Custom React hooks
│   │   │   └── useAuth.js
│   │   ├── layouts/            # Page layouts
│   │   │   └── MainLayout.jsx
│   │   ├── pages/              # Page components
│   │   │   ├── HomePage.jsx
│   │   │   ├── LoginPage.jsx
│   │   │   ├── RegisterPage.jsx
│   │   │   ├── DashboardPage.jsx
│   │   │   └── NotFoundPage.jsx
│   │   ├── services/           # API calls
│   │   │   ├── api.js          # Axios instance
│   │   │   ├── auth.service.js
│   │   │   └── user.service.js
│   │   ├── store/              # Zustand state
│   │   │   └── authStore.js
│   │   ├── utils/
│   │   │   └── helpers.js
│   │   ├── App.jsx             # Routes
│   │   ├── main.jsx            # Entry point
│   │   └── index.css           # TailwindCSS
│   ├── .env
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
├── package.json                # Root scripts
└── README.md
```

---

## 🚀 Hướng dẫn chạy

### 1. Cài dependencies

```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

### 2. Cấu hình môi trường

```bash
# Backend — chỉnh sửa file .env
DATABASE_URL="postgresql://username:password@localhost:5432/mydb"
JWT_SECRET=your_secret_key
```

### 3. Khởi tạo Database

```bash
cd backend
npx prisma migrate dev --name init
npm run db:seed
```

### 4. Chạy dự án

```bash
# Terminal 1 — Backend (port 5000)
cd backend
npm run dev

# Terminal 2 — Frontend (port 5173)
cd frontend
npm run dev
```

---

## 🌐 API Endpoints

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/api/v1/auth/register` | Đăng ký | ❌ |
| POST | `/api/v1/auth/login` | Đăng nhập | ❌ |
| GET | `/api/v1/auth/me` | Thông tin user | ✅ |
| GET | `/api/v1/users` | Danh sách users | ✅ |
| GET | `/api/v1/users/:id` | Chi tiết user | ✅ |
| PUT | `/api/v1/users/:id` | Cập nhật user | ✅ |
| DELETE | `/api/v1/users/:id` | Xóa user | ✅ |

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, Vite, TailwindCSS, React Router v6 |
| State | Zustand (persist) |
| HTTP Client | Axios |
| Backend | Express.js, Helmet, CORS, Morgan |
| Database | PostgreSQL + Prisma ORM |
| Auth | JWT + bcryptjs |
| Validation | express-validator |
