import React from "react";

export default function Experience({ experiences }) {
  return (
    <>
      <section className="experience_heading" id="experience">
        <p tabIndex={0}>Experience</p>
      </section>
      {experiences.map((experience, index) => (
        <section tabIndex={0} key={index} className="experience-section">
          <div className="experience-item">
            <div className="experience-item-logo">
              <img className="logo" src="images/infyLogo.png" alt="Infy logo" />
              <h3>{experience.company}</h3>
            </div>
            <p>{experience.date}</p>
          </div>
          <p>{experience.description}</p>
        </section>
      ))}
    </>
  );
}
