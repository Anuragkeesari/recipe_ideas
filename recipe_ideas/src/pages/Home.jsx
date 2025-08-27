import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import MealList from "../components/MealList";
import MealDetails from "../components/MealDetails";
import axios from "axios";

export default function Home() {
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);

  const searchMeals = async (ingredient) => {
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    setMeals(res.data.meals || []);
    setSelectedMeal(null);
  };

  const getMealDetails = async (id) => {
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    setSelectedMeal(res.data.meals[0]);
  };

  return (
    <div>
      <SearchBar onSearch={searchMeals} />
      <MealList meals={meals} onSelectMeal={getMealDetails} />
      {selectedMeal && <MealDetails meal={selectedMeal} />}
    </div>
  );
}
