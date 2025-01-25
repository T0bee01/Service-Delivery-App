import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HandyBeeLogo from "../Assets/HandyBeeLogo.js"; // Updated path to lowercase "assets"
import "./SplashScreen.css"; // Import animations

const SplashScreen = () => {
  const navigate = useNavigate();
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    // Generate floating bubbles
    const newBubbles = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}vw`,
      animationDuration: `${3 + Math.random() * 2}s`, // Random duration (3s - 5s)
    }));
    setBubbles(newBubbles);

    // Redirect to home page after 5 seconds
    const timer = setTimeout(() => {
      navigate("/home");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash-screen">
      {/* Animated Bees */}
      <div className="bee-container bee1">
        <HandyBeeLogo width={80} height={80} />
      </div>
      <div className="bee-container bee2">
        <HandyBeeLogo width={80} height={80} />
      </div>

      {/* HandyBEE Logo */}
      <div className="logo-container">
        <HandyBeeLogo width={200} height={200} />
      </div>

      {/* Floating Bubbles */}
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="bubble"
          style={{ left: bubble.left, animationDuration: bubble.animationDuration }}
        ></div>
      ))}
    </div>
  );
};

export default SplashScreen;
