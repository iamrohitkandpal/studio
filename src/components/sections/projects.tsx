'use client';

import React from 'react';
import { FolderGit2, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge'; // Assuming you have a Badge component
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
  <div className="mb-6 last:mb-0 glass-card p-6 rounded-lg shadow-lg border border-border/30">
    <div className="flex justify-between items-start mb-2">
       <div>
          {/* Project title using body font (could be heading) */}
          <h3 className="text-xl font-body font-medium text-primary">{title}</h3>
          {/* Duration and type using caption font */}
          <p className="text-sm font-caption text-foreground/60 mb-1">{duration} • {type}</p>
       </div>
       {link && (
         <Button variant="ghost" size="icon" asChild className="ml-4 flex-shrink-0">
             <a href={link} target="_blank" rel="noopener noreferrer" aria-label={`Link to ${title}`}>
               <ExternalLink size={18} />
             </a>
          </Button>
        )}
    </div>
    {/* Tech stack badges using body font (default for Badge) */}
    <div className="flex flex-wrap gap-2 mb-3">
        {techStack.map((tech, index) => (
            <Badge key={index} variant="secondary" className="font-body">{tech}</Badge>
        ))}
    </div>
    {/* Description points using body font */}
    <ul className="list-disc list-outside pl-5 space-y-1 font-body text-foreground/80 text-sm">
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
       // Assuming this should be Jan 2024
      duration: 'Jan 2024 – Present',
      type: 'Full-Stack',
      techStack: ['React', 'Redux Toolkit', 'Material UI', 'Socket.io', 'Node.js', 'Hugging Face'],
      description: [
        'Real-time task management platform with AI-powered prioritization & summarization (Hugging Face).',
        'Automation via Node-cron, GitHub API task linking, and CalDAV calendar sync.'
      ],
      // link: '#' // Add link if available
    },
    {
      title: 'Aakash Vaani',
      duration: 'Sep 2023 – Dec 2023', // Adjusted likely dates
      type: 'ISRO Hackathon',
      techStack: ['Voice-Based Navigation', 'JavaScript (ES6+)', 'Leaflet.js', 'Web Speech API', 'Nominatim', 'Overpass API'],
      description: [
        'Real-time geolocation & mapping via Nominatim & Overpass APIs.',
        'Hands-free navigation with voice feedback & NLP commands.'
      ],
       // link: '#'
    },
    {
      title: 'Rakshak',
      duration: 'Sep 2023 – Nov 2023', // Adjusted likely dates
      type: 'College Team',
      techStack: ['DDoS Protection System', 'MERN', 'AWS EC2', 'Nginx'],
      description: [
        'Led team to build a MERN-stack web app for DDoS mitigation.',
        'Deployed on AWS EC2 with Nginx load balancing.',
        'Implemented IP logging, mitigation rules, and real-time user alerts.'
      ],
       // link: '#'
    }
  ];

   // Sort projects if needed, e.g., by date
   projects.sort((a, b) => {
     // Basic sorting assuming "Mon YYYY – Present" or "Mon YYYY – Mon YYYY"
     const parseDate = (dateStr: string) => {
       const endDateStr = dateStr.includes('–') ? dateStr.split('–')[1]?.trim() : dateStr.trim();
       if (endDateStr.toLowerCase() === 'present') {
         return new Date(); // Treat 'Present' as today
       }
       const parts = endDateStr.split(' ');
       const monthMap: { [key: string]: number } = { Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5, Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11 };
       if (parts.length === 2 && monthMap[parts[0]] !== undefined && !isNaN(parseInt(parts[1]))) {
         return new Date(parseInt(parts[1]), monthMap[parts[0]]);
       }
       return new Date(0); // Fallback for parsing errors
     };
     return parseDate(b.duration).getTime() - parseDate(a.duration).getTime();
   });


  return (
    <div>
      {/* Section title using heading font */}
      <h2 className="text-2xl font-heading font-semibold mb-6 flex items-center gap-2">
        <FolderGit2 className="text-primary" /> Projects
      </h2>
      <div>
        {projects.map((proj, index) => (
          <ProjectItem key={index} {...proj} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
