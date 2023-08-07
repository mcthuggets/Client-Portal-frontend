import React from 'react';
import './vehicle.css';
import PropertySectionImage from '../images/PropertySection.jpg'

const PropertySection = ({ PropertyData }) => {
  return (
    <>
    <div className="card">
      <div className="card-content">
        <img
          className="policy-img"
          src={PropertySectionImage}
          alt="policy"
          style={{ height: "250px" }}
        />

        <span>
          <h1 className="top-left">Property Coverage</h1>
          <div className="text-container">
            <div>
              <p>Policy Holder:</p>
              <p></p>
            </div>
            <div>
              <p>Total Premium:</p>
              <p>R</p>
            </div>
            <div>
              <p>Policy start:</p>
              <p></p>
            </div>
            <div>
              <p>Intermediary fee:</p>
              <p></p>
            </div>
          </div>

          <hr />

          <button style={ {margin: "5px"}}>Documents</button>
        </span>

        </div>
    </div>


    <div className="sectionMain">
      {PropertyData.risks.map((risk) => (
        <div key={risk.riskId} className="sectionCard">
          <h2>{risk.Address}</h2>
          
          <p>
           {risk.buildingType}
          </p>
          <p>
            <strong>Type of Cover:</strong> {risk.typeOfCover}
          </p>
          <p>
            <strong>Structures:</strong> {risk.structures}
          </p>
          <p>
            <strong>Premium:</strong> {risk.premium}
          </p>
          <p>
            <strong>Sum Insured:</strong> {risk.sumInsured}
          </p>
          <p>
            <strong>Excess:</strong> {risk.Excess}
          </p>
          <div className="premium-detailsChild">
            <p>
              <strong>SASRIAPremium:</strong> R{risk.SASRIAPremium}
            </p>
            <p>
              <strong>BrokerFee:</strong> R{risk.BrokerFee}
            </p>
          </div>
        </div>

      ))}
    </div>

    </>
  );
};

export default PropertySection;
