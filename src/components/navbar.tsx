'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { CodeXml, GraduationCap, Briefcase, FolderGit2, Wrench, Award, Star, Users, Mail, Home as HomeIcon } from 'lucide-react'; // Use HomeIcon for clarity

const navItems = [
  { id: 'header', label: 'Home', icon: HomeIcon }, // Use HomeIcon
  { id: 'skills', label: 'Skills', icon: Wrench },
  { id: 'projects', label: 'Projects', icon: FolderGit2 },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'education', label: 'Education', icon: GraduationCap },
  // Optional sections (can be added back if desired)
  // { id: 'certifications', label: 'Certs', icon: Award },
  // { id: 'achievements', label: 'Achieve', icon: Star },
  // { id: 'extracurricular', label: 'Extra', icon: Users },
  { id: 'contact', label: 'Contact', icon: Mail },
];

const Navbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>('header');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50); // Detect scroll past 50px

      // Active section detection logic (simplified for vertical layout)
      let currentSection = 'header';
      const sections = document.querySelectorAll<HTMLElement>('div[id]'); // Target divs with IDs
      let closestSectionDistance = Infinity;
      const offset = 150; // Pixels from top to consider active

      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const elementTop = rect.top + window.scrollY; // Absolute top position of the section
        const viewTop = window.scrollY + offset; // Adjusted viewport top

         // Check if the section is the closest one at or above the offset line
        if (elementTop <= viewTop) {
          const distance = viewTop - elementTop;
          if (distance < closestSectionDistance) {
             closestSectionDistance = distance;
             currentSection = section.id;
          }
        }
      });

       // Handle edge case: scrolled near the bottom of the page
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) { // 100px buffer from bottom
         const lastSection = navItems[navItems.length - 1];
         if (lastSection) {
             currentSection = lastSection.id;
         }
      } else if (window.scrollY < offset) { // If very close to the top
         currentSection = 'header';
      }

      setActiveLink(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.6, 0.01, -0.05, 0.95] }} // Smoother animation
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-heading",
        // Apply glassmorphism class when scrolled, otherwise transparent background
        isScrolled ? "py-2 navbar-glass shadow-md" : "py-4 bg-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Optional: Logo or Name on the left */}
        <Link href="#header" className="text-xl font-bold text-foreground hover:text-primary transition-colors">
          Rohit K.
        </Link>

        {/* Navigation Links centered or on the right */}
        <ul className="flex space-x-1 sm:space-x-2 md:space-x-4">
          {navItems.map((item) => (
            <motion.li
              key={item.id}
              className="relative group"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.25, ease: 'easeOut' }} // Slightly faster hover
            >
              <Link
                href={`#${item.id}`}
                 onClick={(e) => {
                   e.preventDefault();
                   setActiveLink(item.id);
                   const element = document.getElementById(item.id);
                   if (element) {
                       const yOffset = -80; // Adjust offset for fixed navbar height
                       const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
                       window.scrollTo({top: y, behavior: 'smooth'});
                   }
                 }}
                className={cn(
                  "flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-sm font-medium transition-colors duration-200",
                  "hover:text-primary",
                  activeLink === item.id ? "text-primary bg-primary/10" : "text-foreground/80" // Simple active style
                )}
              >
                <item.icon className="h-4 w-4 flex-shrink-0" />
                <span className="hidden md:inline whitespace-nowrap">{item.label}</span>
                {/* Keep short label for small screens if needed */}
                 {/* <span className="sm:hidden md:hidden whitespace-nowrap text-[10px]">{item.label.substring(0,4)}</span> */}
              </Link>
              {/* Removed layoutId animation for active item background */}
               {/* Keep simple underline on hover */}
               <motion.span
                 className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary origin-center" // Center origin
                 style={{ scaleX: activeLink === item.id ? 1 : 0 }} // Show if active
                 animate={{ scaleX: activeLink === item.id ? 1 : 0 }}
                 transition={{ duration: 0.35, ease: "easeOut" }} // Smoother underline transition
                 // whileHover={{ scaleX: 1 }} // Optionally add back hover underline
                 initial={false}
               />
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
