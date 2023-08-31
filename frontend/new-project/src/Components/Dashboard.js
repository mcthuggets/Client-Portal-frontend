// import Sidebar from "./Sidebar";
// const Dashboard = ()=>{
//     return (
//         <>

//         <div className="app-container">
//         <Sidebar/>
//         <div className='main-content'>
//         <div className="dash-heading">
//             <h1>Welcome, David</h1>
//             <p>July 19, 2023</p>
//         </div>
//         <div className="dash-container">
//             <h1>Billing and Payment</h1>
//         <div className="dash-card">
//             <p>123456789</p>
//             <div className="separator"></div>

//         </div>
//         </div>
//         </div>
//         </div>
//         </>
//     )
//     }
// export default Dashboard;

// Dashboard.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useAuthContext } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import "../Css/Dashboard.css";

// import autoInsuranceImage from "../Components/images/PolicyImg.jpg";


const Dashboard = () => {
  const [clientData, setClientData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { authenticated, setAuthenticated } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchClientData = async () => {
      try {
        const response = await axios.get(
          "https://localhost:7207/Client/get-client",
          {
            headers: {
              Authorization: `Bearer ${Cookies.get("token")}`,
            },
          }
        );

        if (response.status === 200) {
          setClientData(response.data.clientData);
          Cookies.set("token", response.data.token, { expires: 7 });
        } else {
          // Handle other response status codes if needed
        }
      } catch (error) {
        //logs out
        Cookies.remove("token");
        Cookies.remove("policies");
        Cookies.set("unAuthorisedSession", true);
        setAuthenticated(false);

        navigate("/");
      } finally {
        setLoading(false);
      }
    };

    fetchClientData();
  }, []);

  return (
    <>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          {" "}
          <div className="App-content">
            <h1>
              <strong>Welcome,</strong> {clientData?.firstName}{" "}
              {clientData?.surname}!
            </h1>
            <div className="desh-cards">
              <div className="App-card">
            
              </div>

              <div className="App-card">
               
              </div>
            </div>
            <div className="App-card">
              <h3>Quick Links</h3>
              <div className="quick-links">
                <p>
                  <Link to="/policies">View Policies</Link> <br />
                </p>
                <p>
                  <Link to="/clientdetails">View Profile</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
