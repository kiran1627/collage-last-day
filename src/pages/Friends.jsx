import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import Card from '../components/Card';

import imgNaina from '../assests/images/naina.jpg';
import imgSukanya from '../assests/images/sukanya.jpg';
import imgReema from '../assests/images/reema.jpg';

const friendsData = [
  {
    name: "Naina",
    emoji: "💖",
    image: imgNaina,
    description: "My bestie, my partner in crime. College wouldn't have been the same without your dramatic stories and endless support."
  },
  {
    name: "Sukanya",
    emoji: "🌸",
    image: imgSukanya,
    description: "The sweetest soul. Thank you for the late night notes, the warm hugs, and for always being our voice of reason."
  },
  {
    name: "Reema",
    emoji: "✨",
    image: imgReema,
    description: "The life of the party! You brought so much sparkle to our dullest days. Keep shining bright."
  }
];

const Friends = ({ onNext }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="w-full h-[100dvh] overflow-y-auto no-scrollbar bg-gradient-emotional py-12 px-6 flex flex-col pt-20"
    >
      <div className="max-w-md mx-auto w-full pb-20">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl font-black text-white drop-shadow-md mb-2">The Trio</h2>
          <p className="text-white/90 text-lg">My favorite people in the world</p>
        </motion.div>

        {/* 
          Stacked vertically for clean mobile scrolling
        */}
        <div className="flex flex-col gap-8 mb-16">
          {friendsData.map((friend, index) => (
            <Card 
              key={index}
              index={index}
              name={friend.name}
              emoji={friend.emoji}
              image={friend.image}
              description={friend.description}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="w-full flex justify-center pb-8"
        >
          <Button onClick={onNext} className="bg-white/20 text-white backdrop-blur shadow-lg border border-white/30 hover:bg-white/30">
            One Last Thing 🎁
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Friends;
