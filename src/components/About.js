import React from "react";
import { motion } from "framer-motion";
import '../styles/styles.css';

// Import your images
import cybersecurityImage from '../assets/cybersecurity.png';
import webSecurityImage from '../assets/web_security.png';
import researchImage from '../assets/research.png';
import teachingImage from '../assets/teaching.png';

const About = () => {
  return (
    <motion.section className="about" initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
      <h2>What I Do</h2>
      <p>I specialize in cybersecurity, Web development, Web security, Security research, and teaching people cybersecurity.</p>
      <p> <b>My goals are to</b></p>

      <div className="card-container">
        <div className="card">
          <h3>Prevent Business Hacks</h3>
          <p>My primary goal is to protect businesses from cyber threats and potential hacking incidents.</p>
        </div>
        <div className="card">
          <h3>Cybersecurity Education</h3>
          <p>Educating individuals and organizations on best cybersecurity practices to keep them safe online.</p>
        </div>
        <div className="card">
          <h3>Security Research</h3>
          <p>Conducting proactive security research to identify vulnerabilities and fix them before they’re exploited.</p>
        </div>
        <div className="card">
          <h3>Research & Development</h3>
          <p>Helping people in cybersecurity research and development to build stronger, safer systems.</p>
        </div>
      </div>


      <div className="about-images">
        <div className="about-image">
          <img src={cybersecurityImage} alt="Cybersecurity" className="about-image-img" />
          <p>Cybersecurity</p>
        </div>
        <div className="about-image">
          <img src={webSecurityImage} alt="Web Security" className="about-image-img" />
          <p>Web Security</p>
        </div>
        <div className="about-image">
          <img src={researchImage} alt="Research" className="about-image-img" />
          <p>Security Research</p>
        </div>
        <div className="about-image">
          <img src={teachingImage} alt="Teaching" className="about-image-img" />
          <p>Cybersecurity Instructor</p>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
