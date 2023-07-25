import '../Css/policy.css';
import { HiOutlineHome } from "react-icons/hi";
import { IoMdBoat } from "react-icons/io";
import { HiDeviceMobile } from "react-icons/hi";
import { FaCarSide } from "react-icons/fa";
import React, { useState, useEffect } from "react";

import { SectionProvider } from './sectionContext';

import { useSectionContext } from './sectionContext';

const Child = ({ name, section, renderIcon }) => {
  const { setSectionName } = useSectionContext();

  const handleClick = () => {
    setSectionName(name);
  };

  return <button onClick={handleClick}>

    <div className="separator">{renderIcon}</div>
    <p>Premium: R{section.totalPremiumAmount}</p>
    {section.risks && (
      <p>{section.risks.length > 1 ? `${section.risks.length} risks` : '1 risk'}</p>
    )}
  </button>
};
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
      return null;
  }
};



const SectionParent= ({sectionKey}) => {
  const { setSectionName } = useSectionContext();


console.log(sectionKey);
  const handleClick = () => {
    setSectionName("Policy");
  };
  console.log( policy.sections[sectionKey]);
 

  return (
    <div>
    
  <button onClick={handleClick}>back to policy</button>
  </div>)
  
};




const policy = {
  "policyNumber": "POL-12345",
  "policyHolder": "John Doe",
  "totalPremium": 2500.00,
  "policyStart": "2023-07-01",
  "intermediaryFee": 150.00,
  "sections": {
    "allRiskSection": {
      "totalPremiumAmount": 500.00,
      "risks": [
        "Mobile phone",
        "Laptop",
        "Camera"
      ]
    },
    "buildingSection": {
      "totalPremiumAmount": 1500.00,
      "risks": [
        "Building",
        "Contents"
      ]
    },
    "vehicleSection": {
      "totalPremiumAmount": 1000.00,
      "risks": [
        "Car",
        "Contents"
      ]
    },

    // Add more sections if needed
  },
  "broker": {
    "name": "Jane Smith",
    "email": "jane@example.com",
    "cellNumber": "123-456-7890",
    "profileImg": "https://example.com/broker_profile.jpg"
  }
}



const policies = [
  {
    "id": "POL-123",
    "status": "active"
  },
  {
    "id": "POL-456",
    "status": "inactive"
  },
  {
    "id": "POL-789",
    "status": "pending"
  },
  {
    "id": "POL-234",
    "status": "expired"
  },
  {
    "id": "POL-567",
    "status": "canceled"
  }
];

const OverviewComponent = ({ sections }) => {



  return (

    <div className="cards-container">

      <div className="cover-layout">
        {Object.keys(sections).map((sectionKey) => {
          const section = sections[sectionKey];
          return (

            <div className="img-content" key={sectionKey}>
              <Child name={sectionKey} section={section} renderIcon={renderIcon(sectionKey)} ></Child>
            </div>

          );
        })}
      </div>
    </div>

  );
};

const MyPolicyShell = () => {


  return (

    <SectionProvider>
      <MyPolicy></MyPolicy>
    </SectionProvider>)
}
const MyPolicy = () => {

  const { sectionName } = useSectionContext();

  const [statusSelector, setStatusSelector] = useState('All');

 

  return (





    <div>
    {(sectionName==="Policy")?
      <div id='policy-banner'>
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

                    <p>{sectionName}</p>
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
                  </div>
                </div>
              </span>

              <div class="separator"></div>
              <button>Documents</button>
            </div>
          </div>

        </div>





        <h3>You are Covered for:</h3>
        <div className="cards-container">
          <OverviewComponent sections={policy.sections} />
        </div>


        <button> click me </button>
      </div>
:
      <div>
        <SectionParent sectionKey={sectionName}></SectionParent>
      </div>}

      <div className="side">

        <div className="brokercard">
          <h2 style={{ textAlign: 'center' }}>Select Policy</h2>
          <p> {statusSelector} </p>
          <div class="separator"></div>
          <select className="filter" onChange={(event) => setStatusSelector(event.target.value)}>
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


    </div>


  )
}
export default MyPolicyShell;