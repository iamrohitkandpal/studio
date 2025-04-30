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

// Smoother reveal animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 50 }, // Start slightly lower
  visible: (i: number) => ({ // Accept index for stagger
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1, // Stagger based on index
      duration: 0.8, // Slightly longer duration for smoothness
      ease: [0.6, 0.01, 0.05, 0.95], // Custom cubic bezier for elegant ease-in-out
    },
  }),
};


export default function Home() {
  useEffect(() => {
    // Force dark mode - if theme toggle isn't planned
    document.documentElement.classList.add('dark');

    // Smooth scrolling is handled by CSS 'scroll-behavior: smooth' on <html>
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <StarfieldCanvas />
      <Navbar />
      <main className="container mx-auto px-4 py-24 pt-32 sm:px-6 lg:px-8 space-y-16 md:space-y-24">
        {sections.map((section, index) => (
          <motion.div
            key={section.id}
            id={section.id}
            custom={index} // Pass index to variants for staggering
            initial="hidden"
            whileInView="visible"
            // Adjust viewport for earlier trigger: trigger when 20% is visible
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
            className={cn(
              "w-full relative z-10", // Ensure content is above canvas and cursor effect
            )}
          >
            <section.component />

            {/* Add separator, exclude after header and last section */}
            {index < sections.length - 1 && section.id !== 'header' && (
                 <Separator className="my-16 md:my-24 bg-border/30" /> // Slightly less opaque border
            )}
          </motion.div>
        ))}
      </main>
      <Footer />
    </div>
  );
}
