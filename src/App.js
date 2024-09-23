import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import TrustSignals from './components/TrustSignals';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Features />
      <TrustSignals />
      <HowItWorks />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
