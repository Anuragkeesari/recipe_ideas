import React from "react";
import { Link } from "react-router-dom";

export default function MealList({ meals }) {
  if (!meals || meals.length === 0) {
    return <p className="text-muted">No meals found. Try searching!</p>;
  }

  return (
    <div className="row">
      {meals.map((meal) => (
        <div key={meal.idMeal} className="col-md-4 mb-4">
          <Link to={`/meal/${meal.idMeal}`} style={{ textDecoration: "none", color: "inherit" }}>
            <div className="card shadow-sm h-100">
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{meal.strMeal}</h5>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
