import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, onClick, className = '' }) => {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
      onClick={onClick}
      className={`relative overflow-hidden group bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-bold rounded-2xl shadow-lg 
                  flex items-center justify-center w-full max-w-[280px] mx-auto min-h-[56px] text-[18px] transition-all
                  ${className}`}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      {/* Glossy overlay effect for premium feel */}
      <div className="absolute inset-0 bg-white/20 translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-700 ease-in-out" />
    </motion.button>
  );
};

export default Button;
