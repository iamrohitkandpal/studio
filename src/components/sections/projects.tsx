
'use client';

import React from 'react';
import { FolderGit2, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface ProjectItemProps {
  title: string;
  duration: string;
  type: string; // e.g., Full-Stack, Hackathon, College Team
  techStack: string[];
  description: string[];
  link?: string; // Optional link to project/repo
}

const ProjectItem: React.FC<ProjectItemProps> = ({ title, duration, type, techStack, description, link }) => (
   // Added hover effect
  <div className="mb-6 last:mb-0 glass-card p-6 rounded-lg shadow-lg border border-border/30 transition-all duration-300 hover:shadow-primary/20 hover:border-primary/30 hover:-translate-y-1">
    <div className="flex justify-between items-start mb-2">
       <div>
          {/* Project title using body font (Inter) with semibold weight (subheading style) */}
          <h3 className="text-xl font-body font-semibold text-primary">{title}</h3>
          {/* Duration and type using caption font (Manrope, 400) */}
          <p className="text-sm font-caption text-foreground/60 mb-1">{duration} • {type}</p>
       </div>
       {link && (
         <Button variant="ghost" size="icon" asChild className="ml-4 flex-shrink-0 text-foreground/70 hover:text-primary">
             <a href={link} target="_blank" rel="noopener noreferrer" aria-label={`Link to ${title}`}>
               <ExternalLink size={18} />
             </a>
          </Button>
        )}
    </div>
    {/* Tech stack badges using body font (Inter, 400) */}
    <div className="flex flex-wrap gap-2 mb-3">
        {techStack.map((tech, index) => (
            <Badge key={index} variant="secondary" className="font-body text-xs">{tech}</Badge> // Use text-xs for smaller badges
        ))}
    </div>
    {/* Description points using body font (Inter, 400) */}
    <ul className="list-disc list-outside pl-5 space-y-1.5 font-body text-foreground/80 text-sm">
      {description.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
  </div>
);

const Projects: React.FC = () => {
  const projects: ProjectItemProps[] = [
     {
      title: 'TaskFlow',
      duration: 'Jan 2024 – Present',
      type: 'Full-Stack',
      techStack: ['React', 'Redux Toolkit', 'Material UI', 'Socket.io', 'Node.js', 'Hugging Face', 'Node-cron', 'GitHub API', 'CalDAV'], // Added missing tech
      description: [
        'Real-time task management platform with AI-powered prioritization & summarization (Hugging Face).',
        'Automation via Node-cron, GitHub API task linking, and CalDAV calendar sync.'
      ],
      // link: '#' // Add link if available
    },
    {
      title: 'Aakash Vaani',
      duration: 'Sep 2023 – Dec 2023',
      type: 'ISRO Hackathon',
      techStack: ['Voice Navigation', 'JavaScript (ES6+)', 'Leaflet.js', 'Web Speech API', 'Nominatim', 'Overpass API', 'NLP'], // Clarified voice nav
      description: [
        'Real-time geolocation & mapping via Nominatim & Overpass APIs.',
        'Hands-free navigation with voice feedback & NLP commands.'
      ],
       // link: '#'
    },
    {
      title: 'Rakshak',
      duration: 'Sep 2023 – Nov 2023',
      type: 'College Team',
      techStack: ['DDoS Protection', 'MERN Stack', 'AWS EC2', 'Nginx', 'Load Balancing'], // Clarified DDoS, MERN
      description: [
        'Led team to build a MERN-stack web app for DDoS mitigation.',
        'Deployed on AWS EC2 with Nginx load balancing.',
        'Implemented IP logging, mitigation rules, and real-time user alerts.'
      ],
       // link: '#'
    }
  ];

   // Sort projects chronologically (most recent first)
   projects.sort((a, b) => {
     const parseDate = (duration: string) => {
       const endDateStr = duration.includes('–') ? duration.split('–')[1]?.trim() : duration.trim();
       if (endDateStr.toLowerCase() === 'present') {
         return new Date(); // Treat 'Present' as today
       }
       const parts = endDateStr.split(' ');
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
      {/* Section title using heading font (Outfit, 600-700) */}
      <h2 className="text-2xl font-heading font-semibold mb-4 flex items-center gap-2">
        <FolderGit2 className="text-primary" /> Projects
      </h2>
      <div className="flex-grow space-y-4 overflow-y-auto pr-2"> {/* Allow scrolling */}
        {projects.map((proj, index) => (
          <ProjectItem key={index} {...proj} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
