import React from "react";
import "./styles.scss";

const CategoryItems = ({ category }) => {
  return (
    <div
      className="category_items"
      style={{ background: `${category.bgColor}` }}
    >
      <h2>{category.title}</h2>
      <div className="category__img">
        <img src={category.image} alt={category.title} />
      </div>
    </div>
  );
};

export default CategoryItems;
