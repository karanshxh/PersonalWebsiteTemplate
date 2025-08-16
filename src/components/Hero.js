import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const texts = [
    "Software Engineer",
    "Full-Stack Developer", 
    "Problem Solver",
    "Tech Enthusiast"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(false);
      setTimeout(() => {
        setCurrentText((prev) => (prev + 1) % texts.length);
        setIsTyping(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [texts.length]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="particles">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="particle"></div>
        ))}
      </div>
      
      <div className="section-container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-greeting">
              <span className="wave">👋</span>
              <span>Hello, I'm</span>
            </div>
            
            <h1 className="hero-title">
              <span className="gradient-text">Karan</span>
            </h1>
            
            <div className="hero-subtitle">
              <span>I'm a </span>
              <span className={`typing-text ${isTyping ? 'typing' : ''}`}>
                {texts[currentText]}
              </span>
              <span className="cursor">|</span>
            </div>
            
            <p className="hero-description">
              Passionate about creating innovative solutions and building 
              exceptional user experiences. I love turning complex problems 
              into simple, beautiful, and intuitive designs.
            </p>
            
            <div className="hero-actions">
              <button 
                className="btn btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </button>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="code-window">
              <div className="window-header">
                <div className="window-controls">
                  <div className="control red"></div>
                  <div className="control yellow"></div>
                  <div className="control green"></div>
                </div>
                <div className="window-title">karan.js</div>
              </div>
              <div className="code-content">
                <pre className="code-block">
{`<span className="keyword">class</span> <span className="class-name">Karan</span> {
  <span className="keyword">constructor</span>() {
    <span className="keyword">this</span>.<span className="property">name</span> = <span className="string">"Karan"</span>;
    <span className="keyword">this</span>.<span className="property">role</span> = <span className="string">"Software Engineer"</span>;
    <span className="keyword">this</span>.<span className="property">location</span> = <span className="string">"San Francisco, CA"</span>;
  }

  <span className="method">code</span>() {
    <span className="keyword">return</span> <span className="string">"Clean & Efficient"</span>;
  }

  <span className="method">design</span>() {
    <span className="keyword">return</span> <span className="string">"Beautiful & Intuitive"</span>;
  }

  <span className="method">solve</span>() {
    <span className="keyword">return</span> <span className="string">"Complex Problems"</span>;
  }
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
          <span>Scroll to explore</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
