'use client';

import React from 'react';
import { Briefcase } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'; // Use Card components

interface ExperienceItemProps {
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ company, role, duration, location, description }) => (
  <Card className="bg-card/50 border-border/30 shadow-md transition-shadow hover:shadow-lg hover:border-primary/40">
    <CardHeader className="pb-3">
      <CardTitle className="text-xl font-body font-semibold text-primary">{company}</CardTitle>
      <CardDescription className="text-sm font-caption text-foreground/70 pt-1">
        {role} • {duration} ({location})
      </CardDescription>
    </CardHeader>
    <CardContent>
      <ul className="list-disc list-outside pl-5 space-y-1.5 font-body text-foreground/80 text-sm">
        {description.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

const Experience: React.FC = () => {
  const experiences: ExperienceItemProps[] = [
     {
      company: 'Prodigy Infotech Pvt. Ltd.',
      role: 'Frontend Developer Intern',
      duration: 'Jun 2024 – Jul 2024',
      location: 'Remote – Mumbai',
      description: [
        'Developed multiple front-end projects using modern web technologies.',
        'Gained hands-on experience in UI/UX best practices and responsive design.',
        'Collaborated effectively using version control (Git).', // Simplified
      ]
    },
    {
      company: 'CodTech IT Solutions Pvt. Ltd.',
      role: 'Full Stack Developer Intern',
      duration: 'Dec 2023 – Jan 2024',
      location: 'Remote – Hyderabad',
      description: [
        'Built several full-stack applications (chat app, weather app, browser extension).',
        'Integrated OAuth authentication using Clerk for a blog platform.',
        'Strengthened skills in end-to-end development, deployment, and RESTful APIs.'
      ]
    }
  ];

  // Sorting logic remains the same
  experiences.sort((a, b) => {
    const parseDate = (duration: string) => {
      const startDateStr = duration.split('–')[0].trim();
      const parts = startDateStr.split(' ');
      const monthMap: { [key: string]: number } = { Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5, Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11 };
      if (parts.length === 2 && monthMap[parts[0]] !== undefined && !isNaN(parseInt(parts[1]))) {
        return new Date(parseInt(parts[1]), monthMap[parts[0]]);
      }
      return new Date(0);
    };
    return parseDate(b.duration).getTime() - parseDate(a.duration).getTime();
  });


  return (
     <div className="glass-section section-transition space-y-12"> {/* Add spacing */}
       {/* Section Title */}
        <h2 className="animated-accent-bg text-3xl md:text-4xl font-heading font-bold text-center mb-8 flex items-center justify-center gap-3 text-primary">
          <Briefcase className="w-8 h-8" /> Experience
        </h2>

       {/* Experience Items - using a simple grid or flex layout */}
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto"> {/* Adjust max-width and columns */}
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} {...exp} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
