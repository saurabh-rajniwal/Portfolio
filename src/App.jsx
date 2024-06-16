import "./App.css";
import Experience from "./Components/Experience";
import Header from "./Components/Header";
import Intro from "./Components/Intro";
import { images, projects } from "./Components/data";
import Contact from "./Components/Contact";
import { buttonHeadings } from "./Components/data";
import Connect from "./Components/Connect";
import { experiences } from "./Components/data";
import { footerHeading } from "./Components/data";
import Projects from "./Components/Projects";

function App() {
  return (
    <div className="bodyContainer">
      <Header />
      <Intro images={images} />
      <Contact buttons={buttonHeadings} />
      <Projects projects={projects} />
      <Experience experiences={experiences} />
      <Connect footerHeading={footerHeading} />
    </div>
  );
}

export default App;
