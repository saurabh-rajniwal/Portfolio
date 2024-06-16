import React, { useState } from "react";
import "../header/Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <nav className="navbar">
        <div className={`container ${menuOpen ? "active" : ""}`}>
          <a
            tabIndex={0}
            className="navbar-brand"
            href="#"
            aria-label="Saurabh Rajniwal Portfolio"
          >
            SR.
          </a>
          <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
            <a
              tabIndex={0}
              className="nav-link"
              href="#home"
              aria-label="Redirect to home"
            >
              Home
            </a>
            <a
              tabIndex={0}
              className="nav-link"
              href="#skill"
              aria-label="Redirect to Skills section"
            >
              Skills
            </a>
            <a
              tabIndex={0}
              className="nav-link"
              href="#projects"
              aria-label="Redirect to project section"
            >
              Projects
            </a>
            <a
              tabIndex={0}
              className="nav-link"
              href="#experience"
              aria-label="Redirect to experience section"
            >
              Experience
            </a>
            <a
              tabIndex={0}
              className="nav-link"
              href="#connect"
              aria-label="Redirect to contact section"
            >
              Connect
            </a>
          </div>
          <button
            className="menu-toggle"
            aria-label="Toggle Menu"
            onClick={toggleMenu}
          >
            ☰
          </button>
        </div>
      </nav>
    </div>
  );
}
