import React, { useRef, useState } from "react";
import { validate } from "../utils/validate";
import { auth, provider } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignForm, setIsSignForm] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();

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

    if (errorMessage !== null) return "done validation";

    if (!isSignForm) {
      //signup logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then(() => {
          navigate("/home");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + errorMessage);
          // ..
        });
    } else {
      //signin logic

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          console.log(user);
          navigate("/home");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + errorMessage);
        });
    }
  };

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // Successfully logged in
        console.log(result.user);
        navigate("/home");
      })
      .catch((error) => {
        console.error("Error during login", error);
      });
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
              <div>
                <label for="name">Name</label>
                <input
                  ref={fullName}
                  type="text"
                  id="name"
                  className="py-4 pl-4 pr-24 items-start text-md font-semibold mb-1 rounded-sm  border border-gray-500  "
                  placeholder="Enter"
                />
              </div>
            )}

            <div>
              <label for="email">Email</label>
              <input
                ref={email}
                id="email"
                type="text"
                className="py-4 pl-4 pr-24 items-start text-md font-semibold mb-1 rounded-sm  border border-gray-500  "
                placeholder="Enter"
              />
            </div>

            <div>
              <label for="password">Password</label>

              <div className="relative items-start text-md font-semibold mb-1 rounded-sm  border border-gray-500 ">
                <input
                  ref={password}
                  id="password"
                  type={showPassword ? "text" : "password"}
                  className="py-4 pl-4 pr-10 text-md font-semibold  w-full"
                  placeholder="Enter"
                />
                <i
                  onClick={() => setShowPassword(!showPassword)}
                  className={` text-xl absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer pr-1 ${
                    showPassword ? "ri-eye-line" : "ri-eye-close-line"
                  } text-black`}
                ></i>
              </div>
            </div>

            {!isSignForm && (
              <div>
                <label for="confirmPassword">Confirm Password</label>

                <div className="relative items-start text-md font-semibold mb-1 rounded-sm bg-black border border-gray-500 ">
                  <input
                    ref={confirmPassword}
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    className="py-4 pl-4 pr-10 text-md font-semibold  w-full"
                    placeholder="Enter"
                  />

                  <i
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className={` text-xl absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer pr-1 ${
                      showConfirmPassword ? "ri-eye-line" : "ri-eye-close-line"
                    } text-black`}
                  ></i>
                </div>
              </div>
            )}

            <p className=" text-md font-bold p-2 ">{errorMessage}</p>

            <button
              onClick={handleButtonClick}
              className="bg-black text-white px-6 py-2 rounded-sm font-bold "
              type="submit"
            >
              {isSignForm ? "Sign In" : "Sign Up"}
            </button>

            {isSignForm && (
              <h5 className=" text-md font-semibold mt-4 cursor-pointer  ">
                Forgot password?
              </h5>
            )}

            {isSignForm && <p className=" text-lg self-center my-1">OR</p>}

            {isSignForm && (
              <button
                onClick={handleGoogleLogin}
                className="bg-[#a19e9ef6] px-6 py-2  rounded-sm font-bold "
              >
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
