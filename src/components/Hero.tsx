import React, { useState, useEffect, useMemo } from 'react';
import { personalData } from '../data/personalData';
import './Hero.css';

const Hero: React.FC = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = useMemo(() => [
    personalData.title,
    'Web Developer',
    'Problem Solver',
    'Creative Thinker'
  ], []);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const deleteSpeed = 50;
    const pauseTime = 2000;

    const typeText = () => {
      const currentTextToType = texts[currentIndex];
      
      if (isDeleting) {
        setCurrentText(currentTextToType.substring(0, currentText.length - 1));
      } else {
        setCurrentText(currentTextToType.substring(0, currentText.length + 1));
      }
    };

    const handleTyping = () => {
      const currentTextToType = texts[currentIndex];
      
      if (!isDeleting && currentText === currentTextToType) {
        // Finished typing, pause then start deleting
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && currentText === '') {
        // Finished deleting, move to next text
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
      } else {
        // Continue typing or deleting
        typeText();
        setTimeout(handleTyping, isDeleting ? deleteSpeed : typeSpeed);
      }
    };

    const timeoutId = setTimeout(handleTyping, typeSpeed);
    return () => clearTimeout(timeoutId);
  }, [currentText, currentIndex, isDeleting, texts]);

  return (
    <section id="home" className="hero">
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
              <span>I'm a </span>
              <span className="typing-text">{currentText}</span>
              <span className="cursor">|</span>
            </div>
            
            <p className="hero-subtitle">{personalData.subtitle}</p>
            
            <div className="hero-buttons">
              <a href="#projects" className="btn">
                View My Work
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get In Touch
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
        
        <div className="hero-social">
          {personalData.socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label={link.name}
            >
              <span className="social-icon">{getSocialIcon(link.icon)}</span>
            </a>
          ))}
        </div>
        
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
          <span>Scroll Down</span>
        </div>
      </div>
    </section>
  );
};

const getSocialIcon = (icon: string): string => {
  switch (icon) {
    case 'github':
      return '🐙';
    case 'linkedin':
      return '💼';
    case 'twitter':
      return '🐦';
    case 'external':
      return '🔗';
    default:
      return '🔗';
  }
};

export default Hero;
