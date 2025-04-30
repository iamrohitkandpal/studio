'use client';

import React from 'react';
import Image from 'next/image';
import { Github, Linkedin, Mail, Phone, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
// Link component is optimized by default in newer Next.js
import { motion } from 'framer-motion';

const Header: React.FC = () => {

   // Smooth scroll function optimized
   const smoothScrollTo = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
     e.preventDefault();
     const targetElement = document.getElementById(targetId);
     if (targetElement) {
       targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
     }
   };

  return (
    <div className="min-h-[calc(60vh)] flex flex-col items-center justify-center text-center md:text-left gap-8 md:gap-12 pt-8 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }} // Simplified initial state
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.6, 0.01, 0.05, 0.95] }}
            className="flex flex-col items-center md:items-center order-1 md:order-none"
          >
            <div className="mb-6 flex justify-center">
              <Image
                src="https://picsum.photos/seed/profile/160/160"
                alt="Rohit Kandpal"
                width={160}
                height={160}
                className="rounded-full border-4 border-primary/60 shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-primary/30"
                priority // Keep priority for LCP element
                loading="eager" // Explicitly set loading for LCP
              />
            </div>
             <div className="flex justify-center md:justify-center gap-3 sm:gap-4">
               {/* Buttons using asChild for semantic links */}
               <Button variant="outline" size="icon" asChild className="hover:bg-accent hover:text-accent-foreground transition-colors duration-200 rounded-full w-9 h-9 sm:w-10 sm:h-10">
                 <a href="https://github.com/iRohitKandpal" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                   <Github size={18} />
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

<<<<<<< HEAD
          <motion.div
             initial={{ opacity: 0, y: 30 }} // Simplified initial state
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.2, ease: [0.6, 0.01, 0.05, 0.95] }}
            className="flex flex-col items-center md:items-start max-w-xl order-2 md:order-none text-center md:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-400 to-amber-500">
              Rohit Kandpal
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-subheading text-foreground/80 mb-4">
              Aspiring Full-Stack Developer & Cybersecurity Enthusiast
            </p>
            <p className="text-sm sm:text-base font-body text-foreground/70 mb-6 max-w-lg">
               I'm a B.Tech Computer Science student specializing in Cyber Security, passionate about building secure and efficient web applications. Exploring the MERN stack, Next.js, and cloud technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto items-center justify-center md:justify-start">
              <Button size="lg" asChild className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 py-2.5 sm:px-8 sm:py-3 text-sm sm:text-base shadow-lg hover:shadow-primary/40 transition-all duration-300 transform hover:-translate-y-1">
                 <a href="#projects" onClick={(e) => smoothScrollTo(e, 'projects')}>
                  View Projects <ArrowDown size={16} className="ml-1.5 rotate-[-90deg]" />
                 </a>
              </Button>
               <Button variant="outline" size="lg" asChild className="w-full sm:w-auto rounded-full px-6 py-2.5 sm:px-8 sm:py-3 text-sm sm:text-base border-primary/50 hover:bg-accent hover:text-accent-foreground transition-all duration-300">
                 <a href="#contact" onClick={(e) => smoothScrollTo(e, 'contact')}>
                    Get In Touch
                 </a>
               </Button>
            </div>
          </motion.div>
      </div>
=======
       {/* Left Column (Image & Socials) */}
      <motion.div
        initial={{ opacity: 0, x: -60 }} // Slightly increased distance
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.6, 0.01, -0.05, 0.95] }} // Smoother animation
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
         initial={{ opacity: 0, y: 60 }} // Slightly increased distance
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8, delay: 0.2, ease: [0.6, 0.01, -0.05, 0.95] }} // Smoother animation
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
>>>>>>> 34cdbe24d6884502908d4f4a6b9c818d09c292c2
    </div>
  );
};

export default Header;
```