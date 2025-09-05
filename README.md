# 🏫 School Management - Add School Form

A simple Next.js project that allows users to **add school details** (name, address, contact, email, image, etc.) and stores them in a MySQL database.

## ✨ Features
- 📋 Form to add school details (Name, Address, City, State, Contact, Email).
- 🖼️ Upload school image.
- 🎨 Beautiful UI built with **Tailwind CSS**.
- ✅ Validations handled with **react-hook-form**.
- ⚡ API route to handle form submission and save data to **MySQL**.
- 🔒 Error handling & success messages.

---

## 🛠️ Tech Stack
- [Next.js](https://nextjs.org/) (App Router)
- [React Hook Form](https://react-hook-form.com/) (Form handling + validation)
- [Tailwind CSS](https://tailwindcss.com/) (Styling)
- [MySQL](https://www.mysql.com/) (Database)

---


## ⚙️ Setup & Installation

1. **Clone the repo**
   ```bash
   git clone https://github.com/Dipra2111/School_Management.git
   cd school-management
2. Install dependencies
   npm install

3. Run the development server
   npm run dev
   Open http://localhost:3000🎉

🗄️ Database

Use MySQL and create the schools table:

CREATE DATABASE schooldb;

USE schooldb;

CREATE TABLE schools (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  address VARCHAR(255) NOT NULL,
  city VARCHAR(100) NOT NULL,
  state VARCHAR(100) NOT NULL,
  contact VARCHAR(15) NOT NULL,
  email_id VARCHAR(100) NOT NULL,
  image VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


👉 To clear all rows but keep the table:

TRUNCATE TABLE schooldb.schools;
