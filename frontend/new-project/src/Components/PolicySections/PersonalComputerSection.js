import React from 'react';
import './vehicle.css';
import PersonalComputerImage from '../images/PersonalComputerSection.jpg'

const PersonalComputer = ({ PersonalComputerData }) => {

  console.log(PersonalComputerData);

  return (
    <>
    <div className="card">
      <div className="card-content">
        <img
          className="policy-img"
          src={PersonalComputerImage}
          alt="policy"
          style={{ height: "250px" }}
        />

        <span>
          <h1  style={{backgroundColor:"#0c3b98" ,color:"White"}}   className="top-left"> Personal Computer Coverage </h1>
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


    <div className='sectionCard'>
      {PersonalComputerData.risks.map((risk) => (
          <div key={risk.riskId}>
            <h2>Risk ID: {risk.riskId}</h2>

            <p>Sum Insured : R {risk.premium.sumInsuredAmount}</p>
            <p>Total Premium : R {risk.totalPremiumAmount}</p>

            {risk.items.map((item) => (
              <div className='pc-item' key={item.itemId}>
                <h3>Description: {item.description}</h3>
                { item.modelAndSerial ? <h4> {item.modelAndSerial}</h4> : <div />}
                <p>Item ID: {item.itemId}</p>
                <p>Component: {item.component.description}</p>
                <p>Rate Code: {item.rateCode}</p>
                <p>Premium Amount: {item.premiumAmount}</p>
                <p>Inception Date: {item.inceptionDate}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default PersonalComputer;
