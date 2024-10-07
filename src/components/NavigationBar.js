import React, { useState, useEffect, useRef } from 'react';
import SalinlahiLogo from '../assets/images/logo/salinlahi_logo_1.png';
import { Link } from 'react-router-dom';
import '../styles/NavigationBar.css';
import ReorderIcon from '@mui/icons-material/Reorder';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CloseIcon from '@mui/icons-material/Close';

function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Toggle main menu visibility for mobile
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsSubmenuOpen(false); // Close the submenu when toggling the main menu
  };

  // Toggle submenu visibility (only for mobile)
  const toggleSubmenu = (e) => {
    e.preventDefault();
    setIsSubmenuOpen(!isSubmenuOpen);
  };

  // Close the dropdown if clicked outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsSubmenuOpen(false); // Close the submenu
        setIsMenuOpen(false); // Close the main menu
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar">
      {/* Logo and Title */}
      <div className="logo-and-title">
        <div className="logo-container">
          <img src={SalinlahiLogo} alt="Salinlahi Logo" />
        </div>
        <div className="title-container">
          <h2>Salinlahi</h2>
        </div>
      </div>

      {/* Menu Options */}
      <div className={`menu-options ${isMenuOpen ? 'open' : ''}`} ref={menuRef}>
        {/* Close button for mobile */}
        <button className="close-menu" onClick={toggleMenu}>
          <CloseIcon />
        </button>

        <Link to="/" onClick={toggleMenu}>Home</Link>

        {/* Baybayin Tools with Dropdown List */}
        <div className={`menu-item-with-submenu ${isSubmenuOpen ? 'open' : ''}`}>
          <span className="menu-link" onClick={toggleSubmenu}>
            Baybayin Tools
            <ArrowDropDownIcon className="submenu-toggle" />
          </span>

          {/* Submenu List */}
          {isSubmenuOpen && (
            <ul className="submenu-list">
              <li><Link to="/baybayin-tools/baybayin-guide" onClick={toggleMenu}>Baybayin Guide</Link></li>
              <li><Link to="/baybayin-tools/baybayin-phrasebook" onClick={toggleMenu}>Baybayin Phrasebook</Link></li>
              <li><Link to="/baybayin-tools/baybayin-characters" onClick={toggleMenu}>Characters</Link></li>
            </ul>
          )}
        </div>

        <Link to="/about" onClick={toggleMenu}>About</Link>
        <Link to="/contact" onClick={toggleMenu}>Contact</Link>
      </div>

      {/* Menu Toggle Button for Mobile */}
      <button className="menu-toggle" onClick={toggleMenu}>
        <ReorderIcon />
      </button>
    </div>
  );
}

export default NavigationBar;
