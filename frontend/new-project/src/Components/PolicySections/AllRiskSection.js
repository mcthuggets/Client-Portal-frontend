import React from 'react';
import './vehicle.css';
import AllRiskImage from '../images/AllRiskSection.jpg'

const AllRisk = ({ AllRiskData }) => {
  return (
    <>

<div className="card">
      <div className="card-content">
        <img
          className="policy-img"
          src={AllRiskImage}
          alt="policy"
          style={{ height: "250px" }}
        />

        <span>
          <h1 className="top-left">All Risk Coverage</h1>
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
      {AllRiskData.risks.map((risk) => (
        <div key={risk.riskId} className="sectionCard">
          <h2>{risk}</h2>
          
          <p>
            <strong>Type of Cover:</strong> {risk.typeOfCover}
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

export default AllRisk;
