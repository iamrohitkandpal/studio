'use client';

import React from 'react';
import Image from 'next/image';
import { Github, Linkedin, Mail, Phone, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link'; // Import Link
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-10rem)] flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-8 md:gap-12 py-16 md:py-24"> {/* Adjust height and padding */}

       {/* Left Column (Image & Socials) */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="flex flex-col items-center md:items-start"
      >
        <div className="mb-6">
          <Image
            src="https://picsum.photos/seed/profile/200/200" // Larger placeholder
            alt="Rohit Kandpal"
            width={200} // Increased size
            height={200} // Increased size
            className="rounded-full border-4 border-primary/60 shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-primary/30" // Enhanced shadow
            priority
          />
        </div>
         <div className="flex justify-center md:justify-start gap-4">
          <Button variant="outline" size="icon" asChild className="hover:bg-accent hover:text-accent-foreground transition-colors duration-200 rounded-full">
            <a href="https://github.com/iRohitKandpal" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
              <Github size={20} />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild className="hover:bg-accent hover:text-accent-foreground transition-colors duration-200 rounded-full">
            <a href="https://linkedin.com/in/irohitkandpal" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
              <Linkedin size={20} />
            </a>
          </Button>
           <Button variant="outline" size="icon" asChild className="hover:bg-accent hover:text-accent-foreground transition-colors duration-200 rounded-full">
            <a href="mailto:iamrohitkandpal@gmail.com" aria-label="Email">
              <Mail size={20} />
            </a>
          </Button>
           <Button variant="outline" size="icon" asChild className="hover:bg-accent hover:text-accent-foreground transition-colors duration-200 rounded-full">
            <a href="tel:+917567054535" aria-label="Phone">
              <Phone size={20} />
            </a>
          </Button>
        </div>
      </motion.div>

      {/* Right Column (Text & CTA) */}
      <motion.div
         initial={{ opacity: 0, y: 50 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        className="flex flex-col items-center md:items-start max-w-2xl"
      >
        {/* Name */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-400 to-amber-500"> {/* Gradient text */}
          Rohit Kandpal
        </h1>
        {/* Title/Tagline */}
        <p className="text-xl md:text-2xl font-body font-medium text-foreground/80 mb-6">
          Aspiring Full-Stack Developer & Cybersecurity Enthusiast
        </p>
        {/* Brief Intro */}
        <p className="text-md font-body text-foreground/70 mb-8 max-w-lg">
           I'm a B.Tech Computer Science student specializing in Cyber Security, passionate about building secure and efficient web applications. Exploring the MERN stack, Next.js, and cloud technologies.
        </p>
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-3 text-base shadow-lg hover:shadow-primary/40 transition-all duration-300 transform hover:-translate-y-1">
             {/* Use Link component for smooth scrolling */}
            <Link href="#projects">
              View Projects <ArrowDown size={18} className="ml-2 rotate-[-90deg]" /> {/* Right Arrow */}
            </Link>
          </Button>
           <Button variant="outline" size="lg" asChild className="rounded-full px-8 py-3 text-base border-primary/50 hover:bg-accent hover:text-accent-foreground transition-all duration-300">
            <Link href="#contact">
               Get In Touch
            </Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
