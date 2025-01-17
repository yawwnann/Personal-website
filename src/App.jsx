import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home"; // Pastikan ini sesuai dengan default export

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
