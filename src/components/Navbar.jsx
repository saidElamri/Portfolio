import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router
import '../styles/Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to toggle mobile menu
    const navbarRef = useRef(null);
    const hamburgerRef = useRef(null);

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

    // Handle mouse enter and leave events for the dropdown
    const handleMouseEnter = () => {
        setIsMobileMenuOpen(true);
    };

    const handleMouseLeave = () => {
        setIsMobileMenuOpen(false);
    };

    // Toggle mobile menu visibility
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(prevState => !prevState);
    };

    return (
        <nav
            className={`navbar ${isScrolled ? 'scrolled' : ''}`}
            ref={navbarRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Link to="/" className="logo">My Portfolio</Link>
            <div
                className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}
                onMouseEnter={handleMouseEnter} // Show menu when mouse enters nav-links
                onMouseLeave={handleMouseLeave} // Hide menu when mouse leaves nav-links
            >
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/skills">Skills</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/Certificate">Certificate</Link>
            </div>

            {/* Hamburger Button */}
            <button className="hamburger" onClick={toggleMobileMenu} ref={hamburgerRef}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>
        </nav>
    );
};

export default Navbar;
