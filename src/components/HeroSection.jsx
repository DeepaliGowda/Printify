import React, { useState, useEffect } from 'react';
import '../styles/HeroSection.css';

const HeroSection = () => {
  const images = [
    "https://images.pexels.com/photos/5709608/pexels-photo-5709608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2414840/pexels-photo-2414840.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId); 
  }, [images.length]);

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Create and Sell Custom Products</h1>
        <p className="hero-description">
          Design, print, and sell your custom products online without inventory. It's easy to get started!
        </p>
        <button className="hero-button">Get Started</button>
      </div>
      <img
        src={images[currentImageIndex]}
        alt="Hero"
        className="hero-image"
      />
    </section>
  );
};

export default HeroSection;
