import React from 'react';
import './vehicle.css';

const PersonalAccident = ({ PersonalAccidentData }) => {
  return (
    <div className="sectionMain">
      {PersonalAccidentData.risks.map((risk) => (
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
  );
};

export default PersonalAccident;
