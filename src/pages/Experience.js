import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink, Building, Award } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Senior Software Engineer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: 'Leading full-stack development initiatives for enterprise applications. Mentoring junior developers and implementing best practices for scalable architecture.',
      achievements: [
        'Reduced application load time by 40% through optimization',
        'Led a team of 5 developers on a major product launch',
        'Implemented CI/CD pipeline reducing deployment time by 60%'
      ],
      technologies: ['React', 'Node.js', 'AWS', 'Docker', 'PostgreSQL'],
      type: 'Full-time'
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      company: 'InnovateTech',
      location: 'New York, NY',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple web applications using modern technologies. Collaborated with cross-functional teams to deliver high-quality products.',
      achievements: [
        'Built 3 major features that increased user engagement by 25%',
        'Improved code quality score from 75% to 95%',
        'Reduced bug reports by 30% through better testing practices'
      ],
      technologies: ['Vue.js', 'Python', 'Django', 'MongoDB', 'Redis'],
      type: 'Full-time'
    },
    {
      id: 3,
      title: 'Frontend Developer Intern',
      company: 'StartupHub',
      location: 'Austin, TX',
      period: '2019 - 2020',
      description: 'Worked on the frontend development of a SaaS platform. Gained experience with modern JavaScript frameworks and responsive design.',
      achievements: [
        'Developed responsive UI components used across the platform',
        'Participated in code reviews and agile development processes',
        'Contributed to the company\'s design system'
      ],
      technologies: ['JavaScript', 'React', 'CSS3', 'Git', 'Figma'],
      type: 'Internship'
    }
  ];

  const education = [
    {
      id: 1,
      degree: 'Bachelor of Science in Computer Science',
      school: 'University of Technology',
      location: 'Boston, MA',
      period: '2015 - 2019',
      gpa: '3.8/4.0',
      relevant: ['Data Structures & Algorithms', 'Software Engineering', 'Database Systems', 'Web Development']
    }
  ];

  const certifications = [
    {
      id: 1,
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023',
      credential: 'SAA-C03'
    },
    {
      id: 2,
      name: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      date: '2022',
      credential: 'GCP-001'
    },
    {
      id: 3,
      name: 'Certified Scrum Master',
      issuer: 'Scrum Alliance',
      date: '2021',
      credential: 'CSM-12345'
    }
  ];

  return (
    <div className="experience">
      <div className="container">
        {/* Header */}
        <motion.div
          className="page-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="page-title">Experience & Education</h1>
          <p className="page-subtitle">
            My professional journey, education, and certifications that have shaped my career
          </p>
        </motion.div>

        {/* Work Experience */}
        <section className="experience-section">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Building size={28} />
            Work Experience
          </motion.h2>

          <div className="timeline">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3 className="job-title">{exp.title}</h3>
                    <span className="job-type">{exp.type}</span>
                  </div>
                  
                  <div className="company-info">
                    <h4 className="company-name">{exp.company}</h4>
                    <div className="job-meta">
                      <span className="location">
                        <MapPin size={16} />
                        {exp.location}
                      </span>
                      <span className="period">
                        <Calendar size={16} />
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  <p className="job-description">{exp.description}</p>

                  <div className="achievements">
                    <h5>Key Achievements:</h5>
                    <ul>
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="technologies">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="education-section">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Award size={28} />
            Education
          </motion.h2>

          <div className="education-grid">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                className="education-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="education-header">
                  <h3 className="degree">{edu.degree}</h3>
                  <span className="gpa">GPA: {edu.gpa}</span>
                </div>
                
                <h4 className="school">{edu.school}</h4>
                
                <div className="education-meta">
                  <span className="location">
                    <MapPin size={16} />
                    {edu.location}
                  </span>
                  <span className="period">
                    <Calendar size={16} />
                    {edu.period}
                  </span>
                </div>

                <div className="relevant-courses">
                  <h5>Relevant Coursework:</h5>
                  <div className="course-tags">
                    {edu.relevant.map((course) => (
                      <span key={course} className="course-tag">{course}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="certifications-section">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Award size={28} />
            Certifications
          </motion.h2>

          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                className="certification-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="cert-header">
                  <h3 className="cert-name">{cert.name}</h3>
                  <span className="cert-credential">{cert.credential}</span>
                </div>
                
                <p className="cert-issuer">{cert.issuer}</p>
                <p className="cert-date">{cert.date}</p>
                
                <button className="cert-link">
                  <ExternalLink size={16} />
                  Verify Certificate
                </button>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Experience;
