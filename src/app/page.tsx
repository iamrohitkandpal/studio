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
import ContactMe from '@/components/sections/contact-me';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import StarfieldCanvas from '@/components/starfield-canvas';
import { cn } from '@/lib/utils';

// Define sections with their components and grid spans for Bento Box layout
const sections = [
  // Row 1
  { id: 'header', component: Header, gridSpan: 'col-span-12 lg:col-span-5' },
  { id: 'education', component: Education, gridSpan: 'col-span-12 md:col-span-6 lg:col-span-3' },
  { id: 'experience', component: Experience, gridSpan: 'col-span-12 md:col-span-6 lg:col-span-4' },

  // Row 2
  { id: 'projects', component: Projects, gridSpan: 'col-span-12 lg:col-span-8' },
  { id: 'certifications', component: Certifications, gridSpan: 'col-span-12 md:col-span-6 lg:col-span-4' },

  // Row 3 - Adjusted distribution
  { id: 'achievements', component: Achievements, gridSpan: 'col-span-12 md:col-span-6 lg:col-span-4' },
  { id: 'extracurricular', component: Extracurricular, gridSpan: 'col-span-12 md:col-span-6 lg:col-span-4' },
  // Empty space or another small component could go here (lg:col-span-4)

  // Row 4 (Full width Skills)
  { id: 'skills', component: TechnicalSkills, gridSpan: 'col-span-12', disableTilt: true }, // Disable tilt for skills section container

   // Row 5 (Full width Contact)
   { id: 'contact', component: ContactMe, gridSpan: 'col-span-12', disableTilt: true },
];


const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 }, // Start slightly below and scaled down
  visible: {
    opacity: 1,
    y: 0,
    scale: 1, // Animate to normal position and scale
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.1, // Optional: stagger children animation if needed
    },
  },
};

// Subtle 3D Tilt Effect Component
const TiltCard: React.FC<{ children: React.ReactNode; className?: string; applyTilt?: boolean }> = ({ children, className, applyTilt = true }) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smoother spring for subtle effect
  const mouseXSpring = useSpring(x, { stiffness: 350, damping: 40 }); // Adjusted stiffness/damping
  const mouseYSpring = useSpring(y, { stiffness: 350, damping: 40 }); // Adjusted stiffness/damping

  // Reduced tilt intensity
  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["4deg", "-4deg"] // Reduced max rotation further
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-4deg", "4deg"] // Reduced max rotation further
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!applyTilt || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    // Adjusted sensitivity for a more subtle response
    const xPct = mouseX / (width / 1.2);
    const yPct = mouseY / (height / 1.2);

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
        rotateX: applyTilt ? rotateX : 0,
        rotateY: applyTilt ? rotateY : 0,
        transformStyle: "preserve-3d",
      }}
       // Reduced hover scale for less "junky" feel
      whileHover={applyTilt ? { scale: 1.015, transition: { type: 'spring', stiffness: 300, damping: 20 } } : {}}
      className={cn("relative transform-gpu w-full h-full", className)} // Ensure transform-gpu for performance
    >
      {/* Inner div for content projection - reduced Z transform */}
      <div style={{ transform: applyTilt ? "translateZ(15px) scale(0.98)" : "none", transformStyle: "preserve-3d" }} className="h-full">
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
              "glass-card p-0 overflow-hidden", // Remove padding here, ensure overflow hidden for card shape
              section.gridSpan // Apply the specific grid span for Bento layout
            )}
            layout // Enable smooth layout changes if grid spans change dynamically
          >
             {/* Wrap section content in TiltCard, disable tilt where specified */}
            <TiltCard className="flex flex-col h-full" applyTilt={!section.disableTilt}>
               {/* Add padding inside TiltCard's inner div, allow scroll if needed */}
              <div className="p-6 md:p-8 flex-grow overflow-auto custom-scrollbar">
                <section.component />
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </main>
      {/* Add Footer outside the main grid */}
       <Footer />
       {/* Add custom scrollbar styles globally if needed, or scope them */}
       <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: hsl(var(--border) / 0.5); /* Semi-transparent border color */
          border-radius: 10px;
          border: 3px solid transparent;
        }
         .custom-scrollbar {
            scrollbar-width: thin;
            scrollbar-color: hsl(var(--border) / 0.5) transparent;
         }
      `}</style>
    </div>
  );
}
