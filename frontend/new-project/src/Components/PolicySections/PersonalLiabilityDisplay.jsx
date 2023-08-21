import React from 'react';
import PersonalLiabilityImage from '../images/Personal-Liability.jpg'

const PersonalLiabilityDisplay = ({ liabilityData }) => {

  console.log(liabilityData);
  return (
    <>
      <div className="card">
  <div className="card-content">
    <img
      className="policy-img"
      src={PersonalLiabilityImage}
      alt="policy"
      style={{ height: "250px" }}
    />

    <span>
      <h1 className="top-left">Personal Liability Coverage</h1>
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

      {liabilityData.risks.map((risk) => (
        <div key={risk.riskId}>
          <h2>Risk ID: {risk.riskId}</h2>
          <p>Postal Code: {risk.postalCode}</p>
          <p>Sum Insured Amount: {risk.sumInsuredAmount}</p>
          <p>Total Premium Amount: {risk.totalPremiumAmount}</p>
          <p>Conducting Business From Home: {risk.conductingBusinessFromHome ? 'Yes' : 'No'}</p>
          <h3>Items:</h3>
          <ul>
            {risk.items.map((item) => (
              <li key={item.itemId}>
                <p>Item ID: {item.itemId}</p>
                <p>Rate Code: {item.rateCode.description}</p>
                <p>Sum Insured Amount: {item.sumInsuredAmount}</p>
                <p>Premium Amount: {item.premiumAmount}</p>
                <p>Inception Date: {item.inceptionDate}</p>
                <p>Description: {item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default PersonalLiabilityDisplay;
