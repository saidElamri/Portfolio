// src/pages/Skills.jsx
import React from 'react';
import '../styles/Skills.css';

function Skills() {
  return (
    <section className="skills">
      <h2>My Skills</h2>

      <div className="skills-category">
        <h3>Frontend</h3>
        <ul>
          <li>HTML5</li>
          <li>CSS3 (Flexbox, Grid)</li>
          <li>JavaScript (ES6+)</li>
          <li>React</li>
          <li>Vite</li>
        </ul>
      </div>

      <div className="skills-category">
        <h3>Backend</h3>
        <ul>
          <li>Node.js</li>
          <li>Express</li>
          <li>MongoDB</li>
          <li>Django</li>
          <li>MySQL</li>
        </ul>
      </div>

      <div className="skills-category">
        <h3>Tools & Other Skills</h3>
        <ul>
          <li>Git & GitHub</li>
          <li>Render (Deployment)</li>
          <li>Canva</li>
          <li>Basic AI and Machine Learning Concepts</li>
          <li>ALX AI Career Essentials</li>
        </ul>
      </div>
    </section>
  );
}

export default Skills;
