import "../Css/policy.css";
import PolicyImg from "./PolicyImg.jpg";
import { HiOutlineHome } from "react-icons/hi";
import { HiDeviceMobile } from "react-icons/hi";
import { FaCarSide } from "react-icons/fa";
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
import { Carousel } from "react-responsive-carousel";
import { useSectionContext } from "./sectionContext";
import policy from "./data";

// Child Component
const Child = ({ name, section, renderIcon }) => {
  const { setSectionName } = useSectionContext();

  const handleClick = () => {
    setSectionName(name);
  };

 

  return (
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
  );
};

// Helper function to render icons based on sectionKey
const renderIcon = (sectionKey) => {
  switch (sectionKey) {
    case "allRiskSection":
      return (
        <>
          <HiDeviceMobile className="device" />
          <p className="cheading">All risk</p>
        </>
      );
    case "buildingSection":
      return (
        <>
          <HiOutlineHome className="house" />
          <p className="cheading">Property</p>
        </>
      );
    case "vehicleSection":
      return (
        <>
          <FaCarSide className="caricon" />
          <p className="cheading">Vehicle</p>
        </>
      );
    case "personalLiabilitySection":
      return (
        <>
          <p className="cheading">Personal Liability</p>
        </>
      );
    case "specialCoverSection":
      return (
        <>
          <p className="cheading">Special Cover</p>
        </>
      );
    case "personalComputerSection":
      return (
        <>
          <p className="cheading">Personal Computer</p>
        </>
      );
    case "generalConditionsSection":
      return (
        <>
          <p className="cheading">General Conditions</p>
        </>
      );
    case "personalAccidentSection":
      return (
        <>
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
          <PersonalLiabilityDisplay
            liabilityData={policy.sections.personalLiabilitySection}
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

// OverviewComponent
const OverviewComponent = ({ sections }) => {
  const groupSectionsIntoSets = (items, groupSize) => {
    const groupedItems = [];
    for (let i = 0; i < items.length; i += groupSize) {
      groupedItems.push(items.slice(i, i + groupSize));
    }
    return groupedItems;
  };

  const groupedSections = groupSectionsIntoSets(Object.keys(sections), 4);

  return (
    <div className="cover-layout">
      <Carousel className="carousel" showThumbs={false} showStatus={false}>
        {groupedSections.map((group, groupIndex) => (
          <li className="cards-container" key={`group-${groupIndex}`}>
            {group.map((sectionKey) => {
              const section = sections[sectionKey];
              return (
                <div className="img-content" key={sectionKey}>
                  <Child
                    name={sectionKey}
                    section={section}
                    renderIcon={renderIcon(sectionKey)}
                  />
                </div>
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
  // const allPolicies = [
  //   { id: 1, status: "Active" },
  //   { id: 2, status: "Closed" },
  //   { id: 3, status: "Cancelled" },
  // ];

  const policies = [
    {
      id: "POL-123",
      status: "active"
    },
    {
      id: "POL-456",
      status: "inactive"
    },
    {
      id: "POL-789",
      status: "pending"
    },
    {
      id: "POL-234",
      status: "expired"
    },
    {
      id: "POL-567",
      status: "canceled"
    }
  ];

  const [filteredPolicies, setFilteredPolicies] = useState(policies);

  const handleStatusChange = (event) => {
    const selectedStatus = event.target.value;
    setStatusSelector(selectedStatus);

    if (selectedStatus === "All") {
      setFilteredPolicies(policies);
    } else {
      const filtered = policies.filter(
        (policy) => policy.status === selectedStatus
      );
      setFilteredPolicies(filtered);
    }
  };

  return (
    <div className="app-container">
      <div className="main-content">
        <div>
          {sectionName === "Policy" ? (
            <div id="policy-banner">
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
          {/* <p>{statusSelector}</p> */}
          <div class="separator"></div>
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
          <div className="policy">
            <ul>
              {filteredPolicies.map((policy) => (
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
            <div className="text"></div>
          </div>
          <p>{policy.broker.name}</p>
          <p>email: {policy.broker.email}</p>
          <p>Cell Number: {policy.broker.cellNumber}</p>
        </div>
      </div>
    </div>
  );
};

export default MyPolicyShell;
