'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  
  const loadingMessages = [
    "Preparing the cave for you...",
    "Gathering magical particles...",
    "Polishing the crystals...",
    "Welcome to this digital realm!"
  ];
  
  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 30);
    
    // Update steps based on progress
    const stepInterval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev >= loadingMessages.length - 1) {
          clearInterval(stepInterval);
          return loadingMessages.length - 1;
        }
        return prev + 1;
      });
    }, 1500);
    
    // Complete loading after all steps
    const timer = setTimeout(() => {
      onLoadingComplete();
    }, 6000);
    
    return () => {
      clearInterval(interval);
      clearInterval(stepInterval);
      clearTimeout(timer);
    };
  }, [onLoadingComplete]);
  
  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 flex flex-col items-center justify-center bg-background z-50"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Animated logo or icon */}
        <motion.div
          className="mb-8 relative"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-primary/30 flex items-center justify-center shadow-lg shadow-primary/20">
            <motion.div 
              className="w-16 h-16 rounded-full bg-background flex items-center justify-center text-3xl font-bold text-primary"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              P
            </motion.div>
          </div>
          
          {/* Orbiting particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 rounded-full bg-primary/80 shadow-md shadow-primary/20"
              style={{ 
                top: '50%', 
                left: '50%',
                boxShadow: '0 0 10px 2px rgba(147, 51, 234, 0.3)'
              }}
              animate={{
                x: Math.cos(i * (Math.PI / 4)) * 60 - 6,
                y: Math.sin(i * (Math.PI / 4)) * 60 - 6,
                opacity: [0.4, 1, 0.4],
                scale: [0.8, 1.2, 0.8]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
        
        {/* Loading message */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <AnimatePresence mode="wait">
            <motion.h2
              key={currentStep}
              className="text-2xl font-heading font-bold text-primary mb-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {loadingMessages[currentStep]}
            </motion.h2>
          </AnimatePresence>
          
          <p className="text-sm text-muted-foreground">Please wait while we set things up...</p>
        </motion.div>
        
        {/* Progress bar */}
        <div className="w-64 h-2 bg-muted rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-primary/60"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;