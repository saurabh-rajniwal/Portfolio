import "./App.css";
import Experience from "./Components/Experience";
import Header from "./Components/Header";
import Intro from "./Components/Intro";
import { images } from "./Components/data";
import Contact from "./Components/Contact";
import { buttonHeadings } from "./Components/data";
import Connect from "./Components/Connect";
import { experiences } from "./Components/data";
import { footerHeading } from "./Components/data";

function App() {
  return (
    <div className="bodyContainer">
      <Header />
      <Intro images={images} />
      <Contact buttons={buttonHeadings} />
      <Experience experiences={experiences} />
      <Connect footerHeading={footerHeading} />
    </div>
  );
}

export default App;
