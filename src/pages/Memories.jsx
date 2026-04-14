import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../components/Button';

// Auto-import all optimized images from the compressed memories folder
const modules = import.meta.glob('../assests/images/memories_optimized/*.{jpg,jpeg,png,webp,JPG,JPEG}', { eager: true });
const imagePaths = Object.values(modules).map(mod => mod.default);

const captions = [
  "From the first day we met... ❤️",
  "Canteen gossip & endless laughs! 😂",
  "Last minute assignments 📚",
  "Forever my soul friends. ✨",
  "The unforgettable moments...",
  "Cheers to our bond! 🥂",
  "Through thick and thin 🤞",
  "All the crazy nights 🌙",
  "Making memories 💖"
];

const memories = imagePaths.length > 0
  ? imagePaths.map((url, i) => ({
    image: url,
    text: captions[i % captions.length]
  }))
  : [
    { image: "/images/1.jpg", text: "From the first day we met... ❤️" },
    { image: "/images/2.jpg", text: "Canteen gossip & endless laughs! 😂" }
  ];

const Memories = ({ onNext }) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % memories.length);
    }, 2800); // Faster auto-slideshow
    return () => clearInterval(timer);
  }, []);

  const handleDragEnd = (event, info) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      setDirection(1);
      setIndex((prev) => (prev + 1) % memories.length);
    } else if (info.offset.x > swipeThreshold) {
      setDirection(-1);
      setIndex((prev) => (prev === 0 ? memories.length - 1 : prev - 1));
    }
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 1.05,
    })
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative w-full h-[100dvh] bg-black overflow-hidden flex flex-col"
    >
      <div className="flex-1 w-full relative touch-none">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.25, ease: "easeOut" }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.8}
            onDragEnd={handleDragEnd}
            className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"
          >
            {/* Fallback styling for when images are missing */}
            <div className="absolute inset-0 bg-cyan-950 flex items-center justify-center">
              <span className="text-white/20 text-sm italic">Image {index + 1}</span>
            </div>

            {/* Blurred Background Layer for premium aesthetic without black bars */}
            <img
              src={memories[index].image}
              alt=""
              className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-50 scale-110 pointer-events-none"
            />

            {/* Main image fitted perfectly */}
            <img
              src={memories[index].image}
              alt={`Memory ${index + 1}`}
              className="absolute inset-0 w-full h-full object-contain drop-shadow-2xl z-0"
              onError={(e) => {
                e.target.style.display = 'none'; // Hide broken image so fallback shows
              }}
            />

            {/* Dark gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Overlay content safely placed at the bottom */}
        <div className="absolute bottom-0 left-0 w-full p-6 pb-24 z-10 pointer-events-none">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-2xl md:text-3xl font-medium text-white text-glow text-center leading-snug drop-shadow-lg">
                {memories[index].text}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Progress indicators and Next Button */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-20 flex flex-col items-center justify-end pb-6">
        <div className="flex justify-center mb-6 px-4">
          <div className="bg-black/40 backdrop-blur-md px-5 py-1.5 rounded-full text-white/90 font-medium tracking-widest text-sm border border-white/10 shadow-lg">
            {index + 1} / {memories.length}
          </div>
        </div>

        <div className="px-6 w-full max-w-sm">
          <Button onClick={onNext} className="bg-white/10 hover:bg-white/20 border border-white/20 w-full">
            The Besties →
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default Memories;
