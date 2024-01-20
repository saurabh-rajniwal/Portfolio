import React from "react";

export default function Header() {
  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <a tabIndex={0} className="navbar-brand" href="#">
            SR.
          </a>
          <div className="navbar-links">
            <a tabIndex={0} className="nav-link" href="#home">
              Home
            </a>
            <a tabIndex={0} className="nav-link" href="#skill">
              Skills
            </a>
            <a tabIndex={0} className="nav-link" href="#experience">
              Experience
            </a>
            <a tabIndex={0} className="nav-link" href="#connect">
              Connect
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
