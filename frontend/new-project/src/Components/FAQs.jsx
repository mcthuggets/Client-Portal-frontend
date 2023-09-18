import React from "react";
import Sidebar from "./Sidebar";
import PolicyFAQs from "./FAQS/PolicyFAQs";
import ClaimsFAQs from "./FAQS/ClaimsFAQs";
import "../Css/policy.css";

export default function FAQs() {
  return (
    <>
      <div className="app-container">
        <Sidebar />

        <div className="FAQ-container">
          <PolicyFAQs />

          <ClaimsFAQs />
        </div>
      </div>
    </>
  );
}
