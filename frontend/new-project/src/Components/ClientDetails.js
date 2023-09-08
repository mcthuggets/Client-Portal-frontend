
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useAuthContext } from "../AuthContext";
import { useNavigate } from 'react-router-dom';
import Sidebar from "./Sidebar";
import {FaRegUserCircle} from 'react-icons/fa'
import '../Css/client.css';

const ClientDetails = () => {
  const [clientData, setClientData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { authenticated, setAuthenticated } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchClientData = async () => {
      try {
        const response = await axios.get('https://localhost:7207/Client/get-client', {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        });

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
        Cookies.set("unAuthorisedSession",true);
        setAuthenticated(false);
       
       navigate("/"); 
      } finally {
        setLoading(false);
      }
    };

    fetchClientData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!clientData) {
    return <div>Client not found or unauthorized</div>;
  }

  return (
    <div className="app-container"> 
      <Sidebar/>
        <div className='card'>
          <div className='user-icon'><FaRegUserCircle/></div>

          <div className='sub-client'>
        <p><strong>ID:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>{clientData?.id}</p>
        <p><strong>Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong> {clientData?.firstName} {clientData?.surname}</p>
        <p><strong>Gender:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>  {clientData?.gender}</p>
        <p><strong>Birthdate:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong> {clientData?.dateOfBirth}</p>
        <p><strong>Marital Status:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong> {clientData?.maritalStatus}</p>
        <p><strong>Occupation:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong> {clientData?.occupation}</p>
        <p><strong>Email Address:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong> {clientData?.emailAddress}</p>
        </div>
      </div>

    </div>
  );
};

export default ClientDetails;