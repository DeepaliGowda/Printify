import React from 'react';
import '../styles/TrustSignals.css';

const TrustSignals = () => (
  <section className="trust-container">
    <h2>Trusted by Thousands of Merchants</h2>
    <div className="stats-grid">
      <div className="stat-card">
        <h2 className="stat-number">100+</h2>
        <p className="stat-label">Countries Served</p>
      </div>
      <div className="stat-card">
        <h2 className="stat-number">500K</h2>
        <p className="stat-label">Merchants</p>
      </div>
      <div className="stat-card">
        <h2 className="stat-number">Millions</h2>
        <p className="stat-label">Products Sold</p>
      </div>
    </div>
  </section>
);

export default TrustSignals;
