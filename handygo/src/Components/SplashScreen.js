import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const generateBubbles = () => {
  return new Array(20).fill(0).map((_, i) => ({
    id: i,
    size: Math.random() * 40 + 20,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 3 + 2,
  }));
};

const generateBees = () => {
  return new Array(5).fill(0).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 4 + 3,
  }));
};

const SplashScreen = ({ onAnimationComplete }) => {
  const [bubbles, setBubbles] = useState(generateBubbles());
  const [bees, setBees] = useState(generateBees());
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const logoTimeout = setTimeout(() => {
      setShowLogo(true);
    }, 5000);

    const animationTimeout = setTimeout(() => {
      onAnimationComplete();
    }, 7000);

    return () => {
      clearTimeout(logoTimeout);
      clearTimeout(animationTimeout);
    };
  }, [onAnimationComplete]);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden flex justify-center items-center">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute bg-blue-300 opacity-50 rounded-full"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            top: `${bubble.y}%`,
            left: `${bubble.x}%`,
          }}
          animate={{ y: [bubble.y + 20, bubble.y - 20], opacity: [1, 0.5, 1] }}
          transition={{ duration: bubble.duration, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {bees.map((bee) => (
        <motion.div
          key={bee.id}
          className="absolute w-10 h-10"
          style={{ top: `${bee.y}%`, left: `${bee.x}%` }}
          animate={{ x: [bee.x + 10, bee.x - 10], y: [bee.y + 10, bee.y - 10] }}
          transition={{ duration: bee.duration, repeat: Infinity, ease: "easeInOut" }}
        >
          🐝
        </motion.div>
      ))}

      {showLogo && (
        <motion.div
          className="absolute flex justify-center items-center w-32 h-32 bg-orange-500 rounded-full"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        >
          <span className="text-white text-2xl font-bold">HandyBEE</span>
        </motion.div>
      )}
    </div>
  );
};

export default SplashScreen;
