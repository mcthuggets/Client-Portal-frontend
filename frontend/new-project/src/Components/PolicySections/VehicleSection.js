import React from 'react';
import './vehicle.css';
//images
import  car from '../images/Car.svg'
import VehicleSectionImage from '../images/VehicleSection.jpg'

const VehicleDisplay = ({ vehicleData }) => {

  console.log(vehicleData);

  return (
    <>
<div className="main">
                <div className="card">
                  <div className="card-content">
                    <img
                      className="policy-img"
                      src={VehicleSectionImage}
                      alt="policy"
                      style={{ height: "250px" }}
                    />

                    <span>
                      <p className="top"></p>
                      <h1 className="top-left">Policy Information</h1>
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
              </div>



    <div className="sectionMain">
      {vehicleData.risks.map((risk) => (

        <div key={risk.riskId} className="sectionCard">

        {/* section for identifying info and image */}

        <div className='vehicle-head'>
          <div className='left-column'>
            <h2> {risk.vehicleDetails.makeDescription + ' ' + risk.vehicleDetails.modelDescription} </h2>
            <h2> {risk.vehicleDetails.yearManufactured}</h2>
            <h2> {risk.vehicleDetails.registrationNumber}</h2>
          </div>

          <div className='right-column'>
            <img src={car} width={'150px'}></img>
          </div>
          
        </div>

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
              <strong>Original Premium:</strong> R{risk.premium.original}
            </p>
            <p>
              <strong>Discounted Premium:</strong> R{risk.premium.discounted}
            </p>
            <p>
              <strong>Nett Premium:</strong> R{risk.premium.nettPremium}
            </p>
          </div>
          </div>
          <h3>Risk Excess Details</h3>
          <div className="excess-detailsParent">
            {risk.riskExcess.items.map((item) => (
              <div className='excess-detailsChild' key={item.id}>
                <p>
                  <strong>{item.description} Excess:</strong> R{item.minimumAmount} to R
                  {item.maximumAmount} ({item.type === 'Percentage' ? `${item.percentage}%` : 'Fixed'})
                </p>
              </div>
            ))}
          </div>
          <hr />
        </div>
      ))}
    </div>
    </>
  );
};

export default VehicleDisplay;
