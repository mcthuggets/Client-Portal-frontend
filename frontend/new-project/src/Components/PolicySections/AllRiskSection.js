import React from 'react';
import './vehicle.css';
import AllRiskImage from '../images/AllRiskSection.jpg'

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

export default AllRisk;
