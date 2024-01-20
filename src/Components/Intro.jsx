import React from "react";

export default function Intro({ images }) {
  return (
    <>
      <section className="center-container" id="home">
        <div className="introContainer">
          <div className="about-details">
            <img src={images[0].user} alt="John Doe" className="about-photo" />
            <p tabIndex={0} className="intro-para">
              I create User-centric
            </p>
            <span tabIndex={0} className="intro-para-2">
              Web Dreams into <span className="spanText">Reality</span>
            </span>
            <p tabIndex={0} className="intro-para-3">
              Hello World! I'm
              <span className="username"> Saurabh Rajniwal</span>, and I'm on a
              mission to redefine online interactions. As a frontend developer,
              I fuse creativity with technology to sculpt visually compelling
              and user-centric websites. Join me on this journey where pixels
              meet purpose and every click tells a story.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
