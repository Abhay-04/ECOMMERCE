import React, { useRef, useState } from "react";
import { validate } from "../utils/validate";

const Login = () => {
  const [isSignForm, setIsSignForm] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);
  const confirmPassword = useRef(null);

  const handleSignUp = () => {
    setIsSignForm(!isSignForm);
  };

  const handleButtonClick = () => {
    // validate the form data

    const errorMessage = validate(
      email.current.value,
      password.current.value,
      !isSignForm && fullName.current.value,
      !isSignForm && confirmPassword.current.value
    );

    setErrorMessage(errorMessage);
  };

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className=" pt-10  flex justify-center sm:justify-center items-center sm:items-center ">
          <div className="flex flex-col gap-3 w-full border sm:min-w-[400px] h-auto lg:min-h-[70vh]   sm:w-[80vw] md:w-[50vw] lg:w-[40vw] xl:w-[24vw]  p-4 sm:py-12  sm:px-14 rounded-md  ">
            <h1 className="text-4xl text-center font-bold mb-4">
              {isSignForm ? "Login" : "Create your account"}
            </h1>

            {isSignForm && (
              <div className="text-center">
                <p>Welcome back to ECOMMERCE</p>
                <p>The next gen business marketplace</p>
              </div>
            )}

            {!isSignForm && (
              <input
                ref={fullName}
                type="text"
                className="py-4 pl-4 pr-24 items-start text-md font-semibold mb-1 rounded-sm bg-black border border-gray-500 text-white "
                placeholder="Full Name"
              />
            )}

            <input
              ref={email}
              type="text"
              className="py-4 pl-4 pr-24 items-start text-md font-semibold mb-1 rounded-sm bg-black border border-gray-500 text-white "
              placeholder="Email"
            />

            <div className="relative items-start text-md font-semibold mb-1 rounded-sm bg-black border border-gray-500 text-white">
              <input
                ref={password}
                type={showPassword ? "text" : "password"}
                className="py-4 pl-4 pr-10 text-md font-semibold bg-black w-full"
                placeholder="Password"
              />
              <i
                onClick={() => setShowPassword(!showPassword)}
                className={` text-xl absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer pr-1 ${
                  showPassword ? "ri-eye-line" : "ri-eye-close-line"
                } text-white`}
              ></i>
            </div>

            {!isSignForm && (
              <div className="relative items-start text-md font-semibold mb-1 rounded-sm bg-black border border-gray-500 text-white">
                <input
                  ref={confirmPassword}
                  type={showConfirmPassword ? "text" : "password"}
                  className="py-4 pl-4 pr-10 text-md font-semibold bg-black w-full"
                  placeholder="Confirm Password"
                />

                <i
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className={` text-xl absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer pr-1 ${
                    showConfirmPassword ? "ri-eye-line" : "ri-eye-close-line"
                  } text-white`}
                ></i>
              </div>
            )}

            <p className="text-red-600 text-md font-bold p-2 ">
              {errorMessage}
            </p>

            <button
              onClick={handleButtonClick}
              className="bg-red-600 px-6 py-2 rounded-sm font-bold "
              type="submit"
            >
              {isSignForm ? "Sign In" : "Sign Up"}
            </button>

            {isSignForm && (
              <h5 className=" text-md font-semibold mt-4 cursor-pointer  ">
                Forgot password?
              </h5>
            )}

            {isSignForm && (
              <p className=" text-lg self-center my-1">OR</p>
            )}

            {isSignForm && (
              <button className="bg-[#a19e9ef6] px-6 py-2  rounded-sm font-bold ">
                Login with google
              </button>
            )}

            <h5 className=" text-md pt-4 ">
              {isSignForm ? "Don’t have an Account?" : "Have an Account? "}{" "}
              <span
                onClick={handleSignUp}
                className="font-extrabold cursor-pointer"
              >
                {isSignForm ? "Sign Up " : "Login"}
              </span>{" "}
            </h5>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
