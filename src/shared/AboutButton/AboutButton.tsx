import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "./AboutButton.css";

interface AboutButtonProps {
  optionalClassName?: string;
}

const About: React.FC<AboutButtonProps> = ({ optionalClassName }) => {
  return (
    <Link to="/about">
      <motion.button
        className={`aboutButton ${optionalClassName ? optionalClassName : ""}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: optionalClassName ? 2 : 4 }}
      >
        About
      </motion.button>
    </Link>
  );
};

export default About;
