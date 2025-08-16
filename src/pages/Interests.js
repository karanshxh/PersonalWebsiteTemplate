import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music, Camera, BookOpen, Gamepad2, Coffee, Plane, Heart, Zap, Palette, Code } from 'lucide-react';
import './Interests.css';

const Interests = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Interests', icon: Heart },
    { id: 'tech', label: 'Technology', icon: Code },
    { id: 'creative', label: 'Creative', icon: Palette },
    { id: 'lifestyle', label: 'Lifestyle', icon: Coffee }
  ];

  const interests = [
    {
      id: 1,
      title: 'Open Source Contribution',
      description: 'Passionate about contributing to open source projects and building tools that help the developer community.',
      category: 'tech',
      icon: Code,
      details: [
        'Active contributor to React ecosystem',
        'Maintainer of several popular packages',
        'Regular speaker at tech conferences',
        'Mentor for new open source contributors'
      ],
      color: '#00d4ff'
    },
    {
      id: 2,
      title: 'Photography',
      description: 'Capturing moments and exploring the world through the lens. Specializing in landscape and street photography.',
      category: 'creative',
      icon: Camera,
      details: [
        'Landscape and street photography',
        'Digital and film photography',
        'Photo editing and post-processing',
        'Travel photography adventures'
      ],
      color: '#ff6b6b'
    },
    {
      id: 3,
      title: 'Reading & Learning',
      description: 'Constantly expanding knowledge through books, articles, and online courses. Always curious about new technologies.',
      category: 'lifestyle',
      icon: BookOpen,
      details: [
        'Technical books and documentation',
        'Science fiction and fantasy novels',
        'Online courses and tutorials',
        'Research papers and articles'
      ],
      color: '#667eea'
    },
    {
      id: 4,
      title: 'Gaming',
      description: 'Enjoying both indie games and AAA titles. Particularly interested in game design and development.',
      category: 'creative',
      icon: Gamepad2,
      details: [
        'Indie game enthusiast',
        'Game development experiments',
        'Strategy and puzzle games',
        'VR gaming experiences'
      ],
      color: '#ffd93d'
    },
    {
      id: 5,
      title: 'Music Production',
      description: 'Creating electronic music and experimenting with different genres. Using digital audio workstations.',
      category: 'creative',
      icon: Music,
      details: [
        'Electronic music production',
        'Ableton Live and Logic Pro',
        'Sound design and synthesis',
        'Collaborative music projects'
      ],
      color: '#6c5ce7'
    },
    {
      id: 6,
      title: 'Travel & Exploration',
      description: 'Exploring new places, cultures, and cuisines. Documenting adventures through photography and writing.',
      category: 'lifestyle',
      icon: Plane,
      details: [
        'Backpacking adventures',
        'Cultural immersion experiences',
        'Food and culinary exploration',
        'Travel photography and blogging'
      ],
      color: '#00b894'
    },
    {
      id: 7,
      title: 'Fitness & Wellness',
      description: 'Maintaining a healthy lifestyle through regular exercise, meditation, and mindful practices.',
      category: 'lifestyle',
      icon: Zap,
      details: [
        'Strength training and cardio',
        'Yoga and meditation practice',
        'Nutrition and meal planning',
        'Outdoor activities and hiking'
      ],
      color: '#fd79a8'
    },
    {
      id: 8,
      title: 'Coffee Culture',
      description: 'Exploring different coffee brewing methods, visiting local cafes, and learning about coffee origins.',
      category: 'lifestyle',
      icon: Coffee,
      details: [
        'Pour-over and espresso brewing',
        'Coffee bean roasting',
        'Cafe exploration and reviews',
        'Coffee culture and history'
      ],
      color: '#e17055'
    }
  ];

  const filteredInterests = interests.filter(interest => 
    activeCategory === 'all' || interest.category === activeCategory
  );

  return (
    <div className="interests">
      <div className="container">
        {/* Header */}
        <motion.div
          className="page-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="page-title">Interests & Passions</h1>
          <p className="page-subtitle">
            Beyond coding - exploring the world through various hobbies and creative pursuits
          </p>
        </motion.div>

        {/* Categories */}
        <motion.div
          className="categories"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.button
                key={category.id}
                className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={20} />
                {category.label}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Interests Grid */}
        <motion.div
          className="interests-grid"
          layout
        >
          <AnimatePresence mode="wait">
            {filteredInterests.map((interest, index) => {
              const Icon = interest.icon;
              return (
                <motion.div
                  key={interest.id}
                  className="interest-card"
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <div className="interest-header">
                    <div 
                      className="interest-icon"
                      style={{ backgroundColor: interest.color }}
                    >
                      <Icon size={32} />
                    </div>
                    <h3 className="interest-title">{interest.title}</h3>
                  </div>

                  <p className="interest-description">{interest.description}</p>

                  <div className="interest-details">
                    <h4>What I do:</h4>
                    <ul>
                      {interest.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="interest-footer">
                    <span className="interest-category">{interest.category}</span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Personal Statement */}
        <motion.section
          className="personal-statement"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="statement-content">
            <h2>Beyond the Code</h2>
            <p>
              While technology is my passion, I believe in maintaining a well-rounded life. 
              These interests help me stay creative, curious, and connected to the world around me. 
              They also influence my approach to problem-solving and bring fresh perspectives to my work.
            </p>
            <p>
              I'm always open to new experiences and love connecting with people who share similar interests. 
              Whether it's discussing the latest tech trends, sharing travel stories, or collaborating on creative projects, 
              I'm excited to learn and grow together.
            </p>
          </div>
        </motion.section>

        {/* Current Focus */}
        <motion.section
          className="current-focus"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Currently Exploring</h2>
          <div className="focus-items">
            {[
              { title: 'Machine Learning', progress: 75 },
              { title: 'Blockchain Development', progress: 60 },
              { title: '3D Modeling', progress: 40 },
              { title: 'Language Learning', progress: 85 }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="focus-item"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="focus-header">
                  <h3>{item.title}</h3>
                  <span className="progress-text">{item.progress}%</span>
                </div>
                <div className="progress-bar">
                  <motion.div
                    className="progress-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.progress}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Interests;
