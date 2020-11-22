import React from "react";

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      {/* only display breakfast */}
      {categories.map((category, index) => {
        {
          /* category represteent each categore in our array */
        }
        return (
          <button
            className="filter-btn"
            type="button"
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
