import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import SplashScreen from "./Components/SplashScreen";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import NotFound from "./Pages/NotFound";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const navigate = useNavigate();

  const handleSplashComplete = () => {
    setShowSplash(false);
    navigate("/home");
  };

  return showSplash ? (
    <SplashScreen onAnimationComplete={handleSplashComplete} />
  ) : (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;