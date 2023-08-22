import React from 'react';
import SpecialCoverImage from '../images/Special-Coverage.jpg'

const SpecialCoverDisplay = ({ coverData }) => {
  // Extract the necessary data from the 'coverData' prop
  // to display relevant information in the component.
  // Example: const { risks, premium, ... } = coverData;
  console.log(coverData);

  return (
    <>
<div className="card">
  <div className="card-content">
    <img
      className="policy-img"
      src={SpecialCoverImage}
      alt="policy"
      style={{ height: "250px" }}
    />

    <span>
      <h1  style={{backgroundColor:"#0c3b98" ,color:"White"}}  className="top-left">Special Coverage</h1>
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
<div className="sectionCard">
      {coverData.risks.map((risk) => (
        <div key={risk.riskId}>
          <h2>Risk ID: {risk.riskId}</h2>
          <p>Postal Code: {risk.postalCode}</p>
          <h3>Items:</h3>
          <ul>
            
            {risk.items.map((item) => (
              <li key={item.itemId}>
                <p>Item ID: {item.itemId}</p>
                <p>Rate Code: {item.rateCode.code}</p>
                <p>Rate Code Description: {item.rateCode.description}</p>
                <p>Sum Insured Amount: {item.sumInsuredAmount}</p>
                <p>Premium Amount: {item.premiumAmount}</p>
                <p>Inception Date: {item.inceptionDate}</p>
                <p>Message: {item.message}</p>
                <h4>Premium:</h4>
                <p>Original Premium: {item.premium.original}</p>
                <p>Discounted Premium: {item.premium.discounted}</p>
                <p>Loaded Premium: {item.premium.loaded}</p>
                <p>Discount Percentage: {item.premium.discountPerc}</p>
                <p>Loading Percentage: {item.premium.loadingPerc}</p>
                <p>Nett Premium: {item.premium.nettPremium}</p>
                <p>Gross Premium: {item.premium.grossPremium}</p>
                <p>Sasria Category: {item.premium.sasriaCategory}</p>
                <p>Sasria Premium: {item.premium.sasriaPremium}</p>
                <p>Premium Sum Insured Amount: {item.premium.sumInsuredAmount}</p>
                <p>Description: {item.description}</p>
                <p>Is Cross Sale: {item.isCrossSale.toString()}</p>
              </li>
            ))}
          </ul>
          <div className="SubSectionCard">
          <h3>Risk Excess: {risk.riskExcess}</h3>
          <h4>Risk Premium:</h4>
          <p>Original Premium: {risk.premium.original}</p>
          <p>Discounted Premium: {risk.premium.discounted}</p>
          <p>Loaded Premium: {risk.premium.loaded}</p>
          <p>Discount Percentage: {risk.premium.discountPerc}</p>
          <p>Loading Percentage: {risk.premium.loadingPerc}</p>
          <p>Nett Premium: {risk.premium.nettPremium}</p>
          <p>Gross Premium: {risk.premium.grossPremium}</p>
          <p>Sasria Category: {risk.premium.sasriaCategory}</p>
          <p>Sasria Premium: {risk.premium.sasriaPremium}</p>
          <p>Premium Sum Insured Amount: {risk.premium.sumInsuredAmount}</p>
          </div>
        </div>
      ))}</div>

    </>
  );
};

export default SpecialCoverDisplay;
