'use client';

import React from 'react';
import Image from 'next/image';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-center h-full justify-center"> {/* Center content vertically */}
      <div className="mb-4">
        <Image
          src="https://picsum.photos/150/150" // Placeholder image
          alt="Rohit Kandpal"
          width={150}
          height={150}
          className="rounded-full border-4 border-primary/50 shadow-lg transition-transform hover:scale-105" // Add hover effect
          priority // Prioritize loading the profile picture
        />
      </div>
      {/* Name using heading font (Satoshi/Outfit, 700-900) */}
      <h1 className="text-3xl md:text-4xl font-heading font-bold mb-1 text-transparent bg-clip-text bg-gradient-to-r from-primary via-teal-400 to-cyan-500">
        Rohit Navinchandra Kandpal
      </h1>
      {/* Title using subheading font (Neue Montreal, 500-600) */}
      <p className="text-lg md:text-xl font-subheading font-medium text-foreground/80 mb-4 px-2"> {/* Added padding for wrapping */}
        B.Tech in Computer Science & Engineering (Cyber Security) <br className="hidden sm:block" /> {/* Line break on small screens */}
        Silver Oak College of Engineering & Technology
      </p>
      {/* Contact details using caption font (Manrope, 400) */}
      <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 md:gap-x-6 mb-6 text-foreground/70 text-sm font-caption">
        <a href="tel:+917567054535" className="flex items-center gap-1.5 hover:text-primary transition-colors duration-200">
          <Phone size={15} />
          +91-7567054535
        </a>
        <a href="mailto:iamrohitkandpal@gmail.com" className="flex items-center gap-1.5 hover:text-primary transition-colors duration-200">
          <Mail size={15} />
          iamrohitkandpal@gmail.com
        </a>
      </div>
      <div className="flex justify-center gap-4">
        <Button variant="outline" size="icon" asChild className="hover:bg-accent hover:text-primary transition-colors duration-200">
          <a href="https://github.com/iRohitKandpal" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
            <Github size={20} />
          </a>
        </Button>
        <Button variant="outline" size="icon" asChild className="hover:bg-accent hover:text-primary transition-colors duration-200">
          <a href="https://linkedin.com/in/irohitkandpal" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
            <Linkedin size={20} />
          </a>
        </Button>
      </div>
    </div>
  );
};

export default Header;
