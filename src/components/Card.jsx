import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ name, description, emoji, image, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.5, ease: "easeOut" }}
      whileTap={{ scale: 0.97 }}
      whileHover={{ y: -5 }}
      className="glass rounded-2xl overflow-hidden w-full max-w-[320px] mx-auto sm:max-w-none flex flex-col shadow-lg"
    >
      <div className="relative w-full aspect-[4/3] bg-cyan-900/30">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-3 left-4 text-white text-3xl font-bold flex items-center gap-2">
          {name} <span>{emoji}</span>
        </div>
      </div>
      <div className="p-5 text-sm leading-relaxed text-gray-200">
        {description}
      </div>
    </motion.div>
  );
};

export default Card;
