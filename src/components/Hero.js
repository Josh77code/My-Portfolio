import React from "react";
import { motion } from "framer-motion";
import '../styles/styles.css';

const Hero = () => {
  return (
    <motion.section className="hero" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <h2>Hello, I'm</h2>
      <motion.h1 animate={{ scale: 1.1 }} transition={{ yoyo: Infinity, duration: 1 }}>Joshua Oyerinde</motion.h1>
      <p>Cybersecurity Specialist | Web Developer | Security Researcher | Instructor</p>
    </motion.section>
  );
};

export default Hero;