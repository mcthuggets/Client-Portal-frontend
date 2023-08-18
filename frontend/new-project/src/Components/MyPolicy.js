import "../Css/policy.css";
//icon imports
import {
  HiOutlineHome,
  HiDesktopComputer,
  HiDeviceMobile,
  HiClipboardList,
  HiScale,
  HiStar,
  HiOutlineUserGroup,
} from "react-icons/hi";
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
//images
import PolicyImg from "./images/PolicyImg.jpg";
import AllRiskSvg from "./images/All-Risk.svg";
import CarSvg from "./images/Car.svg";
import CondtionsSvg from "./images/Conditions.svg";
import ContentsSvg from "./images/Contents.svg";
import PersonalAccidentSvg from "./images/Personal-Accident.svg";
import PersonalComputerSvg from "./images/Personal-Computer.svg";
import PersonalLiabilitySvg from "./images/Personal-Liability.svg";
import SpecialCoverageSvg from "./images/Special_Coverage.svg";
import PropertySvg from "./images/Property.svg";
import PaymentsSvg from "./images/Payments.svg"
//axios
import axios from "axios";
//component imports
import Loading from "./Loading";
import Sidebar from "./Sidebar";

import Cookies from "js-cookie";

// Child Component
const Child = ({ name, section, renderIcon }) => {
  const { setSectionName } = useSectionContext();

  const handleClick = () => {
    setSectionName(name);
  };

  let nameToBeDisplayed = "";
  let imageToBeDisplayed = "";

  switch (name) {
    case "allRiskSection":
      nameToBeDisplayed = "All Risk";
      imageToBeDisplayed = AllRiskSvg;
      break;

    case "buildingSection":
      nameToBeDisplayed = "Building";
      imageToBeDisplayed = PropertySvg;
      break;

    case "contentSection":
      nameToBeDisplayed = "Contents";
      imageToBeDisplayed = ContentsSvg;
      break;

    case "generalConditionsSection":
      nameToBeDisplayed = "General Conditions";
      imageToBeDisplayed = CondtionsSvg;
      break;

    case "personalComputerSection":
      nameToBeDisplayed = "Personal Computer";
      imageToBeDisplayed = PersonalComputerSvg;
      break;

    case "personalAccidentSection":
      nameToBeDisplayed = "Personal Accident";
      imageToBeDisplayed = PersonalAccidentSvg;
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
        <img src={imageToBeDisplayed}></img>
        <button> See your coverage </button>
        <p> Premium: R{section.totalPremiumAmount} </p>
      </div>
    </>
  );
};

// Helper function to render icons based on sectionKey
const renderIcon = (sectionKey) => {
  switch (sectionKey) {
    case "allRiskSection":
      return (
        <>
          <HiDeviceMobile className="icon" />
          <p className="cheading">All risk</p>
        </>
      );
    case "buildingSection":
      return (
        <>
          <HiOutlineHome className="icon" />
          <p className="cheading">Property</p>
        </>
      );
    case "contentSection":
      return (
        <>
          <FaBlender className="icon" />
          <p className="cheading">Content</p>
        </>
      );
    case "vehicleSection":
      return (
        <>
          <FaCarSide className="icon" />
          <p className="cheading">Vehicle</p>
        </>
      );
    case "personalLiabilitySection":
      return (
        <>
          <HiScale className="icon" />
          <p className="cheading">Personal Liability</p>
        </>
      );
    case "specialCoverSection":
      return (
        <>
          <HiStar className="icon" />
          <p className="cheading">Special Cover</p>
        </>
      );
    case "personalComputerSection":
      return (
        <>
          <HiDesktopComputer className="icon" />
          <p className="cheading">Personal Computer</p>
        </>
      );
    case "generalConditionsSection":
      return (
        <>
          <HiClipboardList className="icon" />
          <p className="cheading">General Conditions</p>
        </>
      );
    case "personalAccidentSection":
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
  const { policy } = useSectionContext();
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
  const [policies, setPolicies] = useState([]);
  const [filteredPolicies, setFilteredPolicies] = useState([]);
  const { sectionName } = useSectionContext();
  const { setSectionName } = useSectionContext();
  const { policy } = useSectionContext();
  const { setPolicy } = useSectionContext();

  const fetchPolicy = async (polNo) => {
    try {
      setSectionName("Loading");
      console.log("Fetching Policy", polNo);
      const config = {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      };
      const response = await axios.get(
        `https://localhost:7207/Policy/get-policy/${polNo}`,
        config
      );

      setPolicy(response.data);
      console.log(response.data);
      insurerImageSetter(response.data)

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
    setPolicies(JSON.parse(Cookies.get("policies")));
    setFilteredPolicies(JSON.parse(Cookies.get("policies")));
  }, []);

  //policy list - changes css for selected policy
  const [selectedItem, setSelectedItem] = useState("");

  function handleSelectedItem(policyId) {
    setSelectedItem(policyId);
  };

  // selects insurer logo
  const [insurer, setInsurer] = useState(null)

  function insurerImageSetter(policy) {
    const product = policy.premiumCollection.product;

    console.log(product);

    // Define a mapping of includes to insurers
    var includeToInsurer = {
        "VPM03 Absa Plus": "Absa",
        "SAN05 Santam Personal Policy": "Santam",
        "VPM04 Premium Insure": "insurer3",
        
    };

    // Check if the product is in the mapping and set the insurer accordingly
    if (product in includeToInsurer) {
        setInsurer(includeToInsurer[product]);
        console.log('hi');
    } else {
        // Default case if none of the includes match
    }
  }

  return (
    <>
    <div className="app-container">
      <Sidebar />
      
      <div className="main-content">
        <div>
          {sectionName === "Policy" ? (
            <div>
            <h2> {insurer}</h2>
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
                      <h1 className="top-left"> {policy.premiumCollection.product} </h1>
                      <div >
                        <div className="text-container">

                      
                          <p className="top">
                            <strong>ID:</strong> {policy.id} {policy.status}
                          </p>
                          <p>
                            <strong>First Inception Date:</strong>{" "}
                            {policy.firstInceptionDate}
                          </p>
                          <p>
                            <strong>Effective Date:</strong>{" "}
                            {policy.effectiveDate}
                          </p>
                          <p>
                            <strong>Renewal Date:</strong> {policy.renewalDate}
                          </p>
                          <p>
                            <strong>Period:</strong> {policy.period}
                          </p>
                          <p>
                            <strong>Renewal Period:</strong>{" "}
                            {policy.renewalPeriod}
                          </p>
                          <p>
                            <strong>Premium:</strong>{" "}
                            R {policy.premiumCollection.futureMonthlyPremium}
                          </p>
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
                {policy.sections.allRiskSection && (
                  <li className="cards-container" key="child-1">
                    <Child
                      name="allRiskSection"
                      section={sectionName}
                      renderIcon={renderIcon("allRiskSection")}
                    />
                  </li>
                )}

                {policy.sections.vehicleSection && (
                  <li className="cards-container" key="child-2">
                    <Child
                      name="vehicleSection"
                      section={sectionName}
                      renderIcon={renderIcon("vehicleSection")}
                    />
                  </li>
                )}
                {policy.sections.contentSection && (
                  <li className="cards-container" key="child-3">
                    <Child
                      name="contentSection"
                      section={sectionName}
                      renderIcon={renderIcon("contentSection")}
                    />
                  </li>
                )}

                {policy.sections.buildingSection && (
                  <li className="cards-container" key="child-4">
                    <Child
                      name="buildingSection"
                      section={sectionName}
                      renderIcon={renderIcon("buildingSection")}
                    />
                  </li>
                )}

                {policy.sections.personalComputerSection && (
                  <li className="cards-container" key="child-5">
                    <Child
                      name="personalComputerSection"
                      section={sectionName}
                      renderIcon={renderIcon("personalComputerSection")}
                    />
                  </li>
                )}

                {policy.sections.personalAccidentSection && (
                  <li className="cards-container" key="child-6">
                    <Child
                      name={"personalAccidentSection"}
                      section={sectionName}
                      renderIcon={renderIcon("personalAccidentSection")}
                    />
                  </li>
                )}

                {policy.sections.personalLiabilitySection && (
                  <li className="cards-container" key="child-7">
                    <Child
                      name="personalLiabilitySection"
                      section={sectionName}
                      renderIcon={renderIcon("personalLiabilitySection")}
                    />
                  </li>
                )}
                {policy.sections.specialCoverSection && (
                  <li className="cards-container" key="child-8">
                    <Child
                      name="specialCoverSection"
                      section={sectionName}
                      renderIcon={renderIcon("specialCoverSection")}
                    />
                  </li>
                )}
              </div>

              <div className="policy-other-cards">
                
                  {policy.sections.generalConditionsSection && (
                    <div className="gc-card">
                      <h2> General Conditions </h2>
                      <img src={CondtionsSvg}></img>
                      <div className="arrow-right"> </div>
                    </div>
                  )}
                

                
                  {policy.sections.generalConditionsSection && (
                    <div className="gc-card">
                      <h2> Payment </h2>
                      <img src={PaymentsSvg}></img>
                      <div className="arrow-right"> </div>
                    </div>
                  )}
                
              </div>
            </div>
          ) : (
            <div>
              {sectionName === "Loading" ? (
                <Loading />
              ) : (
                <SectionParent sectionKey={sectionName} />
              )}
            </div>
          )}
        </div>
      </div>

      <div className="right-sidebar">
        {/* Policy card */}
        <div className="policy-card">
          <h2 style={{ textAlign: "center" }}>Select Policy</h2>
          <div className="separator"></div>
          <hr />

          <div className="filter">
            <div className="policy">
            <ul>
              {filteredPolicies.map((policy) => (
                <li key={policy.id}
                    onClick={ () => handleSelectedItem(policy.id)}
                    className={`nav-item ${selectedItem === policy.id ? "policy-selected-li" : ""}`}
                >
                  <p onClick={() => changePolicy(policy.id)}>
                    Pno:{policy.id}-{policy.status}
                  </p>
                </li>
              ))}
            </ul>

            </div>

          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default MyPolicyShell;
