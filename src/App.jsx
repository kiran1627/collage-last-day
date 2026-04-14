import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import Memories from './pages/Memories';
import Friends from './pages/Friends';
import Final from './pages/Final';
import AudioPlayer from './components/AudioPlayer';
import FloatingHearts from './components/FloatingHearts';

function App() {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => setCurrentStep((prev) => Math.min(3, prev + 1));
  const prevStep = () => setCurrentStep((prev) => Math.max(0, prev - 1));

  const renderStep = () => {
    switch(currentStep) {
      case 0:
        return <Home key="home" onStart={nextStep} />;
      case 1:
        return <Memories key="memories" onNext={nextStep} />;
      case 2:
        return <Friends key="friends" onNext={nextStep} />;
      case 3:
        return <Final key="final" />;
      default:
        return <Home key="home" onStart={nextStep} />;
    }
  };

  return (
    <div className="relative min-h-[100dvh] w-full bg-black text-white font-sans overflow-hidden sm:max-w-[430px] sm:mx-auto sm:border-x sm:border-white/10 sm:shadow-2xl">
      {/* 
        This wrapper creates a mobile-first app bounds on desktop screens
        To make it full screen on desktop, remove the sm: classes above
      */}
      
      {/* Background VFX */}
      <FloatingHearts />

      {/* Global Audio Player Toggle */}
      <AudioPlayer />

      {/* Main App Content Router */}
      <main className="relative z-10 w-full h-[100dvh] overflow-hidden">
        <AnimatePresence mode="wait">
          {renderStep()}
        </AnimatePresence>
      </main>

      {/* Simple debug/navigation hints (Hide in production) */}
      {/* 
      <div className="fixed bottom-0 left-0 w-full flex justify-between p-2 z-[999] opacity-20 pointer-events-none">
        <span className="text-xs">Step: {currentStep}</span>
      </div> 
      */}
    </div>
  );
}

export default App;
