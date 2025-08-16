import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Get to know me better - my journey, passion, and what drives me in the world of technology.
        </p>
        
        <div className="about-content">
          <div className="about-text">
            <div className="about-card card">
              <h3>Who I Am</h3>
              <p>
                I'm a passionate Software Engineer with a love for creating elegant solutions 
                to complex problems. With a strong foundation in both frontend and backend 
                development, I enjoy building applications that not only work flawlessly 
                but also provide exceptional user experiences.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing 
                to open-source projects, or sharing knowledge with the developer community. 
                I believe in continuous learning and staying up-to-date with the latest 
                industry trends and best practices.
              </p>
            </div>
            
            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-number">3+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">15+</div>
                <div className="stat-label">Technologies</div>
              </div>
            </div>
          </div>
          
          <div className="about-visual">
            <div className="tech-stack">
              <h3>Tech Stack</h3>
              <div className="tech-grid">
                <div className="tech-item">
                  <div className="tech-icon">⚛️</div>
                  <span>React</span>
                </div>
                <div className="tech-item">
                  <div className="tech-icon">🟨</div>
                  <span>JavaScript</span>
                </div>
                <div className="tech-item">
                  <div className="tech-icon">🐍</div>
                  <span>Python</span>
                </div>
                <div className="tech-item">
                  <div className="tech-icon">☕</div>
                  <span>Java</span>
                </div>
                <div className="tech-item">
                  <div className="tech-icon">⚡</div>
                  <span>Node.js</span>
                </div>
                <div className="tech-item">
                  <div className="tech-icon">🗄️</div>
                  <span>PostgreSQL</span>
                </div>
                <div className="tech-item">
                  <div className="tech-icon">🐳</div>
                  <span>Docker</span>
                </div>
                <div className="tech-item">
                  <div className="tech-icon">☁️</div>
                  <span>AWS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
