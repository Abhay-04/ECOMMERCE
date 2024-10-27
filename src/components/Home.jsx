import React from "react";
import CategoryList from "./CategoryList";

const Home = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-10 ">
        <div className="border rounded-lg px-14 py-10 text-center">
          <h1 className="text-2xl font-bold">Please mark your interests!</h1>
          <p className="text-sm font-semibold border-b-2 py-4">We will keep you notified.</p>
          <p className="text-md font-bold text-start py-4">My saved interests!</p>
          <CategoryList />
        </div>
      </div>
    </div>
  );
};

export default Home;
