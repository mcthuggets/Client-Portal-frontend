import React from 'react';
import './vehicle.css'; // Make sure to import your CSS styles
import car from '../images/Car.svg';


const VehicleDisplay = ({ vehicleData }) => {


  const calculateTotalPremium = (risks) => {
    return risks.reduce((total, risk) => total + risk.riskPremiumAmount, 0);
  };

  return (
    <div className="vehicle-display-container">
      <div className="card">
        <div className="card-content">
          <img
            className="policy-img"
          
            alt="policy"
            style={{ height: "250px" }}
          />

          <div>
            <h1 className="top-left">Vehicle Coverage </h1>
            <div className="text-container">
              <div>
                <p>Total Premium:</p>
                <p>R {calculateTotalPremium(vehicleData.risks)}</p>
              </div>
            </div>
          </div>

          <hr />

          <button style={{ margin: "5px" }}>Documents</button>
        </div>
      </div>

      <div className="sectionMain">
        {vehicleData.risks.map((risk) => (
          <div key={risk.riskId} className="sectionCard">

            <div className='vehicle-head'>
              <div className='left-column'>
                <h1 className="item-heading"> {risk.vehicleDetails.makeDescription + ' ' + risk.vehicleDetails.modelDescription} </h1>
                <br />
                <h2 className="item-subheading"> {risk.vehicleDetails.yearManufactured}</h2>
                <h2 className="item-subheading"> {risk.vehicleDetails.registrationNumber}</h2>
              </div>

              <div className='right-column'>
                <img src={car} width={'150px'} alt="car" />
              </div>
{console.log("line 55")}
            </div>

            <hr />

            <h2>{risk.vehicleType} Details</h2>
            <p>
              <strong>Make:</strong> {risk.vehicleDetails.makeDescription}
            </p>
            <p>
              <strong>Model:</strong> {risk.vehicleDetails.modelDescription}
            </p>
            <p>
              <strong>Year Manufactured:</strong> {risk.vehicleDetails.yearManufactured}
            </p>
            <p>
              <strong>Registration Number:</strong> {risk.vehicleDetails.registrationNumber}
            </p>
            <p>
              <strong>Owner Name:</strong> {risk.registeredOwner.name}
            </p>
            <p>
              <strong>Owner ID Number:</strong> {risk.registeredOwner.idNumber}
            </p>
            <p>
              <strong>Use Type:</strong> {risk.useType}
            </p>
            <p>
              <strong>Residential Address:</strong> {risk.residentialAddress.line1},{' '}
              {risk.residentialAddress.line2}, {risk.residentialAddress.line3},{' '}
              {risk.residentialAddress.line4}, {risk.residentialAddress.postalCodeId}
            </p>
            <p>
              <strong>Sum Insured Type:</strong> {risk.sumInsuredType}
            </p>
            <div className="premium-detailsParent">
              <h3>Premium Details</h3>
              <div className="premium-detailsChild">
                <p>
                  <strong>Original Premium:</strong> R{risk.premium.nettPremium}
                </p>
                <p>
                  <strong>Discounted Premium:</strong> R{risk.premium.grossPremium}
                </p>
                <p>
                  <strong>Nett Premium:</strong> R{risk.premium.nettPremium}
                </p>
              </div>
            </div>
            <h3>Risk Excess Details</h3>
              {risk.riskExcess.items.map((item) => (
                <div className='excess-detailsChild' key={item.id}>
                  <p>
                  {item.description} 
                 
                  </p>
                </div>
              ))}
           
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default VehicleDisplay;
