import React, { useState } from "react";
import Sidebar from "./Sidebar";
import "../Css/claims.css";

function Claims() {
  const [openClaims, setOpenClaims] = useState(false);
  const [closedClaims, setClosedClaims] = useState(false);

  return (
    <>
      <div className="app-container">
        <Sidebar />

        <div className="claims-container">
          <div className="claims-dropdown">
            <div className="row" onClick={() => setOpenClaims(!openClaims)}>
              <h2>Open</h2>
              <div>
                {openClaims ? (
                  <div className="arrow-down"> </div>
                ) : (
                  <div className="arrow-right"> </div>
                )}
              </div>
            </div>
            {openClaims && <p>Open claim 1</p>}
          </div>

          <div className="claims-dropdown">
            <div className="row" onClick={() => setClosedClaims(!closedClaims)}>
              <h2>Closed</h2>
              <div>
                {closedClaims ? (
                  <div className="arrow-down"> </div>
                ) : (
                  <div className="arrow-right"> </div>
                )}
              </div>
            </div>
            {closedClaims && <p>Closed claim 1</p>}
          </div>
        </div>
      </div>
    </>
  );
}

export default Claims;
