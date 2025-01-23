import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./compenents/home";
import AboutSection from "./compenents/About/about_section";
import Skills from "./compenents/Skills/MySkills";
import ProjectPage from "./compenents/Project/Project";
import ContainerScroll from "./compenents/Scroll/container-scroll-demo";
import Contact from "./compenents/Contact/Contact";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<AboutSection />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/ProjectPage" element={<ProjectPage />} />
          <Route path="/ContainerScroll" element={<ContainerScroll />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
