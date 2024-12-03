# **VRV Security Backend Developer Intern Assignment: Role-Based Access Control (RBAC)**

### **Overview**

This project implements a Role-Based Access Control (RBAC) system for a secure web application. Users are assigned roles such as **Admin**, **Moderator**, and **User**, and their access to resources and functionalities is controlled based on their roles. The goal of this project is to provide secure authentication, authorization, and role management for an application that ensures only authorized users can access specific resources.

- **Admin**: Has full access to the dashboard, can change user roles, and manage users.
- **Moderator**: Can view all users, ban users, but cannot modify user roles.
- **User**: Can only access their dashboard and personal data after logging in.

---

## **Features**

1. **Authentication & Authorization**

   - Users can register, log in, and log out securely using **JWT** (JSON Web Token).
   - User data is validated during registration and login, with passwords hashed securely.

2. **Role-Based Access Control (RBAC)**

   - Three roles: **Admin**, **Moderator**, and **User**.
   - Role-specific access control:
     - **Admin** can change roles, manage users, and perform all tasks.
     - **Moderator** can manage users, view user profiles, and ban users.
     - **User** can only access their personal dashboard and profile.

3. **JWT-Based Sessions**

   - JWT tokens are used to authenticate and authorize users for accessing protected routes.
   - Tokens are securely stored and sent in HTTP requests.

4. **Secure Routes**
   - Protected routes based on role authorization.
   - Route access is checked with middleware that validates the user’s role and authentication status.

---

## **Technologies Used**

- **Node.js**: Backend framework for implementing the API.
- **Express**: Web framework for handling routing and HTTP requests.
- **MongoDB**: Database to store user data, including roles and authentication details.
- **JWT (JSON Web Tokens)**: For secure user authentication and session management.
- **bcrypt.js**: For securely hashing user passwords.

---

## **System Architecture**

- **User Authentication**:

  - **Register**: A user registers with their credentials (username, email, password).
  - **Login**: The user logs in, receives a JWT token, and can access authorized routes based on their role.
  - **Logout**: User logs out, invalidating the session token.

- **Roles and Permissions**:

  - **Admin**: Full access to all functionalities. Can view, edit, and delete users, and change user roles.
  - **Moderator**: Can view all users and ban them, but cannot modify user roles.
  - **User**: Can only access their dashboard and view their profile.

- **Protected Routes**:
  - Role-based middleware checks the user’s role before granting access to specific routes.
  - Example: `/dashboard/track`, `/Users`, `banUser`, `changeRole`.

---

## **Installation & Setup**

### **1. Clone the Repository**

```bash
git clone https://github.com/Rahilsamani/VRV_Assignment.git
cd rbac-system
```

### **2. Install Dependencies**

```bash
npm install
```

### **3. Set Up the Environment Variables**

Create a `.env` file in the root of the project and add the following environment variables:

```plaintext
JWT_SECRET=your_jwt_secret_key
FOLDER_NAME = cloudinary_folder_name
CLOUD_NAME = cloudinary_name
API_KEY = cloudinary_api_key
API_SECRET = cloudinary_api_secret
MONGODB_URI=your_mongo_db_uri
PORT=4000
```

### **4. Run the Application**

To start the application locally:

```bash
npm start
```

The application will be running at `http://localhost:3000`.

---

## **API Endpoints**

### **1. Authentication**

- **POST /api/v1/auth/register**: Register a new user.
- **POST /api/v1/auth/login**: Login with credentials and receive a JWT token.
- **POST /api/v1/auth/logout**: Logout and invalidate the session token.

### **2. User Management (Admin & Moderator)**

- **GET /api/v1/user**: List all users (Admin only).
- **POST /api/v1/user/ban/:userId**: Ban a user (Moderator and Admin).
- **POST /api/v1/user/changeRole/:userId**: Change the role of a user (Admin only).

## **Role-Based Access Control (RBAC)** Implementation

### **1. User Roles**:

- **Admin**: Can access all routes and perform all actions (view, change roles, ban users).
- **Moderator**: Can access all user-related data, ban users, but cannot modify user roles.
- **User**: Can only access their personal dashboard and profile.

### **2. Middleware**:

The application uses middleware to protect routes and ensure that only users with the correct roles can access specific resources. The middleware checks the role in the JWT token and compares it with the required roles for each route.

This middleware is used in the routes to enforce access control, ensuring users can only access authorized resources based on their roles.

---

## **How It Works**

### **Admin**

- Admin users can see the entire list of users, change user roles, and ban users.
- Admin can access all sections of the dashboard.

### **Moderator**

- Moderator users can view all users and ban them, but cannot change their roles.
- Moderators have limited access to the dashboard but can view users.

### **User**

- Regular users can only access their personal dashboard after logging in and cannot modify other users.

---

## **Security Best Practices**

- **JWT Token**: Ensures stateless authentication and authorization.
- **Password Hashing**: User passwords are hashed using `bcrypt.js` before storing them in the database.
- **Role Validation**: Only users with the correct role are granted access to specific resources and routes.
- **HTTPS**: For secure communication between the client and server (in production).

---

## **Conclusion**

This project showcases the implementation of an Authentication and Authorization system with **Role-Based Access Control (RBAC)**, ensuring secure access management based on user roles. The use of JWT for authentication and role validation ensures that each user has the appropriate access to resources, enhancing the security of the application.

---
