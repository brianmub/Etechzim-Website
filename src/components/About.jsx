import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="about-container glass">
        <div className="about-content">
          <h2 className="section-title" style={{textAlign: 'left', marginBottom: '1.5rem'}}>
            About <span className="gradient-text">Etechzim</span>
          </h2>
          <p className="about-text">
            At Etechzim, we bridge the gap between complex technology and business success. 
            Born out of a passion for innovation, we specialize in delivering enterprise-grade 
            solutions built on modern frameworks.
          </p>
          <p className="about-text">
            Our team of expert developers, designers, and strategists work collaboratively 
            to ensure that every digital product we create is not only visually stunning but 
            also robust, scalable, and secure. We are more than an agency; we are your technology partners.
          </p>
          <div className="stats-container">
            <div className="stat-item">
              <h4 className="stat-number gradient-text">50+</h4>
              <p className="stat-label">Projects Completed</p>
            </div>
            <div className="stat-item">
              <h4 className="stat-number gradient-text">99%</h4>
              <p className="stat-label">Client Satisfaction</p>
            </div>
            <div className="stat-item">
              <h4 className="stat-number gradient-text">24/7</h4>
              <p className="stat-label">Support</p>
            </div>
          </div>
        </div>
        <div className="about-image-container">
          {/* Abstract visual representation of tech */}
          <div className="abstract-shape shape-1"></div>
          <div className="abstract-shape shape-2"></div>
          <div className="abstract-shape shape-3 glass"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
