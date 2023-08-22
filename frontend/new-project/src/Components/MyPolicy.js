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
import { FaArrowsRotate } from "react-icons/fa6"
import React, { useState, useEffect } from "react";

//section imports
import VehicleDisplay from "./PolicySections/VehicleSection";
import ContentsSectionDisplay from "./PolicySections/ContentsDisplay";
import PersonalLiabilityDisplay from "./PolicySections/PersonalLiabilityDisplay";
import SpecialCoverDisplay from "./PolicySections/SpecialCoverDisplay";
import PersonalAccident from "./PolicySections/PersonalAccident";
import AllRisk from "./PolicySections/AllRiskSection";
import PersonalComputer from "./PolicySections/PersonalComputerSection";
import PropertySection from "./PolicySections/PropertySection";
import GeneralConditionsDisplay from "./PolicySections/GeneralConditionsDisplay";
import PaymentDisplay from "./PolicySections/PaymentDisplay";
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
// insurer logos
import BryteLogo from './images/InsurerLogos/bryte.png'
import AbsaLogo from './images/InsurerLogos/Absa.png'
import OldMutualLogo from './images/InsurerLogos/Old-Mutual.png'
import SanlamLogo from './images/InsurerLogos/Sanlam.png'
import SantamLogo from './images/InsurerLogos/santam.png'

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
  let flavortextToBeDisplayed =""

  switch (name) {
    case "allRiskSection":
      nameToBeDisplayed = "All Risk";
      imageToBeDisplayed = AllRiskSvg;
      flavortextToBeDisplayed = "Coverage for your personal belongings."
      break;

    case "buildingSection":
      nameToBeDisplayed = "Building";
      imageToBeDisplayed = PropertySvg;
      flavortextToBeDisplayed = "Coverage for your home and offices."
      break;

    case "contentSection":
      nameToBeDisplayed = "Contents";
      imageToBeDisplayed = ContentsSvg;
      flavortextToBeDisplayed = "Coverage for the things in your home and offices."
      break;

    case "generalConditionsSection":
      nameToBeDisplayed = "General Conditions";
      imageToBeDisplayed = CondtionsSvg;
      flavortextToBeDisplayed = ""
      break;

    case "personalComputerSection":
      nameToBeDisplayed = "Personal Computer";
      imageToBeDisplayed = PersonalComputerSvg;
      flavortextToBeDisplayed ="Protection for your computer and other electronics."
      break;

    case "personalAccidentSection":
      nameToBeDisplayed = "Personal Accident";
      imageToBeDisplayed = PersonalAccidentSvg;
      flavortextToBeDisplayed = "Insurance against accidental injury, disability or even death."
      break;

    case "personalLiabilitySection":
      nameToBeDisplayed = "Personal Liability";
      imageToBeDisplayed = PersonalLiabilitySvg;
      flavortextToBeDisplayed = "Coverage dealing with legal expenses and damages."
      break;

    case "specialCoverSection":
      nameToBeDisplayed = "Special Cover";
      imageToBeDisplayed = SpecialCoverageSvg;
      flavortextToBeDisplayed = "Protection for the most unique of circumstances."
      break;

    case "vehicleSection":
      nameToBeDisplayed = "Vehicle";
      imageToBeDisplayed = CarSvg;
      flavortextToBeDisplayed = "Coverage for your cars, bikes and trucks (but not boats, planes or trains)"
      break;
  }

  return (
    <>
      <div className="section-card" onClick={handleClick}>
        <h2> {nameToBeDisplayed}</h2>
        <img src={imageToBeDisplayed}></img>
        <button> See your coverage </button>
        <p> {flavortextToBeDisplayed} </p>
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
      case "contentSection":
        return <ContentsSectionDisplay ContentsData={policy.sections.contentSection} />;
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
        case "personalLiabilitySection":
          return (
            <>
            <PersonalLiabilityDisplay
              liabilityData={policy.sections.personalLiabilitySection}
            />
          </>
        );
        case "paymentSection":
          return (
            <>
            <PaymentDisplay
              paymentData={policy.payment}
            />
          </>
        );
        case "generalConditionsSection":
          return (
            <GeneralConditionsDisplay
              conditionsData={policy.sections.generalConditionsSection}
            />
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

      setPolicy(response.data.pol);
      Cookies.set("token", response.data.token, { expires: 7 });      
      console.log(response.data.pol);
      insurerImageSetter(response.data.pol)

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
  const [insurerLogo, setInsurerLogo] = useState(null)

  function insurerImageSetter(policy) {

    const product = policy.premiumCollection.product;


    console.log(product);

    // Define a mapping of includes to insurers
    var includeToInsurer = {
        "VPM03 Absa Plus": "Absa",
        "VPM04 Premium Insure": "Absa",
        "SAN05 Santam Personal Policy": "Santam",
        "ZUR02 Bryte Insurance Company limited" : "Bryte",
        "MFG01 Old Mutual Insure Limited" : "Old Mutual"
    };

    // Check if the product is in the mapping and set the insurer accordingly
    if (product in includeToInsurer) {
        setInsurer(includeToInsurer[product]);
        
        if (includeToInsurer[product] === "Absa") {
          console.log(includeToInsurer[product]);
          setInsurerLogo(AbsaLogo);
        } else if (includeToInsurer[product] === "Santam") {
          console.log(includeToInsurer[product]);
          setInsurerLogo(SantamLogo);
        } else if (includeToInsurer[product] === "Sanlam") {
          console.log(includeToInsurer[product]);
          setInsurerLogo(SanlamLogo);
        } else if (includeToInsurer[product] === "Old Mutual") {
          console.log(includeToInsurer[product]);
          setInsurerLogo(OldMutualLogo);
        } else if (includeToInsurer[product] === "Bryte") {
          console.log(includeToInsurer[product]);
          setInsurerLogo(BryteLogo);
        } else {
          // Default case if none of the includes match
        }
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
              <div className="main">
                <div className="card">
                  <div className="card-content">

                  <div className="flex-container">
                    <div className="policy-details">
                      <h1>{policy.premiumCollection.product}</h1>
                      <p>{policy.id}</p>
                    </div>
                    <img
                      width={'100px'}
                      height={'100px'}
                      className="policy-img-2"
                      src={insurerLogo}
                      alt="policy"
                    />
                  </div>

                  <hr />
                    <span key={policy.id}>
                      
                      <div >
                        <div className="text-container">
                          <p>
                            <strong>Premium:</strong>{" "}
                            R {policy.premiumCollection.futureMonthlyPremium}
                          </p>
                          <p>
                            <strong>Period:</strong> {policy.period}
                          </p>
                          <p>
                            <strong> <FaArrowsRotate /> </strong>{" "}
                            {policy.renewalPeriod}
                          </p>
                        </div>

                        <div className="text-container">

                      
                          
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
                          
                        </div>
                      </div>
                      <hr />
                      <button style={{ margin: "5px" }}>Documents</button>
                    </span>
                  </div>
                </div>
              </div>


              <br /> 

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
                    <div  className="gc-card"
                          onClick={() => setSectionName("generalConditionsSection")}>
                      <h2> General Conditions </h2>
                      <img src={CondtionsSvg}></img>
                      <div className="arrow-right"> </div>
                    </div>
                  )}
                

                
                  {policy.payment && (
                    <div  className="gc-card"
                          onClick={() => setSectionName("paymentSection")}>
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
        <div className="sticky">
          <div className="policy-card ">
            <h2 style={{ textAlign: "center", color:"#1c1fd4" }}>Select Policy</h2>
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

          <div className="policy-card ">
            <h2 style={{ textAlign: "center" }}>Nav</h2>
            <div className="separator"></div>
            <hr />

            <div className="filter">
              <div className="policy">
              

              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default MyPolicyShell;
