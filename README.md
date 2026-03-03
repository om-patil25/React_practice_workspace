# 📝 React Practice Workspace

A structured React project built to explore modern React fundamentals, state management patterns, clean UI architecture, and practical frontend problem-solving.

This workspace serves as a hands-on learning environment to strengthen core React concepts through real implementation.

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

- Strengthen understanding of React fundamentals
- Practice structured component architecture
- Improve debugging skills across environments
- Build responsive UI without over-relying on libraries

---

## 📂 Project Structure

```

src/
├── components/
│ ├── JournalCard.jsx
│ ├── JournalForm.jsx
│ ├── Btns.jsx
│
├── pages/
│ ├── Home.jsx
│ ├── DailyJournal.jsx
│ ├── UsersDB.jsx
│
├── context/
│ └── ThemeContext.jsx
│
├── services/
│ ├── storageServices.js
│ └── currentDateNTime.js

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
