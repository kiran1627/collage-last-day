import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const heartSymbols = ["💖", "✨", "🌸"];

const FloatingHearts = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    // Generate static hearts to animate to avoid excessive re-renders
    const initialHearts = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // percentage string
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 15,
      size: Math.random() * 1.5 + 0.5, // 0.5 to 2
      symbol: heartSymbols[Math.floor(Math.random() * heartSymbols.length)]
    }));
    
    setHearts(initialHearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts.map(heart => (
        <motion.div
          key={heart.id}
          initial={{ y: "120vh", x: `${heart.x}vw`, opacity: 0, rotate: 0 }}
          animate={{ 
            y: "-20vh", 
            x: [`${heart.x}vw`, `${heart.x + (Math.random() > 0.5 ? 5 : -5)}vw`, `${heart.x}vw`],
            opacity: [0, 0.4, 0],
            rotate: 360
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute drop-shadow-lg"
          style={{ 
            fontSize: `${heart.size}rem`,
            filter: 'blur(1px)'
          }}
        >
          {heart.symbol}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;
