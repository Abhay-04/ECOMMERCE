import React, { useEffect } from "react";
import Logo from "../../src/logo.webp";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../store/userSlice";
import { auth } from "../utils/firebase";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
          })
        );
        navigate("/home");

        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");

        // ...
      }
    });
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };
  return (
    <div className="">
      <div className="py-3 px-10">
        <ul className="flex justify-end gap-6 text-xs font-normal">
          <li className="cursor-pointer">Help</li>
          <li className="cursor-pointer">Orders & Return</li>
          {location.pathname === "/home" && (
            <li className="cursor-pointer">Hi , John</li>
          )}
          {location.pathname === "/home" && (
            <button onClick={() => handleSignOut()}>Logout</button>
          )}
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
      <div className="bg-[#F4F4F4] text-center text-sm font-semibold py-3 mt-4">
        <h1 className=" ml-40">
          <i class="ri-arrow-left-s-line mr-6"></i>Get 10% off on business sign
          up <i class="ri-arrow-right-s-line ml-6"></i>
        </h1>
      </div>
    </div>
  );
};

export default Header;
