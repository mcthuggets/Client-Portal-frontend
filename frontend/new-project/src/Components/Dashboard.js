import Sidebar from "./Sidebar";
const Dashboard = ()=>{
    return (
        <>
        <Sidebar></Sidebar>
        <div className="app-container">
        <div className='main-content'>
        <div className="dash-heading">
            <h1>Welcome, David</h1>
            <p>July 19, 2023</p>
        </div>
        <div className="dash-container">
            <h1>Billing and Payment</h1>
        <div className="dash-card">
            <p>123456789</p>
            <div className="separator"></div>
            
        </div>
        </div>
        </div>
        </div>
        </>
    )
    }
export default Dashboard;