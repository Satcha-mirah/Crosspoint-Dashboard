import React, {useState} from "react";
import "../pages/css/dashboard.css";
import Logo from "../assets/IMG-20230612-WA0008.jpg";
import SamImg from "../assets/sam.png";
import HappyImg from "../assets/happy.png";
function Dashboard(){
const [search, setSearch] = useState("");
function handleSearchChange(event) {
    setSearch(event.target.value);
  }
return(
    <div>
        <div className="dashboard-container">
       <div className="side-bar">
        <div className="logo-div">
        <img src={Logo}/>
        <div className="logo-header">Crosspoint</div>
        </div>
        <ul className="nav">
        <li><i><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" d="M4 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5Zm10 0a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5ZM4 16a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3Zm10-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-6Z"/></svg></i>Dashboard</li>
        <li><i><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M21 18v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v1h-9a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2m0-2h10V8H12m4 5.5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5Z"/></svg></i>Wallet</li>
        <li><i><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M10 19.748V16.4c0-1.283.995-2.292 2.467-2.868A8.48 8.48 0 0 0 9.5 13c-1.89 0-3.636.617-5.047 1.66A8.017 8.017 0 0 0 10 19.748Zm8.88-3.662C18.485 15.553 17.17 15 15.5 15c-2.006 0-3.5.797-3.5 1.4V20a7.996 7.996 0 0 0 6.88-3.914ZM9.55 11.5a2.25 2.25 0 1 0 0-4.5a2.25 2.25 0 0 0 0 4.5Zm5.95 1a2 2 0 1 0 0-4a2 2 0 0 0 0 4ZM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10Z"/></svg></i>Circles</li>
        <li><i><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M4 17V5H2V3h4v12h15v2H4Zm2 5q-.825 0-1.413-.588T4 20q0-.825.588-1.413T6 18q.825 0 1.413.588T8 20q0 .825-.588 1.413T6 22Zm1-8V8h6v6H7Zm2-2h2v-2H9v2Zm5 2V8h6v6h-6Zm2-2h2v-2h-2v2Zm3 10q-.825 0-1.413-.588T17 20q0-.825.588-1.413T19 18q.825 0 1.413.588T21 20q0 .825-.588 1.413T19 22ZM9 12h2h-2Zm7 0h2h-2Z"/></svg></i>Signal</li>
        <li><i><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="blue" d="M17.66 11.2c-.23-.3-.51-.56-.77-.82c-.67-.6-1.43-1.03-2.07-1.66C13.33 7.26 13 4.85 13.95 3c-.95.23-1.78.75-2.49 1.32c-2.59 2.08-3.61 5.75-2.39 8.9c.04.1.08.2.08.33c0 .22-.15.42-.35.5c-.23.1-.47.04-.66-.12a.58.58 0 0 1-.14-.17c-1.13-1.43-1.31-3.48-.55-5.12C5.78 10 4.87 12.3 5 14.47c.06.5.12 1 .29 1.5c.14.6.41 1.2.71 1.73c1.08 1.73 2.95 2.97 4.96 3.22c2.14.27 4.43-.12 6.07-1.6c1.83-1.66 2.47-4.32 1.53-6.6l-.13-.26c-.21-.46-.77-1.26-.77-1.26m-3.16 6.3c-.28.24-.74.5-1.1.6c-1.12.4-2.24-.16-2.9-.82c1.19-.28 1.9-1.16 2.11-2.05c.17-.8-.15-1.46-.28-2.23c-.12-.74-.1-1.37.17-2.06c.19.38.39.76.63 1.06c.77 1 1.98 1.44 2.24 2.8c.04.14.06.28.06.43c.03.82-.33 1.72-.93 2.27Z"/></svg></i>Nest</li>
        <li><i><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M12 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6Z"/><path d="m19.622 10.395l-1.097-2.65L20 6l-2-2l-1.735 1.483l-2.707-1.113L12.935 2h-1.954l-.632 2.401l-2.645 1.115L6 4L4 6l1.453 1.789l-1.08 2.657L2 11v2l2.401.655L5.516 16.3L4 18l2 2l1.791-1.46l2.606 1.072L11 22h2l.604-2.387l2.651-1.098C16.697 18.831 18 20 18 20l2-2l-1.484-1.75l1.098-2.652l2.386-.62V11l-2.378-.605Z"/></g></svg></i>Settings</li>
        <li><i><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m17 8l-1.4 1.4l1.6 1.6H9v2h8.2l-1.6 1.6L17 16l4-4l-4-4M5 5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h7v-2H5V5Z"/></svg></i>Logout</li>
       </ul>
       </div>
       <div className="top-nav">
        <div className="search-div">
            <label>
            <input type="text" placeholder="Search items, categories and supplies" value={search} className="search-input" onChange={handleSearchChange}/>
              <i className="search-icon"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 16 16"><path fill="currentColor" d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0z"/></svg></i>        
            </label>
        </div>
        <div className="incognito">
            <i className="top-nav-icons"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2"><path d="M10 15.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Zm9 0a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z"/><path stroke-linecap="round" stroke-linejoin="round" d="m10 15l.211-.106a4 4 0 0 1 3.578 0L14 15m3-6l-1.65-4.125a1 1 0 0 0-1.245-.577l-1.473.491a2 2 0 0 1-1.264 0L9.894 4.3a1 1 0 0 0-1.245.576L7 9m-4 1c7.5-1 11-1 18 0"/></g></svg></i>
        </div>
        <div className="notification">
            <i className="top-nav-icons"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" d="m13.58 11.6l-1.33-2.18V6.33A4.36 4.36 0 0 0 10 2.26a2.45 2.45 0 0 0 0-.38A1.94 1.94 0 0 0 8 0a1.94 1.94 0 0 0-2 1.88a1.64 1.64 0 0 0 0 .38a4.36 4.36 0 0 0-2.25 4.07v3.09L2.42 11.6a1.25 1.25 0 0 0 1.06 1.9h1.77A2.68 2.68 0 0 0 8 16a2.68 2.68 0 0 0 2.75-2.5h1.77a1.25 1.25 0 0 0 1.06-1.9zM7.25 1.88A.7.7 0 0 1 8 1.25a.7.7 0 0 1 .75.63a6 6 0 0 0-.75 0a5.9 5.9 0 0 0-.75 0zM8 14.75a1.44 1.44 0 0 1-1.5-1.25h3A1.44 1.44 0 0 1 8 14.75zm-4.52-2.5l1.34-2.17l.18-.31V6.33a4 4 0 0 1 .6-2.12A2.68 2.68 0 0 1 8 3.12a2.68 2.68 0 0 1 2.4 1.09a4 4 0 0 1 .6 2.12v3.44l.18.31l1.34 2.17z"/></svg></i>
        </div>
        <div className="straight-line"></div>
        <div className="sam-image">
            <img src={SamImg}/>
        </div>
        <div className="down-icon">
            <i className="down-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="7" viewBox="0 0 16 7"><path fill="currentColor" d="M8 6.5a.47.47 0 0 1-.35-.15l-4.5-4.5c-.2-.2-.2-.51 0-.71c.2-.2.51-.2.71 0l4.15 4.15l4.14-4.14c.2-.2.51-.2.71 0c.2.2.2.51 0 .71l-4.5 4.5c-.1.1-.23.15-.35.15Z"/></svg></i>
        </div>
       </div>
       <div className="large-box">
        <div className="happy-img">
            <img src={HappyImg}/>
        </div>
        <div className="texts">
            <h2>Inflation Proof Pricing</h2>
            <p>Stop worrying about inflation affecting your<br></br> buying power, Signal's prices stay the same.</p>
            <button>Start Buying<i className="next-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" d="M2 12h20m-9-9l9 9l-9 9"/></svg></i></button>
        </div>
       </div>
       <h4>Quick Actions</h4>
       <div className="buttons">
        <button className="bottom-buttons"><i className="btn-icon"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="m11.75 1.75l2.5 2m-10-2l-2.5 2m10.5 9.5l1 1m-9.5-1l-1 1m5.5-7.5v2.5l-1.5 1"/><circle cx="8" cy="9" r="5.25"/></g></svg></i>Schedule a procurement</button>
        <button className="bottom-buttons"><i className="btn-icon"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M1.75 2.75h12.5v10.5H1.75zm6.5 4h5.5m-11.5 2.5h5.5m.25-6v9.5"/></svg></i>View Circle Activity</button>
        <button className="bottom-buttons"><i className="btn-icon"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M1.75 2.75h12.5v10.5H1.75zm6.5 4h5.5m-11.5 2.5h5.5m.25-6v9.5"/></svg></i>View my schedules</button>
       </div>
    </div>
    </div>
);
}
export default Dashboard;