'use client';

import React from 'react';
import Image from 'next/image';
import { Github, Linkedin, Mail, Phone, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link'; // Import Link
import { motion } from 'framer-motion';

const Header: React.FC = () => {

   const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
     e.preventDefault();
     const contactSection = document.getElementById('contact');
     if (contactSection) {
       const yOffset = -80; // Adjust offset for fixed navbar height
       const y = contactSection.getBoundingClientRect().top + window.scrollY + yOffset;
       window.scrollTo({ top: y, behavior: 'smooth' });
     }
   };

    const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      e.preventDefault();
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        const yOffset = -80; // Adjust offset for fixed navbar height
        const y = projectsSection.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    };


  return (
    // Reduced top padding (pt-12 md:pt-16)
    <div className="min-h-[calc(80vh)] flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-8 md:gap-12 py-16 px-4 sm:px-6 lg:px-8 pt-12 md:pt-16">

       {/* Left Column (Image & Socials) - Order adjusted for mobile */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }} // Subtle scale and Y animation
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.6, 0.01, 0.05, 0.95] }}
        className="flex flex-col items-center md:items-start order-1 md:order-none" // Image first on mobile
      >
        <div className="mb-6">
          <Image
            src="https://picsum.photos/seed/profile/160/160" // Slightly smaller image for mobile first
            alt="Rohit Kandpal"
            width={160} // Adjusted size
            height={160} // Adjusted size
            className="rounded-full border-4 border-primary/60 shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-primary/30" // Enhanced shadow
            priority
          />
        </div>
         <div className="flex justify-center md:justify-start gap-3 sm:gap-4"> {/* Adjusted gap */}
          <Button variant="outline" size="icon" asChild className="hover:bg-accent hover:text-accent-foreground transition-colors duration-200 rounded-full w-9 h-9 sm:w-10 sm:h-10">
            <a href="https://github.com/iRohitKandpal" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
              <Github size={18} /> {/* Adjusted icon size */}
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild className="hover:bg-accent hover:text-accent-foreground transition-colors duration-200 rounded-full w-9 h-9 sm:w-10 sm:h-10">
            <a href="https://linkedin.com/in/irohitkandpal" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
              <Linkedin size={18} />
            </a>
          </Button>
           <Button variant="outline" size="icon" asChild className="hover:bg-accent hover:text-accent-foreground transition-colors duration-200 rounded-full w-9 h-9 sm:w-10 sm:h-10">
            <a href="mailto:iamrohitkandpal@gmail.com" aria-label="Email">
              <Mail size={18} />
            </a>
          </Button>
           <Button variant="outline" size="icon" asChild className="hover:bg-accent hover:text-accent-foreground transition-colors duration-200 rounded-full w-9 h-9 sm:w-10 sm:h-10">
            <a href="tel:+917567054535" aria-label="Phone">
              <Phone size={18} />
            </a>
          </Button>
        </div>
      </motion.div>

      {/* Right Column (Text & CTA) */}
      <motion.div
         initial={{ opacity: 0, y: 50 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.7, delay: 0.3, ease: [0.6, 0.01, 0.05, 0.95] }} // Slightly delayed
        className="flex flex-col items-center md:items-start max-w-xl order-2 md:order-none" // Text second on mobile
      >
        {/* Name */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-400 to-amber-500"> {/* Gradient text */}
          Rohit Kandpal
        </h1>
        {/* Title/Tagline */}
        <p className="text-lg sm:text-xl md:text-2xl font-subheading text-foreground/80 mb-4"> {/* Use subheading font */}
          Aspiring Full-Stack Developer & Cybersecurity Enthusiast
        </p>
        {/* Brief Intro */}
        <p className="text-sm sm:text-base font-body text-foreground/70 mb-6 max-w-lg">
           I'm a B.Tech Computer Science student specializing in Cyber Security, passionate about building secure and efficient web applications. Exploring the MERN stack, Next.js, and cloud technologies.
        </p>
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto items-center"> {/* Adjusted gap and width */}
          <Button size="lg" asChild className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 py-2.5 sm:px-8 sm:py-3 text-sm sm:text-base shadow-lg hover:shadow-primary/40 transition-all duration-300 transform hover:-translate-y-1">
             {/* Use onClick for smooth scrolling */}
            <a href="#projects" onClick={scrollToProjects}>
              View Projects <ArrowDown size={16} className="ml-1.5 rotate-[-90deg]" /> {/* Right Arrow */}
            </a>
          </Button>
           <Button variant="outline" size="lg" asChild className="w-full sm:w-auto rounded-full px-6 py-2.5 sm:px-8 sm:py-3 text-sm sm:text-base border-primary/50 hover:bg-accent hover:text-accent-foreground transition-all duration-300">
            <a href="#contact" onClick={scrollToContact}>
               Get In Touch
            </a>
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
