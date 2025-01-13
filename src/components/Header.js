import React from 'react';
import MainLogo from '../Images/main_logo.png'
import Dropdown from '../Images/dropdown.png'
const Header = () => (
   <header className="header">
     <div className="logo">
       <img className="main-logo" src={MainLogo} alt="Scantime Logo" /> Scantime
     </div>
     <nav className="nav">
       <div className="dropdown">
         <a href="#" className="nav-link">Courses <img className="dd-img" src= {Dropdown} alt="Dropdown" /></a>
         <div className="dropdown-menu">
           <a href="#">Basic PLC Training</a>
           <a href="#">Advanced PLC Training</a>
           <a href="#">Custom Training</a>
         </div>
       </div>
       <a href="#" className="nav-link">eLearning</a>
       <div className="dropdown">
         <a href="#" className="nav-link">Locations <img className="dd-img" src= {Dropdown} alt="Dropdown" /></a>
         <div className="dropdown-menu">
           <a href="#">London</a>
           <a href="#">Manchester</a>
           <a href="#">Birmingham</a>
         </div>
       </div>
       <div className="dropdown">
         <a href="#" className="nav-link">Automation <img className="dd-img" src= {Dropdown} alt="Dropdown" /></a>
         <div className="dropdown-menu">
           <a href="#">London</a>
           <a href="#">Manchester</a>
           <a href="#">Birmingham</a>
         </div>
       </div>
       
       <a href="#" className="nav-link">Contact</a>
     </nav>
     <button className="login-btn">Log in</button>
   </header>
 );
 
 export default Header;