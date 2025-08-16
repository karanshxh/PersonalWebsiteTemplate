import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: '🎨',
      skills: [
        { name: 'React', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Vue.js', level: 75 }
      ]
    },
    {
      id: 'backend',
      title: 'Backend Development',
      icon: '⚙️',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'Java', level: 75 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MongoDB', level: 75 }
      ]
    },
    {
      id: 'tools',
      title: 'Tools & DevOps',
      icon: '🛠️',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 80 },
        { name: 'AWS', level: 75 },
        { name: 'CI/CD', level: 70 },
        { name: 'Linux', level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="section-container">
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="section-subtitle">
          My technical skills and expertise across various technologies and frameworks.
        </p>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div 
              key={category.id} 
              className="skill-category card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="category-header">
                <div className="category-icon">{category.icon}</div>
                <h3 className="category-title">{category.title}</h3>
              </div>
              
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="skills-summary">
          <div className="summary-card card">
            <h3>What I Bring to the Table</h3>
            <div className="summary-grid">
              <div className="summary-item">
                <div className="summary-icon">🚀</div>
                <h4>Fast Development</h4>
                <p>Quick prototyping and efficient code delivery</p>
              </div>
              <div className="summary-item">
                <div className="summary-icon">🎯</div>
                <h4>Problem Solving</h4>
                <p>Analytical approach to complex challenges</p>
              </div>
              <div className="summary-item">
                <div className="summary-icon">🤝</div>
                <h4>Team Collaboration</h4>
                <p>Excellent communication and teamwork</p>
              </div>
              <div className="summary-item">
                <div className="summary-icon">📚</div>
                <h4>Continuous Learning</h4>
                <p>Always staying updated with latest tech</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
