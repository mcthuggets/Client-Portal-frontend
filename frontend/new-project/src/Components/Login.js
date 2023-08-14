import React, { useState } from "react";
import LoginBackground from "../Components/images/loginBackground.png";
import "../Css/Login.css";

const Login = () => {
  const [showOTP, setShowOTP] = useState(false); 

  const handleSignIn = (e) => {
    e.preventDefault();
    setShowOTP(true);
  };

  return (
    <div className="body">
      <div className="center">
        <div className="befline"></div>
        <form className="username-form">
          <img
            className="login-container"
            src={LoginBackground}
            alt="Login Background"
          />

          <p className="Sign">Sign in to your account</p>

          {showOTP && ( // Conditionally render OTP input
            <div className="input-container">
              <input className="textbox" type="text" placeholder="Enter OTP" />
            </div>
          )}

          {!showOTP && ( 
            <div className="input-container">
              <input className="textbox" type="text" placeholder="ID Number" />
            </div>
          )}

          {showOTP ? ( 
            <button type="submit" className="btnContinue">
              SIGN IN
            </button>
          ) : (
            <button
              type="button"
              className="btnContinue"
              onClick={handleSignIn}
            >
              CONTINUE
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
