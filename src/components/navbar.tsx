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
  { id: 'contact', label: 'Contact', icon: Mail }
];

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('header');
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll events to update active section and navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      // Update scrolled state for navbar styling
      setScrolled(window.scrollY > 50);
      
      // Find the current active section based on scroll position
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100; // Offset for better detection
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "py-2 bg-background/90 backdrop-blur-md shadow-md" : "py-4 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-center md:justify-between items-center">
          {/* Logo/Name - hidden on mobile to save space */}
          <div className="hidden md:block">
            <Link href="#header" className="text-lg font-heading font-bold text-primary hover:text-primary/80 transition-colors">
              Rohit Kandpal
            </Link>
          </div>
          
          {/* Navigation Links */}
          <ul className="flex items-center space-x-1 sm:space-x-2 p-1 bg-card/50 backdrop-blur-sm rounded-full border border-border/20 shadow-sm">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={`#${item.id}`}
                  className={cn(
                    "flex items-center justify-center rounded-full p-2 transition-all duration-300",
                    activeSection === item.id
                      ? "bg-primary text-primary-foreground shadow-md nav-item-active"
                      : "text-foreground/70 hover:text-foreground hover:bg-accent/30"
                  )}
                  onClick={() => setActiveSection(item.id)}
                  aria-label={item.label}
                >
                  <item.icon size={18} className={activeSection === item.id ? "animate-pulse" : ""} />
                  <span className="ml-1.5 text-sm font-medium hidden sm:inline">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
