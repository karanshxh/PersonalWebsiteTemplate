import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "TechCorp Solutions",
      position: "Senior Software Engineer",
      duration: "2022 - Present",
      description: "Leading development of scalable web applications using React, Node.js, and AWS. Mentoring junior developers and implementing best practices for code quality and performance.",
      technologies: ["React", "Node.js", "AWS", "PostgreSQL", "Docker"],
      type: "Full-time"
    },
    {
      id: 2,
      company: "InnovateLabs",
      position: "Full-Stack Developer",
      duration: "2021 - 2022",
      description: "Built and maintained multiple client projects using modern web technologies. Collaborated with design and product teams to deliver high-quality user experiences.",
      technologies: ["JavaScript", "Python", "React", "Django", "MongoDB"],
      type: "Full-time"
    },
    {
      id: 3,
      company: "StartupXYZ",
      position: "Frontend Developer",
      duration: "2020 - 2021",
      description: "Developed responsive web applications and improved user interface performance. Worked closely with UX designers to implement pixel-perfect designs.",
      technologies: ["React", "TypeScript", "CSS3", "Redux", "Jest"],
      type: "Full-time"
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="section-container">
        <h2 className="section-title">Work Experience</h2>
        <p className="section-subtitle">
          My professional journey in software development and the companies I've had the privilege to work with.
        </p>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-content card">
                <div className="timeline-header">
                  <div className="timeline-marker">
                    <div className="marker-dot"></div>
                    <div className="marker-line"></div>
                  </div>
                  <div className="timeline-info">
                    <h3 className="company-name">{exp.company}</h3>
                    <div className="position-details">
                      <span className="position">{exp.position}</span>
                      <span className="duration">{exp.duration}</span>
                    </div>
                    <span className="job-type">{exp.type}</span>
                  </div>
                </div>
                
                <p className="timeline-description">
                  {exp.description}
                </p>
                
                <div className="technologies">
                  {exp.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="experience-cta">
          <button className="btn btn-secondary">
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Experience;
