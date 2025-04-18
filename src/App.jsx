import React, { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import SearchBar from "./components/SearchBar";
import "./App.css";

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const handleAddExpense = (newExpense) => {
    const expenseWithId = { ...newExpense, id: Date.now() };
    setExpenses([...expenses, expenseWithId]);
  };

  const handleDeleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const handleSortToggle = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const filteredExpenses = expenses
    .filter((expense) =>
      expense.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) =>
      sortOrder === "asc" ? a.amount - b.amount : b.amount - a.amount
    );

  return (
    <div className="container">
      <h1>💸 Expense Tracker</h1>
      <ExpenseForm onAddExpense={handleAddExpense} />
      <SearchBar onSearch={setSearchTerm} />
      <button onClick={handleSortToggle} className="sort-btn">
        Sort by Amount ({sortOrder === "asc" ? "⬆️ Ascending" : "⬇️ Descending"}
        )
      </button>
      <ExpenseTable
        expenses={filteredExpenses}
        onDelete={handleDeleteExpense}
      />
    </div>
  );
};

export default App;
