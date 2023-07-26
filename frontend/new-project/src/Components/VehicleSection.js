import React from 'react';

const VehicleDisplay = ({ vehicleData }) => {
  return (
    <div>
      {vehicleData.risks.map((risk) => (
        <div key={risk.riskId} className="vehicle-card">
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
          <h3>Premium Details</h3>
          <p>
            <strong>Original Premium:</strong> ${risk.premium.original}
          </p>
          <p>
            <strong>Discounted Premium:</strong> ${risk.premium.discounted}
          </p>
          <p>
            <strong>Nett Premium:</strong> ${risk.premium.nettPremium}
          </p>
          <h3>Risk Excess Details</h3>
          {risk.riskExcess.items.map((item) => (
            <div key={item.id}>
              <p>
                <strong>{item.description} Excess:</strong> ${item.minimumAmount} to $
                {item.maximumAmount} ({item.type === 'Percentage' ? `${item.percentage}%` : 'Fixed'})
              </p>
            </div>
          ))}
          <hr />
        </div>
      ))}
    </div>
  );
};

export default VehicleDisplay;
