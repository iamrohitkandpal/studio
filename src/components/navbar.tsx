'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { CodeXml, GraduationCap, Briefcase, FolderGit2, Wrench, Award, Star, Users, Mail, Home as HomeIcon, Menu, X } from 'lucide-react'; // Use HomeIcon for clarity, add Menu and X
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from '@/components/ui/sheet'; // Import Sheet components

const navItems = [
  { id: 'header', label: 'Home', icon: HomeIcon }, // Use HomeIcon
  { id: 'skills', label: 'Skills', icon: Wrench },
  { id: 'projects', label: 'Projects', icon: FolderGit2 },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'certifications', label: 'Certifications', icon: Award },
  { id: 'achievements', label: 'Achievements', icon: Star },
  { id: 'extracurricular', label: 'Extracurricular', icon: Users },
  { id: 'contact', label: 'Contact', icon: Mail },
];

const Navbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>('header');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50); // Detect scroll past 50px

      // Active section detection logic (simplified for vertical layout)
      let currentSection = 'header';
      const sections = document.querySelectorAll<HTMLElement>('div[id]'); // Target divs with IDs
      let closestSectionDistance = Infinity;
      const offset = 100; // Pixels from top to consider active

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
         const lastSection = sections[sections.length - 1]; // Get the actual last section div
         if (lastSection) {
             currentSection = lastSection.id;
         }
      } else if (window.scrollY < offset) { // If very close to the top
         currentSection = 'header';
      }

      setActiveLink(currentSection);
    };


  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
      setActiveLink(sectionId);
      const element = document.getElementById(sectionId);
      if (element) {
        const yOffset = -80; // Adjust offset for fixed navbar height
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
      setIsMobileMenuOpen(false); // Close mobile menu after clicking a link
    };


  const NavLinks = ({ isMobile = false }: { isMobile?: boolean }) => (
     <ul className={cn(
        "flex",
        isMobile ? "flex-col space-y-4 p-4" : "space-x-1 sm:space-x-2 md:space-x-3 items-center" // Reduced desktop spacing slightly
      )}>
        {navItems.map((item) => (
          <motion.li
            key={item.id}
            className={cn("relative group", isMobile ? "w-full" : "")}
            whileHover={!isMobile ? { y: -2 } : {}}
            transition={{ duration: 0.2 }}
          >
            <Button
              variant="ghost"
              onClick={() => scrollToSection(item.id)}
              className={cn(
                "flex items-center gap-1.5 px-2 py-1.5 md:px-2.5 rounded-md text-sm font-medium transition-colors duration-200 w-full justify-start", // Adjusted padding for smaller screens
                "hover:text-primary hover:bg-primary/10", // Consistent hover style
                activeLink === item.id ? "text-primary bg-primary/10" : "text-foreground/80"
              )}
            >
              <item.icon className="h-4 w-4 flex-shrink-0" />
              {/* Show label on medium screens and up */}
              <span className={cn("hidden lg:inline whitespace-nowrap")}>{item.label}</span>
            </Button>
             {/* Active indicator for desktop */}
            {!isMobile && (
              <motion.span
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary origin-center" // Center origin
                animate={{ scaleX: activeLink === item.id ? 1 : 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                initial={false}
              />
            )}
          </motion.li>
        ))}
      </ul>
  );


  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-heading",
        // Increased vertical padding slightly when scrolled
        isScrolled ? "py-3 bg-background/90 backdrop-blur-lg shadow-md border-b border-border/50" : "py-4 bg-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6">
        {/* Logo or Name on the left */}
        <Button variant="link" className="p-0 h-auto" onClick={() => scrollToSection('header')}>
             <span className="text-xl font-bold text-foreground hover:text-primary transition-colors">
               Rohit K.
             </span>
        </Button>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex">
           <NavLinks />
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
           <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] p-0 bg-background/95 border-l border-border/50">
               <SheetHeader className="p-4 border-b border-border/30">
                <SheetTitle className="text-primary text-lg font-heading">Menu</SheetTitle>
                 <SheetClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                    <X className="h-4 w-4" />
                    <span className="sr-only">Close</span>
                  </SheetClose>
              </SheetHeader>
              <NavLinks isMobile={true} />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
