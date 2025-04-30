
'use client';

import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'; // Use Card
import { cn } from '@/lib/utils'; // Import cn

interface CertificationItemProps {
  title: string;
  issuer: string;
  description: string;
  link?: string;
}

const CertificationItem: React.FC<CertificationItemProps> = ({ title, issuer, description, link }) => (
   <Card className={cn(
     "bg-card/50 border-border/30 shadow-sm",
     "transition-all duration-300 hover:shadow-elegant-sm hover:border-primary/30" // Use elegant shadow on hover
     )}>
     <CardHeader className="flex flex-row items-start justify-between pb-2">
       <div>
          <CardTitle className="text-lg font-body font-semibold text-primary">{title}</CardTitle>
          <CardDescription className="text-sm font-body font-medium text-foreground/80 pt-1">{issuer}</CardDescription>
       </div>
        {link && (
          <Button variant="ghost" size="icon" asChild className="ml-2 flex-shrink-0 text-foreground/60 hover:text-primary -mt-1">
             <a href={link} target="_blank" rel="noopener noreferrer" aria-label={`Verify ${title}`}>
               <ExternalLink size={16} />
             </a>
          </Button>
        )}
     </CardHeader>
     <CardContent>
        <p className="text-sm font-body text-foreground/70">{description}</p>
     </CardContent>
   </Card>
);

const Certifications: React.FC = () => {
  const certifications: CertificationItemProps[] = [
    {
      title: 'Frontend Domination',
      issuer: 'Sheryians Coding School',
      description: 'Advanced web development focusing on modern frontend techniques and animations.',
      // link: '#'
    },
    {
      title: 'Software Engineering Simulation',
      issuer: 'J.P. Morgan Chase & Co.',
      description: 'Tasks included repository fixes and live data visualization using Python.',
      // link: '#'
    },
     {
      title: 'Agile Simulation',
      issuer: 'JPMorgan Chase & Co.',
      description: 'Practiced Agile methodologies: drafted user stories, led stand-ups, participated in reviews.',
      // link: '#'
    },
  ];

  return (
    <div className="space-y-12"> {/* Add spacing */}
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-8 flex items-center justify-center gap-3 text-primary">
        <Award className="w-8 h-8" /> Certifications
      </h2>

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto"> {/* Adjust grid */}
        {certifications.map((cert, index) => (
          <CertificationItem key={index} {...cert} />
        ))}
      </div>
    </div>
  );
};

export default Certifications;
