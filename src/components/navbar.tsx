
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
    const offset = window.innerHeight * 0.4;

    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= offset && rect.bottom >= offset) {
           currentSection = section.id;
      }
    });

    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
      const lastSection = sections[sections.length - 1];
      if (lastSection) {
          currentSection = lastSection.id;
      }
    } else if (window.scrollY < offset / 2) {
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
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const NavLinks = ({ isMobile = false }: { isMobile?: boolean }) => (
    <ul className={cn(
      "flex overflow-x-auto sm:overflow-x-visible hide-scrollbar",
      isMobile ? "flex-col space-y-4 p-4" : "space-x-1 md:space-x-1 lg:space-x-2 items-center" // Removed wrapping and justify-center for desktop
    )}>
      {navItems.map((item) => (
        <motion.li
          key={item.id}
          className={cn("relative group", isMobile ? "w-full" : "flex-shrink-0")} // flex-shrink-0 to prevent shrinking
          whileHover={!isMobile ? { y: -2 } : {}}
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
                aria-label={item.label} // Add aria-label for accessibility on desktop
              >
                <item.icon className={cn("h-5 w-5 flex-shrink-0")} /> {/* Consistent icon size */}
                <span className={cn(isMobile ? "inline" : "hidden")}>{item.label}</span> {/* Label only on mobile */}
              </Button>
            </TooltipTrigger>
            {/* Tooltip Content - only shown on desktop */}
            {!isMobile && (
              <TooltipContent side="bottom" align="center">
                <p>{item.label}</p>
              </TooltipContent>
            )}
          </Tooltip>
          {/* Active indicator for desktop */}
          {!isMobile && (
            <motion.span
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary origin-center"
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
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[250px] p-0 bg-background/95 border-l border-border/50">
                <SheetHeader className="p-4 border-b border-border/30">
                  <SheetTitle className="text-primary text-lg font-heading">Menu</SheetTitle>
                  {/* Default SheetClose is provided and positioned */}
                </SheetHeader>
                <NavLinks isMobile={true} />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </motion.nav>
    </TooltipProvider>
  );
};

export default Navbar;
