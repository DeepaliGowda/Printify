import React from 'react';
import '../styles/HowItWorks.css';

const HowItWorks = () => (
  <section className="how-it-works-container">
    <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>How It Works</h2>
    <div className="step-grid">
      <div className="step-card">
        <h3 className="step-title"><div className='step-name'>1. Create </div>custom product</h3>
        <p className="step-description">Easily add your designs to a wide range of products using our free tools</p>
      </div>
      <div className="step-card">
        <h3 className="step-title"><div className='step-name'>2.Sell </div>on your terms</h3>
        <p className="step-description">You choose the product sale price, and where to sell.</p>
      </div>
      <div className="step-card">
        <h3 className="step-title"><div className='step-name'>3.We handle </div>fulfillment</h3>
        <p className="step-description">Once an order is placed, we automatically handle all the printing and delivery logistics</p>
      </div>
    </div>
  </section>
);

export default HowItWorks;
