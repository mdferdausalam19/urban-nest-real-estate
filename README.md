# 🏠 UrbanNest

**UrbanNest** is a dynamic web application focused on showcasing residential real estate properties. The platform allows users to explore properties, view details, and manage their profiles with ease.

## 🌐 Live Website

[Visit UrbanNest](https://urban-nest-real-estate.vercel.app/)

## 📂 Repository

[GitHub Repository](https://github.com/mdferdausalam19/urban-nest-real-estate)

## 🔍 Project Overview

**UrbanNest** is a fully responsive web application built with:

- **Vite**
- **React**
- **React Router DOM**
- **Tailwind CSS**
- **DaisyUI**
- **Swiper**

Authentication and user management are powered by **Firebase**, providing secure login and profile features.

## ✨ Key Features

### 🌟 Global Features

- **Responsive Navbar**:
  - Routes for Home, Sign In, Sign Up, and other key pages.
  - Displays **Sign In** and **Sign Up** buttons when not logged in.
  - Shows **User Profile**, **Update Profile**, and **Sign Out** options for authenticated users.

### 🏡 Home Page

- **Banner Section**:
  - A Swiper slider featuring stunning images of residential properties.
- **Explore Our Estates**:
  - Dynamic property cards fetched from a local JSON file.
  - Each card includes:
    - Image, title, price, location, and status.
    - A **View Property** button:
      - Redirects to the **Property Details** page for logged-in users.
      - Redirects to the **Sign In** page for unauthenticated users.
- **Footer**:
  - Simple and intuitive design for better user experience.

### 🔐 Authentication Pages

- **Sign In Page**:
  - Login using email and password or via Google authentication.
- **Sign Up Page**:
  - Register using:
    - Name
    - Email
    - Optional photo URL
    - Password

### ⛪ Property Details Page

- Displays detailed information about a selected property for logged-in users.

### 📝 Profile Management

- **Update Profile Page**:
  - Users can update their name and photo URL.

## 🛠️ Technologies Used

- **Frameworks & Libraries**:

  - **React**
  - **React Router DOM**
  - **Tailwind CSS**
  - **Swiper**

- **Additional Dependencies**:
  - `firebase`
  - `prop-types`
  - `react-helmet-async`
  - `react-hook-form`
  - `react-hot-toast`
  - `react-icons`

## 🗂️ Project Structure

```plaintext
public
|-- data
|   |-- estates.json
|-- images

src
|-- assets
|   |-- logo.png
|
|-- components
|   |-- layouts
|   |   |-- Footer.jsx
|   |   |-- Header.jsx
|   |-- Banner.jsx
|   |-- EstateCard.jsx
|   |-- SocialLogin.jsx
|
|-- firebase
|   |-- firebase.config.js
|
|-- hooks
|   |-- useAuth.jsx
|
|-- layouts
|   |-- MainLayout.jsx
|
|-- pages
|   |-- auth
|   |   |-- SignIn.jsx
|   |   |-- SignUp.jsx
|   |-- notFound
|   |   |-- NotFound.jsx
|   |-- EstateDetails.jsx
|   |-- Home.jsx
|   |-- UpdateProfile.jsx
|
|-- providers
|   |-- AuthProvider.jsx
|
|-- routes
|   |-- AppRouter.jsx
|   |-- PrivateRoute.jsx
|
|-- index.css
|-- main.jsx

.gitignore
.eslint.config.js
index.html
package-lock.json
package.json
postcss.config.js
README.md
tailwind.config.js
vercel.json
vite.config.js
```

## 🚀 Getting Started

To run the project locally, follow these steps:

### Prerequisites

Ensure that you have **Node.js** and **npm** installed on your system.

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/mdferdausalam19/urban-nest-real-estate.git
   ```

2. **Navigate to the Project Directory**:

   ```bash
   cd urban-nest-real-estate
   ```

3. **Install Dependencies**:

   ```bash
   npm install
   ```

4. **Set Up Firebase**:

   - Replace the environment variables with your Firebase configuration in **.env**.

5. **Run the Development Server**:

   ```bash
   npm run dev
   ```

6. **Access the Application**:
   Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

## 📚 Resources

### **Frameworks & Libraries**:

- [React](https://react.dev/)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)
- [Swiper](https://swiperjs.com/)

### **Firebase**:

- [Firebase Documentation](https://firebase.google.com/docs)

### **Packages**:

- [react-hot-toast](https://react-hot-toast.com/)
- [react-icons](https://react-icons.github.io/react-icons/)
- [react-hook-form](https://react-hook-form.com/)
