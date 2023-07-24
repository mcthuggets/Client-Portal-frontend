import policies from '../Data/Data';

import {policy} from "../Data/Data.js";

import '../Css/policy.css';
import { HiOutlineHome } from "react-icons/hi";
import { IoMdBoat } from "react-icons/io";
import { HiDeviceMobile } from "react-icons/hi";
import { FaCarSide } from "react-icons/fa";
import React, { useState, useEffect } from "react";


//request policy list
//request first active policy and open it

//secction types
/**
 *  buildings
 * conternts
 * all risks
 * personal accident
 * personal liability
 * personal computer
 * motor
 * small crafts
 * Value added products
 * General condiitons 
 * 
 * 
 */
 

const OverviewComponent = ({ sections }) => {
  const renderIcon = (sectionKey) => {
    switch (sectionKey) {
      case 'allRiskSection':
        return (
          <>
            <HiDeviceMobile className="device" />
            <p className="cheading">All risk</p>
          </>
        );
      case 'buildingSection':
        return (
          <>
            <HiOutlineHome className="house" />
            <p className="cheading">Property</p>
          </>
        );
      case 'vehicleSection':
        return (
          <>
            <FaCarSide className="caricon" />
            <p className="cheading">Vehicle</p>
          </>
        );
      case 'personalLiabilitySection':
        return (
          <>
            
            <p className="cheading">Personal Liability</p>
          </>
        );
      case 'specialCoverSection':
        return (
          <>
        
            <p className="cheading">Special Cover</p>
          </>
        );
      case 'personalComputerSection':
        return (
          <>
           
            <p className="cheading">Personal Computer</p>
          </>
        );
      case 'generalConditionsSection':
        return (
          <>
           
            <p className="cheading">General Conditions</p>
          </>
        );
      case 'personalAccidentSection':
        return (
          <>
            
            <p className="cheading">Personal Accident</p>
          </>
        );
      default:
        return null; // Handle the case where the sectionKey doesn't match any case
    }
  };

  return (
    <div className="cards-container">
      <div className="cover-layout">
        {Object.keys(sections).map((sectionKey) => {
          const section = sections[sectionKey];
          return (
            <div className="img-content" key={sectionKey}>
              {renderIcon(sectionKey)}
              <div className="separator"></div>
              <p>Premium: R{section.totalPremiumAmount}</p>
              {section.risks && (
                <p>{section.risks.length > 1 ? `${section.risks.length} risks` : '1 risk'}</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
const MyPolicy =()=>{

  const [statusSelector, setStatusSelector] = useState('All')

  useEffect(() => {
    // URL for the GET request
   

    // Making the GET request using Axios
   
  }, []);
  
    return( 
     
        <>

        {true ?
<div>
        <h1>Policy</h1>
        <div className="main">
        <div className="card">
        <div className="card-content">
          
          <img
            className="policy-img"
            src="https://www.moonstone.co.za/wp-content/uploads/Advance-your-career-in-short-term-insurance-with-Moonstones-new-qualification.jpg"
            alt="policy"
            style={{ height: "250px" }}
          />
          
            <span key={policy}>
              <p className="top">{policy.policyNumber}</p>
              <h1 className="top-left">Policy Information</h1>
              <div className="text-container">
                <div>
                  <p>Policy holder:</p>
                  <span>{policy.policyHolder}</span>
                </div>
                <div>
                  <p>Total Premium:</p>
                  <p>R{policy.totalPremium}</p>
                </div>
                <div>
                  <p>Policy start:</p>
                  <p>{policy.policyStart}</p>
                </div>
                <div>
                  <p>Intermediary fee:</p>
                  <p>R{policy.intermidiaryFee}</p>
                </div>{" "}
              </div>
            </span>
          
          <div class="separator"></div>
          <button>Documents</button>
        </div>
      </div>
  <h3>You are Covered for:</h3>
   <div className="cards-container">
   <OverviewComponent sections={policy.sections} />
 
       </div>

        </div>
</div> :<h1>section</h1>}
        <div className="side">

        <div className="brokercard">
        <h2 style={{textAlign: 'center'}}>Select Policy</h2>
        <p> {statusSelector} </p>
        <div class="separator"></div>
        <select className="filter" onChange={ (event) => setStatusSelector(event.target.value)}>
          <option value="All">All</option>
          <option value="Active">Active</option>
          <option value="Closed">Closed</option>
        </select>
        <div className="policy">
        
        <ul>
        {policies.map(policy => (
        <li key={policy.id}>
          Policy no. {policy.id}, Status: {policy.status}
        </li>
      ))}
        </ul>
        
      </div>
      </div>

        <div className="contact">
       
                  <h3 id="my">Need help?</h3>
      <h1>Contact your broker</h1>
      <div className="brokercard">
      <div class="image-with-text">
        <img src="{profileimg}" alt="brokerimg" className="bkimg" />
        <div className="text">
        </div>
        </div>
        <p>name</p>
        <p>email</p>
        <p>cellnumber</p>
      </div>
    </div>
               
    </div>
            
        
        </>
    )
}
export default MyPolicy;