import React from 'react';
import hero from '../Images/hero-img2.png'
import BTN from '../Images/play-circle.png'

const Hero = () => (
  <section className="hero">
    <div className="hero-content">
      <h1 className="hero-title">Life’s too short for <br /> breakdowns. Learn <br /> PLCs!</h1>
      <p className="hero-description">
        At Scantime, we’re establishing a recognised standard in <br/>
         PLC training,
        ensuring engineers work safely, efficiently, and <br/>confidently.
      </p>
      <div className="hero-buttons">
        <button className="btn btn-primary">
          <img className="btn-primary-icon" src={BTN} alt="Play" /> Book now
        </button>
        <button className="btn btn-secondary">Explore our courses</button>
      </div>
    </div>
    <div className="hero-image">
      <img src= {hero} alt="Engineer" className="hero-img" />
    </div>
  </section>
);

export default Hero;
