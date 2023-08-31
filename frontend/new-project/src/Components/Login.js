import React, { useState } from "react";
import Cookies from "js-cookie";
import LoginBackground from "../Components/images/loginBackground.png";
import "../Css/Login.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from "../AuthContext";
const Login = () => {
  
  const navigate = useNavigate();
  const { setAuthenticated } = useAuthContext();

  const [showOTP, setShowOTP] = useState(false);
  const [loading, setLoading] = useState(false); // Introduce loading state

  const [idNumber, setIdNumber] = useState(null);
  const [otp, setOTP] = useState(null);

  const sendIdNumber = (e) => {
    e.preventDefault();
    setShowOTP(true);
    console.log(idNumber);

    axios.post('https://localhost:7207/OTP/generate-otp', {
      idNumber: idNumber,
    })
    .then((response) => {
      console.log('OTP generated:', response.data);
      // You can do something with the OTP response here, e.g., store it in state
      // or display it on the UI.
    })
    .catch((error) => {
      console.error('Error generating OTP:', error);
    });
  }

  const verifyOTP = (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when OTP verification begins

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
          
          setAuthenticated(true);
          navigate('/dashboard');
        } catch (error) {
          console.error('Error serializing policies:', error);
        }
      } else {
        console.error(response);
      }
    })
    .catch(error => {
      console.error('Error:', error);
    })
    .finally(() => {
      Cookies.remove("unAuthorisedSession");
      setLoading(false); // Set loading to false after the response is received
    });
  }
  
  return (
    <>
      <div className="login-form">
        <form>
          <img
            className="login-container"
            src={LoginBackground}
            alt="Login Background"
          />

          <p className="sign">Sign in to your account</p>
          {Cookies.get("unAuthorisedSession") ? (
          <>
            <p1>Sorry your session has expired please login again</p1>
          </>
        ) : (
          <>
       
          </>)}
          {showOTP && (
            <div className="input-container">
              <input
                className="textbox"
                type="text"
                placeholder="Enter OTP"
                onChange={(e) => setOTP(e.target.value)}
              />
            </div>
          )}

          {!showOTP && (
            <div className="input-container">
              <input
                className="textbox"
                type="text"
                placeholder="ID Number"
                onChange={(e) => setIdNumber(e.target.value)}
              />
            </div>
          )}

          {loading ? ( // Render loading text if loading is true
            <p>Loging in...</p>
          ) : showOTP ? (
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
    </>
  );
};

export default Login;
