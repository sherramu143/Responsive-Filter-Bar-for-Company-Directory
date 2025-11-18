# 🏢 Companies Directory – React + Vite + MUI + JSON Server

This project is a **fully responsive Companies Directory application** built using **React (Vite)** and styled with **Material-UI**.
It includes a **filter bar, search functionality, sorting, pagination**, and a **local API** powered by `db.json` using JSON Server.

---

## 🚀 Features

* 🔍 Search companies by name
* 📍 Filter by **location**
* 🏭 Filter by **industry**
* 🔠 Sort alphabetically (A–Z / Z–A)
* 🔄 Reset all filters
* 📄 Pagination support
* 📱 Fully responsive for mobile, tablet, and desktop
* ⚡ Fast development with Vite
* 🗃️ Fake backend API using JSON Server

---

## 🛠️ Tech Stack

* **React + Vite**
* **Material-UI (MUI)**
* **JSON Server (db.json)**
* **JavaScript (ES6+)**

---

## 📦 Installation

Clone the repository:

```sh
git clone https://github.com/sherramu143/Responsive-Filter-Bar-for-Company-Directory.git
cd Responsive-Filter-Bar-for-Company-Directory
```

Install dependencies:

```sh
npm install
```

---

## 🗄️ Start JSON Server (Backend)

This project includes a `db.json` file that acts as your fake backend.

Run JSON Server:

```sh
npx json-server --watch db.json --port 3001
```

API will be available at:

```
http://localhost:3001/companies
```

---

## ▶️ Start the React App (Frontend)

Run the Vite development server:

```sh
npm run dev
```

It will start at:

```
http://localhost:5173
```

---

## 📁 Project Structure

```
src/
  components/
    CompanyCard.jsx
    CompanyList.jsx
    Filters.jsx
    Loading.jsx
    Pagination.jsx
  App.jsx
  App.css
  main.jsx
db.json
```

---

## 🧩 Components Overview

### **Filters.jsx**

Responsive filter bar with:

* Search
* Location
* Industry
* Sorting
* Reset button

### **CompanyList.jsx**

Handles:

* Fetching companies
* Applying filters
* Sorting logic
* Pagination

### **CompanyCard.jsx**

Displays company details in a clean MUI card.

### **Pagination.jsx**

Next/Previous navigation.

### **Loading.jsx**

Shown when API data is loading.

---

## 📝 Available Scripts

| Command                           | Description              |
| --------------------------------- | ------------------------ |
| `npm run dev`                     | Start React app          |
| `npm run build`                   | Build for production     |
| `npm run preview`                 | Preview production build |
| `npx json-server --watch db.json` | Start JSON Server        |

---

## 📜 License

This project is open-source under the **MIT License**.

---

If you want, I can also generate:
✅ Demo GIF for README
✅ Deployed version guide (Netlify / Vercel)
Just tell me!
