import '../Css/policy.css';
import PolicyImg from './PolicyImg.jpg';
import { HiOutlineHome } from "react-icons/hi";
import { IoMdBoat } from "react-icons/io";
import { HiDeviceMobile } from "react-icons/hi";
import { FaCarSide } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import VehicleDisplay from './VehicleSection';
import { SectionProvider } from './sectionContext';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { useSectionContext } from './sectionContext';
import PropertySection from './PropertySection';
import policy from './data';
import PersonalAccident from './PersonalAccident';
import AllRisk from './AllRiskSection';
import PersonalComputer from './PersonalComputerSection';

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
      case 'buildingSection':
        return <PropertySection PropertyData={policy.sections.buildingSection}/>;
      case 'personalAccidentSection':
        return<PersonalAccident PersonalAccidentData={policy.sections.personalAccidentSection}/>;
      case 'PersonalComputerSection':
        return<PersonalComputer PersonalComputerData={policy.sections.personalComputerSection}/>;
      case 'allRiskSection':
        return<AllRisk AllRiskData={policy.sections.allRiskSection}/>;
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
<div className="cover-layout">
    <div className="cards-container">

      
        {Object.keys(sections).map((sectionKey) => {
          const section = sections[sectionKey];
          return (

            <div className="img-content" key={sectionKey}>
              <Child name={sectionKey} section={section} renderIcon={renderIcon(sectionKey)} ></Child>
            </div>

          );
        })}
   
    </div>   </div>

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
        
      <Carousel showThumbs={false} showStatus={false}>
        <div className="card-container">
        
          <OverviewComponent sections={policy.sections} />
         
        </div> </Carousel>
       
     


        
      </div>
:
      <div>
        <SectionParent sectionKey={sectionName}></SectionParent>
      </div>}
      </div></div>

      <div className="right-sidebar">
        {/* Policy card */}
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

        {/* Broker Card */}
        <div className="broker-contact-card">

          <h3 id="my">Need help?</h3>
          <h1>Contact your broker</h1>
          
            <div class="image-with-text">
              <img src="{profileimg}" alt="brokerimg" className="bkimg" />
              <div className="text">
              </div>
            </div>
            <p>{policy.broker.name}</p>
            <p>email: {policy.broker.email}</p>
            <p>Cell Number: {policy.broker.cellNumber}</p>
         
        </div>

      </div>


    </div>


  )
}
export default MyPolicyShell;