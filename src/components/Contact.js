import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaXTwitter } from "react-icons/fa6"; // Import icons
import '../styles/styles.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      "service_70ddgsc",      // Replace with your EmailJS service ID
      "template_h8q3vj5",     // Replace with your EmailJS template ID
      formData,
      "g6T7g0Y424Y-PSWnw"          // Replace with your EmailJS user ID or public key
    )
      .then((result) => {
        alert("Message sent!");
      }, (error) => {
        alert("Failed to send, please try again.");
      });
  };
  return (
    <motion.section className="contact" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
      <h2>Contact Me</h2>

      <div className="social-links">
        <a href="mailto:joshuakehinde77@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope size={30} /> Email
        </a>
        <a href="https://linkedin.com/in/OyerindeJoshua" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} /> LinkedIn
        </a>
        <a href="https://github.com/Josh77Code" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} /> GitHub
        </a>
        <a href="https://x.com/joshuaoyerinde1" target="_blank" rel="noopener noreferrer">
          <FaXTwitter size={30} /> X (Twitter)
        </a>
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required />
        </div>
        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </motion.section>
  );
};

export default Contact;
