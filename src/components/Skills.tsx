import React, { useState } from 'react';
import { personalData } from '../data/personalData';
import './Skills.css';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Skills', icon: '🎯' },
    { id: 'languages', label: 'Languages', icon: '💻' },
    { id: 'frameworks', label: 'Frameworks', icon: '⚡' },
    { id: 'tools', label: 'Tools', icon: '🔧' },
    { id: 'course-topics', label: 'Course Topics', icon: '📚' }
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
            </button>
          ))}
        </div>
        
        <div className="skills-grid">
          {filteredSkills.map((skill, index) => (
            <div key={skill.name} className="skill-card">
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
        
        {filteredSkills.length === 0 && (
          <div className="no-skills">
            <p>No skills found for the selected category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
