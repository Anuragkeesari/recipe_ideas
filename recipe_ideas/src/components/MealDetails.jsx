import React from "react";

export default function MealDetails({ meal }) {
  return (
    <div className="card mt-4">
      <img src={meal.strMealThumb} alt={meal.strMeal} className="card-img-top" />
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
            Watch on YouTube
          </a>
        )}
      </div>
    </div>
  );
}
