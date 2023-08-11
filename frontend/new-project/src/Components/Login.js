import React from "react";
import { FaRegUser } from "react-icons/fa";
import LoginBackground from "../Components/images/loginBackground.png";
import "../Css/Login.css";

const Login = () => {
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

          <div className="input-container">
            <input
              className="textbox"
              type="text"
              placeholder="ID Number"
              disabled
            />
            <input
              className="textbox"
              type="email"
              placeholder="Email"
              disabled
            />
            <FaRegUser className="icon fas fa-user"></FaRegUser>
          </div>

          <div className="input-container">
            <input
              className="textbox"
              type="text"
              placeholder="Enter OTP"
              disabled
            />
          </div>
          <button type="submit" className="btnContinue">
            SIGN IN
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
