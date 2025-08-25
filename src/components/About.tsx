import React from 'react';
import { personalData } from '../data/personalData';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <div className="about-intro">
              <p className="intro-text">{personalData.about.introduction}</p>
            </div>
            
            <div className="about-story">
              <p>{personalData.about.story}</p>
            </div>
            
            <div className="about-education">
              <h3>Education</h3>
              <p>{personalData.about.education}</p>
            </div>
            
            <div className="about-interests">
              <h3>Interests</h3>
              <div className="interests-list">
                {personalData.about.interests.map((interest, index) => (
                  <span key={index} className="interest-tag">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="about-stats">
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-number">{personalData.experiences.length}</div>
                <div className="stat-label">Years of Experience</div>
              </div>
              
              <div className="stat-card">
                <div className="stat-number">{personalData.projects.length}</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              
              <div className="stat-card">
                <div className="stat-number">{personalData.skills.length}</div>
                <div className="stat-label">Skills Mastered</div>
              </div>
              
              <div className="stat-card">
                <div className="stat-number">{personalData.socialLinks.length}</div>
                <div className="stat-label">Social Networks</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="about-location">
          <div className="location-info">
            <span className="location-icon">📍</span>
            <span>Based in {personalData.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
