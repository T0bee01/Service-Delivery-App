import React, { useEffect, useState } from "react";
import "./SplashScreen.css";
import logo from "../assets/handygo-logo.jpeg"; // Update with your logo path

const SplashScreen = ({ onComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        onComplete(); // Switch to homepage after animation
      }, 1000);
    }, 3000); // 3 seconds before transition
  }, [onComplete]);

  return (
    <div className={`splash-screen ${fadeOut ? "fade-out" : ""}`}>
      <img src={logo} alt="HandyGo Logo" className="logo" />
      <div className="bubble-container">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="bubble"></div>
        ))}
      </div>
    </div>
  );
};

export default SplashScreen;
