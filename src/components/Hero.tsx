import React from 'react';
import { personalData } from '../data/personalData';
import './Hero.css';

const Hero: React.FC = () => {

  return (
    <section id="home" className="hero" style={{ opacity: 1, transform: 'translateY(0)' }}>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-greeting">
              <span className="wave">👋</span>
              <span>Hello, I'm</span>
            </div>
            
            <h1 className="hero-name">
              <span className="text-gradient">{personalData.name}</span>
            </h1>
            
            <div className="hero-title">
              <span>I'm a {personalData.title}</span>
            </div>
            
            <p className="hero-subtitle">{personalData.subtitle}</p>
            
            <div className="hero-buttons">
              {personalData.socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  {social.icon === 'linkedin' ? '💼' : social.icon === 'github' ? '🐙' : '🔗'}&nbsp;&nbsp;{social.name}
                </a>
              ))}
              
              <a
                href="/resume.pdf"
                download
                className="btn"
              >
                📄&nbsp;&nbsp;Resume
              </a>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="profile-container">
              <img 
                src={personalData.profileImage} 
                alt={personalData.name}
                className="profile-image"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
              <div className="profile-placeholder">
                <span className="placeholder-text">{personalData.name.charAt(0)}</span>
              </div>
            </div>
          </div>
        </div>
        

        

      </div>
    </section>
  );
};



export default Hero;
