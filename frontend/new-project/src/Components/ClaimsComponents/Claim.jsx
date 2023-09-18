import React from "react";
import {
  BsDiamond,
  BsXCircle,
  BsCheckCircle,
  BsQuestionCircle,
} from "react-icons/bs";

export default function Claim() {

    const claimStatus = "";

  return (
    <>
      <div className="single-claim">
        <BsDiamond />

        <div>
          <h3> Claim no</h3>
          <p> Claim summary </p>
        </div>

        {claimStatus === "X" ? (
          <BsXCircle />
        ) : claimStatus === "Check" ? (
          <BsCheckCircle />
        ) : (
          <BsQuestionCircle />
        )}
      </div>
    </>
  );
}
