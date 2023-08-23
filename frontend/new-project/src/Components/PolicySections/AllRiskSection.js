import React from "react";
import "./vehicle.css";
import AllRiskImage from "../images/AllRiskSection.jpg";
import { RxCheckCircled, RxCrossCircled } from "react-icons/rx";

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
            <h1  style={{backgroundColor:"#0c3b98" ,color:"White"}} className="top-left">All Risk Coverage</h1>
            <hr/>
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
          </span>
        </div>
      </div>

      {AllRiskData.risks.map((risk) => (
        <div key={risk.riskId}>
          {/* loop through items */}
          {risk.items.map((item) => {
            const inceptionDate = new Date(item.inceptionDate);
            const formattedInceptionDate = `${inceptionDate.getFullYear()}-${(
              inceptionDate.getMonth() + 1
            )
              .toString()
              .padStart(2, "0")}-${inceptionDate
              .getDate()
              .toString()
              .padStart(2, "0")}`;

            return (
              <><br />
              <div className="sectionCard">
                <h2> {item.description} </h2>


                <div className="section-card-container">
                  <div className="">
                    <p> Inception Date: {formattedInceptionDate} </p>
                    <p> Premium : R {item.premiumAmount} </p>
                    <p> Sum insured : R {item.sumInsuredAmount} </p>
                  </div>
                  <div>
                    {item.isValuationAvailable ? (
                      <div>
                        <RxCheckCircled className="valuation-icon" />
                        <p> This item is eligible for valuation</p>
                      </div>
                    ) : (
                      <div>
                        <br />
                        <RxCrossCircled className="valuation-icon" />
                        <p> This item is not eligible for valuation</p>
                      </div>
                    )}
                  </div>
                </div>
              </div></>
            );
          })}
        </div>
      ))}
    </>
  );
};

export default AllRisk;
