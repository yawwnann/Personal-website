import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import AboutSection from "./components/About/about_section";
import Skills from "./components/Skills/MySkills";
import ProjectPage from "./components/Project/Project";

import Contact from "./components/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
