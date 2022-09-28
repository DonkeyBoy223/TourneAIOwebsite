import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './faq.css';


const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="faq">
    <div className="gpt3__possibility-image">
    </div>
    <div className="gpt3__possibility-content">
      <h1 className="gradient__text">FAQ<br />Commonly Asked Questions</h1>
      <p1>How much does TourneAIO cost?</p1> <p>TourneAIO Has Two plans being £229 £50/3Months with the £229 Covering the first 3Months & £250 For a Lifetime key.</p>
      <p1>Which platforms does TourneAIO support?</p1> <p>TourneAIO only supports Windows devices </p>
      <p1>Is my key unbindable?</p1> <p>Yes! The key is unbindable after the 2 month cooldown period</p>
      <p1>When is the next restock?</p1> <p>Restocks for TourneAIO are announced via our <a href="https://twitter.com/AioTourne">Twitter</a></p>
    </div>
  </div>
);

export default Possibility;
