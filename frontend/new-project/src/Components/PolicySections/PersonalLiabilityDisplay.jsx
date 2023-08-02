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

      <div className='sectionMain'>
        {liabilityData.risks.map( (risk) => {
          return(
            <>
              <div className='sectionCard'>
                <h2> {risk.Id} </h2>
                <p> {risk.description} </p>
                <p> R {risk.premium.totalPremiumAmount} </p>
                <p> R {risk.premium.totalSumInsuredAmount} </p>

                {risk.items.map( (item) => { 
                  return(
                  <>
                  <div className='sectionCard-subsection'>
                    <h2> {item.itemId} </h2>
                    <p> {item.premiumAmount} </p>
                  </div>
                  </>
                  )
                  })
                }
            
              </div>
            </>
          )
        })
        }
      </div>
    </>
  );
};

export default PersonalLiabilityDisplay;
