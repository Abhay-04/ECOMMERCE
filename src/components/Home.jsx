import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import CategoryComponent from "./categoryComponent";

const Home = () => {
  // const categories = useSelector((store) => store.categories);
  // console.log(categories);

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
    </div>
  );
};

export default Home;
