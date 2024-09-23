import React from 'react';
import '../styles/Features.css';

const Features = () => {
  const featuresData = [
    {
      title: 'Higher Profits',
      description: 'We offer some of the lowest prices in the industry because print providers continously compete to win your business.',
      bgColor: '#f0f9ff',
    },
    {
      title: 'Robust Scaling',
      description: 'Easily handle peak holiday seasons, with our wide network of partners and automic routing functionality.',
      bgColor: '#fef9f3',
    },
    {
      title: 'No Inventory Needed',
      description: 'Sell products without managing any stock.',
      bgColor: '#f9f5ff',
    },
    {
      title: 'Best Selection',
      description: 'With 900+ products and top quality brands, you can choose the best product for your business.',
      bgColor: '#fff4f5',
    },
  ];

  return (
    <section className="features-section">
      <h2 className="features-title">Our Features</h2>
      <div className="features-container">
        {featuresData.map((feature, index) => (
          <div
            key={index}
            className="feature-card"
            style={{ backgroundColor: feature.bgColor }}
          >
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
