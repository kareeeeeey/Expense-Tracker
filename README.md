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


## Deployement
STATIC HOSTING(react,vite, vercel)
push to main branch (Github)

connect to vercel
https://expense-tracker-1-xi.vercel.app/

## License
Copyright <YEAR> <CYNTHIA KAMAUGI>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

