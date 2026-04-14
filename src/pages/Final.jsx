import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import Button from '../components/Button';
import Modal from '../components/Modal';

const Final = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenSurprise = () => {
    setIsModalOpen(true);
    
    // Trigger cinematic confetti explosion
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#00f2fe', '#4facfe', '#00c6fb', '#005bea', '#009efd', '#2af598']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#00f2fe', '#4facfe', '#00c6fb', '#005bea', '#009efd', '#2af598']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative w-full h-[100dvh] bg-[#020617] flex flex-col items-center justify-center p-6 text-center"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-md w-full"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 drop-shadow-md">
          And finally...
        </h2>
        <p className="text-lg text-white/80 mb-12 italic">
          No matter where life takes us, <br /> some things never change.
        </p>

        <Button onClick={handleOpenSurprise}>
          Click for Surprise 🎁
        </Button>
      </motion.div>

      {/* The Surprise Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.2 }}
          className="text-6xl mb-6 flex justify-center"
        >
          💙
        </motion.div>
        
        <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 leading-tight text-glow">
          I LOVE YOU GUYS <br/> FOREVER! 😭
        </h3>
        
        <p className="text-white/80 mt-4 text-sm sm:text-base">
          Cheers to our memories, our laughs, and our unbreakable bond. Happy Last Day of College! 🎓✨
        </p>
      </Modal>

    </motion.div>
  );
};

export default Final;
