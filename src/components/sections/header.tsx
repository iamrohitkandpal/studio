
'use client';

import React from 'react';
import Image from 'next/image';
import { Github, Linkedin, Mail, Phone, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
// Link is not needed if using direct anchor with onClick for smooth scroll
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const Header: React.FC = () => {

   const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, sectionId: string) => {
     e.preventDefault();
     const section = document.getElementById(sectionId);
     if (section) {
       const yOffset = -80; // Adjust offset for fixed navbar height
       const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
       window.scrollTo({ top: y, behavior: 'smooth' });
     }
   };

   // Animation variants for staggered children
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15, // Stagger children animation
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.6, 0.01, 0.05, 0.95] },
        },
    };

  return (
    <motion.div
        className="min-h-[calc(60vh)] flex flex-col items-center justify-center text-center md:text-left gap-8 md:gap-12 pt-8 pb-12 px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible" // Animate container on mount
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 w-full max-w-5xl">
          {/* Left Column (Image & Socials) */}
          <motion.div
            variants={itemVariants} // Apply item animation
            className="flex flex-col items-center md:items-center order-1 md:order-none flex-shrink-0"
          >
            {/* Image with subtle scale animation on hover */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              className="mb-6 flex justify-center"
            >
              <Image
                src="https://picsum.photos/seed/profile/160/160"
                alt="Rohit Kandpal"
                width={160}
                height={160}
                className="rounded-full border-4 border-primary/60 shadow-xl transition-shadow duration-300 hover:shadow-elegant-md"
                priority
                unoptimized
              />
            </motion.div>
            {/* Socials with individual hover effects */}
             <motion.div
                variants={itemVariants} // Apply item animation to the social icons container
                className="flex justify-center md:justify-center gap-3 sm:gap-4"
             >
                {[
                    { href: "https://github.com/iRohitKandpal", label: "GitHub Profile", icon: Github },
                    { href: "https://linkedin.com/in/irohitkandpal", label: "LinkedIn Profile", icon: Linkedin },
                    { href: "mailto:iamrohitkandpal@gmail.com", label: "Email", icon: Mail },
                    { href: "tel:+917567054535", label: "Phone", icon: Phone }
                ].map((social, index) => (
                   <motion.div
                     key={index}
                     whileHover={{ y: -3, scale: 1.1 }} // Bounce and scale effect
                     transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                   >
                      <Button variant="outline" size="icon" asChild className="hover:bg-accent hover:text-accent-foreground transition-colors duration-200 rounded-full w-9 h-9 sm:w-10 sm:h-10">
                        <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                          <social.icon size={18} />
                        </a>
                      </Button>
                   </motion.div>
                ))}
            </motion.div>
          </motion.div>

          {/* Right Column (Text & CTA) */}
          <motion.div
            variants={itemVariants} // Apply item animation
            className="flex flex-col items-center md:items-start max-w-xl order-2 md:order-none text-center md:text-left"
          >
            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-400 to-amber-500"
             >
              Rohit Kandpal
            </motion.h1>
            {/* Title/Tagline */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl md:text-2xl font-subheading text-foreground/80 mb-4"
            >
              Aspiring Full-Stack Developer & Cybersecurity Enthusiast
            </motion.p>
            {/* Brief Intro */}
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base font-body text-foreground/70 mb-6 max-w-lg text-balance" // Use text-balance for better wrapping
            >
               I'm a B.Tech Computer Science student specializing in Cyber Security, passionate about building secure and efficient web applications. Exploring the MERN stack, Next.js, and cloud technologies.
            </motion.p>
            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto items-center justify-center md:justify-start"
            >
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    size="lg"
                    asChild
                    className={cn(
                        "w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 py-2.5 sm:px-8 sm:py-3 text-sm sm:text-base",
                        "shadow-lg hover:shadow-elegant-sm transition-all duration-300 transform hover:-translate-y-0.5" // Slightly adjusted hover effect
                    )}
                  >
                    <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>
                      View Projects <ArrowDown size={16} className="ml-1.5 rotate-[-90deg]" />
                    </a>
                  </Button>
              </motion.div>
               <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className={cn(
                        "w-full sm:w-auto rounded-full px-6 py-2.5 sm:px-8 sm:py-3 text-sm sm:text-base border-primary/50 hover:bg-accent hover:text-accent-foreground transition-all duration-300",
                        "hover:shadow-elegant-sm hover:border-primary/80" // Enhanced hover state
                    )}
                   >
                    <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>
                       Get In Touch
                    </a>
                  </Button>
               </motion.div>
            </motion.div>
          </motion.div>
      </div>
    </motion.div>
  );
};

export default Header;
```