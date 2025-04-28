'use client';

import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Mail, Phone, Code } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="glass-card border-t border-border/30 mt-16 py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Column 1: Name & Brief */}
        <div>
          <h3 className="text-xl font-heading font-semibold mb-2 text-primary">Rohit Kandpal</h3>
          <p className="text-sm font-body text-foreground/70 mb-4">
            Aspiring Software Engineer | B.Tech CSE (Cyber Security) Student
          </p>
           <div className="flex justify-center md:justify-start gap-4 mb-4 md:mb-0">
            <a href="https://github.com/iRohitKandpal" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="text-foreground/70 hover:text-primary transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/irohitkandpal" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="text-foreground/70 hover:text-primary transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-lg font-body font-semibold mb-3 text-foreground/90">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link href="#header" className="text-sm font-body text-foreground/70 hover:text-primary transition-colors">Home</Link></li>
            <li><Link href="#projects" className="text-sm font-body text-foreground/70 hover:text-primary transition-colors">Projects</Link></li>
            <li><Link href="#skills" className="text-sm font-body text-foreground/70 hover:text-primary transition-colors">Skills</Link></li>
            <li><Link href="#contact" className="text-sm font-body text-foreground/70 hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h4 className="text-lg font-body font-semibold mb-3 text-foreground/90">Get In Touch</h4>
          <ul className="space-y-2 text-sm font-body text-foreground/70">
            <li className="flex items-center justify-center md:justify-start gap-2">
              <Mail size={15} />
              <a href="mailto:iamrohitkandpal@gmail.com" className="hover:text-primary transition-colors">iamrohitkandpal@gmail.com</a>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <Phone size={15} />
              <a href="tel:+917567054535" className="hover:text-primary transition-colors">+91-7567054535</a>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <Code size={15} />
              <span>Ahmedabad, Gujarat, India</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/20 mt-8 pt-6 text-center">
        <p className="text-xs font-caption text-foreground/50">
          &copy; {currentYear} Rohit Navinchandra Kandpal. All Rights Reserved. <br />
          Built with <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Next.js</a> & <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Tailwind CSS</a>. Hosted on Firebase.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
