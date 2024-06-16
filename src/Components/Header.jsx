import React, { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <nav className="navbar">
        <div className={`container ${menuOpen ? "active" : ""}`}>
          <a tabIndex={0} className="navbar-brand" href="#">
            SR.
          </a>
          <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
            <a tabIndex={0} className="nav-link" href="#home">
              Home
            </a>
            <a tabIndex={0} className="nav-link" href="#skill">
              Skills
            </a>
            <a tabIndex={0} className="nav-link" href="#projects">
              Projects
            </a>
            <a tabIndex={0} className="nav-link" href="#experience">
              Experience
            </a>
            <a tabIndex={0} className="nav-link" href="#connect">
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
