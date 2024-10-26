import React, { useState, useEffect, useRef } from "react";
import { faker } from "@faker-js/faker";

const CategoryComponent = () => {
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [checkedItems, setCheckedItems] = useState([]);
  const itemsPerPage = 6;

  // Ref to hold the generated categories
  const categoriesRef = useRef([]);

  // Function to generate category names
  const generateCategories = () => {
    const generatedCategories = Array.from({ length: 100 }, () => ({
      name: faker.commerce.department(),
    }));
    categoriesRef.current = generatedCategories; // Store them in the ref
    console.log(generateCategories);
    setCategories(generatedCategories); // Store them in state
    setCurrentPage(0); // Reset to the first page when generating new categories
    setCheckedItems(new Array(generatedCategories.length).fill(false)); // Initialize checked items state
  };

  // Automatically generate categories when the component mounts, but only once
  useEffect(() => {
    // Check if categories already generated
    if (categoriesRef.current.length === 0) {
      generateCategories();
    } else {
      setCategories(categoriesRef.current);
      setCheckedItems(new Array(categoriesRef.current.length).fill(false));
    }
  }, []); // Empty dependency array means this effect runs only once after the initial render

  // Calculate the categories to display for the current page
  const startIndex = currentPage * itemsPerPage;
  const currentCategories = categories.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const nextPage = () => {
    if ((currentPage + 1) * itemsPerPage < categories.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const totalPages = Math.ceil(categories.length / itemsPerPage);

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const handleCheckboxChange = (index) => {
    const updatedCheckedItems = [...checkedItems];
    updatedCheckedItems[index] = !updatedCheckedItems[index];
    setCheckedItems(updatedCheckedItems);
  };

  return (
    <div>
      <ul>
        {currentCategories.map((category, index) => (
          <li key={index} className="flex items-center">
            <input
              type="checkbox"
              id={`category-${startIndex + index}`}
              checked={checkedItems[startIndex + index]}
              onChange={() => handleCheckboxChange(startIndex + index)}
              className="mr-2"
            />
            <label htmlFor={`category-${startIndex + index}`}>
              {category.name}
            </label>
          </li>
        ))}
      </ul>

      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 0}>
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, index) => {
          if (
            index < 2 ||
            index > totalPages - 3 ||
            (index >= currentPage - 1 && index <= currentPage + 1)
          ) {
            return (
              <button
                key={index}
                onClick={() => goToPage(index)}
                className={currentPage === index ? "active" : ""}
              >
                {index + 1}
              </button>
            );
          }
          return null;
        })}

        <button
          onClick={nextPage}
          disabled={(currentPage + 1) * itemsPerPage >= categories.length}
        >
          Next
        </button>
      </div>

      <style jsx>{`
        .pagination button {
          margin: 0 5px;
          cursor: pointer;
        }
        .pagination button.active {
          font-weight: bold;
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default CategoryComponent;
