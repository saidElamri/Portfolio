// src/pages/Skills.jsx

import React from 'react';
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs, SiExpress, SiMongodb, SiDjango, SiGit, SiMysql, SiDocker } from 'react-icons/si';
import '../styles/Skills.css';

const skillsData = [
  {
    category: "Frontend Development",
    skills: [
      { name: "HTML", level: 90, icon: <SiHtml5 /> },
      { name: "CSS", level: 85, icon: <SiCss3 /> },
      { name: "JavaScript", level: 80, icon: <SiJavascript /> },
      { name: "React", level: 75, icon: <SiReact /> },
    ],
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Node.js", level: 70, icon: <SiNodedotjs /> },
      { name: "Express", level: 65, icon: <SiExpress /> },
      { name: "MongoDB", level: 75, icon: <SiMongodb /> },
      { name: "Django", level: 60, icon: <SiDjango /> },
    ],
  },
  {
    category: "Tools & Technologies",
    skills: [
      { name: "Git & GitHub", level: 85, icon: <SiGit /> },
      { name: "MySQL", level: 70, icon: <SiMysql /> },
      { name: "Docker", level: 60, icon: <SiDocker /> },
    ],
  },
];

const Skills = () => {
  return (
    <div className="skills-page">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {skillsData.map((category, index) => (
          <div className="skills-card" key={index}>
            <h3>{category.category}</h3>
            <div className="skill-list">
              {category.skills.map((skill, i) => (
                <div className="skill" key={i}>
                  <div className="skill-circle">
                    <div
                      className="progress-circle"
                      style={{ '--progress': skill.level }}
                    >
                      <span>{skill.level}%</span>
                    </div>
                  </div>
                  <div className="skill-icon">{skill.icon}</div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
