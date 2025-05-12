"use client";
``;
import React from "react";
import Image from "next/image";
import { Github, Linkedin, Mail, Phone, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const Header: React.FC = () => {
  return (
    <div className="glass-section section-transition min-h-[calc(100vh-20rem)] flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-8 md:gap-12 py-16 md:py-24">
      {/* Left Column (Image & Socials) */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.6, 0.01, 0.05, 0.95] }}
        className="flex flex-col items-center md:items-start"
      >
        <motion.div
          className="mb-6 relative"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          <motion.div
            className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary/50 via-purple-500/30 to-violet-500/50 blur-md opacity-70"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <Image
            src="https://picsum.photos/seed/profile/200/200"
            alt="Rohit Kandpal"
            width={200}
            height={200}
            className="rounded-full border-4 border-primary/60 shadow-xl transition-transform duration-300 hover:shadow-primary/30 relative z-10"
            priority
          />
        </motion.div>
        <div className="flex justify-center md:justify-start gap-4">
          {/* Social buttons with staggered animation */}
          {[
            {
              icon: Github,
              href: "https://github.com/iamrohitkandpal",
              label: "GitHub Profile",
            },
            {
              icon: Linkedin,
              href: "https://linkedin.com/in/rohit-kandpal-",
              label: "LinkedIn Profile",
            },
            {
              icon: Mail,
              href: "mailto:iamrohitkandpal@gmail.com",
              label: "Email",
            },
            { icon: Phone, href: "tel:+917567054535", label: "Phone" },
          ].map((social, index) => (
            <motion.div
              key={social.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.8 + index * 0.1,
                type: "spring",
                stiffness: 300,
                damping: 15,
              }}
            >
              <Button
                variant="outline"
                size="icon"
                asChild
                className="hover:bg-primary/20 hover:text-primary transition-colors duration-200 rounded-full hover-lift"
              >
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Right Column (Text & CTA) */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          ease: [0.6, 0.01, 0.05, 0.95],
        }}
        className="flex flex-col items-center md:items-start max-w-2xl"
      >
        {/* Name with gradient animation */}
        <motion.h1
          className="gradient-text text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Rohit Kandpal
        </motion.h1>

        {/* Title/Tagline with typing animation */}
        <motion.p
          className="text-xl md:text-2xl font-body font-medium text-foreground/80 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          Aspiring Full-Stack Developer & Cybersecurity Enthusiast
        </motion.p>

        {/* Brief Intro with staggered character animation */}
        <motion.p
          className="text-md font-body text-foreground/70 mb-8 max-w-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          I'm a B.Tech Computer Science student specializing in Cyber Security,
          passionate about building secure and efficient web applications.
          Exploring the MERN stack, Next.js, and cloud technologies.
        </motion.p>

        {/* CTA Buttons with Canva-like effects */}
        <div className="flex flex-col sm:flex-row gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              size="lg"
              asChild
              className="canva-button bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-3 text-base shadow-lg hover:shadow-primary/40 transition-all duration-300"
            >
              <Link href="#projects">
                View Projects{" "}
                <ArrowDown size={18} className="ml-2 rotate-[-90deg]" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              variant="outline"
              size="lg"
              asChild
              className="canva-button rounded-full px-8 py-3 text-base border-primary/50 hover:bg-primary/20 hover:text-primary transition-all duration-300"
            >
              <Link href="#contact">Get In Touch</Link>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
