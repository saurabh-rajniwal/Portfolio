import React from "react";

export default function Contact({ buttons }) {
  return (
    <>
      <section className="buttons" id="skill">
        {buttons.map((item, index) =>
          index === 1 ? (
            <a
              className="buttons_style link_styles"
              key={index}
              href="https://drive.google.com/file/d/1u9Xam0YLsiqmLaDA-M06LF8kFzg55JFV/view?usp=drive_link"
              target="blank"
            >
              {item}
            </a>
          ) : (
            <a
              className="buttons_style link_styles"
              key={index}
              href="#connect"
            >
              {item}
            </a>
          )
        )}
      </section>
      <section className="experience-logos">
        <p className="experience-logos-heading">Skills</p>
        <div className="skill-logo">
          <i
            className="fa-brands fa-html5 fa-2xl"
            style={{ color: "#fff" }}
          ></i>
          <i
            className="fa-brands fa-css3-alt fa-2xl"
            style={{ color: "#fff" }}
          ></i>
          <i className="fa-brands fa-js fa-2xl" style={{ color: "#fff" }}></i>
          <i
            className="fa-brands fa-angular fa-2xl"
            style={{ color: "#fff" }}
          ></i>
          <i
            className="fa-brands fa-react fa-2xl"
            style={{ color: "#fff" }}
          ></i>
          <i
            className="fa-brands fa-bootstrap fa-2xl"
            style={{ color: "#fff" }}
          ></i>
        </div>
      </section>
    </>
  );
}
