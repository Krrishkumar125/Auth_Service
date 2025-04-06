# 🔐 Auth Service

Welcome to the **Auth Service** repository! This project provides a robust authentication system designed to manage user access and security in web applications.

## 🚀 Features

- **User Registration & Login**: Seamless user onboarding with secure authentication mechanisms.
- **Role-Based Access Control (RBAC)**: Assign and manage user roles for fine-grained access control.
- **Token-Based Authentication**: Utilize JWTs for stateless and secure user sessions.
- **Password Encryption**: Ensure user password security with hashing techniques.
- **Session Management**: Handle user sessions effectively with refresh tokens.

## 🛠️ Tech Stack

- **Backend**: Node.js with Express.js
- **Database**: MySQL
- **ORM**: Sequelize
- **Authentication**: JSON Web Tokens (JWT) and bcrypt

## 📂 Project Structure

📦 Auth_Service ├── 📁 config ├── 📁 controllers ├── 📁 middlewares ├── 📁 models ├── 📁 migrations ├── 📁 seeders ├── 📁 repository ├── 📁 services ├── 📁 routes ├── 📁 utils └── index.js

- **config**: Configuration files for database and server settings.
- **controllers**: Handles incoming requests and defines the application's response logic.
- **middlewares**: Custom middleware functions for request validation and authentication.
- **models**: Sequelize models representing database tables and relationships.
- **migrations**: Sequelize migration files for managing database schema changes.
- **seeders**: Seed files to populate the database with initial data.
- **repository**: Data access layer encapsulating database queries.
- **services**: Business logic and interaction with the repository layer.
- **routes**: API endpoint definitions and route handling.
- **utils**: Utility functions and helpers used across the application.
- **index.js**: Entry point of the application.

## ⚙️ Installation Guide

Follow the steps below to get the project up and running locally on your machine. 🚀

### 📥 1. Clone the Repository

```bash
git clone https://github.com/KrrishKumar125/Auth_Service.git
```

### 📂 2. Navigate to the Project Directory

```bash
cd Auth_Service
```

### 📦 3. Install Dependencies

```bash
npm install
```

### 🛠️ 4. Set Up Environment Variables

Create a `.env` file in the root directory and add the following:

```env
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_db_password
DB_NAME=auth_service_db
JWT_SECRET=your_jwt_secret_key
```

> 🔐 **Note:** Replace `your_db_password` and `your_jwt_secret_key` with your actual secrets.

### 🧱 5. Run Migrations (to create DB tables)

```bash
npx sequelize-cli db:migrate
```

### 🌱 6. (Optional) Seed the Database

```bash
npx sequelize-cli db:seed:all
```

### 🚀 7. Start the Development Server

```bash
npm start
```

Once running, the service should be live at:  
📍 `http://localhost:3000`

---

✅ You're all set to start using your JWT-based authentication service!  
Need help? Create an issue or ping me on [LinkedIn](https://linkedin.com/in/krrishkumar125) 💬

## 🔌 API Endpoints

Below are the available API routes and their purpose for authentication & user management. All requests and responses are in JSON format.

---

### 🔐 **Auth Routes**

#### 🔸`api/v1/signup`

> Register a new user with role-based access.

**Body:**

```json
{
  "email": "user@example.com",
  "password": "YourPassword123!"
}
```

**Response:**

```json
{
  "success": true,
  "message": "User created successfully",
  "data": {
    "token": "JWT_TOKEN"
  }
}
```

---

#### 🔸 `api/v1/signin`

> Authenticate user and return JWT + Refresh Token.

**Body:**

```json
{
  "email": "user@example.com",
  "password": "YourPassword123!"
}
```

**Response:**

```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "token": "JWT_TOKEN"
  }
}
```

---

#### 🔸 `POST /logout`

> Logout the user by invalidating the current refresh token.

**Body:**

```json
{
  "refreshToken": "REFRESH_TOKEN"
}
```

---

### 📛 Error Responses

Common responses include:

- `401 Unauthorized` – Invalid or expired token.
- `403 Forbidden` – Insufficient permissions.
- `400 Bad Request` – Validation error or missing fields.
- `500 Internal Server Error` – Something went wrong.

---

🔄 All tokens are handled securely using:

- ✅ **HTTP-only cookies** (optional)
- 🔁 **Refresh token rotation**
- 🚫 **Token blacklist** for logout & session management

---

🛠 Want to explore more? You can test these APIs using [Postman](https://www.postman.com/) or [Insomnia](https://insomnia.rest/)!
