import '../Css/policy.css';
import { HiOutlineHome } from "react-icons/hi";
import { IoMdBoat } from "react-icons/io";
import { HiDeviceMobile } from "react-icons/hi";
import { FaCarSide } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import VehicleDisplay from './VehicleSection';
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


  const RenderComponentBasedOnCondition = () => {
    switch (sectionKey) {
      case 'vehicleSection':
        return <VehicleDisplay vehicleData={policy.sections.vehicleSection} />;
      case 'otherCase':
        // Add more cases here for other conditions if needed.
        return <div>Other Case Content</div>;
      default:
        return null;
    }
  }
  const handleClick = () => {
    setSectionName("Policy");
  };
 

  return (
    <div>
      
    <RenderComponentBasedOnCondition></RenderComponentBasedOnCondition>
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
    "risks": [
      {
        "riskId": "RISK1234",
        "vehicleType": "Car",
        "riskPremiumAmount": 500,
        "riskExcess": {
          "title": "Risk Excess",
          "details": "Details about the risk excess",
          "message": "Risk excess information",
          "items": [
            {
              "id": "EXC001",
              "code": "EXC_CODE_001",
              "description": "Accident Excess",
              "type": "Fixed",
              "percentage": 0,
              "minimumAmount": 100,
              "maximumAmount": 1000
            },
            {
              "id": "EXC002",
              "code": "EXC_CODE_002",
              "description": "Theft Excess",
              "type": "Percentage",
              "percentage": 5,
              "minimumAmount": 0,
              "maximumAmount": 500
            }
          ]
        },
        "inceptionDate": "2023-07-25T11:22:48.427Z",
        "vehicleDetails": {
          "makeCode": "MAK001",
          "makeDescription": "Toyota",
          "modelDescription": "Corolla",
          "yearManufactured": 2020,
          "registrationNumber": "ABC123",
          "engineNumber": "ENG456",
          "vinNumber": "VIN789"
        },
        "registeredOwner": {
          "name": "John Doe",
          "idNumber": "ID123456789",
          "dateOfBirth": "1990-01-15T00:00:00.000Z"
        },
        "useType": "Personal",
        "residentialAddress": {
          "line1": "123 Main Street",
          "line2": "Apartment 4B",
          "line3": "Suburbia",
          "line4": "Cityville",
          "postalCodeId": "PST123"
        },
        "claimFreeGroup": 3,
        "hasProofOfClaimFreeGroup": true,
        "voluntaryExcess": 250,
        "sumInsuredType": "Comprehensive",
        "sumInsuredAmount": 30000,
        "coverType": "Third Party",
        "premium": {
          "original": 600,
          "discounted": 550,
          "loaded": 0,
          "discountPerc": 10,
          "loadingPerc": 0,
          "nettPremium": 550,
          "grossPremium": 600,
          "sasriaCategory": "Category A",
          "sasriaPremium": 50,
          "sumInsuredAmount": 30000
        }
      },{
        "riskId": "RISK1234",
        "vehicleType": "Car",
        "riskPremiumAmount": 500,
        "riskExcess": {
          "title": "Risk Excess",
          "details": "Details about the risk excess",
          "message": "Risk excess information",
          "items": [
            {
              "id": "EXC001",
              "code": "EXC_CODE_001",
              "description": "Accident Excess",
              "type": "Fixed",
              "percentage": 0,
              "minimumAmount": 100,
              "maximumAmount": 1000
            },
            {
              "id": "EXC002",
              "code": "EXC_CODE_002",
              "description": "Theft Excess",
              "type": "Percentage",
              "percentage": 5,
              "minimumAmount": 0,
              "maximumAmount": 500
            }
          ]
        },
        "inceptionDate": "2023-07-25T11:22:48.427Z",
        "vehicleDetails": {
          "makeCode": "MAK001",
          "makeDescription": "Toyota",
          "modelDescription": "Corolla",
          "yearManufactured": 2020,
          "registrationNumber": "ABC123",
          "engineNumber": "ENG456",
          "vinNumber": "VIN789"
        },
        "registeredOwner": {
          "name": "John Doe",
          "idNumber": "ID123456789",
          "dateOfBirth": "1990-01-15T00:00:00.000Z"
        },
        "useType": "Personal",
        "residentialAddress": {
          "line1": "123 Main Street",
          "line2": "Apartment 4B",
          "line3": "Suburbia",
          "line4": "Cityville",
          "postalCodeId": "PST123"
        },
        "claimFreeGroup": 3,
        "hasProofOfClaimFreeGroup": true,
        "voluntaryExcess": 250,
        "sumInsuredType": "Comprehensive",
        "sumInsuredAmount": 30000,
        "coverType": "Third Party",
        "premium": {
          "original": 600,
          "discounted": 550,
          "loaded": 0,
          "discountPerc": 10,
          "loadingPerc": 0,
          "nettPremium": 550,
          "grossPremium": 600,
          "sasriaCategory": "Category A",
          "sasriaPremium": 50,
          "sumInsuredAmount": 30000
        }
      }
    ]
  }

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