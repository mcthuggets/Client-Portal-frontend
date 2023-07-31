import '../Css/policy.css';
import PolicyImg from './PolicyImg.jpg';
import { HiOutlineHome } from "react-icons/hi";
import { HiDeviceMobile } from "react-icons/hi";
import { FaCarSide } from "react-icons/fa";
import React, { useState, useEffect } from "react";
//
import VehicleDisplay from './PolicySections/VehicleSection';
import PersonalLiabilityDisplay from './PolicySections/PersonalLiabilityDisplay';
import SpecialCoverDisplay from './PolicySections/SpecialCoverDisplay';
import GeneralConditionsDisplay from './PolicySections/GeneralConditionsDisplay';
import { SectionProvider } from './sectionContext';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
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
      case 'personalLiabilitySection':
        return <PersonalLiabilityDisplay liabilityData={policy.sections.personalLiabilitySection} />;
      case 'specialCoverSection':
        return <SpecialCoverDisplay coverData={policy.sections.specialCoverSection} />;
      case 'generalConditionsSection':
        return <GeneralConditionsDisplay conditionsData={policy.sections.generalConditionsSection} />;
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
      <button onClick={handleClick}>back to policy</button>
    <RenderComponentBasedOnCondition></RenderComponentBasedOnCondition>
  
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
      "totalPremiumAmount": 3500.00,
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
        }
      ]
    },
    "specialCoverSection": {
      "totalPremiumAmount": 150,
      "risks": [
        {
          "riskId": "SPECIAL_RISK001",
          "postalCode": "12345",
          "items": [
            {
              "itemId": "ITEM001",
              "rateCode": {
                "code": "RC001",
                "description": "Special Coverage A"
              },
              "sumInsuredAmount": 10000,
              "premiumAmount": 150,
              "inceptionDate": "2023-07-31T08:49:36.939Z",
              "message": "Special Coverage A - Premium payment successful.",
              "premium": {
                "original": 150,
                "discounted": 150,
                "loaded": 0,
                "discountPerc": 0,
                "loadingPerc": 0,
                "nettPremium": 150,
                "grossPremium": 150,
                "sasriaCategory": "Category B",
                "sasriaPremium": 50,
                "sumInsuredAmount": 10000
              },
              "description": "Special Coverage A provides coverage for specific events.",
              "isCrossSale": true
            }
          ]
        }
      ]
    },
    "generalConditionsSection": {
      "totalPremiumAmount": 0,
      "risks": [
        {
          "riskId": "GEN_CONDITIONS_RISK001",
          "postalCode": "67890",
          "items": [
            {
              "memoCode": {
                "code": "MEMO001",
                "description": "Memo for General Condition A"
              },
              "partialConditionWording": "This memo provides additional information about General Condition A.",
              "inceptionDate": "2023-07-31T08:49:36.939Z",
              "message": "General Condition A - Memo details successfully saved.",
              "printOnSchedule": true
            }
          ]
        }
      ]
    }
    
  },
  // The broker details remain the same
  "broker": {
    "name": "Jane Smith",
    "email": "jane@example.com",
    "cellNumber": "123-456-7890",
    "profileImg": "https://example.com/broker_profile.jpg"
  }
};




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



<div className="app-container">
      <div className='main-content'>

    <div>
    {(sectionName==="Policy")?
      <div id='policy-banner'>
        <div className="main">
          <div className="card">
            <div className="card-content">

              <img
                className="policy-img"
                src={PolicyImg}
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
        
      
        <div className="card-container">
        <Carousel showThumbs={false} showStatus={false}>
          <OverviewComponent sections={policy.sections} />
          </Carousel>
        </div>
       
     


        <button> click me </button>
      </div>
:
      <div>
        <SectionParent sectionKey={sectionName}></SectionParent>
      </div>}
      </div></div>

      <div className="right-sidebar">

        <div className="policy-card">
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

        <div className="broker-contact-card">

          <h3 id="my">Need help?</h3>
          <h1>Contact your broker</h1>
          
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


  )
}
export default MyPolicyShell;