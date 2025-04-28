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
      navItems.forEach(item => {
        const element = document.getElementById(item.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust offset as needed, consider navbar height
          if (rect.top <= 100 && rect.bottom > 100) {
            currentSection = item.id;
          }
        }
      });
      setActiveLink(currentSection);
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
        isScrolled ? "py-2 glass-card backdrop-blur-lg" : "py-4"
      )}
    >
      <div className="container mx-auto flex items-center justify-center px-4">
        <ul className="flex space-x-1 sm:space-x-2 md:space-x-4 bg-card/30 backdrop-blur-sm p-2 rounded-full border border-border/50">
          {navItems.map((item) => (
            <li key={item.id} className="relative">
              <Link
                href={`#${item.id}`}
                onClick={() => setActiveLink(item.id)}
                className={cn(
                  "flex items-center gap-1 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors duration-200",
                  "hover:text-primary",
                  activeLink === item.id ? "text-primary" : "text-foreground/80"
                )}
              >
                <item.icon className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="hidden sm:inline">{item.label}</span>
              </Link>
              {activeLink === item.id && (
                <motion.div
                  layoutId="active-nav-item"
                  className="absolute inset-0 bg-primary/10 rounded-full -z-10"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
               {/* On-hover underline animation */}
               <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary origin-left transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
