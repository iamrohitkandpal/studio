
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { CodeXml, GraduationCap, Briefcase, FolderGit2, Wrench, Award, Star, Users, Mail, Home as HomeIcon, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const navItems = [
  { id: 'header', label: 'Home', icon: HomeIcon },
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
    setIsScrolled(scrollPosition > 50);

    let currentSection = 'header';
    const sections = document.querySelectorAll<HTMLElement>('div[id]');
    // Increased offset slightly for earlier activation when scrolling up/down
    const offset = window.innerHeight * 0.3;

    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const sectionBottom = sectionTop + rect.height;

       // More robust check: section is sufficiently visible in the viewport
      if (sectionTop <= window.scrollY + offset && sectionBottom >= window.scrollY + offset) {
        currentSection = section.id;
      }
    });

    // Ensure last section is active if scrolled to the bottom
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
      const lastSection = sections[sections.length - 1];
      if (lastSection) {
          currentSection = lastSection.id;
      }
    }
    // Ensure header is active if scrolled near the top
    else if (window.scrollY < offset / 2) { // Use smaller threshold for top
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
    const element = document.getElementById(sectionId);
    if (element) {
      // Consistent offset for all sections
      const yOffset = isScrolled ? -80 : -100; // Adjust offset based on navbar height when scrolled
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false); // Close mobile menu on link click
  };


  const NavLinks = ({ isMobile = false }: { isMobile?: boolean }) => (
    <ul className={cn(
      "flex overflow-x-auto sm:overflow-x-visible hide-scrollbar",
      isMobile ? "flex-col space-y-4 p-4" : "space-x-1 md:space-x-1 lg:space-x-2 items-center"
    )}>
      {navItems.map((item) => (
        <motion.li
          key={item.id}
          className={cn("relative group", isMobile ? "w-full" : "flex-shrink-0")} // flex-shrink-0 to prevent shrinking
          whileHover={!isMobile ? { y: -2 } : {}} // Only apply hover animation on desktop
          transition={{ duration: 0.2 }}
        >
           <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "flex items-center gap-1.5 px-1.5 py-1.5 sm:px-2 md:px-2.5 lg:px-3 rounded-md text-sm font-medium transition-colors duration-200",
                  isMobile ? "w-full justify-start" : "justify-center", // Mobile: full width, left align. Desktop: center align icon
                  "hover:text-primary hover:bg-primary/10",
                  activeLink === item.id ? "text-primary bg-primary/10" : "text-foreground/80"
                )}
                aria-label={isMobile ? item.label : undefined} // Label on mobile, tooltip provides label on desktop
              >
                <item.icon className={cn("h-5 w-5 flex-shrink-0")} aria-hidden="true"/> {/* Consistent icon size, hide from screen readers if label/tooltip is present */}
                 {/* Show label only on mobile */}
                 <span className={cn(isMobile ? "inline" : "sr-only")}>{item.label}</span>
              </Button>
            </TooltipTrigger>
            {/* Tooltip Content - only shown on desktop */}
             {!isMobile && (
               <TooltipContent side="bottom" align="center" className="bg-popover text-popover-foreground text-xs px-2 py-1 rounded">
                  <p>{item.label}</p>
               </TooltipContent>
             )}
           </Tooltip>

          {/* Active indicator for desktop */}
          {!isMobile && (
            <motion.span
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary origin-center"
              layoutId="active-nav-indicator" // Ensure unique layoutId if needed elsewhere
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
<<<<<<< HEAD
    <TooltipProvider delayDuration={100}>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-heading",
          isScrolled ? "py-3 bg-background/90 backdrop-blur-lg shadow-md border-b border-border/50" : "py-4 bg-transparent"
        )}
      >
        <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo or Name on the left */}
          <Button variant="link" className="p-0 h-auto" onClick={() => scrollToSection('header')}>
            <span className="text-xl font-bold text-foreground hover:text-primary transition-colors">
              Rohit K.
            </span>
          </Button>

          {/* Desktop Navigation Links - Aligned Right */}
          <div className="hidden md:flex justify-end items-center flex-1 ml-4"> {/* Use justify-end and flex-1 */}
            <NavLinks />
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[250px] p-0 bg-background/95 border-l border-border/50">
                <SheetHeader className="p-4 border-b border-border/30">
                  <SheetTitle className="text-primary text-lg font-heading">Menu</SheetTitle>
                   {/* Default SheetClose is provided and positioned top-right */}
                </SheetHeader>
                <NavLinks isMobile={true} />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </motion.nav>
    </TooltipProvider>
=======
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
>>>>>>> 34cdbe24d6884502908d4f4a6b9c818d09c292c2
  );
};

export default Navbar;
