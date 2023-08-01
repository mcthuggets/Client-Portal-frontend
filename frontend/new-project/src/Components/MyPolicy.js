//css imports
import "../Css/policy.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PolicyImg from "./PolicyImg.jpg";
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
import { FaCarSide } from "react-icons/fa";
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
import { Carousel } from "react-responsive-carousel";
import { useSectionContext } from "./sectionContext";
import policy from "./data";
//react imports
import React, { useState, useEffect } from "react";

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
          <HiScale />
          <p className="cheading">Personal Liability</p>
        </>
      );
    case "specialCoverSection":
      return (
        <>
          <HiStar />
          <p className="cheading">Special Cover</p>
        </>
      );
    case "personalComputerSection":
      return (
        <>
          <HiDesktopComputer />
          <p className="cheading">Personal Computer</p>
        </>
      );
    case "generalConditionsSection":
      return (
        <>
          <HiClipboardList />
          <p className="cheading">General Conditions</p>
        </>
      );
    case "personalAccidentSection":
      return (
        <>
          <HiOutlineUserGroup />
          <p className="cheading">Personal Accident</p>
        </>
      );
    default:
      return null;
  }
};

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
      case "PersonalComputerSection":
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
      <RenderComponentBasedOnCondition></RenderComponentBasedOnCondition>
    </div>
  );
};

const policies = [
  {
    id: "POL-123",
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
                <div className="img-content">
                  <Child
                    key={sectionKey}
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

const MyPolicyShell = () => {
  return (
    <SectionProvider>
      <MyPolicy></MyPolicy>
    </SectionProvider>
  );
};
const MyPolicy = () => {
  const { sectionName } = useSectionContext();

  const [statusSelector, setStatusSelector] = useState("All");

  return (
    <div className="app-container">
      <div className="policy-content">
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
              <SectionParent sectionKey={sectionName}></SectionParent>
            </div>
          )}
        </div>
      </div>

      <div className="right-sidebar">
        {/* Policy card */}
        <div className="policy-card">
          <h2 style={{ textAlign: "center" }}>Select Policy</h2>
          <div class="separator"></div>
          <select
            className="filter"
            onChange={(event) => setStatusSelector(event.target.value)}
          >
            <option value="All">All</option>
            <option value="Active">Active</option>
            <option value="Closed">Closed</option>
          </select>
          <div className="policy">
            <ul>
              {policies.map((policy) => (
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
