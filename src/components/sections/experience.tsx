'use client';

import React from 'react';
import { Briefcase } from 'lucide-react';

interface ExperienceItemProps {
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ company, role, duration, location, description }) => (
   // Added hover effect
  <div className="mb-6 last:mb-0 glass-card p-6 rounded-lg shadow-lg border border-border/30 transition-all duration-300 hover:shadow-primary/20 hover:border-primary/30 hover:-translate-y-1">
    {/* Company name using subheading font (Neue Montreal, 500-600) */}
    <h3 className="text-xl font-subheading font-medium text-primary">{company}</h3>
    {/* Role using body font, slightly bolder (Inter/General Sans, 500) */}
    <p className="text-md font-body font-medium text-foreground/90 mt-1">{role}</p>
    {/* Duration and location using caption font (Manrope, 400) */}
    <p className="text-sm font-caption text-foreground/60 mb-3">{duration} ({location})</p>
    {/* Description points using body font (Inter/General Sans, 400) */}
    <ul className="list-disc list-outside pl-5 space-y-1.5 font-body text-foreground/80 text-sm">
      {description.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
  </div>
);

const Experience: React.FC = () => {
  const experiences: ExperienceItemProps[] = [
     {
      company: 'Prodigy Infotech Pvt. Ltd.',
      role: 'Frontend Developer Intern',
      duration: 'Jun 2024 – Jul 2024',
      location: 'Remote – Mumbai',
      description: [
        'Developed 4–5 front-end projects using modern web technologies.',
        'Gained hands-on experience in UI/UX best practices, responsive design, and version control.',
        'Collaborated with senior developers to refine coding techniques and workflows.'
      ]
    },
    {
      company: 'CodTech IT Solutions Pvt. Ltd.',
      role: 'Full Stack Developer Intern',
      duration: 'Dec 2023 – Jan 2024', // Corrected dates
      location: 'Remote – Hyderabad',
      description: [
        'Built 9 full-stack applications (chat app, Next.js weather app, productivity browser extension).',
        'Integrated OAuth using Clerk for a fully working blog platform.',
        'Strengthened end-to-end software development, deployment, and RESTful API expertise.'
      ]
    }
    // Add other experiences here if any
  ];

  // Sort experiences chronologically (most recent first)
  experiences.sort((a, b) => {
    const parseDate = (duration: string) => {
      const startDateStr = duration.split('–')[0].trim();
      const parts = startDateStr.split(' ');
      const monthMap: { [key: string]: number } = { Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5, Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11 };
      if (parts.length === 2 && monthMap[parts[0]] !== undefined && !isNaN(parseInt(parts[1]))) {
        return new Date(parseInt(parts[1]), monthMap[parts[0]]);
      }
      return new Date(0); // Fallback
    };
    return parseDate(b.duration).getTime() - parseDate(a.duration).getTime();
  });


  return (
    <div className="h-full flex flex-col"> {/* Ensure full height */}
      {/* Section title using heading font (Satoshi/Outfit, 600-700) */}
      <h2 className="text-2xl font-heading font-semibold mb-4 flex items-center gap-2">
        <Briefcase className="text-primary" /> Experience
      </h2>
      <div className="flex-grow space-y-4 overflow-y-auto pr-2"> {/* Allow scrolling if content overflows */}
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} {...exp} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
