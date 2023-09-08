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

        <div>
          <div className="claims-dropdown">
            <h4 onClick={() => setOpenClaims(!openClaims)}>Open</h4>
            {openClaims && <p>Open claim 1</p>}
          </div>

          <div className="claims-dropdown">
            <h4 onClick={() => setClosedClaims(!closedClaims)}>Closed</h4>
            {closedClaims && <p>Closed claim 1</p>}
          </div>
        </div>
      </div>
    </>
  );
}

export default Claims;
