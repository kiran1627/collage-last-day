import React, { useState, useEffect, useRef } from 'react';
import backgroundMusic from '../assests/a.mp3';

const AudioPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // We only want to set up the audio object once
    if (!audioRef.current) {
      audioRef.current = new Audio(backgroundMusic);
      audioRef.current.loop = true;
      audioRef.current.volume = 0.4;
    }

    const tryPlay = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(e => console.log('Autoplay blocked until user interacts:', e));
      }
    };

    // Try playing it immediately (this may be blocked by browser)
    tryPlay();

    // If blocked, this will catch the very first interaction (like clicking "Start")
    // and start playing the music.
    document.addEventListener('click', tryPlay, { once: true });
    document.addEventListener('touchstart', tryPlay, { once: true });

    return () => {
      document.removeEventListener('click', tryPlay);
      document.removeEventListener('touchstart', tryPlay);
      // We don't pause on unmount so the music continues across the whole app 
      // since it's a permanent background track.
    };
  }, [isPlaying]);

  // Make the UI completely invisible since we want automatic audio only 
  return null;
};

export default AudioPlayer;
