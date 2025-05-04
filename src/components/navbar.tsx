'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { CodeXml, GraduationCap, Briefcase, FolderGit2, Wrench, Award, Star, Users, Mail, Home as HomeIcon, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

const navItems = [
  { id: 'header', label: 'Home', icon: HomeIcon },
  { id: 'skills', label: 'Skills', icon: Wrench },
  { id: 'projects', label: 'Projects', icon: FolderGit2 },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'achievements', label: 'Achievements', icon: Star },
  { id: 'certifications', label: 'Certifications', icon: Award },
  { id: 'extracurricular', label: 'Activities', icon: Users },
  { id: 'contact', label: 'Contact', icon: Mail }
];

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('header');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
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

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
  };
  
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled 
          ? "py-2 bg-background/90 backdrop-blur-md shadow-lg border-b border-border/20" 
          : "py-4 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo/Name */}
          <div className="flex-shrink-0">
            <Link href="#header" className="text-lg font-heading font-bold text-primary hover:text-primary/80 transition-colors">
              <span className="hidden sm:inline">Rohit Kandpal</span>
              <span className="sm:hidden">RK</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <ul className="flex items-center space-x-1 p-1.5 bg-card/50 backdrop-blur-sm rounded-full border border-border/20 shadow-md">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={`#${item.id}`}
                    className={cn(
                      "flex items-center justify-center rounded-full px-3 py-2 transition-all duration-300",
                      activeSection === item.id
                        ? "bg-primary text-primary-foreground shadow-md"
                        : "text-foreground/70 hover:text-foreground hover:bg-accent/30"
                    )}
                    onClick={() => handleNavClick(item.id)}
                    aria-label={item.label}
                  >
                    <item.icon size={16} className={cn(
                      "transition-all duration-300",
                      activeSection === item.id ? "animate-pulse" : ""
                    )} />
                    <span className="ml-1.5 text-sm font-medium">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Mobile Navigation - Compact Icons */}
          <div className="md:hidden flex items-center">
            <ul className="flex items-center space-x-1 p-1 bg-card/50 backdrop-blur-sm rounded-full border border-border/20 shadow-sm">
              {navItems.slice(0, 5).map((item) => (
                <li key={item.id}>
                  <Link
                    href={`#${item.id}`}
                    className={cn(
                      "flex items-center justify-center rounded-full p-2 transition-all duration-300",
                      activeSection === item.id
                        ? "bg-primary text-primary-foreground shadow-md"
                        : "text-foreground/70 hover:text-foreground hover:bg-accent/30"
                    )}
                    onClick={() => handleNavClick(item.id)}
                    aria-label={item.label}
                  >
                    <item.icon size={18} className={activeSection === item.id ? "animate-pulse" : ""} />
                  </Link>
                </li>
              ))}
              
              {/* More menu dropdown for remaining items */}
              <li>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="rounded-full p-2 text-foreground/70 hover:text-foreground hover:bg-accent/30"
                    >
                      <Menu size={18} />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="bg-card/95 backdrop-blur-md border-border/30">
                    {navItems.slice(5).map((item) => (
                      <DropdownMenuItem key={item.id} asChild>
                        <Link
                          href={`#${item.id}`}
                          className={cn(
                            "flex items-center gap-2 px-3 py-2 cursor-pointer",
                            activeSection === item.id
                              ? "text-primary font-medium"
                              : "text-foreground/80"
                          )}
                          onClick={() => handleNavClick(item.id)}
                        >
                          <item.icon size={16} />
                          {item.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
