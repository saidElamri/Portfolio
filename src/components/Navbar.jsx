// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router
import '../styles/Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to toggle mobile menu

    // Function to check scroll position and toggle 'scrolled' class
    const handleScroll = () => {
        if (window.scrollY > 10) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    // Add scroll event listener when the component mounts
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Toggle mobile menu visibility
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(prevState => !prevState);
    };

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <Link to="/" className="logo">My Portfolio</Link>
            <div className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/skills">Skills</Link> {/* New link for Skills page */}
                <Link to="/contact">Contact</Link>
            </div>

            {/* Hamburger Button */}
            <button className="hamburger" onClick={toggleMobileMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>
        </nav>
    );
};

export default Navbar;
