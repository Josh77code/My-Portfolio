import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import '../styles/styles.css';
import logo from '../assets/logo.png'; 


const Navbar = () => {
  return (
    <motion.nav className="navbar" initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
       <img src={logo} alt="CyberJosh Logo" className="hero-logo" />
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">What I Do</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;