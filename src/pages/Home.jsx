import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../components/Button';
import homeBg1 from '../assests/images/home background 1.jpg';
import homeBg2 from '../assests/images/home background.jpg';

const backgroundImages = [homeBg1, homeBg2];

const Home = ({ onStart }) => {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 4500); // Cross-fade every 4.5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50, filter: "blur(10px)" }}
      transition={{ duration: 0.8 }}
      className="relative w-full h-[100dvh] flex flex-col items-center justify-end pb-24 px-6 bg-black overflow-hidden"
    >
      {/* Custom Fading Background Images */}
      <AnimatePresence mode="popLayout">
        <motion.img 
          key={bgIndex}
          src={backgroundImages[bgIndex]} 
          alt="Background" 
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 0.6, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
      </AnimatePresence>
      {/* Subtle overlay so text pops */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/80 via-black/30 to-black/80 pointer-events-none" />

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="w-full max-w-sm flex flex-col items-center justify-center text-center z-10"
      >
        <motion.div 
          animate={{ scale: [1, 1.05, 1] }} 
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="mb-8"
        >
          <span className="text-5xl drop-shadow-2xl">🎓</span>
        </motion.div>

        <h1 className="text-4xl sm:text-5xl font-black mb-4 tracking-tighter text-white text-glow leading-tight">
          OUR LAST DAY <br />
          <span className="text-cyan-400">OF COLLEGE</span>
        </h1>

        <p className="text-lg text-white/80 font-medium mb-12 leading-relaxed drop-shadow-md">
          The end of an era, but the <br/> beginning of forever. 💖
        </p>

        <Button onClick={onStart} className="w-full">
          Start 💫
        </Button>
      </motion.div>

      {/* Subtle floating background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40 mix-blend-screen">
        <motion.div 
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ repeat: Infinity, duration: 5 }}
          className="absolute top-[20%] left-[10%] w-32 h-32 bg-cyan-600 rounded-full blur-[80px]" 
        />
        <motion.div 
          animate={{ y: [0, 20, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ repeat: Infinity, duration: 4, delay: 1 }}
          className="absolute bottom-[20%] right-[10%] w-40 h-40 bg-blue-600 rounded-full blur-[80px]" 
        />
      </div>
    </motion.div>
  );
};

export default Home;
