import React, { useState } from "react";
import ExpenseForm from "./components/ExpenseForm.jsx";
import ExpenseTable from "./components/ExpenseTable.jsx";
import SearchBar from "./components/SearchBar.jsx";
import "./App.css";


const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc"); // for sorting

  const handleAddExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
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
    <div className="container" style={{ padding: "2rem" }}>
      <h1>💸 Expense Tracker</h1>
      <ExpenseForm onAddExpense={handleAddExpense} />
      <SearchBar onSearch={setSearchTerm} />
      <button onClick={handleSortToggle} style={{ marginBottom: "1rem" }}>
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
