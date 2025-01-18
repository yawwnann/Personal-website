import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home";
import AboutSection from "./about_section";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<AboutSection />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
