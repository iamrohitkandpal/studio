'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/sections/header';
import TechnicalSkills from '@/components/sections/technical-skills';
import Projects from '@/components/sections/projects';
import Experience from '@/components/sections/experience';
import Education from '@/components/sections/education';
import Certifications from '@/components/sections/certifications';
import Achievements from '@/components/sections/achievements';
import Extracurricular from '@/components/sections/extracurricular';
import LoadingScreen from '@/components/loading-screen';
import { motion, AnimatePresence } from 'framer-motion';
import ContactMe from '@/components/sections/contact-me';
import StarfieldCanvas from '@/components/starfield-canvas';

// Define language type for better type safety
type Language = {
  name: string;
  proficiency: number;
};

// Define the languages array with proper typing
const languages: Language[] = [
  { name: 'JavaScript', proficiency: 90 },
  { name: 'TypeScript', proficiency: 85 },
  { name: 'Python', proficiency: 80 },
  { name: 'Java', proficiency: 75 },
  { name: 'C++', proficiency: 70 },
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  
  // Check if this is the first visit to show loader
  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisited');
    if (hasVisited) {
      setIsLoading(false);
    } else {
      // Set flag for future visits in this session
      sessionStorage.setItem('hasVisited', 'true');
    }
  }, []);
  
  const handleLoadingComplete = () => {
    setIsLoading(false);
  };
  
  // Staggered animation for sections
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };
  
  return (
    <main className="flex min-h-screen flex-col items-center">
      <StarfieldCanvas />
      
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      
      <AnimatePresence>
        {!isLoading && (
          <motion.div
            className="w-full space-y-24 md:space-y-32"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.section id="home" className="pt-24 pb-12" variants={sectionVariants}>
              <Header />
            </motion.section>
            
            <motion.section id="skills" className="py-16" variants={sectionVariants}>
              <TechnicalSkills languages={languages} />
            </motion.section>
            
            <motion.section id="projects" className="py-16" variants={sectionVariants}>
              <Projects />
            </motion.section>
            
            <motion.section id="experience" className="py-16" variants={sectionVariants}>
              <Experience />
            </motion.section>
            
            <motion.section id="education" className="py-16" variants={sectionVariants}>
              <Education />
            </motion.section>
            
            <motion.section id="certifications" className="py-16" variants={sectionVariants}>
              <Certifications />
            </motion.section>
            
            <motion.section id="achievements" className="py-16" variants={sectionVariants}>
              <Achievements />
            </motion.section>
            
            <motion.section id="extracurricular" className="py-16" variants={sectionVariants}>
              <Extracurricular />
            </motion.section>
            
            <motion.section id="contact" className="py-16" variants={sectionVariants}>
              <ContactMe />
            </motion.section>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}