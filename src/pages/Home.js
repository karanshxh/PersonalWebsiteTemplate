import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import SimpleSphere from '../components/SimpleSphere';
import './Home.css';

const Home = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // GSAP animations for text reveal
    const tl = gsap.timeline();
    
    tl.fromTo(textRef.current, 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    // Floating animation for hero section
    gsap.to(heroRef.current, {
      y: -20,
      duration: 3,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1
    });
  }, []);



  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero" ref={heroRef}>
        <div className="hero-background">
          <SimpleSphere />
        </div>

        <div className="hero-content">
          <motion.div
            className="hero-text"
            ref={textRef}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Hi, I'm <span className="gradient-text">Karan</span>
            </motion.h1>
            
            <motion.h2
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Software Engineer & Creative Developer
            </motion.h2>
            
            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Passionate about building innovative solutions and creating 
              exceptional user experiences. I specialize in full-stack development, 
              with expertise in modern web technologies and creative problem-solving.
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <Link to="/experience" className="btn-primary">
                View Experience
                <ArrowRight size={18} />
              </Link>
              <a href="/resume.pdf" className="btn-secondary" download>
                <Download size={18} />
                Download Resume
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          className="social-links"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <Linkedin size={24} />
          </a>
          <a href="mailto:karan@example.com" className="social-link">
            <Mail size={24} />
          </a>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <motion.div
          className="container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            {[
              { name: 'Frontend', skills: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS'] },
              { name: 'Backend', skills: ['Node.js', 'Python', 'Java', 'PostgreSQL'] },
              { name: 'Tools', skills: ['Git', 'Docker', 'AWS', 'Figma'] },
              { name: 'Other', skills: ['Machine Learning', 'DevOps', 'UI/UX', 'Agile'] }
            ].map((category, index) => (
              <motion.div
                key={category.name}
                className="skill-category"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="category-title">{category.name}</h3>
                <div className="skills-list">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Quick Stats */}
      <section className="stats-section">
        <motion.div
          className="container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="stats-grid">
            {[
              { number: '3+', label: 'Years Experience' },
              { number: '50+', label: 'Projects Completed' },
              { number: '15+', label: 'Technologies Mastered' },
              { number: '100%', label: 'Client Satisfaction' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="stat-item"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="stat-number gradient-text">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
