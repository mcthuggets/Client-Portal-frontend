import React from 'react';
import './vehicle.css';
import ContentsImage from '../images/AllRiskSection.jpg'


const calculateTotalPremium = (risks) => {
  let totalPremium = 0;

  risks.forEach((risk) => {
    totalPremium += risk.totalPremiumAmount;
  });

  return totalPremium;
};


const ContentsSectionDisplay = ({ ContentsData }) => {

 

  console.log(ContentsData);


  return (
    <>

    <div className="card">
      <div className="card-content">
        <img
          className="policy-img"
          src={ContentsImage}
          alt="policy"
          style={{ height: "250px" }}
        />

        <span>
          <h1   style={{backgroundColor:"#0c3b98" ,color:"White"}}  className="top-left">Contents Coverage</h1>
          <hr/>
          <div className="text-container">
            <div>
              <p>Policy Holder:</p>
              <p></p>
            </div>
            <div>
              <p>Total Premium:</p>
              <p>R {calculateTotalPremium(ContentsData.risks)}</p>
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

        </span>

        </div>


    </div>

<div className="sectionCard">
    {ContentsData.risks.map((risk) => (
        <div key={risk.riskId} className="content-risk">
          <h2>Risk ID: {risk.riskId}</h2>
          <h3>Premium Details:</h3>
          <p>Risk Premium Amount: R {risk.riskPremiumAmount}</p>
          <p>Political Riot Premium Amount: R {risk.politicalRiotPremiumAmount}</p>

          <h3>Risk Factors:</h3>
          <ul>
            {risk.riskFactors.map((factor) => (
              <li key={factor.code}>{factor.message} - Premium: R  {factor.premium}</li>
            ))}
          </ul>

          <h3>Extensions:</h3>
          <ul>
            {risk.extensions.map((extension) => (
              <li key={extension.id}>
                {extension.message} - Sum Insured: R  {extension.sumInsuredAmount} - Premium: R  {extension.premiumAmount}
              </li>
            ))}
          </ul>

          <h3>Premium Details:</h3>
          <p>Nett Premium: R  {risk.premium.nettPremium}</p>
          <p>Gross Premium: R  {risk.premium.grossPremium}</p>
          <p>Sasria Category:  {risk.premium.sasriaCategory}</p>
          <p>Sasria Premium: R  {risk.premium.sasriaPremium}</p>
          <p>Sum Insured Amount:  R {risk.premium.sumInsuredAmount}</p>

          <h3>Dwelling Details:</h3>
          <p>Occupation Date: {risk.dwelling.occupationDate}</p>
          <p>Number of Consecutive Unoccupied Days: {risk.dwelling.numberOfConsecutiveUnoccupiedDays}</p>
          <p>Dwelling Type: {risk.dwelling.dwellingType}</p>
          <p>Wall Construction: {risk.dwelling.wallConstruction}</p>
          <p>Risk Roof Type: {risk.dwelling.roofType}</p>

          <h3>Other Details:</h3>
          <p>Inception Date: {risk.inceptionDate}</p>
          <p>Claim Free Group: {risk.claimFreeGroup}</p>
          <p>Voluntary Excess: {risk.voluntaryExcess}</p>
          <p>Cover Type: {risk.coverType}</p>
          <p>Has Proof of Claim Free Group: {risk.hasProofOfClaimFreeGroup ? 'Yes' : 'No'}</p>
          <p>Sum Insured Amount: {risk.sumInsuredAmount}</p>

          <hr />
        </div>
      ))}</div>

    </>
  );
};

export default ContentsSectionDisplay;
