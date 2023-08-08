import "../Css/policy.css";
import PolicyImg from "./PolicyImg.jpg";
import profile from "./images/profile.jpg";
//icon imports
import { HiOutlineHome, HiDesktopComputer, HiDeviceMobile, HiClipboardList, HiScale, HiStar, HiOutlineUserGroup } from "react-icons/hi";
import { FaCarSide } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import axios from 'axios';
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
import { Carousel } from "react-responsive-carousel";
import { useSectionContext } from "./sectionContext";
import policy from "./data";
import Loading from "./Loading.jsx";
//images
import AllRiskSvg from './images/All-Risk.svg';
import CarSvg from './images/Car.svg';



// Child Component
const Child = ({ name, section, renderIcon }) => {
  const { setSectionName } = useSectionContext();

  const handleClick = () => {
    setSectionName(name);
  };

  return (
    <>
    {/* <div className="">
      <button onClick={handleClick}>
        
        <div className="separator">{renderIcon}</div>
        <p>Premium: R{section.totalPremiumAmount}</p>
        {section.risks && (
          <p>
            {section.risks.length > 1
              ? `${section.risks.length} risks`
              : "1 risk"}
          </p>
        )}
      </button>
    </div> */}

    <div className="section-card" onClick={handleClick}>
      <h2> {name}</h2>
      <img src={AllRiskSvg}></img>
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
          <HiScale className="icon"/>
          <p className="cheading">Personal Liability</p>
        </>
      );
    case 'specialCoverSection':
      return (
        <>
          <HiStar className="icon"/>
          <p className="cheading">Special Cover</p>
        </>
      );
    case 'personalComputerSection':
      return (
        <>
          <HiDesktopComputer className="icon"/>
          <p className="cheading">Personal Computer</p>
        </>
      );
    case 'generalConditionsSection':
      return (
        <>
          <HiClipboardList className="icon"/>
          <p className="cheading">General Conditions</p>
        </>
      );
    case 'personalAccidentSection':
      return (
        <>
          <HiOutlineUserGroup className="icon"/>
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

// OverviewComponent
const OverviewComponent = ({ sections }) => {
  const groupSectionsIntoSets = (items, groupSize) => {
    const groupedItems = [];
    for (let i = 0; i < items.length; i += groupSize) {
      groupedItems.push(items.slice(i, i + groupSize));
    }
    return groupedItems;
  };

  const groupedSections = groupSectionsIntoSets(Object.keys(sections), 5);

  return (
    <div className="cover-layout">


      <Carousel className="carousel" showThumbs={true} showStatus={false}>

        {groupedSections.map((group, groupIndex) => (
          <li className="cards-container" key={`group-${groupIndex}`}>
            {group.map((sectionKey) => {
              const section = sections[sectionKey];
              return(
                  <Child
                    name={sectionKey}
                    section={section}
                    renderIcon={renderIcon(sectionKey)}
                  />
              );
            })}
          </li>
        ))}
      </Carousel>
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
  const { sectionName } = useSectionContext();

  const [statusSelector, setStatusSelector] = useState("all");

  const [policyData, setPolicyData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Define the API endpoint URL
  const apiUrl = 'https://localhost:7207/Policy/get-policy/20351588-023';

  useEffect(() => {
  // Make the GET request using axios
  axios.get(apiUrl)
    .then(response => {
      // Handle successful response
      setPolicyData(response.data);
      console.log("hh " + response.data);
      setLoading(false)
    })
    .catch(error => {
      // Handle error
      console.error('Error fetching policy data:', error);
    });
  }, [] ); // Empty dependency array means this effect runs only once, on component mount


  const policies = [
    {
      id: "POL-123",
      status: "active",
    },
    {
      id: "POL-289",
      status: "active",
    },
    {
      id: "POL-456",
      status: "inactive",
    },
    {
      id: "POL-789",
      status: "pending",
    },
    {
      id: "POL-234",
      status: "expired",
    },
    {
      id: "POL-567",
      status: "canceled",
    },
  ];

  const [filteredPolicies, setFilteredPolicies] = useState(policies);

  const handleStatusChange = (event) => {
    const selectedStatus = event.target.value;
    setStatusSelector(selectedStatus);

    if (selectedStatus === "all") {
      setFilteredPolicies(policies);
    } else {
      const filtered = policies.filter(
        (policy) => policy.status === selectedStatus
      );
      setFilteredPolicies(filtered);
    }
  };

    return (
        <>
        { loading ? 
          <Loading />
          : 
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

                          <span key={policy}>
                            <p className="top">{policy.policyNumber}</p>
                            <h1 className="top-left">Policy Information</h1>
                            <div className="text-container">
                              <div>
                                <p>Policy Holder:</p>
                                <p>{policy.client.firstName} {policy.client.surnameOnId}</p>
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
                                <p>R{policy.intermediaryFee}</p>
                              </div>
                            </div>

                            <hr />

                            <button style={ {margin: "5px"}}>Documents</button>
                          </span>

                          </div>
                      </div>
                    </div>

                    <h3>You are Covered for:</h3>

                    <OverviewComponent sections={policy.sections} />
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
                  <option value="all">All</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                  <option value="canceled">Canceled</option>
                  <option value="pending">Pending</option>
                  <option value="expired">Expired</option>
                </select>
                <div className="filter">
                  <ul  className="policy">
                    {filteredPolicies.map((policy) => (
                      <li key={policy.id}><br/> Policy: {policy.id}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Broker Card */}
              <div className="broker-contact-card">
                <h3 id="my">Need help?</h3>
                <h2>Contact your broker</h2>

                <div className="image-with-text">
                  <img src={profile} alt="brokerimg" className="bkimg" />
                  <div className="text"></div>
                </div>
                <p>{policy.broker.name}</p>
                <p>email: {policy.broker.email}</p>
                <p>Cell Number: {policy.broker.cellNumber}</p>
              </div>
            </div>
          </div>
        }
        </>
        )
  ;
};


export default MyPolicyShell;
