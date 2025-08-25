import React from 'react';
import { personalData } from '../data/personalData';
import './Experience.css';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="experience section">
      <div className="container">
        <h2 className="section-title">My Experience</h2>
        
        <div className="timeline">
          {personalData.experiences.map((experience, index) => (
            <div key={experience.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-content">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
