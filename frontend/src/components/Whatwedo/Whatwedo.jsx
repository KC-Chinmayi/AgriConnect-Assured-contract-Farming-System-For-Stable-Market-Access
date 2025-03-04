import React from 'react';
import './Whatwedo.css'; // Create this CSS file for styling

const Whatwedo = () => {
  return (
    <section className="what-we-do-section" id="what-we-do">
      <h2>What We Do</h2>
      <p>
        We focus on innovative farming techniques, using modern technology while keeping our practices organic and eco-friendly. Our team ensures high-quality crops and a sustainable environment for future generations.
      </p>
      <div className="services">
        <div className="service">
          <h3>Organic Farming</h3>
          <p>We grow our crops without synthetic chemicals or pesticides.</p>
        </div>
        <div className="service">
          <h3>Contract Farming</h3>
          <p>We collaborate with local farmers to produce top-quality produce.</p>
        </div>
        <div className="service">
          <h3>Community Support</h3>
          <p>We provide education and support to local communities and farmers.</p>
        </div>
      </div>
    </section>
  );
};

export default Whatwedo;
