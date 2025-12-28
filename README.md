# DevTinder 🚀

A Tinder-like application for developers to connect, network, and collaborate. Built with Node.js, Express, and MongoDB.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Project](#running-the-project)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- **User Authentication**: Sign up, login, and logout with JWT-based authentication
- **User Profiles**: Create and manage developer profiles with skills, photos, and bio
- **Feed**: Browse through all developers in the platform
- **Connection Requests**: Send connection requests (interested/ignored) to other developers
- **Request Management**: Accept or reject incoming connection requests
- **Profile Management**: Update profile information including photo, about, gender, age, and skills
- **Secure Password**: Password hashing using bcrypt
- **Data Validation**: Input validation using validator.js

## 🛠 Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcrypt
- **Validation**: validator.js
- **CORS**: Enabled for frontend integration

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14 or higher)
- npm or yarn
- MongoDB Atlas account (or local MongoDB instance)

## 🔧 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/devtinder.git
cd devtinder
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```bash
touch .env
```

4. Add your environment variables (see [Environment Variables](#environment-variables) section)

## 🔐 Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
DB_CONNECTION_SECRET=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

### MongoDB Connection String Format:
```
mongodb+srv://username:password@cluster.mongodb.net/devtinder?retryWrites=true&w=majority
```

**Note**: Replace `<password>` placeholder with your actual MongoDB password. The connection string should not contain any angle brackets (`<` or `>`).

## 🚀 Running the Project

### Development Mode (with auto-reload):
```bash
npm run dev
```

### Production Mode:
```bash
npm start
```

The server will start on `http://localhost:3000`

## 📡 API Endpoints

### Authentication Routes

#### Sign Up
- **POST** `/signup`
- **Body**: 
  ```json
  {
    "firstName": "John",
    "lastName": "Doe",
    "emailId": "john@example.com",
    "password": "StrongPass123!"
  }
  ```
- **Response**: User object with JWT token in cookie

#### Login
- **POST** `/login`
- **Body**:
  ```json
  {
    "emailId": "john@example.com",
    "password": "StrongPass123!"
  }
  ```
- **Response**: User object with JWT token in cookie

#### Logout
- **POST** `/logout`
- **Response**: Logout confirmation message

### Profile Routes (Protected)

#### View Profile
- **GET** `/profile/view`
- **Headers**: Requires authentication cookie
- **Response**: Current user's profile

#### Edit Profile
- **PATCH** `/profile/edit`
- **Headers**: Requires authentication cookie
- **Body**: 
  ```json
  {
    "firstName": "John",
    "lastName": "Doe",
    "photoUrl": "https://example.com/photo.jpg",
    "about": "Full stack developer",
    "gender": "male",
    "age": 25,
    "skills": ["JavaScript", "Node.js", "React"]
  }
  ```
- **Response**: Updated user object

### Connection Request Routes (Protected)

#### Send Connection Request
- **POST** `/request/send/:status/:toUserId`
- **Headers**: Requires authentication cookie
- **Params**: 
  - `status`: `"interested"` or `"ignored"`
  - `toUserId`: Target user's ID
- **Response**: Connection request object

#### Review Connection Request
- **POST** `/request/review/:status/:requestId`
- **Headers**: Requires authentication cookie
- **Params**:
  - `status`: `"accepted"` or `"rejected"`
  - `requestId`: Connection request ID
- **Response**: Updated connection request object

### User Routes

#### Get Feed (All Users)
- **GET** `/feed`
- **Response**: Array of all users

#### Delete User
- **DELETE** `/user`
- **Body**:
  ```json
  {
    "userId": "user_id_here"
  }
  ```
- **Response**: Deletion confirmation

#### Update User
- **PATCH** `/user`
- **Body**:
  ```json
  {
    "userId": "user_id_here",
    "photoUrl": "https://example.com/photo.jpg",
    "about": "Updated bio",
    "gender": "male",
    "age": 26
  }
  ```
- **Response**: Updated user object

## 📁 Project Structure

```
devtinder/
├── src/
│   ├── app.js                 # Main application file
│   ├── config/
│   │   └── database.js        # MongoDB connection configuration
│   ├── middleware/
│   │   └── auth.js            # JWT authentication middleware
│   ├── models/
│   │   ├── user.js            # User model schema
│   │   └── connectionRequest.js  # Connection request model
│   ├── routes/
│   │   ├── auth.js            # Authentication routes
│   │   ├── profile.js         # Profile management routes
│   │   └── request.js         # Connection request routes
│   └── utils/
│       └── validation.js      # Input validation utilities
├── .env                       # Environment variables (not in git)
├── package.json               # Dependencies and scripts
└── README.md                  # Project documentation
```

## 🔒 Security Features

- Password hashing with bcrypt (10 rounds)
- JWT-based authentication
- Secure password validation (strong password requirements)
- Email validation
- Input sanitization and validation
- CORS configuration for frontend integration

## 📝 Notes

- Passwords must be strong (include uppercase, lowercase, numbers, and special characters)
- Email addresses are validated and stored in lowercase
- JWT tokens are stored in HTTP-only cookies
- Connection requests prevent self-connections
- Duplicate connection requests are prevented

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 👤 Author

**Shashi**

---

⭐ If you found this project helpful, please give it a star!

