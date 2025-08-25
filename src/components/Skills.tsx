import React, { useState } from 'react';
import { personalData } from '../data/personalData';
import './Skills.css';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Skills', icon: '🎯' },
    { id: 'frontend', label: 'Frontend', icon: '🎨' },
    { id: 'backend', label: 'Backend', icon: '⚙️' },
    { id: 'database', label: 'Database', icon: '🗄️' },
    { id: 'devops', label: 'DevOps', icon: '🚀' },
    { id: 'other', label: 'Other', icon: '🔧' }
  ];

  const filteredSkills = activeCategory === 'all' 
    ? personalData.skills 
    : personalData.skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        
        <div className="skills-filter">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              <span className="category-icon">{category.icon}</span>
              <span className="category-label">{category.label}</span>
              <span className="category-count">
                ({activeCategory === category.id || activeCategory === 'all' 
                  ? personalData.skills.filter(s => category.id === 'all' || s.category === category.id).length 
                  : 0})
              </span>
            </button>
          ))}
        </div>
        
        <div className="skills-grid">
          {filteredSkills.map((skill, index) => (
            <div key={skill.name} className="skill-card">
              <div className="skill-header">
                <h3 className="skill-name">{skill.name}</h3>
                <span className="skill-level">{skill.level}%</span>
              </div>
              
              <div className="skill-progress">
                <div className="progress-bar">
                  <div 
                    className="progress-fill"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="skill-category">
                <span className="category-badge">
                  {categories.find(cat => cat.id === skill.category)?.icon} 
                  {categories.find(cat => cat.id === skill.category)?.label}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        {filteredSkills.length === 0 && (
          <div className="no-skills">
            <p>No skills found for the selected category.</p>
          </div>
        )}
        
        <div className="skills-summary">
          <div className="summary-card">
            <h3>Skills Overview</h3>
            <div className="summary-stats">
              <div className="summary-stat">
                <span className="stat-number">{personalData.skills.length}</span>
                <span className="stat-label">Total Skills</span>
              </div>
              <div className="summary-stat">
                <span className="stat-number">
                  {Math.round(personalData.skills.reduce((acc, skill) => acc + skill.level, 0) / personalData.skills.length)}
                </span>
                <span className="stat-label">Average Level</span>
              </div>
              <div className="summary-stat">
                <span className="stat-number">
                  {personalData.skills.filter(skill => skill.level >= 80).length}
                </span>
                <span className="stat-label">Expert Level</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
