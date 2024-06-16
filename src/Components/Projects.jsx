import React from "react";

function Projects({ projects }) {
  return (
    <>
      <section className="experience-logos" id="projects">
        <p className="experience-logos-heading">Projects</p>
      </section>
      <section className="projectSection">
        {projects.map((item, index) => (
          <div className="frame" key={index}>
            <div className="imgContainer">
              <img src={item.image} alt="project-image" />
            </div>
            <div className="projectDesc">
              <h2 className="projectTitle">{item.title}</h2>
              <p>{item.description}</p>

              <div className="buttonContainer">
                <a
                  href={item.gitLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="actionButton fa-brands fa-github fa-xl"></i>
                </a>
                <a
                  href={item.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="actionButton fa-solid fa-play fa-xl"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default Projects;
