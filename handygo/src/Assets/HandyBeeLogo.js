import React from "react";

const HandyBeeLogo = ({ width = 150, height = 150, color1 = "#FFA500", color2 = "#FFD700" }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      {/* Bee Body */}
      <ellipse cx="100" cy="100" rx="60" ry="40" fill={color1} stroke="black" strokeWidth="5" />
      
      {/* Stripes */}
      <rect x="70" y="80" width="60" height="10" fill={color2} />
      <rect x="70" y="100" width="60" height="10" fill={color2} />
      
      {/* Wings */}
      <ellipse cx="70" cy="70" rx="30" ry="20" fill="white" opacity="0.8" />
      <ellipse cx="130" cy="70" rx="30" ry="20" fill="white" opacity="0.8" />
      
      {/* Bee Antennas */}
      <line x1="80" y1="50" x2="70" y2="30" stroke="black" strokeWidth="4" />
      <line x1="120" y1="50" x2="130" y2="30" stroke="black" strokeWidth="4" />
      
      {/* Bee Eyes */}
      <circle cx="85" cy="85" r="5" fill="black" />
      <circle cx="115" cy="85" r="5" fill="black" />

      {/* HandyBEE Text */}
      <text x="50" y="160" fontSize="24" fontWeight="bold" fill="white">HandyBEE</text>
    </svg>
  );
};

export default HandyBeeLogo;
