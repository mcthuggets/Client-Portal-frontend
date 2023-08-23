import React from 'react';
import VehicleSectionImage from '../images/VehicleSection.jpg'

const GeneralConditionsDisplay = ({ conditionsData }) => {

  console.log(conditionsData);

  return (
    <>
    
      <div className="card">
      <div className="card-content">
        <img
          className="policy-img"
          src={VehicleSectionImage}
          alt="policy"
          style={{ height: "250px" }}
        />

        <span>
          <h1 style={{backgroundColor:"#0c3b98" ,color:"White"}}  className="top-left">Special Conditons </h1>
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


      <div>
      {conditionsData.conditions.map((condition) => (
        <div  className='card'
              key={condition.conditionId}>
          <h2>Condition ID: {condition.conditionId}</h2>
          <ul>
            {condition.items.map((item, index) => (
              <li key={index}>
                <h3>Memo Code: {item.memoCode.code}</h3>
                <p>Description: {item.memoCode.description}</p>
                <p>Partial Condition Wording: {item.partialConditionWording}</p>
                <p>Inception Date: {item.inceptionDate}</p>
                {item.printOnSchedule && <p>Print On Schedule: Yes</p>}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    </>
  );
};

export default GeneralConditionsDisplay;
