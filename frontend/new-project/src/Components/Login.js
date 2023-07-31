import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import LoginBackground from "../Components/loginBackground.png";
import "../Css/Login.css";
import axios from "axios";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [verificationMessage, setVerificationMessage] = useState("");

  // Disable the "Continue" button until both ID Number and Email are entered
  const isContinueDisabled = !idNumber || !email;

  const handleLogin = async (e) => {
    e.preventDefault();

    // Reset the verification message to clear any previous error messages
    setVerificationMessage("");

    // Only proceed if both ID Number and Email are entered
    if (!idNumber || !email) {
      setVerificationMessage("Please enter ID Number and Email.");
      return;
    }

    try {
      // Send the username to the server to request OTP
      const response = await axios.post(
        "http://localhost:4000/users/register",
        {
          email,
          idNumber,
        }
      );

      // Display the server's response message (e.g., "OTP sent successfully")
      setVerificationMessage(response.data.message);
      setShowOtpInput(true);
    } catch (error) {
      console.error("OTP request error:", error);
      setVerificationMessage("Error requesting OTP. Please try again later.");
    }
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();

    try {
      // Send the OTP to the server for verification
      const response = await axios.post(
        "http://localhost:4000/users/verify-otp",
        {
          otp,
        }
      );

      // Display the server's response message (e.g., "OTP verification successful")
      setVerificationMessage(response.data.message);

      if (response.data.verified) {
        // If OTP verification is successful, proceed with login
        props.onLogin(response.data.token); // Invoke onLogin with the authentication token
        setShowOtpInput(false); // Hide the OTP input after successful login
      }
    } catch (error) {
      console.error("OTP verification error:", error);
      setVerificationMessage("Invalid OTP. Please try again.");
    }
  };

  return (
    <div className="center">
      <div className="befline"></div>
      <form
        className="username-form"
        onSubmit={showOtpInput ? handleVerifyOTP : handleLogin}
      >
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
            value={idNumber}
            onChange={(e) => setIdNumber(e.target.value)}
            disabled={showOtpInput}
          />
          <input
            className="textbox"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={showOtpInput}
          />
          <FaRegUser className="icon fas fa-user"></FaRegUser>
        </div>

        {showOtpInput && (
          <div className="input-container">
            <input
              className="textbox"
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          </div>
        )}

        {verificationMessage && <div>{verificationMessage}</div>}

        {showOtpInput ? (
          <button type="submit" className="btnContinue">
            SIGN IN
          </button>
        ) : (
          <button
            type="submit"
            className="btnContinue"
            disabled={isContinueDisabled}
          >
            Continue
          </button>
        )}
      </form>
    </div>
  );
};

export default Login;
