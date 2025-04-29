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
import StarfieldCanvas from '@/components/starfield-canvas'; // Import the StarfieldCanvas
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

// Smoother animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 40 }, // Slightly reduced initial Y offset
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8, // Increased duration for smoother feel
      ease: [0.6, 0.01, 0.05, 0.95], // Custom cubic bezier for smoother ease-out
      staggerChildren: 0.1, // Stagger children slightly if needed
    },
  },
};


export default function Home() {
  useEffect(() => {
    // Force dark mode - remove if theme toggle is added later
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <StarfieldCanvas /> {/* Add the Starfield Canvas here */}
      <Navbar />
      {/* Main content area with vertical sections */}
      <main className="container mx-auto px-4 py-24 pt-32 sm:px-6 lg:px-8 space-y-16 md:space-y-24">
        {sections.map((section, index) => (
          <motion.div
            key={section.id}
            id={section.id} // Keep ID for navigation
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }} // Trigger when 10% is visible
            variants={sectionVariants}
            className={cn(
              "w-full relative z-10", // Ensure content is above canvas
            )}
          >
            {/* Render the section component directly */}
            <section.component />

            {/* Add a separator between sections, except after the last one */}
            {index < sections.length - 1 && section.id !== 'header' && ( // Don't add separator after hero
                 <Separator className="my-16 md:my-24 bg-border/40" />
            )}
          </motion.div>
        ))}
      </main>
      <Footer />
    </div>
  );
}
