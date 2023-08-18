import React, { useState } from "react";
import Cookies from "js-cookie";
import LoginBackground from "../Components/images/loginBackground.png";
import "../Css/Login.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const Login = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

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
Cookies.remove();
    const apiUrl = 'https://localhost:7207/OTP/verify-otp';

    const data = {
      otp: otp,
      idNumber: idNumber
    };

    console.log(data);
    axios.post(apiUrl, data)
    .then(response => {
      if (response.status === 200) {
        
  
        try {
          const policiesJson = JSON.stringify(response.data.policies);
          Cookies.set("token", response.data.token, { expires: 7 });
          Cookies.set("policies", policiesJson);
          navigate('/policies');
        } catch (error) {
          console.error('Error serializing policies:', error);
        }
      } else {
        console.error(response);
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  
      

  }
  
  return (
    <><div className="login-form">
      <form>
        <img
          className="login-container"
          src={LoginBackground}
          alt="Login Background" />

        <p className="sign">Sign in to your account</p>

        {showOTP && ( // Conditionally render OTP input
          <div className="input-container">
            <input className="textbox" type="text" placeholder="Enter OTP" onChange={(e) => setOTP(e.target.value)} />
          </div>
        )}

        {!showOTP && (
          <div className="input-container">
            <input className="textbox" type="text" placeholder="ID Number" onChange={(e) => setIdNumber(e.target.value)} />
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