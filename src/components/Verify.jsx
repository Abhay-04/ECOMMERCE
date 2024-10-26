import React, { useEffect, useState } from "react";
import { auth } from "../utils/firebase"; // Adjust the import path as needed
import { useNavigate } from "react-router-dom"; // For navigation

const VerifyComponent = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // Initialize the navigate function

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsVerified(user.emailVerified);
        setLoading(false);
      } else {
        setLoading(false);
        navigate("/"); // Redirect to the login page if not authenticated
      }
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, [navigate]);

  const handleResendVerification = async () => {
    const user = auth.currentUser;
    if (user) {
      await sendEmailVerification(user);
      alert("Verification email sent! Please check your inbox.");
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (isVerified) {
    navigate("/home"); // Redirect to home if email is verified
    return null; // No need to render anything else
  }

  return (
    <div>
      <h1>Email Verification</h1>
      <p>Please verify your email address to continue.</p>
      <button onClick={handleResendVerification}>
        Resend Verification Email
      </button>
    </div>
  );
};

export default VerifyComponent;
