/*import Propertyimg from './Propertyimg.jpg';
import data from "../Data";
import {MdArrowBack} from 'react-icons/md';
const Property=()=>{
    return(
        <>
        <h1><a href='/policy/policies'><MdArrowBack className='back-arrow'/>  </a>  Property</h1>
                <div className="card">
        <div className="card-content">

          <img
            className="policy-img"
            src={Propertyimg}
            alt="policy"
            style={{ height: "250px" }}
          />
          {data.PolicyItems.map((policy) => (
            <span key={policy}>
              <p className="top">{policy.policyNumber}</p>
              <h1 className="top-left">Property Information</h1>
              <div className="text-container">
                <div>
                  <p>Policy holder:</p>
                  <span>{policy.policyHolder}</span>
                </div>
                <div>
                  <p>Total Premium:</p>
                  <p>R{policy.totalPremium}</p>
                </div>
                <div>
                  <p>Policy start:</p>
                  <p>{policy.policyStart}</p>
                </div>
                <div>
                  <p>Intermediary fee:</p>
                  <p>R{policy.intermidiaryFee}</p>
                </div>{" "}
              </div>
            </span>
          ))}
          <div className="separator"></div>
          <button>Documents</button>
        </div>
      </div>
        </>
    )
}
export default Property; */