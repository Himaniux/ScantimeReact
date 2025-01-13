import React from 'react';
import Dyson from '../Images/Dyson.png';
import AstonMartin from '../Images/AstonMartin.png';
import Toyota from '../Images/Toyota.png';
import TPL from '../Images/TPL.png';
import Amazon from '../Images/Amazon.png';


const Footer = () => (
  <footer className="footer">
    <p>Trusted by businesses big, small, everywhere</p>
    <div className="trusted-companies">
      <a href="https://www.dyson.com" target="_blank" rel="noopener noreferrer">
        <img src={Dyson} alt="Dyson" />
      </a>
      <a href="https://www.astonmartin.com" target="_blank" rel="noopener noreferrer">
        <img src={AstonMartin} alt="Aston Martin" />
      </a>
      <a href="https://www.toyota.com" target="_blank" rel="noopener noreferrer">
        <img src={Toyota} alt="Toyota" />
      </a>
      <a href="https://www.dyson.com" target="_blank" rel="noopener noreferrer">
        <img src={Dyson} alt="Dyson" />
      </a>
      <a href="https://tfl.gov.uk" target="_blank" rel="noopener noreferrer">
        <img src={TPL} alt="Transport for London" />
      </a>
      <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer">
        <img src={Amazon} alt="Amazon" />
      </a>
      <a href="https://www.toyota.com" target="_blank" rel="noopener noreferrer">
        <img src={Toyota} alt="Toyota" />
      </a>
    </div>
  </footer>
);

export default Footer;
