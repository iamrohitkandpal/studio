'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { CodeXml, GraduationCap, Briefcase, FolderGit2, Wrench, Award, Star, Users } from 'lucide-react';

const navItems = [
  { id: 'header', label: 'Home', icon: CodeXml },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'projects', label: 'Projects', icon: FolderGit2 },
  { id: 'skills', label: 'Skills', icon: Wrench },
  { id: 'certifications', label: 'Certifications', icon: Award },
  { id: 'achievements', label: 'Achievements', icon: Star },
  { id: 'extracurricular', label: 'Extracurricular', icon: Users },
];

const Navbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>('header');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      // Determine active section based on scroll position
      let currentSection = 'header';
      const sections = document.querySelectorAll<HTMLElement>('section[id], div[id]'); // Include divs for motion.div IDs
      let closestSection: { id: string; top: number } | null = null;
      const offset = 150; // Adjust offset (pixels from top to consider 'active')

      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const topDistance = Math.abs(rect.top - offset); // Use absolute distance from offset

         // Check if the top of the section is within a reasonable range of the offset
         // and the section is at least partially visible
        if (rect.top < window.innerHeight - offset && rect.bottom >= offset) {
            if (!closestSection || topDistance < closestSection.top) {
                closestSection = { id: section.id, top: topDistance };
            }
        }
      });

       // Handle edge case: scrolled to the bottom of the page
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) { // 50px buffer
         const lastSection = navItems[navItems.length - 1];
          if(lastSection) {
              currentSection = lastSection.id;
          }
       } else if (closestSection) {
          currentSection = closestSection.id;
       } else if (window.scrollY < 200) { // Fallback for top of page
         currentSection = 'header';
      }


      setActiveLink(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true }); // Use passive listener
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-heading", // Apply heading font (Satoshi)
        "transform-style:preserve-3d", // Enable 3D transforms for children
        isScrolled ? "py-2 glass-card backdrop-blur-lg shadow-lg" : "py-4"
      )}
       style={{ perspective: '1000px' }} // Apply perspective for 3D effect
    >
      <div className="container mx-auto flex items-center justify-center px-4">
        {/* Slightly darker background for the inner pill */}
        <ul className="flex space-x-1 sm:space-x-2 md:space-x-4 bg-card/50 backdrop-blur-md p-2 rounded-full border border-border/60 shadow-inner">
          {navItems.map((item) => (
            <motion.li
              key={item.id}
              className="relative group"
              whileHover={{ y: -2, transition: { duration: 0.2 } }} // Subtle lift on hover
            >
              <Link
                href={`#${item.id}`}
                 onClick={(e) => {
                   // Smooth scroll logic
                   e.preventDefault(); // Prevent default jump
                   setActiveLink(item.id);
                   const element = document.getElementById(item.id);
                   if (element) {
                       const yOffset = -100; // Adjust offset for fixed navbar
                       const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                       window.scrollTo({top: y, behavior: 'smooth'});
                   }
                 }}
                className={cn(
                  "flex items-center gap-1 px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-200", // Keep font-semibold (Weight 600) from heading font
                  "hover:text-primary",
                  activeLink === item.id ? "text-primary" : "text-foreground/80"
                )}
              >
                <item.icon className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" /> {/* Ensure icon doesn't shrink */}
                <span className="hidden sm:inline whitespace-nowrap">{item.label}</span> {/* Prevent label wrapping */}
              </Link>
              {activeLink === item.id && (
                <motion.div
                  layoutId="active-nav-item"
                  className="absolute inset-0 bg-primary/10 rounded-full -z-10"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  style={{ originX: 0.5, originY: 0.5 }} // Scale from center
                />
              )}
               {/* On-hover underline animation */}
               <motion.span
                 className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary origin-left"
                 style={{ scaleX: 0 }}
                 transition={{ duration: 0.3, ease: "easeOut" }}
                 whileHover={{ scaleX: 1 }} // Animate on hover using Framer Motion
                 // Ensure underline doesn't trigger layout shift if possible
                 initial={false} // Don't animate initially
               />
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
