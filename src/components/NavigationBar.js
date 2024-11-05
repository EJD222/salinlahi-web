import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; // Import useNavigate
import "../styles/NavigationBar.css";
import ReorderIcon from "@mui/icons-material/Reorder";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CloseIcon from "@mui/icons-material/Close";

function NavigationBar() {
  const SalinlahiLogo = "/assets/images/logo/salinlahi_logo_1.png";

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate(); // Initialize useNavigate

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsSubmenuOpen(false);
  };

  const toggleSubmenu = (e) => {
    e.preventDefault();
    setIsSubmenuOpen(!isSubmenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsSubmenuOpen(false);
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const isBaybayinToolsActive = location.pathname.startsWith("/baybayin-tools");

  // Handler to navigate to the home page
  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <div className="navbar">
      {/* Logo and Title */}
      <div className="logo-and-title" onClick={handleLogoClick}>
        <div className="logo-container">
          <img src={SalinlahiLogo} alt="Salinlahi Logo" />
        </div>
        <div className="title-container">
          <h2>Salinlahi</h2>
        </div>
      </div>

      {/* Menu Options */}
      <div className={`menu-options ${isMenuOpen ? "open" : ""}`} ref={menuRef}>
        <button className="close-menu" onClick={toggleMenu}>
          <CloseIcon />
        </button>

        <Link
          to="/"
          onClick={toggleMenu}
          className={location.pathname === "/" ? "active-link" : ""}
        >
          Home
        </Link>

        <div
          className={`menu-item-with-submenu ${isSubmenuOpen ? "open" : ""} ${
            isBaybayinToolsActive ? "current-menu-parent" : ""
          }`}
        >
          <span className="menu-link" onClick={toggleSubmenu}>
            Baybayin Tools
            <ArrowDropDownIcon className="submenu-toggle" />
          </span>

          {isSubmenuOpen && (
            <ul className="submenu-list">
              <li>
                <Link
                  to="/baybayin-tools/baybayin-guide"
                  onClick={toggleMenu}
                  className={
                    location.pathname === "/baybayin-tools/baybayin-guide"
                      ? "active-link"
                      : ""
                  }
                >
                  Baybayin Guide
                </Link>
              </li>
              <li>
                <Link
                  to="/baybayin-tools/baybayin-phrasebook"
                  onClick={toggleMenu}
                  className={
                    location.pathname === "/baybayin-tools/baybayin-phrasebook"
                      ? "active-link"
                      : ""
                  }
                >
                  Baybayin Phrasebook
                </Link>
              </li>
              <li>
                <Link
                  to="/baybayin-tools/baybayin-characters"
                  onClick={toggleMenu}
                  className={
                    location.pathname === "/baybayin-tools/baybayin-characters"
                      ? "active-link"
                      : ""
                  }
                >
                  Baybayin Characters
                </Link>
              </li>
              <li>
                <Link
                  to="/baybayin-tools/baybayin-transliterator"
                  onClick={toggleMenu}
                  className={
                    location.pathname === "/baybayin-tools/baybayin-transliterator"
                      ? "active-link"
                      : ""
                  }
                >
                  Baybayin Transliterator
                </Link>
              </li>
            </ul>
          )}
        </div>

        <Link
          to="/about"
          onClick={toggleMenu}
          className={location.pathname === "/about" ? "active-link" : ""}
        >
          About
        </Link>
        <Link
          to="/contact"
          onClick={toggleMenu}
          className={location.pathname === "/contact" ? "active-link" : ""}
        >
          Contact
        </Link>
      </div>

      <button className="menu-toggle" onClick={toggleMenu}>
        <ReorderIcon />
      </button>
    </div>
  );
}

export default NavigationBar;