import React, { useState, useEffect } from "react";
import { generateCategories } from "../utils/generateCategories";

const ITEMS_PER_PAGE = 6;

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // Generate the categories once when the component mounts
    const fetchedCategories = generateCategories();
    setCategories(fetchedCategories);
  }, []);

  // Calculate paginated items
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedCategories = categories.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const totalPages = Math.ceil(categories.length / ITEMS_PER_PAGE);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center pt-20">
      <div className="px-20 py-10 border rounded-lg text-center w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6">Please mark your interests!</h1>
        <p className="text-sm border-b-2">We will keep you notified.</p>
        <p className="text-md font-semibold text-start my-4">
          My saved interests!
        </p>

        {/* Fixed height container with scroll */}
        <div className="h-[50vh] overflow-y-auto">
          {paginatedCategories.map((category, index) => (
            <div key={index} className="flex items-center mb-4">
              <input type="checkbox" className="mr-2" />
              <p>{category}</p>
            </div>
          ))}
        </div>

        {/* Pagination controls */}
        <div className="flex justify-between mt-6">
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-300 rounded disabled:bg-gray-200"
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-300 rounded disabled:bg-gray-200"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
