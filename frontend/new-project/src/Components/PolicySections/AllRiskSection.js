import React from 'react';
import './vehicle.css';
import AllRiskImage from '../images/AllRiskSection.jpg'


const calculateTotalPremium = (risks) => {
  let totalPremium = 0;

  risks.forEach((risk) => {
    totalPremium += risk.totalPremiumAmount;
  });

  return totalPremium;
};


const AllRisk = ({ AllRiskData }) => {

 

  console.log(AllRiskData);


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
              <p>R {calculateTotalPremium(AllRiskData.risks)}</p>
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

  {/* loop through risks */}
  {AllRiskData.risks.map((risk) => (
  <div key={risk.riskId} className="sectionMain">
    <h2>Risk ID: {risk.riskId}</h2>

    {/* loop through items */}
    {risk.items.map((item) => (
    <div className='sectionCard'>
      <p> Item ID {item.itemId} </p>
      <p> Description {item.description} </p>
      <p> Inception Date {item.inceptionDate} </p>
      <p> Premium {item.premiumAmount} </p>
      <p> Sum insured {item.sumInsuredAmount} </p>

    </div>
    ))
    }
  </div>
    ))}
    </>
  );
};

export default AllRisk;
