import React, { useEffect } from "react";

import CategoryComponent from "./CategoryComponent";

const Home = () => {
  return (
    <div>
      <h1>Please mark your interests!</h1>
      <p>We will keep you notified.</p>
      <p>My saved interests!</p>
      {/* {categories.map((c) => (
        <div className="flex">
          <input type="checkbox" className="mr-2" />
          <p>{c}</p>
        </div>
      ))} */}

      <CategoryComponent />


       {/* {categories.map((c) => (
        <div className="flex">
          <input type="checkbox" className="mr-2" />
          <p>{c}</p>
        </div>
      ))} */}
    </div>
  );
};

export default Home;
