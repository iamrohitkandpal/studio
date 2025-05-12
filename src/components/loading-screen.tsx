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
    "Preparing the canvas...",
    "Loading portfolio elements...",
    "Setting up animations...",
    "Welcome to my digital space!"
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
        {/* Portfolio logo animation */}
        <motion.div
          className="mb-8 relative"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Logo container */}
          <div className="w-28 h-28 flex items-center justify-center">
            {/* Animated rings */}
            <motion.div 
              className="absolute w-full h-full rounded-full border-2 border-primary/30"
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.5, 0.3],
                rotate: 360
              }}
              transition={{
                duration: 6,
                ease: "linear",
                repeat: Infinity,
              }}
            />
            <motion.div 
              className="absolute w-[85%] h-[85%] rounded-full border-2 border-primary/50"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.7, 0.5],
                rotate: -360
              }}
              transition={{
                duration: 7,
                ease: "linear",
                repeat: Infinity,
              }}
            />
            
            {/* Center logo */}
            <motion.div 
              className="w-20 h-20 rounded-full bg-card border border-primary/50 flex items-center justify-center shadow-lg shadow-primary/20"
              animate={{ 
                boxShadow: [
                  "0 0 10px 0px rgba(147, 51, 234, 0.3)", 
                  "0 0 20px 3px rgba(147, 51, 234, 0.5)", 
                  "0 0 10px 0px rgba(147, 51, 234, 0.3)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <h1 className="text-2xl font-heading font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
                Portfolio
              </h1>
            </motion.div>
          </div>
          
          {/* Animated particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute size-2 rounded-full bg-primary/80"
              style={{ 
                boxShadow: '0 0 8px 1px rgba(147, 51, 234, 0.4)'
              }}
              initial={{ 
                x: 0, 
                y: 0,
                opacity: 0 
              }}
              animate={{
                x: [0, Math.cos(i * Math.PI/3) * 70],
                y: [0, Math.sin(i * Math.PI/3) * 70],
                opacity: [0, 0.8, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.3,
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
          
          <p className="text-sm text-muted-foreground">Please wait while we prepare an immersive experience...</p>
        </motion.div>
        
        {/* Progress bar */}
        <motion.div 
          className="w-64 h-1.5 bg-card rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-primary via-purple-500 to-primary/80"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;