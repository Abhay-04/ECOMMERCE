import React from "react";
import Logo from "../../src/logo.webp";

const Header = () => {
  return (
    <div className="">
      <div className="py-3 px-10">
        <ul className="flex justify-end gap-6 text-xs font-normal">
          <li className="cursor-pointer">Help</li>
          <li className="cursor-pointer">Orders & Return</li>
          <li className="cursor-pointer">Hi , John</li>
        </ul>
      </div>
      <div className=" flex justify-between items-center px-6">
        <div>
          <img className="w-[212px] h-[39px] cursor-pointer" src={Logo} />
        </div>
        <div>
          <ul className="flex text-base font-semibold gap-6 cursor-pointer">
            <li>Categories</li>
            <li>Sale</li>
            <li>Clearance</li>
            <li>New stock</li>
            <li>Trending</li>
          </ul>
        </div>
        <div className="text-lg">
          <i class="ri-search-line mr-6 cursor-pointer"></i>
          <i class="ri-shopping-cart-line cursor-pointer"></i>
        </div>
      </div>
      <div className="bg-[#F4F4F4] text-center text-sm font-medium py-3">
        <h1>
          <i class="ri-arrow-left-s-line mr-6"></i>Get 10% off on business sign up{" "}
          <i class="ri-arrow-right-s-line ml-6"></i>
        </h1>
      </div>
    </div>
  );
};

export default Header;
