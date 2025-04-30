'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/sections/header';
import Education from '@/components/sections/education';
import Experience from '@/components/sections/experience';
import Projects from '@/components/sections/projects';
import TechnicalSkills from '@/components/sections/technical-skills';
import Certifications from '@/components/sections/certifications';
import Achievements from '@/components/sections/achievements';
import Extracurricular from '@/components/sections/extracurricular';
import ContactMe from '@/components/sections/contact-me';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import StarfieldCanvas from '@/components/starfield-canvas';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';

// Define section data
const sections = [
  { id: 'header', component: Header, title: 'Hero' },
  { id: 'skills', component: TechnicalSkills, title: 'Skills' },
  { id: 'projects', component: Projects, title: 'Projects' },
  { id: 'experience', component: Experience, title: 'Experience' },
  { id: 'education', component: Education, title: 'Education' },
  { id: 'certifications', component: Certifications, title: 'Certifications' },
  { id: 'achievements', component: Achievements, title: 'Achievements' },
  { id: 'extracurricular', component: Extracurricular, title: 'Extracurricular' },
  { id: 'contact', component: ContactMe, title: 'Contact' },
];

<<<<<<< HEAD
// Smoother animation variants - Simplified transition
const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
=======
// Smoother animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 60 }, // Slightly increased initial distance
>>>>>>> 34cdbe24d6884502908d4f4a6b9c818d09c292c2
  visible: {
    opacity: 1,
    y: 0,
    transition: {
<<<<<<< HEAD
      duration: 0.6, // Slightly shorter duration
      ease: [0.6, 0.01, 0.05, 0.95], // Use optimized cubic-bezier
=======
      duration: 0.7, // Slightly longer duration
      ease: [0.6, 0.01, -0.05, 0.95], // Custom cubic-bezier for smoother feel
      staggerChildren: 0.1, // Add subtle stagger if section has animated children
>>>>>>> 34cdbe24d6884502908d4f4a6b9c818d09c292c2
    },
  },
};


export default function Home() {
  useEffect(() => {
    // Force dark mode - remove if theme toggle is added later
    document.documentElement.classList.add('dark');

    // Enable native smooth scrolling via CSS in globals.css
    // No JS needed if `scroll-behavior: smooth;` is on <html>
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <StarfieldCanvas /> {/* Render canvas */}
      <Navbar />
<<<<<<< HEAD
=======
      {/* Main content area with vertical sections */}
      {/* Apply custom scrollbar styling via global CSS */}
>>>>>>> 34cdbe24d6884502908d4f4a6b9c818d09c292c2
      <main className="container mx-auto px-4 py-24 pt-32 sm:px-6 lg:px-8 space-y-16 md:space-y-24">
        {sections.map((section, index) => (
          <motion.div
            key={section.id}
            id={section.id}
            initial="hidden"
            whileInView="visible"
<<<<<<< HEAD
             // Trigger animation when 15% of the section is visible
            viewport={{ once: true, amount: 0.15 }}
=======
            viewport={{ once: true, amount: 0.15 }} // Trigger when 15% is visible for smoother appearance
>>>>>>> 34cdbe24d6884502908d4f4a6b9c818d09c292c2
            variants={sectionVariants}
            className={cn(
              "w-full relative z-10",
            )}
          >
            <section.component />

            {/* Add a separator between sections, except after the last one and header */}
            {index < sections.length - 1 && section.id !== 'header' && (
                 <Separator className="my-16 md:my-24 bg-border/40" />
            )}
          </motion.div>
        ))}
      </main>
      <Footer />
    </div>
  );
}
```