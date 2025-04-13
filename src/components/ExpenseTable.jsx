import React from "react";

const ExpenseTable = ({ expenses, onDelete }) => {
  return (
    <table
      border="1"
      cellPadding="10"
      cellSpacing="0"
      style={{ width: "100%" }}
    >
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount (KES)</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {expenses.length === 0 ? (
          <tr>
            <td colSpan="3" style={{ textAlign: "center" }}>
              No expenses found.
            </td>
          </tr>
        ) : (
          expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.description}</td>
              <td>{expense.amount.toFixed(2)}</td>
              <td>
                <button onClick={() => onDelete(expense.id)}>Delete</button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default ExpenseTable;
