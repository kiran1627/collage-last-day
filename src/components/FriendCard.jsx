import React from 'react';
import { motion } from 'framer-motion';

const FriendCard = ({ name, role, message, image }) => {
  return (
    <motion.div
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className="glass p-6 rounded-2xl w-full max-w-xs flex flex-col items-center text-center space-y-4 group"
    >
      <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-pink-500/50 group-hover:border-pink-500 transition-colors bg-white/5">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      
      <div>
        <h3 className="text-xl font-bold text-white group-hover:text-pink-400 transition-colors uppercase tracking-widest">
          {name}
        </h3>
        <span className="text-sm font-medium text-pink-500/80">{role}</span>
      </div>
      
      <p className="text-sm text-gray-300 italic leading-relaxed">
        "{message}"
      </p>
      
      <div className="w-8 h-1 bg-pink-500/30 rounded-full group-hover:w-full transition-all duration-500" />
    </motion.div>
  );
};

export default FriendCard;
