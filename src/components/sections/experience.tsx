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
  <div className="mb-6 last:mb-0 glass-card p-6 rounded-lg shadow-lg border border-border/30">
    {/* Company name using body font (could be heading if preferred) */}
    <h3 className="text-xl font-body font-medium text-primary">{company}</h3>
    {/* Role using body font, slightly bolder */}
    <p className="text-md font-body font-semibold text-foreground/90">{role}</p>
    {/* Duration and location using caption font */}
    <p className="text-sm font-caption text-foreground/60 mb-3">{duration} ({location})</p>
    {/* Description points using body font */}
    <ul className="list-disc list-outside pl-5 space-y-1 font-body text-foreground/80 text-sm">
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
       // Corrected dates based on assumption
      duration: 'Dec 2023 – Jan 2024',
      location: 'Remote – Hyderabad',
      description: [
        'Built 9 full-stack applications (chat app, Next.js weather app, productivity browser extension).',
        'Integrated OAuth using Clerk for a fully working blog platform.',
        'Strengthened end-to-end software development, deployment, and RESTful API expertise.'
      ]
    }
  ];

  // Sort experiences by start date (assuming duration format "Mon YYYY – Mon YYYY")
  experiences.sort((a, b) => {
    const getStartDate = (duration: string) => {
      const parts = duration.split('–')[0].trim().split(' ');
      // Basic parsing, might need refinement for edge cases
      const monthMap: { [key: string]: number } = { Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5, Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11 };
       // Check if parts are valid before parsing
       if (parts.length === 2 && monthMap[parts[0]] !== undefined && !isNaN(parseInt(parts[1]))) {
         return new Date(parseInt(parts[1]), monthMap[parts[0]]);
       }
       return new Date(0); // Return epoch if parsing fails
    };
    return getStartDate(b.duration).getTime() - getStartDate(a.duration).getTime();
  });


  return (
    <div>
      {/* Section title using heading font */}
      <h2 className="text-2xl font-heading font-semibold mb-6 flex items-center gap-2">
        <Briefcase className="text-primary" /> Experience
      </h2>
      <div>
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} {...exp} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
