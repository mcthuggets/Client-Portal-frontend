import React from 'react';
import './vehicle.css';
import PropertySectionImage from '../images/PropertySection.jpg'

const PropertySection = ({ PropertyData }) => {

  console.log(PropertyData);
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
          <h1   style={{backgroundColor:"#0c3b98" ,color:"White"}}   className="top-left">Property Coverage</h1>
          <hr />
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

        </span>

        </div>
    </div>


    {/* <div className="sectionMain">
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
    </div> */}

    {PropertyData.risks.map((risk) => (
      <div key={risk.riskId} className='sectionCard'>
        <h2  className="item-heading">Risk Information</h2>
        <h2  className="item-heading"> { risk.residentialAddress.line1} </h2>
        <h2  className="item-heading"> { risk.residentialAddress.line2} </h2>
        <h2 className="item-heading"> { risk.residentialAddress.line3} </h2>
        <div className='sectionCard'>
          <p>Risk ID: {risk.riskId}</p>
          <p>Risk Premium Amount: {risk.riskPremiumAmount}</p>
          <p>Registered Owner: {risk.registeredOwner}</p>
          <p>Political Riot Premium Amount: {risk.politicalRiotPremiumAmount}</p>
          <p>Sum Insured Amount: {risk.sumInsuredAmount}</p>
          <p>Voluntary Excess: {risk.voluntaryExcess}</p>
          <p>Claim Free Group: {risk.claimFreeGroup}</p>
          <p>Roof Type: {risk.roofType}</p>
          <p>Wall Construction: {risk.wallConstruction}</p>
          <p>Dwelling Type: {risk.dwellingType}</p>
          <p>Inception Date: {risk.inceptionDate}</p>

          <p>Sum Insured  {risk.premium.sumInsuredAmount}</p>
        </div>
      </div>
    ))
    }
    </>
  );
};

export default PropertySection;
