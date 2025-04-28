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
import Navbar from '@/components/navbar';
import StarfieldCanvas from '@/components/starfield-canvas';
import { cn } from '@/lib/utils';

// Define sections with their components and grid spans for Bento Box layout
const sections = [
  // Row 1
  { id: 'header', component: Header, gridSpan: 'col-span-12 md:col-span-6 lg:col-span-5' }, // Wider header
  { id: 'education', component: Education, gridSpan: 'col-span-12 md:col-span-6 lg:col-span-3' },
  { id: 'achievements', component: Achievements, gridSpan: 'col-span-12 md:col-span-6 lg:col-span-4' }, // Moved up

  // Row 2
  { id: 'experience', component: Experience, gridSpan: 'col-span-12 lg:col-span-7' }, // Wider experience
  { id: 'certifications', component: Certifications, gridSpan: 'col-span-12 md:col-span-6 lg:col-span-5' },

  // Row 3
  { id: 'projects', component: Projects, gridSpan: 'col-span-12 lg:col-span-8' }, // Wider projects
  { id: 'extracurricular', component: Extracurricular, gridSpan: 'col-span-12 md:col-span-6 lg:col-span-4' },

  // Row 4 (Full width)
  { id: 'skills', component: TechnicalSkills, gridSpan: 'col-span-12' }, // Full width skills
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

// 3D Tilt Effect Component
const TiltCard: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  // Increased tilt intensity slightly
  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["12deg", "-12deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-12deg", "12deg"]
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    const width = rect.width;
    const height = rect.height;

    // Calculate position relative to the card center
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    // Normalize position (adjust divisor for sensitivity)
    const xPct = mouseX / (width / 2);
    const yPct = mouseY / (height / 2);

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        // Perspective is set globally on body in globals.css
      }}
      // Apply perspective-aware hover effect
      whileHover={{ scale: 1.03, transition: { type: 'spring', stiffness: 350, damping: 20 } }} // Subtle scale on hover
      className={cn("relative transform-gpu w-full h-full", className)} // Ensure it fills the grid cell
    >
      {/* Inner div to apply 3D transforms to content without distortion */}
      <div style={{ transform: "translateZ(30px) scale(0.98)", transformStyle: "preserve-3d" }} className="h-full">
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
              "glass-card p-0 overflow-hidden", // Remove padding here, TiltCard handles content
              section.gridSpan
            )}
             // Apply layout prop for smooth resizing/reflowing if grid changes
            layout
          >
            {/* Wrap section content in TiltCard for 3D effect */}
            <TiltCard className="flex flex-col h-full"> {/* Ensure TiltCard fills the motion.div */}
              <div className="p-6 md:p-8 flex-grow"> {/* Add padding inside TiltCard's inner div */}
                <section.component />
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </main>
    </div>
  );
}
