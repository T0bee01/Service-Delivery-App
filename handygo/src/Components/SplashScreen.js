import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import "./SplashScreen.css";

const generateBubbles = (count = 25) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    size: Math.random() * 60 + 10,
    x: Math.random() * 90,
    y: Math.random() * 90,
    duration: Math.random() * 4 + 3,
  }));
};

const SplashScreen = ({ onAnimationComplete }) => {
  const [bubbles] = useState(generateBubbles());
  const [showLogo, setShowLogo] = useState(false);
  const logoControls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setShowLogo(true);
      await logoControls.start({ scale: 1, opacity: 1 });

      setTimeout(() => {
        if (onAnimationComplete) onAnimationComplete();
      }, 3500);
    };

    sequence();
  }, [onAnimationComplete, logoControls]);

  return (
    <div className="splash-container">
      {/* Floating Bubbles */}
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="bubble"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            top: `${bubble.y}%`,
            left: `${bubble.x}%`,
          }}
          animate={{ y: ["100%", "-100%"], opacity: [1, 0] }}
          transition={{ duration: bubble.duration, ease: "linear", repeat: Infinity }}
        />
      ))}

      {/* HandyBEE Logo */}
      {showLogo && (
        <motion.div
          className="logo-container"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="orange-circle">
            <div className="black-circle">
              <span className="logo-text">
                HandyB
                <span className="orange-circle-small">
                  <span className="special-e">E</span>
                </span>
                E
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default SplashScreen;
