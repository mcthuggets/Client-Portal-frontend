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
//import policy from "./data";


import axios from 'axios';

// Child Component
const Child = ({ name, content, renderIcon }) => {
  const { setSectionName } = useSectionContext();

  const handleClick = () => {
    setSectionName(name);
  };

  return (
    <button onClick={handleClick}>
      <div className="separator">{renderIcon}</div>
      {content}

    </button>
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
  const{policy}= useSectionContext();
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

  const [policyNo, setPolicyNo] = useState("054");
  const [policies, setPolicies] = useState([]);
  const [filteredPolicies, setFilteredPolicies] = useState([]);
  const [statusSelector, setStatusSelector] = useState("all");
  const { sectionName } = useSectionContext();
  const {setSectionName}=useSectionContext();
  const {policy } = useSectionContext();
  const { setPolicy } = useSectionContext();

  const fetchData = async () => {
    try {
      
      const response = await axios.get('https://localhost:7207/Policy/get-policyList/8910265098089');
      setPolicies(response.data);

    
      setFilteredPolicies(response.data);
      

    } catch (error) {

    }
  };


  const fetchPolicy = async (polNo) => {
    try {
      setSectionName("Loading");
      console.log("Fetching Policy", polNo);
      const response = await axios.get(`https://localhost:7207/Policy/get-policy/20351588-${polNo}`);
      
      setPolicy(response.data);
  
      console.log("Finished fetching policy");
      
      setSectionName("Policy");
    } catch (error) {
      console.error("Error fetching policy:", error);
      setSectionName("Error");
    }
  };

  const changePolicy = (polNo) => {
  
fetchPolicy(polNo);
  };

  useEffect(() => {

    fetchData();
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
                    

                      <h1 className="top-left"> Policy Information</h1>
                      <div className="text-container">
                        <div>
                          <p>Policy Holder:</p>
                          <h2>Policy Details</h2>
                          <p><strong>ID:</strong> {policy.id}</p>
                          <p><strong>Status:</strong> {policy.status}</p>
                          <p><strong>Product:</strong> {policy.premiumCollection.product}</p>
                          <p><strong>First Inception Date:</strong> {policy.firstInceptionDate}</p>
                          <p><strong>Effective Date:</strong> {policy.effectiveDate}</p>
                          <p><strong>Renewal Date:</strong> {policy.renewalDate}</p>
                          <p><strong>Period:</strong> {policy.period}</p>
                          <p><strong>Renewal Period:</strong> {policy.renewalPeriod}</p>
                          <p><strong>Policy Fee:</strong> {policy.policyFee}</p>
                          <p><strong>Broker Fee:</strong> {policy.brokerFee}</p>
                          <p><strong>Commission:</strong> {policy.commission}</p>
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

                {policy.sections.personalComputerSection && (
                  <li className="cards-container" key="child-5">
                    <div className="img-content">
                      <Child
                        name="personalComputerSection"
                        renderIcon={renderIcon("personalComputerSection")}
                      />

                    </div>
                  </li>
                )}

                {policy.sections.personalAccidentSection && (
                  <li className="cards-container" key="child-6">
                    <div className="img-content">
                      <Child
                        name="personalComputerSection"
                        renderIcon={renderIcon("personalComputerSection")}
                      />

                    </div>
                  </li>
                )}

                {policy.sections.personalLiabilitySection && (
                  <li className="cards-container" key="child-7">
                    <div className="img-content">
                      <Child
                        name="personalLiabilitySections"
                        renderIcon={renderIcon("personalLiabilitySection")}
                      />

                    </div>
                  </li>
                )}
                {policy.sections.specialCoverSection && (
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

{sectionName === "Loading"?

  <h1>loading</h1>:
              <SectionParent sectionKey={sectionName} /> 
              }
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
                  <button onClick={() => changePolicy(policy.id)}>Pno:{policy.id}-{policy.status}</button>
                        
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
