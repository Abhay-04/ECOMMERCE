import React, { useState } from "react";
import { categories } from "../utils/categories";

const CategoryList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Initialize state with categories' interest status
  const [categoryStates, setCategoryStates] = useState(
    categories.map((category) => ({ ...category }))
  );

  // Calculate the current categories to display
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCategories = categoryStates.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Calculate total pages
  const totalPages = Math.ceil(categoryStates.length / itemsPerPage);

  // Handle page navigation
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Handle checkbox change
  const handleCheckboxChange = (index) => {
    setCategoryStates((prevCategories) =>
      prevCategories.map((category, i) =>
        i === index
          ? { ...category, interested: !category.interested }
          : category
      )
    );
  };

  return (
    <div>
      {currentCategories.map((c, index) => (
        <div className="flex gap-2" key={index}>
          <input
          
            type="checkbox"
            checked={c.interested}
            onChange={() => handleCheckboxChange(indexOfFirstItem + index)}
            className={` h-6 w-6 border-2 rounded-md transition-colors duration-200 mb-4 ${
              c.interested
                ? "bg-black border-black text-white"
                : "bg-gray-300 border-gray-400"
            }`}
          />
          <h1 className="text-md font-medium">{c.name}</h1>
        </div>
      ))}

      {/* Pagination controls */}
      <div className="flex justify-center items-center gap-4 mt-4">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 rounded"
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CategoryList;
