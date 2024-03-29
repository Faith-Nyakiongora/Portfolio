import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import NavbarComp from "./components/NavbarComp";
import Footer from "./components/Footer";
import CoverImage from "./components/CoverImage";

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarComp />
        <CoverImage />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
