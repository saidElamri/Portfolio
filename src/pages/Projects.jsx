// src/pages/Projects.jsx
import React from 'react';
import '../styles/Projects.css'; // Import the CSS file for styling

const projects = [
  { 
    title: 'MLS Quiz App', 
    description: 'A quiz platform with React and MongoDB.', 
    tech: 'MERN', 
    link: 'https://github.com/saidElamri/Quizz-LMS', 
    website: 'https://lmsquiz.netlify.app/', // Add the hosted website link
    img: './lms-overview.png' 
  },
  { 
    title: 'My-portfolio', 
    description: 'Created this portfolio to showcase my journey as a web developer, featuring my projects and skills in technologies like React, JavaScript, and CSS, highlighting my passion for building innovative web solutions.', 
    tech: 'React, Node.js', 
    link: 'https://github.com/saidElamri/Portfolio', 
    website: 'https://myportfolio-se.netlify.app/', // Add the hosted website link
    img: './portfolio.png.png' 
  },
  { 
    title: 'Little Lemon Booking', 
    description: 'A restaurant booking form with Django and MySQL.', 
    tech: 'Django, MySQL', 
    link: '#', 
    website: 'https://little-lemon-booking.com', // Add the hosted website link
    img: './pro.jpg' 
  },
];

function Projects() {
  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.img} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Tech Used:</strong> {project.tech}</p>
            <div className="project-buttons">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">View Code</a>
              {project.website && (
                <a href={project.website} target="_blank" rel="noopener noreferrer" className="project-website">Visit Website</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
