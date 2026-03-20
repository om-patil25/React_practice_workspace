# 📝 React Practice Workspace

A structured React project built to explore modern React fundamentals, state management patterns, clean UI architecture, and practical frontend problem-solving.

This workspace serves as a hands-on learning environment to strengthen core React concepts through real implementation.

---

### Home

<p align="center">
  <img src="screenshots/Home.png" width="520" />
  &nbsp;&nbsp;&nbsp;
  <img src="screenshots/mobile.jpeg" width="240" />
</p>

### Home(Dark mode)

![Home(Dark mode)](screenshots/Home-dark.png)

### Daily Journal

![Daily Journal](screenshots/Journal.png)

### Users(Api handling)

![Users(Api Handling)](screenshots/Users.png)

---


## 🚀 Features

### 🗒 Daily Journal

- Add, edit, and delete journal entries
- LocalStorage persistence
- Date & time tracking
- Controlled form handling
- Mobile-friendly layout

### 🌐 Users API Integration

- Fetch users from a public fake API
- Loading and error handling states
- Conditional rendering patterns
- Reusable component structure

### 🎨 Theme Management

- Light/Dark theme toggle
- Global state using Context API
- Clean separation of concerns

### 📱 Responsive Navigation

- Multi-route navigation using React Router
- Mobile-compatible layout
- Clean and minimal UI design

---

## 🧠 Concepts Practiced

- `useState` for local state management
- `useEffect` for side effects
- Controlled components
- Conditional rendering
- Component reusability
- Context API for global state
- LocalStorage persistence
- API data fetching
- Error & loading state handling
- Responsive layout design

---

## 🏗 Tech Stack

- React
- React Router
- Tailwind CSS
- Lucide React Icons
- Vite

---

## 🔐 Notes

- Entry IDs use Date.now() to ensure compatibility during LAN/mobile development.
- Designed as a frontend-focused learning project.
- No backend integration (yet).

---

## 📌 Purpose

This project was built to:

- Learn and implement CRUD operations in a real-world scenario  
- Practice API data fetching and handling (loading & error states)  
- Strengthen understanding of core React concepts (useState, useEffect, Context API)  
- Build a structured and reusable component architecture  
- Improve debugging skills across different environments (desktop vs mobile)  
- Develop a clean, responsive, and minimal UI  
---

## 📂 Project Structure

```

react-practice-workspace/
├── src/
│   ├── assets/
│
│   ├── components/
│   │   ├── Btns.jsx
│   │   ├── HomeCard.jsx
│   │   ├── JournalCard.jsx
│   │   ├── JournalForm.jsx
│   │   ├── LoadingState.jsx
│   │   ├── MetaData.jsx
│   │   ├── UserCard.jsx
│   │   ├── UserForm.jsx
│   │   ├── UserModal.jsx
│   │   └── UsersDBinp.jsx
│
│   ├── context/
│   │   └── ThemeContext.jsx
│
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── DailyJournal.jsx
│   │   └── UsersDB.jsx
│
│   ├── services/
│   │   ├── api.js
│   │   ├── currentDateNTime.js
│   │   ├── storageServices.js
│   │   └── userServices.js
│
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

## ⚙ Installation & Setup

Clone the repository:

```bash
git clone https://github.com/om-patil25/React_practice_workspace.git
cd React_practice_workspace
```

## Install dependencies:

```bash
npm install
```

## Run development server:

```bash
npm run dev
```
