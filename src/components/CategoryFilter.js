import React from "react";


function CategoryFilter({ categories, onBtnClick, selectedCategory }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map((category) => (
        <button className={category === selectedCategory ? "selected" : "null" } key={category} onClick={onBtnClick}>{category}</button>
      ))}
    </div>
  );
}

export default CategoryFilter;
