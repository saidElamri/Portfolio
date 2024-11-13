// src/components/Footer.jsx
import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Said Elamri. All rights reserved.</p>
        <div className="social-links">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="mailto:your-email@example.com">Email Me</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
