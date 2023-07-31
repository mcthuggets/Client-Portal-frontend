import React from 'react';
import './vehicle.css';

const AllRisk = ({ AllRiskData }) => {
  return (
    <div className="sectionMain">
      {AllRiskData.risks.map((risk) => (
        <div key={risk.riskId} className="sectionCard">
          <h2>{risk.Address}</h2>
          
          <p>
           {risk.buildingType}
          </p>
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
  );
};

export default AllRisk;