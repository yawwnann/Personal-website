import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./compenents/home";
import AboutSection from "./compenents/about_section";
import Skills from "./compenents/MySkills";
import ProjectPage from "./compenents/Project";
import Landyard from "./compenents/Landyard/Lanyard";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<AboutSection />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/ProjectPage" element={<ProjectPage />} />
          <Route path="/Landyard" element={<Landyard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
