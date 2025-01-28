import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import SplashScreen from "./Components/SplashScreen";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import NotFound from "./Pages/NotFound";
import Login from "./Pages/Login";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return showSplash ? (
    <SplashScreen onComplete={() => setShowSplash(false)} />
  ) : (
    <Routes>
      <Route path="/" element={<Login />} /> {/* Login after splash */}
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
