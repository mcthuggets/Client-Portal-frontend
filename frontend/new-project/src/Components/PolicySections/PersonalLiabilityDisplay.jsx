import React from 'react';

const PersonalLiabilityDisplay = ({ liabilityData }) => {
  // Extract the necessary data from the 'liabilityData' prop
  // to display relevant information in the component.
  // Example: const { riskId, items, premium, ... } = liabilityData;

  console.log(liabilityData);
  return (
    <div>
      {/* Display the relevant information here */}
      {/* Example: */}
      <h2>Personal Liability Section</h2>
      {/* Display the extracted data */}

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
    </div>
  );
};

export default PersonalLiabilityDisplay;
