import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "./AboutButton.css";

const About: React.FC = () => {
  return (
    <Link to="/about">
      <motion.button
        className="aboutButton"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 4 }}
      >
        About
      </motion.button>
    </Link>
  );
};

export default About;
