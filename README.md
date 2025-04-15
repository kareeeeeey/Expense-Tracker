# 💸 Expense Tracker (React + Vite)

Welcome to the **Expense Tracker App** — a simple, interactive web application that helps you keep track of your expenses. Built with **React** and **Vite**, this project lets users add, search, sort, and delete expense entries while providing a clean and responsive user interface.

---

## 🧠 Why I Built This

I created this project to:
- Practice **React fundamentals** like components and hooks
- Learn how to **manage state** and **pass props** between components
- Understand **form handling**, **conditional rendering**, and **list filtering**
- Improve **UI/UX** with a clean, modern interface
-

---

## 🎯 Core Functionalities

### ✅ Add Expenses
- Enter an **expense description** and an **amount** in the form.
- Click the **"Add"** button.
- The new expense is added to the table instantly without refreshing the page.

### 🔍 Search Expenses
- Type into the **search bar** to filter expenses based on their description.
- The table updates live to only show matching entries.

### 🔃 Sort Expenses
- Click the **"Sort"** button to toggle sorting:
  - First click → Sorts by **amount (low to high)**
  - Second click → Sorts by **amount (high to low)**

### 🗑️ Delete Expenses
- Click the **"Delete"** button next to any entry to remove it from the list immediately.

---

## 🧩 Project Structure & Explanation


### 🔍 `ExpenseForm.jsx`

- Contains a form with two input fields:
  - One for description (`<input type="text" />`)
  - One for amount (`<input type="number" />`)
- Uses `useState` to manage form data
- On submit:
  - Uses `e.preventDefault()` to avoid page refresh
  - Sends new expense data up to `App.jsx` using a callback (`onAddExpense`)

### 🧾 `ExpenseTable.jsx`

- Displays expenses in a table format
- Receives:
  - A list of expenses via props
  - A delete function to remove individual expenses
- Maps through expenses and renders each row with:
  - Description, amount, and a delete button

### 🔎 `SearchBar.jsx`

- A simple input that captures the user’s query
- Uses an `onChange` event to lift the search text to `App.jsx`
- Filters the expense list in real-time as user types

### ⚙️ `App.jsx`

- **Main state manager** for:
  - The full list of expenses (`useState`)
  - Search query
  - Sorting order (ascending/descending)
- Handles:
  - Adding new expenses
  - Deleting expenses
  - Filtering and sorting
- Passes props to child components


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

