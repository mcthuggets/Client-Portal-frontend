import React from 'react';

const SpecialCoverDisplay = ({ coverData }) => {
  // Extract the necessary data from the 'coverData' prop
  // to display relevant information in the component.
  // Example: const { risks, premium, ... } = coverData;
  console.log(coverData);

  return (
    <div>
      {/* Display the relevant information here */}
      {/* Example: */}
      <h2>Special Cover Section</h2>
      {/* Display the extracted data */}
    </div>
  );
};

export default SpecialCoverDisplay;
