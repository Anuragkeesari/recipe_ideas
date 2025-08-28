import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function MealDetailsPage() {
  const { id } = useParams(); // get meal id from URL
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    const fetchMeal = async () => {
      try {
        const res = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        setMeal(res.data.meals[0]);
      } catch (error) {
        console.error("Error fetching meal details", error);
      }
    };
    fetchMeal();
  }, [id]);

  if (!meal) return <p className="text-muted">Loading meal details...</p>;

  return (
    <div className="card mt-4 align-items-center">
      <img src={meal.strMealThumb} alt={meal.strMeal} className="card-img-top w-25 shadow-sm border border-dark rounded-3  m-4" />
      <div className="card-body">
        <h3 className="card-title">{meal.strMeal}</h3>
        <p><strong>Category:</strong> {meal.strCategory}</p>
        <p><strong>Area:</strong> {meal.strArea}</p>
        <p className="mt-3">{meal.strInstructions}</p>
        {meal.strYoutube && (
          <a
            href={meal.strYoutube}
            target="_blank"
            rel="noreferrer"
            className="btn btn-danger mt-3"
          >
            🎥 Watch on YouTube
          </a>
        )}
      </div>
    </div>
  );
}
