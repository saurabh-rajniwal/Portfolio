import React from "react";

export default function Connect({ footerHeading }) {
  return (
    <>
      <footer tabIndex={0} className="connectContainer" id="connect">
        <div className="connect-me">
          <h3 tabIndex={0} className="connect-heading">
            Contacts
          </h3>
          <p tabIndex={0} className="containerText">
            {footerHeading}
          </p>

          <i className="fas fa-envelope fa-lg footerIcon"></i>
          <a className="footerIconText" href="mailto:saurabhrajniwal@gmail.com">
            saurabhrajniwal@gmail.com
          </a>

          <div className="footerIconExtraContent">
            <a
              href="https://www.linkedin.com/in/saurabh-rajniwal-324b01165"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin fa-lg footerIcon"></i>
            </a>
            <i className="fas fa-phone-square fa-lg footerIcon"></i>
            <a className="footerIconText" href="tel:8279936155">
              8279936155
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
