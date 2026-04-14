import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart } from 'lucide-react';

const FinalModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-xl"
          />
          
          <motion.div
            initial={{ scale: 0.5, opacity: 0, y: 100 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.5, opacity: 0, y: 100 }}
            className="glass relative z-10 w-full max-w-lg p-12 rounded-3xl text-center overflow-hidden"
          >
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500" />
            
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="inline-block mb-6"
            >
              <Heart className="w-20 h-20 text-pink-500 fill-pink-500" />
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white text-glow">
              I LOVE YOU GUYS FOREVER! 💖😭
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Thank you for being the highlight of my college journey. Naina, Sukanya, Reema... you're not just friends, you're my soulmates. Class of 2026 wouldn't have been the same without you.
            </p>

            <div className="flex justify-center space-x-2">
              <span className="text-pink-500">🎓</span>
              <span className="text-purple-500">✨</span>
              <span className="text-pink-500">🌸</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default FinalModal;
