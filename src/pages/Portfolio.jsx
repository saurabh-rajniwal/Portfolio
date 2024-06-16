import Intro from "../Components/introduction/Intro";
import {
  images,
  projects,
  buttonHeadings,
  experiences,
  footerHeading,
} from "../Components/data";
import Contact from "../Components/contact/Contact";
import Connect from "../Components/connect/Connect";
import Projects from "../Components/work/Projects";
import Experience from "../Components/experience/Experience";
import Header from "../Components/header/Header";

function Portfolio() {
  return (
    <>
      <Header />
      <Intro images={images} />
      <Contact buttons={buttonHeadings} />
      <Projects projects={projects} />
      <Experience experiences={experiences} />
      <Connect footerHeading={footerHeading} />
    </>
  );
}

export default Portfolio;
