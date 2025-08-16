import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Eye, Code, Globe, Smartphone, Database } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps', icon: Globe },
    { id: 'mobile', label: 'Mobile Apps', icon: Smartphone },
    { id: 'backend', label: 'Backend', icon: Database },
    { id: 'fullstack', label: 'Full Stack', icon: Code }
  ];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with real-time inventory management, payment processing, and admin dashboard.',
      image: '/api/placeholder/400/250',
      category: 'fullstack',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      features: [
        'User authentication & authorization',
        'Real-time inventory tracking',
        'Payment processing with Stripe',
        'Admin dashboard with analytics',
        'Responsive design for all devices'
      ],
      challenges: 'Implemented complex state management for real-time updates and optimized database queries for better performance.',
      solutions: 'Used Redux for state management and implemented database indexing strategies.'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team collaboration, and progress tracking.',
      image: '/api/placeholder/400/250',
      category: 'web',
      technologies: ['Vue.js', 'Firebase', 'Vuex', 'Tailwind CSS'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      features: [
        'Real-time collaboration',
        'Task assignment & tracking',
        'Progress visualization',
        'Team management',
        'File attachments'
      ],
      challenges: 'Managing real-time updates across multiple users and handling concurrent edits.',
      solutions: 'Implemented optimistic updates and conflict resolution strategies.'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
      image: '/api/placeholder/400/250',
      category: 'web',
      technologies: ['React', 'OpenWeather API', 'Chart.js', 'Leaflet'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      features: [
        'Location-based weather data',
        'Interactive weather maps',
        '7-day forecast',
        'Weather alerts',
        'Historical data analysis'
      ],
      challenges: 'Integrating multiple APIs and handling location permissions.',
      solutions: 'Used service workers for offline functionality and implemented graceful error handling.'
    },
    {
      id: 4,
      title: 'Fitness Tracking Mobile App',
      description: 'A mobile fitness tracking application with workout planning, progress monitoring, and social features.',
      image: '/api/placeholder/400/250',
      category: 'mobile',
      technologies: ['React Native', 'Redux', 'Firebase', 'HealthKit'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      features: [
        'Workout planning & tracking',
        'Progress visualization',
        'Social features',
        'Health data integration',
        'Offline functionality'
      ],
      challenges: 'Integrating with device health APIs and optimizing for performance.',
      solutions: 'Used native modules for health integration and implemented efficient data caching.'
    },
    {
      id: 5,
      title: 'API Gateway Service',
      description: 'A microservices API gateway with authentication, rate limiting, and request routing capabilities.',
      image: '/api/placeholder/400/250',
      category: 'backend',
      technologies: ['Node.js', 'Express', 'Redis', 'JWT', 'Docker'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      features: [
        'Request routing & load balancing',
        'Authentication & authorization',
        'Rate limiting',
        'Request/response transformation',
        'Monitoring & logging'
      ],
      challenges: 'Handling high traffic and implementing efficient caching strategies.',
      solutions: 'Used Redis for caching and implemented circuit breaker patterns.'
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website with advanced animations and interactive elements.',
      image: '/api/placeholder/400/250',
      category: 'web',
      technologies: ['React', 'Framer Motion', 'Three.js', 'GSAP'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      features: [
        '3D animations & effects',
        'Interactive navigation',
        'Responsive design',
        'Performance optimized',
        'SEO friendly'
      ],
      challenges: 'Creating smooth animations while maintaining performance.',
      solutions: 'Used WebGL for 3D effects and implemented lazy loading for better performance.'
    }
  ];

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' || project.category === activeFilter
  );

  return (
    <div className="projects">
      <div className="container">
        {/* Header */}
        <motion.div
          className="page-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="page-title">Projects & Portfolio</h1>
          <p className="page-subtitle">
            A collection of my work showcasing various technologies and problem-solving approaches
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="filters"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {filters.map((filter) => {
            const Icon = filter.icon;
            return (
              <motion.button
                key={filter.id}
                className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {Icon && <Icon size={18} />}
                {filter.label}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="projects-grid"
          layout
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card"
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="project-image">
                  <div className="image-placeholder">
                    <Code size={48} />
                  </div>
                  <div className="project-overlay">
                    <div className="project-actions">
                      <button className="action-btn" onClick={(e) => { e.stopPropagation(); window.open(project.liveUrl, '_blank'); }}>
                        <Eye size={20} />
                      </button>
                      <button className="action-btn" onClick={(e) => { e.stopPropagation(); window.open(project.githubUrl, '_blank'); }}>
                        <Github size={20} />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-technologies">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="project-modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="project-modal"
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 50 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="modal-close"
                  onClick={() => setSelectedProject(null)}
                >
                  ×
                </button>

                <div className="modal-content">
                  <div className="modal-header">
                    <h2>{selectedProject.title}</h2>
                    <div className="modal-actions">
                      <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                      <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                        <Github size={18} />
                        View Code
                      </a>
                    </div>
                  </div>

                  <div className="modal-body">
                    <div className="modal-section">
                      <h3>Description</h3>
                      <p>{selectedProject.description}</p>
                    </div>

                    <div className="modal-section">
                      <h3>Key Features</h3>
                      <ul>
                        {selectedProject.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="modal-section">
                      <h3>Technologies Used</h3>
                      <div className="modal-technologies">
                        {selectedProject.technologies.map((tech) => (
                          <span key={tech} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>

                    <div className="modal-section">
                      <h3>Challenges & Solutions</h3>
                      <div className="challenges-solutions">
                        <div>
                          <h4>Challenges:</h4>
                          <p>{selectedProject.challenges}</p>
                        </div>
                        <div>
                          <h4>Solutions:</h4>
                          <p>{selectedProject.solutions}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;
