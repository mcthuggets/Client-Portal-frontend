import React, { useState } from "react";
import "./vehicle.css"; // Make sure to import your CSS styles
import car from "../images/Car.svg";
import Vehicle from "../images/VehicleSection.jpg";

const VehicleDisplay = ({ vehicleData }) => {
  console.log(vehicleData);

  const calculateTotalPremium = (risks) => {
    return risks.reduce((total, risk) => total + risk.riskPremiumAmount, 0);
  };

  const [viewMore, setViewMore] = useState(false);

  return (
    <div className="vehicle-display-container">
      <div className="card">
        <div className="card-content">
          <img
            src={Vehicle}
            className="policy-img"
            alt="policy"
            style={{ height: "250px" }}
          />

          <div>
            <h1
              style={{ backgroundColor: "#0c3b98", color: "White" }}
              className="top-left"
            >
              Vehicle Coverage{" "}
            </h1>
            <hr />
            <div className="text-container">
              <div>
                <p>Total Premium:</p>
                <p>R {calculateTotalPremium(vehicleData.risks)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="sectionMain">
        {vehicleData.risks.map((risk) => (
          <div key={risk.riskId} className="sectionCard">
            <div className="vehicle-head">
              <div className="left-column">
                <h1 className="item-heading">
                  {risk.vehicleDetails.makeDescription +
                    " " +
                    risk.vehicleDetails.modelDescription}
                </h1>
                <br />
                <h2 className="item-subheading">
                  {risk.vehicleDetails.yearManufactured}
                </h2>
                <br />
                <h2 className="item-subheading">
                  {risk.vehicleDetails.registrationNumber}
                </h2>
                <br />
                <h2 className="item-subheading">
                  {" "}
                  Premium : R {risk.riskPremiumAmount / 100}
                </h2>
              </div>

              <div className="right-column">
                <img src={car} width={"150px"} alt="car" />
              </div>
            </div>

            <hr />

            <h2>{risk.vehicleType} Details</h2>

            <p>
              <p>
                <strong> Engine Number </strong>{" "}
                {risk.vehicleDetails.engineNumber}
              </p>
              <p>
                <strong> VIN </strong> {risk.vehicleDetails.vinNumber}
              </p>
              <p>
                <strong> Make code </strong> {risk.vehicleDetails.makeCode}
              </p>
              <strong>Owner Name:</strong> {risk.registeredOwner.name}
            </p>
            <p>
              <strong>Owner ID Number:</strong> {risk.registeredOwner.idNumber}
            </p>

            <div>
              <hr />
              <h3 onClick={() => setViewMore(!viewMore)}>
                {" "}
                View more details{" "}
              </h3>
              {viewMore == true ? (
                <div>
                  <p>
                    <strong>Use Type:</strong> {risk.useType}
                  </p>

                  <p>
                    <strong>Residential Address:</strong>{" "}
                    {risk.residentialAddress.line1},{" "}
                    {risk.residentialAddress.line2},{" "}
                    {risk.residentialAddress.line3},{" "}
                    {risk.residentialAddress.line4},{" "}
                    {risk.residentialAddress.postalCodeId}
                  </p>
                  <p>
                    <strong>Sum Insured Type:</strong> {risk.sumInsuredType}
                  </p>
                  <div className="premium-detailsParent">
                    <h3>Premium Details</h3>
                    <div className="premium-detailsChild">
                      <p>
                        <strong>Original Premium:</strong> R
                        {risk.premium.nettPremium}
                      </p>
                      <p>
                        <strong>Discounted Premium:</strong> R
                        {risk.premium.grossPremium}
                      </p>
                      <p>
                        <strong>Nett Premium:</strong> R
                        {risk.premium.nettPremium}
                      </p>
                    </div>
                  </div>
                  <h3>Risk Excess Details</h3>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VehicleDisplay;
