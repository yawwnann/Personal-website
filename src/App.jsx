import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./compenents/home";
import AboutSection from "./compenents/about_section";
import Skills from "./compenents/MySkills";
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<AboutSection />} />
          <Route path="/Skills" element={<Skills />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
