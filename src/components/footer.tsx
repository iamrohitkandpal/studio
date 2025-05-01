'use client';

import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Mail, Code } from 'lucide-react'; // Simplified icons

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/30 mt-24 py-8 px-4 sm:px-6 lg:px-8 bg-background"> {/* Added bg */}
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
           <a href="https://github.com/iRohitKandpal" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="text-foreground/60 hover:text-primary transition-colors">
              <Github size={22} />
            </a>
            <a href="https://linkedin.com/in/irohitkandpal" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="text-foreground/60 hover:text-primary transition-colors">
              <Linkedin size={22} />
            </a>
            <a href="mailto:iamrohitkandpal@gmail.com" aria-label="Email" className="text-foreground/60 hover:text-primary transition-colors">
              <Mail size={22} />
            </a>
             <div className="flex items-center gap-1 text-foreground/60">
               <Code size={22} />
               <span className="text-sm font-caption">Ahmedabad, IN</span>
            </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
