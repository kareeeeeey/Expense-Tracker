
import React, { useState } from "react";

const ExpenseForm = ({ onAddExpense }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  console.log("Form state:", { description, amount, category, date });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Attempting to submit..."); 

    if (!description || !amount || !category || !date) {
      console.warn("Missing fields!"); 
      return;
    }

    const newExpense = {
      description,
      amount: parseFloat(amount),
      category,
      date,
    };

    console.log("Submitting:", newExpense); 
    onAddExpense(newExpense);

    
    setDescription("");
    setAmount("");
    setCategory("");
    setDate("");

    console.log("Form reset"); 
  };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <h2>Add New Expense</h2>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Amount (Ksh)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
        min="0"
        step="0.01"
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;