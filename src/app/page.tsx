'use client';

import React from 'react';
import Header from '@/components/sections/header';
import TechnicalSkills from '@/components/sections/technical-skills';
import Projects from '@/components/sections/projects';
import Experience from '@/components/sections/experience';
import Education from '@/components/sections/education';
import Certifications from '@/components/sections/certifications';
import Achievements from '@/components/sections/achievements';
import Extracurricular from '@/components/sections/extracurricular';
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
  return (
    <main className="flex min-h-screen flex-col items-center">
      <StarfieldCanvas />
      
      <section id="home" className="w-full pt-24 pb-12">
        <Header />
      </section>
      
      <section id="skills" className="w-full py-16">
        <TechnicalSkills languages={languages} />
      </section>
      
      <section id="projects" className="w-full py-16">
        <Projects />
      </section>
      
      <section id="experience" className="w-full py-16">
        <Experience />
      </section>
      
      <section id="education" className="w-full py-16">
        <Education />
      </section>
      
      <section id="certifications" className="w-full py-16">
        <Certifications />
      </section>
      
      <section id="achievements" className="w-full py-16">
        <Achievements />
      </section>
      
      <section id="extracurricular" className="w-full py-16">
        <Extracurricular />
      </section>
      
      <section id="contact" className="w-full py-16">
        <ContactMe />
      </section>
    </main>
  );
}