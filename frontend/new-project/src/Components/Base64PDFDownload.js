import React from 'react';
import axios from "axios";
import Cookies from 'js-cookie';
import SpinnyLoading from './SpinnyLoading';
import { useState } from 'react';
const PDFDownloadButton=({ polNo })=> {

  const [loading, setLoading] = useState(false)

  async function downloadPDF(){
    setLoading(true)
    
    try {      
        const config = {
            headers: {
              Authorization: `Bearer ${Cookies.get("token")}`,
            },
          };
          const response = await axios.get(
            `https://localhost:7207/Policy/get-policyPrint/${polNo}`,
            config
          )
        

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
    } finally {
      setLoading(false)
    }
  };

  return (
    <div className='download-and-loading'>
      <button onClick={downloadPDF}>Download PDF</button>
      { loading ? <SpinnyLoading /> : <div></div>}
    </div>
  );
}

export default PDFDownloadButton;
