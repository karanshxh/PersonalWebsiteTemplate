import React, { useState } from 'react';
import { personalData } from '../data/personalData';
import './Experience.css';

const Experience: React.FC = () => {
  const [selectedExperiences, setSelectedExperiences] = useState<Set<string>>(new Set());

  console.log('Experiences data:', personalData.experiences);

  const handleExperienceClick = (experienceId: string) => {
    setSelectedExperiences(prev => {
      const newSet = new Set(prev);
      if (newSet.has(experienceId)) {
        newSet.delete(experienceId); // Close if same card is clicked
      } else {
        newSet.add(experienceId); // Open the clicked card
      }
      return newSet;
    });
  };

  return (
    <section id="experience" className="experience section" style={{ minHeight: '100vh', padding: '4rem 0' }}>
      <div className="container">
        <h2 className="section-title">My Experiences</h2>
        
        <div className="timeline">
          {personalData.experiences.map((experience, index) => (
            <div key={experience.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div 
                className={`timeline-content ${selectedExperiences.has(experience.id) ? 'selected' : ''}`}
                onClick={() => handleExperienceClick(experience.id)}
              >
                <div className="timeline-header">
                  <h3 className="job-title">{experience.title}</h3>
                  <div className="company-info">
                    <span className="company-name">{experience.company}</span>
                    <span className="location">📍 {experience.location}</span>
                  </div>
                  <div className="period">{experience.period}</div>
                </div>
                
                <div className="timeline-body">
                  <p className="job-description">{experience.description}</p>
                  
                  <div className="technologies">
                    <h4>Technologies Used:</h4>
                    <div className="tech-tags">
                      {experience.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="timeline-marker">
                  <div className="marker-dot"></div>
                  <div className="marker-line"></div>
                </div>
              </div>
              
              {/* Detailed card that appears on click */}
              {selectedExperiences.has(experience.id) && (
                <div className={`detailed-card ${index % 2 === 0 ? 'right' : 'left'}`}>
                  <div className="detailed-content">
                    <div className="detailed-description">
                      <h4>Role Overview</h4>
                      <p>{experience.roleOverview}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
