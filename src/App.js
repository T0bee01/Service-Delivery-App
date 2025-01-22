import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import NotFound from "./Pages/NotFound";
import NavBar from "./Components/NavBar"; // Import the NavBar component

function App() {
  return (
    <Router>
      <div>
        <NavBar /> {/* Add the navigation bar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="*" element={<NotFound />} /> {/* Handles unknown routes */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
