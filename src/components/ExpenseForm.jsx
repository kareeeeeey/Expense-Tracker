import React, { useState } from "react";

const ExpenseForm = ({ onAddExpense }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim() === "" || amount === "") return;

    const newExpense = {
      id: Date.now(), 
      description,
      amount: parseFloat(amount),
    };

    onAddExpense(newExpense);

    
    setDescription("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
        step="0.01"
      />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
