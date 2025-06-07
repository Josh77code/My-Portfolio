import React from "react";
import { motion } from "framer-motion";
import '../styles/styles.css';

const Projects = () => {
  return (
    <motion.section className="projects" initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
      <h2>Projects I've Worked On</h2>
      
      <div className="project-cards">
        <motion.div className="project-card" whileHover={{ scale: 1.05 }}>
          <h3>ML-Driven Intrusion-Resistant Authentication System</h3>
          <p>This project aims to build a machine learning-driven authentication system with an encrypted database and real-time behavioral threat detection.</p>
          <a href="https://github.com/Josh77code/Intrusion_Authentication" target="_blank" rel="noopener noreferrer">View Project</a>
        </motion.div>

        <motion.div className="project-card" whileHover={{ scale: 1.05 }}>
          <h3>Malaria Reporting Web App</h3>
          <p>A web application designed for users to report malaria symptoms, get drug recommendations, and find nearby hospitals with real-time assistance from an AI-powered chatbot.</p>
          <a href="https://github.com/Okeanalysis/cybermodel" target="_blank" rel="noopener noreferrer">View Project</a>
        </motion.div>

        <motion.div className="project-card" whileHover={{ scale: 1.05 }}>
          <h3>Web Security Research & Pentesting</h3>
          <p>A comprehensive security research project focusing on web security vulnerabilities and penetration testing to identify and mitigate risks.</p>
          <a href="" target="_blank" rel="noopener noreferrer">View Project</a>
        </motion.div>

        <motion.div className="project-card" whileHover={{ scale: 1.05 }}>
          <h3>Phishing Detector</h3>
          <p>A Machine learning driven web application to detect phishing attack that amy try to infringe the confidentiality itegrity and availability of the organization's website</p>
          <a href="https://github.com/Josh77code/Intrusion_Authentication" target="_blank" rel="noopener noreferrer">View Project</a>
        </motion.div>
        <motion.div className="project-card" whileHover={{ scale: 1.05 }}>
          <h3>Client Bonus Blog Web App</h3>
          <p>A web application that allow people to post their contents online and make make money through it </p>
          <a href="https://github.com/Josh77code/ClientBonusApp" target="_blank" rel="noopener noreferrer">View Project</a>
        </motion.div>

        <motion.div className="project-card" whileHover={{ scale: 1.05 }}>
          <h3>Intrusion Monitoring tool</h3>
          <p>A mahine learning web based application that allow admin to view any forms of intrusion in the authentication part of the web app</p>
          <a href="https://github.com/Josh77code/Intrusion_Monitoring" target="_blank" rel="noopener noreferrer">View Project</a>
        </motion.div>

        <motion.div className="project-card" whileHover={{ scale: 1.05 }}>
          <h3>Hostel Management Systems</h3>
          <p>A webapplication that allow students to sucessfully access their hostel allocation systems. Where admin will upload the documents</p>
          <a href="https://github.com/Josh77code/HostelManagementSystem" target="_blank" rel="noopener noreferrer">View Project</a>
        </motion.div>
      </div>
    </motion.section>

    
  );
};

export default Projects;
