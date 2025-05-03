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

export default function Home() {
  // Ensure smooth scrolling behavior
  useEffect(() => {
    // Smooth scroll to section when URL has hash
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Starfield Background */}
      <StarfieldCanvas />
      
      {/* Fixed Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main className="pt-16"> {/* Add padding-top to account for fixed navbar */}
        {sections.map((section, index) => {
          const SectionComponent = section.component;
          return (
            <motion.section
              key={section.id}
              id={section.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={cn(
                "relative", // Make relative for proper stacking
                index !== sections.length - 1 && "mb-8" // Add margin between sections except last
              )}
            >
              <SectionComponent />
              {index !== sections.length - 1 && (
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                  <Separator className="my-8 opacity-30" />
                </div>
              )}
            </motion.section>
          );
        })}
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}