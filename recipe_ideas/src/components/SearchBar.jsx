import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [ingredient, setIngredient] = useState("");

  const handleSearch = () => {
    if (ingredient.trim() !== "") {
      onSearch(ingredient);
    }
  };

  return (
    <div className="input-group mb-4">
      <input
        type="text"
        className="form-control"
        placeholder="Enter an ingredient (e.g. chicken)"
        value={ingredient}
        onChange={(e) => setIngredient(e.target.value)}
      />
      <button className="btn btn-primary" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}
