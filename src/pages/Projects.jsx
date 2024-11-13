// src/pages/Projects.jsx
import React from 'react';
import '../styles/Projects.css'; // Import the CSS file for styling

const projects = [
  { title: 'MLS Quiz App', description: 'A quiz platform with React and MongoDB.', tech: 'MERN', link: '#', img: './public/pro.jpg' },
  { title: 'ODCStream', description: 'A platform for managing online meetings.', tech: 'React, Node.js', link: '#', img: './public/pro.jpg' },
  { title: 'Little Lemon Booking', description: 'A restaurant booking form with Django and MySQL.', tech: 'Django, MySQL', link: '#', img: './public/pro.jpg' },
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
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

