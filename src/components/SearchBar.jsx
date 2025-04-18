
import React from "react";

const SearchBar = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search by description..."
      onChange={(e) => onSearch(e.target.value)}
      style={{ marginBottom: "1rem", padding: "0.5rem", width: "100%" }}
    />
  );
};

export default SearchBar;
