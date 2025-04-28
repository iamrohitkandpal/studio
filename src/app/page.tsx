'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Header from '@/components/sections/header';
import Education from '@/components/sections/education';
import Experience from '@/components/sections/experience';
import Projects from '@/components/sections/projects';
import TechnicalSkills from '@/components/sections/technical-skills';
import Certifications from '@/components/sections/certifications';
import Achievements from '@/components/sections/achievements';
import Extracurricular from '@/components/sections/extracurricular';
import ContactMe from '@/components/sections/contact-me'; // Import ContactMe
import Footer from '@/components/footer'; // Import Footer
import Navbar from '@/components/navbar';
import StarfieldCanvas from '@/components/starfield-canvas';
import { cn } from '@/lib/utils';

// Define sections with their components and grid spans for Bento Box layout
const sections = [
  // Row 1
  { id: 'header', component: Header, gridSpan: 'col-span-12 lg:col-span-5' }, // Adjusted span
  { id: 'education', component: Education, gridSpan: 'col-span-12 md:col-span-6 lg:col-span-3' },
  { id: 'experience', component: Experience, gridSpan: 'col-span-12 md:col-span-6 lg:col-span-4' }, // Moved Experience up

  // Row 2
  { id: 'projects', component: Projects, gridSpan: 'col-span-12 lg:col-span-8' }, // Adjusted span
  { id: 'certifications', component: Certifications, gridSpan: 'col-span-12 md:col-span-6 lg:col-span-4' }, // Adjusted span

  // Row 3
  { id: 'achievements', component: Achievements, gridSpan: 'col-span-12 md:col-span-6 lg:col-span-4' }, // Moved Achievements down
  { id: 'extracurricular', component: Extracurricular, gridSpan: 'col-span-12 md:col-span-6 lg:col-span-4' },
  // Empty space or another small component could go here (lg:col-span-4)

  // Row 4 (Full width)
  { id: 'skills', component: TechnicalSkills, gridSpan: 'col-span-12', disableTilt: true }, // Disable tilt for skills section container

   // Row 5 (Full width Contact)
   { id: 'contact', component: ContactMe, gridSpan: 'col-span-12', disableTilt: true }, // Add Contact Me section

];


const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 }, // Added slight scale down
  visible: {
    opacity: 1,
    y: 0,
    scale: 1, // Scale back to normal
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.1, // Optional: stagger children animation
    },
  },
};

// Subtle 3D Tilt Effect Component
const TiltCard: React.FC<{ children: React.ReactNode; className?: string; applyTilt?: boolean }> = ({ children, className, applyTilt = true }) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Use smoother spring settings for subtle effect
  const mouseXSpring = useSpring(x, { stiffness: 400, damping: 40 });
  const mouseYSpring = useSpring(y, { stiffness: 400, damping: 40 });

  // Reduced tilt intensity for subtlety
  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["5deg", "-5deg"] // Reduced max rotation
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-5deg", "5deg"] // Reduced max rotation
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!applyTilt || !ref.current) return; // Only apply if enabled and ref exists

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    const xPct = mouseX / (width / 1.5); // Slightly less sensitive
    const yPct = mouseY / (height / 1.5); // Slightly less sensitive

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    if (!applyTilt) return;
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: applyTilt ? rotateX : 0, // Apply rotation only if enabled
        rotateY: applyTilt ? rotateY : 0, // Apply rotation only if enabled
        transformStyle: "preserve-3d",
      }}
      whileHover={applyTilt ? { scale: 1.02, transition: { type: 'spring', stiffness: 400, damping: 25 } } : {}} // Subtle scale only if tilt enabled
      className={cn("relative transform-gpu w-full h-full", className)}
    >
      {/* Inner div for content projection - less extreme Z transform */}
      <div style={{ transform: applyTilt ? "translateZ(20px) scale(0.99)" : "none", transformStyle: "preserve-3d" }} className="h-full">
        {children}
      </div>
    </motion.div>
  );
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
      {/* Use CSS Grid for Bento Box layout */}
      <main className="container mx-auto px-4 py-24 pt-32 sm:px-6 lg:px-8 grid grid-cols-12 gap-6 md:gap-8">
        {sections.map((section) => (
           // Wrap each section with motion.div for animations and apply grid span
          <motion.div
            key={section.id}
            id={section.id} // Keep ID on the motion div for navigation
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }} // Trigger when 10% is visible
            variants={cardVariants}
            className={cn(
              "glass-card p-0 overflow-hidden", // Remove padding here
              section.gridSpan
            )}
            layout // Apply layout prop for smooth resizing
          >
             {/* Wrap section content in TiltCard, disable tilt where specified */}
            <TiltCard className="flex flex-col h-full" applyTilt={!section.disableTilt}>
              <div className="p-6 md:p-8 flex-grow overflow-auto"> {/* Add padding inside, allow scroll if needed */}
                <section.component />
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </main>
      {/* Add Footer outside the main grid */}
       <Footer />
    </div>
  );
}
