import React from "react";
import CategoryItems from "./CategoryItems";
import { categories } from "../../constants";

const CategoryCard = () => {
  return (
    <div className="cardContainer">
      <div className="cardOptions d_flex_between">
        <span>Browse All</span>
      </div>

      <div className="category__cards">
        {categories?.map((category, idx) => (
          <CategoryItems key={idx} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CategoryCard;
