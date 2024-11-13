// src/pages/Home.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'; // For scroll-triggered animations
import '../styles/Home.css';
import pp from '../assets/pp.jpeg'; // Your profile image
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa'; // Icons for technologies


function Home() {
  const { ref: skillsRef, inView: skillsInView } = useInView({ triggerOnce: true });

  return (
    <section className="home">
      {/* Parallax Effect for the Background */}
      <motion.div
        className="background"
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      />
       
        {/* Profile Image with Hover Effect */}
      <motion.img
        src={pp}
        alt="Said Elamri"
        className="profile-image"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      />

      {/* Main Content Section */}
      <motion.div
        className="content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Hello, I'm Said Elamri
        </motion.h1>

        <motion.p
          className="tagline"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          A passionate MERN stack developer, dedicated to building interactive web experiences.
        </motion.p>

        {/* Skills Section with Scroll Animations */}
        <motion.div
          ref={skillsRef}
          className={`skills ${skillsInView ? "show" : ""}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: skillsInView ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <h3>Technologies I Love</h3>
          <div className="skills-list">
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="skill-icon pulse"
            >
              <FaReact size={40} color="#61DBFB" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="skill-icon pulse"
            >
              <FaNodeJs size={40} color="#68A063" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="skill-icon pulse"
            >
              <FaDatabase size={40} color="#4DB33D" />
            </motion.div>
          </div>
        </motion.div>

        {/* Call to Action Button */}
        <motion.button
          className="cta-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.location.href = "/projects"}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        ><i className='animation'></i>
          See My Projects
          <i className='animation'></i>
        </motion.button>
      </motion.div>

     

     
    </section>
  );
}

export default Home;
