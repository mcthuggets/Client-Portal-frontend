import "../Css/policy.css";
import PolicyImg from "./PolicyImg.jpg";
import profile from "./images/profile.jpg";
//icon imports
import { HiOutlineHome, HiDesktopComputer, HiDeviceMobile, HiClipboardList, HiScale, HiStar, HiOutlineUserGroup } from "react-icons/hi";
import { FaBlender, FaCarSide } from "react-icons/fa";
import React, { useState, useEffect } from "react";
//section imports
import VehicleDisplay from "./PolicySections/VehicleSection";
import PersonalLiabilityDisplay from "./PolicySections/PersonalLiabilityDisplay";
import SpecialCoverDisplay from "./PolicySections/SpecialCoverDisplay";
import GeneralConditionsDisplay from "./PolicySections/GeneralConditionsDisplay";
import PersonalAccident from "./PolicySections/PersonalAccident";
import AllRisk from "./PolicySections/AllRiskSection";
import PersonalComputer from "./PolicySections/PersonalComputerSection";
import PropertySection from "./PolicySections/PropertySection";
//
import { SectionProvider } from "./sectionContext";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useSectionContext } from "./sectionContext";
import policy from "./data";


import axios from 'axios';

// Child Component
const Child = ({ name, section, renderIcon }) => {

 

  const { setSectionName } = useSectionContext();

 

  const handleClick = () => {

    setSectionName(name);

  };

  let nameToBeDisplayed = ''
  let imageToBeDisplayed = ''

  switch (name) {

    case "allRiskSection":
      nameToBeDisplayed = "All Risk";
      imageToBeDisplayed = AllRiskSvg
      break;
 

    case "buildingSection":
      nameToBeDisplayed = "Building";
      imageToBeDisplayed = PropertySvg;
      break;

    case "generalConditionsSection":
      nameToBeDisplayed = "General Conditions";
      imageToBeDisplayed = CondtionsSvg
      break;
 

    case "personalComputerSection":
      nameToBeDisplayed = "Personal Computer";
      imageToBeDisplayed = PersonalComputerSvg
      break;
 

    case "personalAccidentSection":
      nameToBeDisplayed = "Personal Accident";
      imageToBeDisplayed = PersonalAccidentSvg
      break;
 

    case "personalLiabilitySection":
      nameToBeDisplayed = "Personal Liability";
      imageToBeDisplayed = PersonalLiabilitySvg;
      break;

    case "specialCoverSection":
      nameToBeDisplayed = "Special Cover";
      imageToBeDisplayed = SpecialCoverageSvg;
      break;
 

    case "vehicleSection":
      nameToBeDisplayed = "Vehicle";
      imageToBeDisplayed = CarSvg;
      break;

  }

 

  return (

    <>

    <div className="section-card" onClick={handleClick}>

      <h2> {nameToBeDisplayed}</h2>

      <img src={imageToBeDisplayed} ></img>

      <button> See your coverage </button>

      <p> Premium: R{section.totalPremiumAmount} </p>

    </div>

    </>

  );

};

 

// Helper function to render icons based on sectionKey
const renderIcon = (sectionKey) => {
  switch (sectionKey) {
    case 'allRiskSection':
      return (
        <>
          <HiDeviceMobile className="icon" />
          <p className="cheading">All risk</p>
        </>
      );
    case 'buildingSection':
      return (
        <>
          <HiOutlineHome className="icon" />
          <p className="cheading">Property</p>
        </>
      );
      case 'contentSection':
      return (
        <>
          <FaBlender className="icon" />
          <p className="cheading">Content</p>
        </>
      );
    case 'vehicleSection':
      return (
        <>
          <FaCarSide className="icon" />
          <p className="cheading">Vehicle</p>
        </>
      );
    case 'personalLiabilitySection':
      return (
        <>
          <HiScale className="icon" />
          <p className="cheading">Personal Liability</p>
        </>
      );
    case 'specialCoverSection':
      return (
        <>
          <HiStar className="icon" />
          <p className="cheading">Special Cover</p>
        </>
      );
    case 'personalComputerSection':
      return (
        <>
          <HiDesktopComputer className="icon" />
          <p className="cheading">Personal Computer</p>
        </>
      );
    case 'generalConditionsSection':
      return (
        <>
          <HiClipboardList className="icon" />
          <p className="cheading">General Conditions</p>
        </>
      );
    case 'personalAccidentSection':
      return (
        <>
          <HiOutlineUserGroup className="icon" />
          <p className="cheading">Personal Accident</p>
        </>
      );
    default:
      return null;
  }
};

// SectionParent Component
const SectionParent = ({ sectionKey }) => {
  const { setSectionName } = useSectionContext();

  const RenderComponentBasedOnCondition = () => {
    switch (sectionKey) {
      case "vehicleSection":
        return <VehicleDisplay vehicleData={policy.sections.vehicleSection} />;
      case "buildingSection":
        return (
          <PropertySection PropertyData={policy.sections.buildingSection} />
        );
      case "personalAccidentSection":
        return (
          <PersonalAccident
            PersonalAccidentData={policy.sections.personalAccidentSection}
          />
        );
      case "personalComputerSection":
        return (
          <PersonalComputer
            PersonalComputerData={policy.sections.personalComputerSection}
          />
        );
      case "allRiskSection":
        return <AllRisk AllRiskData={policy.sections.allRiskSection} />;
      case "specialCoverSection":
        return (
          <SpecialCoverDisplay
            coverData={policy.sections.specialCoverSection}
          />
        );
      case "generalConditionsSection":
        return (
          <GeneralConditionsDisplay
            conditionsData={policy.sections.generalConditionsSection}
          />
        );
      case "personalLiabilitySection":
        return (
          <>
            <PersonalLiabilityDisplay
              liabilityData={policy.sections.personalLiabilitySection}
            />
          </>
        );
      default:
        return null;
    }
  };

  const handleClick = () => {
    setSectionName("Policy");
  };

  return (
    <div>
      <button onClick={handleClick}>back to policy</button>
      <RenderComponentBasedOnCondition />
    </div>
  );
};

// MyPolicyShell Component
const MyPolicyShell = () => {
  return (
    <SectionProvider>
      <MyPolicy />
    </SectionProvider>
  );
};

// MyPolicy Component
const MyPolicy = () => {

  const [policyNo, setPolicyNo] = useState([]);
  const [policies, setPolicies] = useState([]);
  const [filteredPolicies, setFilteredPolicies] = useState([]);
  const [statusSelector, setStatusSelector] = useState("all");
  const { sectionName } = useSectionContext();
  const { _policy } = useSectionContext();
  const { setPolicy } = useSectionContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://localhost:7207/Policy/get-policyList/8910265098089');
        setPolicies(response.data);
        setFilteredPolicies(response.data);

      } catch (error) {

      }
    };

    fetchData();
  }, []);



  useEffect(() => {
    const fetchPolicy = async () => {
      try {
        const response = await axios.get('https://localhost:7207/Policy/get-policy/20351588-054');
        setPolicy(response.data);
        //set section name back to policy

      } catch (error) {

      }
    };
    fetchPolicy();
  }, []);

  const handleStatusChange = (event) => {
    const selectedStatus = event.target.value;
    setStatusSelector(selectedStatus);

    if (selectedStatus === "All") {
      setFilteredPolicies(policies);
    } else {
      const filtered = policies.filter((policy) => policy.status === selectedStatus);
      setFilteredPolicies(filtered);
    }
  };

  return (
    <div className="app-container">
      <div className="main-content">
        <div>
          {sectionName === "Policy" ? (
            <div>
              <div className="main">
                <div className="card">
                  <div className="card-content">
                    <img
                      className="policy-img"
                      src={PolicyImg}
                      alt="policy"
                      style={{ height: "250px" }}
                    />

                    <span key={policy.id}>
                      <p className="top">{policy.policyNumber}</p>
                      <h1 className="top-left">Policy Information</h1>
                      <div className="text-container">
                        <div>
                          <p>Policy Holder:</p>
                          <p>{policy.client.firstName} {policy.client.surnameOnId}</p>
                        </div>
                        <div>
                          <p>Total Premium:</p>
                          <p>R{_policy.id}</p>
                        </div>
                        <div>
                          <p>Policy start:</p>
                          <p>{policy.policyStart}</p>
                        </div>
                        <div>
                          <p>Intermediary fee:</p>
                          <p>R{policy.intermediaryFee}</p>
                        </div>
                      </div>

                      <hr />

                      <button style={{ margin: "5px" }}>Documents</button>
                    </span>
                  </div>
                </div>
              </div>

              <h3>You are Covered for:</h3>
              <div className="cover-layout">

                {/* Render Child components based on conditions */}


                {policy.sections.allRiskSection && (
                  <li className="cards-container" key="child-1">
                    <div className="img-content">
                      <Child
                        name="allRiskSection"
                        renderIcon={renderIcon("allRiskSection")}
                      />

                    </div>
                  </li>
                )}


                {policy.sections.vehicleSection && (
                  <li className="cards-container" key="child-2">
                    <div className="img-content">
                      <Child
                        name="vehicleSection"
                        renderIcon={renderIcon("vehicleSection")}
                      />

                    </div>
                  </li>
                )}
                {policy.sections.contentSection && (
                  <li className="cards-container" key="child-3">
                    <div className="img-content">
                      <Child
                        name="contentSection"
                        renderIcon={renderIcon("contentSection")}
                      />

                    </div>
                  </li>
                )}


                {policy.sections.buildingSection && (
                  <li className="cards-container" key="child-4">
                    <div className="img-content">
                      <Child
                        name="buildingSection"
                        renderIcon={renderIcon("buildingSection")}
                      />

                    </div>
                  </li>
                )}

                {policy.sections.personalComputerSection &&(
                  <li className="cards-container" key="child-5">
                    <div className="img-content">
                      <Child
                        name="personalComputerSection"
                        renderIcon={renderIcon("personalComputerSection")}
                      />

                    </div>
                  </li>
                )}

{policy.sections.personalAccidentSection &&(
                  <li className="cards-container" key="child-6">
                    <div className="img-content">
                      <Child
                        name="personalComputerSection"
                        renderIcon={renderIcon("personalComputerSection")}
                      />

                    </div>
                  </li>
                )}

{policy.sections.personalLiabilitySection &&(
                  <li className="cards-container" key="child-7">
                    <div className="img-content">
                      <Child
                        name="personalLiabilitySections"
                        renderIcon={renderIcon("personalLiabilitySection")}
                      />

                    </div>
                  </li>
                )}
{policy.sections.specialCoverSection &&(
                  <li className="cards-container" key="child-8">
                    <div className="img-content">
                      <Child
                        name="specialCoverSection"
                        renderIcon={renderIcon("specialCoverSection")}
                      />

                    </div>
                  </li>
                )}


             

             

              </div>


            </div>
          ) : (
            <div>
              <SectionParent sectionKey={sectionName} />
            </div>
          )}
        </div>
      </div>

      <div className="right-sidebar">
        {/* Policy card */}
        <div className="policy-card">
          <h2 style={{ textAlign: "center" }}>Select Policy</h2>
          <div className="separator"></div>
          <select
            className="filter"
            onChange={handleStatusChange}
            value={statusSelector}
          >
            <option value="All">All</option>
            <option value="Pending">Pending</option>
          </select>
          <div className="filter">
            <ul className="policy">
              {filteredPolicies.map((policy) => (
                <li key={policy.id}>
                  <button>Pno:{policy.id}-{policy.status}</button>

                </li>
              ))}
            </ul>
          </div>
        </div>


      </div>
    </div>
  );
};

export default MyPolicyShell;
