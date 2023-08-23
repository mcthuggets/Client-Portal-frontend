import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useAuthContext } from "../AuthContext";
import { useNavigate } from 'react-router-dom';

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
        /*Cookies.remove("token");
        Cookies.remove("policies")
        setAuthenticated(false);
       navigate("/"); */
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
    <div>
      <h1>Client Details</h1>
      <p>ID: {clientData?.id}</p>
      <p>Name: {clientData?.firstName} {clientData?.surname}</p>
      <p>Gender: {clientData?.gender}</p>
      <p>Birthdate: {clientData?.dateOfBirth}</p>
      <p>Marital Status: {clientData?.maritalStatus}</p>
      <p>Occupation: {clientData?.occupation}</p>
      <p>Email Address: {clientData?.emailAddress}</p>
      {/* Render other client data here */}
    </div>
  );
};

export default ClientDetails;
