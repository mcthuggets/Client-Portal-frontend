import React, { useState } from "react";
import LoginBackground from "../Components/images/loginBackground.png";
import "../Css/Login.css";
import axios from "axios";

const Login = () => {

  const [showOTP, setShowOTP] = useState(false); 
  
  const [idNumber, setIdNumber] = useState(null);
  const [otp, setOTP] = useState(null);

  const sendIdNumber = (e) => {
    e.preventDefault();
    setShowOTP(true);
    console.log(idNumber);

    axios.post('https://localhost:7207/OTP/generate-otp', {
        // Replace with the appropriate data you want to send in the request body
        idNumber: idNumber,
      })
      .then((response) => {
        console.log('OTP generated:', response.data);

        // You can do something with the OTP response here, e.g., store it in state
        // or display it on the UI.
      })
      .catch((error) => {
        console.error('Error generating OTP:', error);
        // Handle the error appropriately, e.g., show an error message to the user.
      });
  }

  const verifyOTP = (e) => {
    e.preventDefault()

    const apiUrl = 'https://localhost:7207/OTP/verify-otp';

    const data = {
      otp: otp,
      idNumber: idNumber
    };

    console.log(data);

    axios.post(apiUrl, data)
      .then(response => {
        console.log('Response:', response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
        console.log(otp);
    }

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
              <input className="textbox" type="text" placeholder="Enter OTP" onChange={(e) => setOTP(e.target.value)}/>
            </div>
          )}

          {!showOTP && ( 
            <div className="input-container">
              <input className="textbox" type="text" placeholder="ID Number" onChange={(e) => setIdNumber(e.target.value)}/>
            </div>
          )}

          {showOTP ? ( 
            <button type="submit" className="btnContinue" onClick={verifyOTP}>
              SIGN IN
            </button>
          ) : (
            <button
              type="button"
              className="btnContinue"
              onClick={sendIdNumber}
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