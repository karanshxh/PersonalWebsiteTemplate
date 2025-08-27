import React from 'react';
import { personalData } from '../data/personalData';
import './Contact.css';

const Contact: React.FC = () => {

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-intro">
              <h3>Let's Connect!</h3>
              <p>
                I'm always interested in hearing about new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, feel free to reach out through any of the channels below!
              </p>
            </div>
            
            <div className="contact-buttons">
              <a href={`mailto:${personalData.email}`} className="contact-button">
                <span className="contact-button-icon">📧</span>
                <div className="contact-button-text">
                  <h4>Email</h4>
                  <span>{personalData.email}</span>
                </div>
              </a>
              
              <a href={`tel:${personalData.phone}`} className="contact-button">
                <span className="contact-button-icon">📞</span>
                <div className="contact-button-text">
                  <h4>Phone</h4>
                  <span>{personalData.phone}</span>
                </div>
              </a>
              
              <a
                href={personalData.socialLinks[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-button"
              >
                <span className="contact-button-icon">💼</span>
                <div className="contact-button-text">
                  <h4>LinkedIn</h4>
                  <span>Connect with me</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



export default Contact;
