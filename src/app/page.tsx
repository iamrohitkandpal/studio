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
import Navbar from '@/components/navbar';
import StarfieldCanvas from '@/components/starfield-canvas';

const sections = [
  { id: 'header', component: Header },
  { id: 'education', component: Education },
  { id: 'experience', component: Experience },
  { id: 'projects', component: Projects },
  { id: 'skills', component: TechnicalSkills },
  { id: 'certifications', component: Certifications },
  { id: 'achievements', component: Achievements },
  { id: 'extracurricular', component: Extracurricular },
];

const cardVariants = {
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


export default function Home() {

  useEffect(() => {
    // Force dark mode - remove if theme toggle is added later
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <StarfieldCanvas />
      <Navbar />
      <main className="container mx-auto px-4 py-24 pt-32 sm:px-6 lg:px-8 flex flex-col gap-16">
        {sections.map((section) => (
          <motion.section
            key={section.id}
            id={section.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} // Trigger when 20% is visible
            variants={cardVariants}
            className="glass-card p-6 md:p-8"
          >
            <section.component />
          </motion.section>
        ))}
      </main>
    </div>
  );
}
