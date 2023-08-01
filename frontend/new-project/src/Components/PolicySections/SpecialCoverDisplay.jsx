import React from 'react';
import SpecialCoverImage from '../images/Special-Coverage.jpg'

const SpecialCoverDisplay = ({ coverData }) => {
  // Extract the necessary data from the 'coverData' prop
  // to display relevant information in the component.
  // Example: const { risks, premium, ... } = coverData;
  console.log(coverData);

  return (
    <>
<div className="card">
  <div className="card-content">
    <img
      className="policy-img"
      src={SpecialCoverImage}
      alt="policy"
      style={{ height: "250px" }}
    />

    <span>
      <h1 className="top-left">Special Coverage</h1>
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

    </>
  );
};

export default SpecialCoverDisplay;
