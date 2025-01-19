import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home";
import AboutSection from "./about_section";
import Skills from "./MySkills";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<AboutSection />} />
          <Route path="/MySkills" element={<Skills />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
