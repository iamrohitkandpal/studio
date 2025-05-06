'use client';

import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Mail, Code } from 'lucide-react'; // Simplified icons

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/30 mt-24 py-8 px-4 sm:px-6 lg:px-8 bg-background/80 backdrop-blur-sm relative overflow-hidden"> 
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">

        {/* Left Side: Copyright & Name */}
        <div className="flex flex-col items-center md:items-start">
           <Link href="#header" className="text-lg font-heading font-semibold mb-1 text-primary hover:text-primary/80 transition-colors">
              Rohit Kandpal
            </Link>
           <p className="text-xs font-caption text-foreground/50">
            &copy; {currentYear} Rohit Navinchandra Kandpal. All Rights Reserved.
          </p>
           <p className="text-xs font-caption text-foreground/50 mt-1">
             Built with Next.js & Tailwind CSS.
           </p>
        </div>

        {/* Right Side: Social Links */}
        <div className="flex items-center gap-4">
          <Link href="https://github.com/iamrohitkandpal" target="_blank" rel="noopener noreferrer" 
            className="text-foreground/70 hover:text-primary transition-colors duration-300 hover:scale-110 transform">
            <Github className="w-5 h-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://linkedin.com/in/rohit-kandpal--" target="_blank" rel="noopener noreferrer" 
            className="text-foreground/70 hover:text-primary transition-colors duration-300 hover:scale-110 transform">
            <Linkedin className="w-5 h-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="mailto:iamrohitkandpal@gmail.com" 
            className="text-foreground/70 hover:text-primary transition-colors duration-300 hover:scale-110 transform">
            <Mail className="w-5 h-5" />
            <span className="sr-only">Email</span>
          </Link>
          <Link href="#projects" 
            className="text-foreground/70 hover:text-primary transition-colors duration-300 hover:scale-110 transform">
            <Code className="w-5 h-5" />
            <span className="sr-only">Projects</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
