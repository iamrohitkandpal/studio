'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/sections/header'; // Renamed to Hero potentially
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
// import StarfieldCanvas from '@/components/starfield-canvas'; // Removed
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator'; // Import Separator

// Define section data - components remain the same for now
const sections = [
  { id: 'header', component: Header, title: 'Hero' }, // Use header as Hero
  { id: 'skills', component: TechnicalSkills, title: 'Skills' },
  { id: 'projects', component: Projects, title: 'Projects' },
  { id: 'experience', component: Experience, title: 'Experience' },
  { id: 'education', component: Education, title: 'Education' },
  { id: 'certifications', component: Certifications, title: 'Certifications' },
  { id: 'achievements', component: Achievements, title: 'Achievements' },
  { id: 'extracurricular', component: Extracurricular, title: 'Extracurricular' },
  { id: 'contact', component: ContactMe, title: 'Contact' },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// REMOVED TiltCard component

export default function Home() {
  useEffect(() => {
    // Force dark mode - remove if theme toggle is added later
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* <StarfieldCanvas /> */} {/* Removed */}
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
            // Use standard card styling or just layout flow
            className={cn(
              "w-full", // Take full width
              // Add padding and potentially a border/background if needed for separation
              // "bg-card p-6 md:p-8 rounded-lg border border-border/50 shadow-md" // Example card style
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
      {/* REMOVED custom scrollbar styles */}
    </div>
  );
}
