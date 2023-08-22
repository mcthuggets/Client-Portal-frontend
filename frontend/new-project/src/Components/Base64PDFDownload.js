import React from 'react';
import axios from "axios";
import Cookies from 'js-cookie';
const PDFDownloadButton=({ polNo })=> {
  const downloadPDF = async () => {
    try {
        const config = {
            headers: {
              Authorization: `Bearer ${Cookies.get("token")}`,
            },
          };
          const response = await axios.get(
            `https://localhost:7207/Policy/get-policyPrint/${polNo}`,
            config
          );

      // Assuming the response.data contains the Base64-encoded PDF string
      const binaryString = window.atob(response.data.pol.combinedSchedule);
      const bytes = new Uint8Array(binaryString.length);
      for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }
      const blob = new Blob([bytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = url;
      a.download = 'downloaded.pdf'; // Set the desired filename
      a.click();

      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading PDF:', error);
    }
  };

  return (
    <div>
      <button onClick={downloadPDF}>Download PDF</button>
    </div>
  );
}

export default PDFDownloadButton;
