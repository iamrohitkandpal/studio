
'use client';

import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CertificationItemProps {
  title: string;
  issuer: string;
  description: string;
  link?: string; // Optional verification link
}

const CertificationItem: React.FC<CertificationItemProps> = ({ title, issuer, description, link }) => (
   // Added hover effect
   <div className="mb-4 last:mb-0 glass-card p-4 rounded-lg shadow-lg border border-border/30 transition-all duration-300 hover:shadow-primary/20 hover:border-primary/30 hover:-translate-y-1">
     <div className="flex justify-between items-start">
       <div>
          {/* Certification title using body font (Inter) with semibold weight (subheading style) */}
          <h3 className="text-lg font-body font-semibold text-primary">{title}</h3>
          {/* Issuer using body font, slightly bolder (Inter, 500) */}
          <p className="text-sm font-body font-medium text-foreground/80 mb-1">{issuer}</p>
       </div>
        {link && (
          <Button variant="ghost" size="icon" asChild className="ml-2 flex-shrink-0 text-foreground/70 hover:text-primary">
             <a href={link} target="_blank" rel="noopener noreferrer" aria-label={`Verify ${title}`}>
               <ExternalLink size={16} />
             </a>
          </Button>
        )}
     </div>
     {/* Description using body font (Inter, 400) */}
     <p className="text-sm font-body text-foreground/70">{description}</p>
   </div>
);

const Certifications: React.FC = () => {
  const certifications: CertificationItemProps[] = [
    {
      title: 'Frontend Domination',
      issuer: 'Sheryians Coding School',
      description: 'Advanced web application development focusing on modern frontend techniques and complex animations.',
      // link: '#' // Add verification link
    },
    {
      title: 'Software Engineering Job Simulation',
      issuer: 'J.P. Morgan Chase & Co.',
      description: 'Completed tasks including fixing repository issues and performing live data visualization using Python.',
      // link: '#'
    },
     {
      title: 'Agile Job Simulation',
      issuer: 'JPMorgan Chase & Co.',
      description: 'Practiced Agile methodologies: drafted user stories, led stand-ups, and participated in sprint reviews.',
      // link: '#'
    },
  ];

  return (
    <div className="h-full flex flex-col"> {/* Ensure full height */}
      {/* Section title using heading font (Outfit, 600-700) */}
      <h2 className="text-2xl font-heading font-semibold mb-4 flex items-center gap-2">
        <Award className="text-primary" /> Certifications
      </h2>
      <div className="flex-grow space-y-4"> {/* Allow content to grow and add spacing */}
        {certifications.map((cert, index) => (
          <CertificationItem key={index} {...cert} />
        ))}
      </div>
    </div>
  );
};

export default Certifications;
