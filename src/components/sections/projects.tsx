'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FolderGit2, ExternalLink, Github, X, Maximize2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose
} from '@/components/ui/dialog';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { GlowingEffect } from "@/components/ui/glowing-effect";

interface ProjectItemProps {
  id?: string;
  title: string;
  duration: string;
  type: string;
  techStack: string[];
  description: string[];
  longDescription?: string;
  imageUrl?: string;
  githubLink?: string;
  liveLink?: string;
  comingSoon?: boolean;
  image?: string;
  technologies?: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  tall?: boolean;
}

// Project Card Component
const ProjectCard: React.FC<ProjectItemProps & { onExpand: () => void }> = ({
  title, duration, type, techStack, description, onExpand, imageUrl, githubLink, liveLink, comingSoon
}) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5, ease: [0.6, 0.01, 0.05, 0.95] }}
    className="group flex flex-col h-full"
  >
    <Card className="bg-card border-border/30 shadow-md hover:shadow-lg hover:border-primary/40 transition-all duration-300 flex flex-col flex-grow h-full overflow-hidden">
      {imageUrl && (
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={imageUrl}
            alt={`${title} preview`}
            fill
            style={{ objectFit: 'cover' }}
            className="transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}

      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-heading text-primary flex justify-between items-center">
           <span>{title}</span>
           <Maximize2 size={18} className="text-foreground/40 group-hover:text-primary transition-colors duration-200 cursor-pointer" onClick={onExpand} />
        </CardTitle>
        <CardDescription className="text-xs font-caption text-foreground/60 pt-1">
            {duration} • {type}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-grow mb-4 px-6 pt-0">
        <p className="text-sm font-body text-foreground/80 mb-3 line-clamp-3">
           {description.join(' ')}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {techStack.slice(0, 5).map((tech, index) => (
              <Badge key={index} variant="secondary" className="font-body text-[10px] px-2 py-0.5">{tech}</Badge>
          ))}
          {techStack.length > 5 && (
             <Badge variant="outline" className="font-body text-[10px] px-2 py-0.5">+{techStack.length - 5}</Badge>
          )}
        </div>
      </CardContent>

      <CardFooter className="px-6 pb-5 pt-0 mt-auto flex justify-end gap-2">
          <GlowingEffect spread={60} proximity={100}>
            <Button 
              variant="link" 
              size="sm" 
              className="text-primary hover:text-primary/80 button-glow" 
              onClick={onExpand} 
              aria-label={`Learn more about ${title}`}
            >
              Learn More <ExternalLink size={14} className="ml-1" />
            </Button>
          </GlowingEffect>
      </CardFooter>
    </Card>
  </motion.div>
);

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItemProps | null>(null);

  const projects: ProjectItemProps[] = [
     {
      title: 'TaskFlow',
      duration: 'Jan 2024 – Present',
      type: 'Full-Stack Personal Project',
      techStack: ['React', 'Redux Toolkit', 'Material UI', 'Socket.io', 'Node.js', 'Express.js', 'MongoDB', 'Hugging Face', 'Node-cron', 'GitHub API', 'CalDAV'],
      description: [
        'Real-time task management with AI prioritization (Hugging Face) and summarization.',
        'Features automation (Node-cron), GitHub integration, and CalDAV sync.'
      ],
      longDescription: 'TaskFlow is a comprehensive task management solution designed for individuals and teams. It offers real-time collaboration features powered by Socket.io, ensuring seamless updates across connected clients. The integration with Hugging Face allows for intelligent task prioritization based on urgency and importance, as well as automatic summarization of lengthy task descriptions. Automation features include scheduled reminders and task generation using Node-cron, direct linking of tasks to GitHub issues for better development workflow tracking, and CalDAV support for syncing tasks with popular calendar applications. The backend is built with Node.js, Express, and MongoDB, while the frontend uses React with Redux Toolkit for state management and Material UI for the user interface.',
      imageUrl: 'https://picsum.photos/seed/taskflow/600/400',
      githubLink: 'https://github.com/iRohitKandpal/TaskFlow',
      comingSoon: true,
    },
    {
      title: 'Aakash Vaani',
      duration: 'Sep 2023 – Dec 2023',
      type: 'ISRO Hackathon Project',
      techStack: ['JavaScript (ES6+)', 'Leaflet.js', 'Web Speech API', 'Nominatim API', 'Overpass API', 'NLP', 'HTML5', 'CSS3'],
      description: [
        'Voice-controlled navigation system using Web Speech API for hands-free operation.',
        'Integrated Leaflet.js with Nominatim & Overpass for real-time mapping and POI data.'
      ],
      longDescription: 'Aakash Vaani was developed for an ISRO Hackathon, aiming to provide an accessible navigation solution. It leverages the Web Speech API for voice command recognition and speech synthesis, allowing users to interact with the map and receive directions without manual input. The application uses Leaflet.js for map rendering. Real-time user location is tracked, and routes are generated using data fetched from the Nominatim API (for geocoding) and Overpass API (for querying OpenStreetMap data like roads and points of interest). Basic Natural Language Processing techniques were employed to understand user commands more intuitively.',
      imageUrl: 'https://picsum.photos/seed/aakashvani/600/400',
      githubLink: 'https://github.com/iRohitKandpal/AakashVaani',
    },
    {
      title: 'Rakshak',
      duration: 'Sep 2023 – Nov 2023',
      type: 'College Team Project',
      techStack: ['MERN Stack', 'AWS EC2', 'Nginx', 'Load Balancing', 'IP Logging', 'Rate Limiting', 'Web Sockets'],
      description: [
        'Web application demonstrating DDoS mitigation strategies (IP logging, rate limiting).',
        'Deployed MERN stack on AWS EC2 with Nginx for reverse proxying and load balancing.'
      ],
      longDescription: 'Rakshak is a proof-of-concept web application designed to demonstrate and implement basic DDoS mitigation techniques. Built using the MERN stack, it features a dashboard for monitoring incoming traffic and potential threats. Key features include IP address logging, rule-based traffic filtering, rate limiting to prevent overwhelming server resources, and real-time alerts pushed to administrators via Web Sockets. The application was deployed on AWS EC2 for scalability and availability, utilizing Nginx as a reverse proxy and load balancer to distribute traffic and enhance security.',
      imageUrl: 'https://picsum.photos/seed/rakshak/600/400',
      githubLink: 'https://github.com/iRohitKandpal/Rakshak',
      comingSoon: true,
    }
  ];

   projects.sort((a, b) => {
     const parseDate = (duration: string) => {
       const endDateStr = duration.includes('–') ? duration.split('–')[1]?.trim() : duration.trim();
       if (endDateStr.toLowerCase() === 'present') return new Date();
       const parts = endDateStr.split(' ');
       const monthMap: { [key: string]: number } = { Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5, Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11 };
       if (parts.length === 2 && monthMap[parts[0]] !== undefined && !isNaN(parseInt(parts[1]))) {
         return new Date(parseInt(parts[1]), monthMap[parts[0]] + 1, 0);
       }
       return new Date(0);
     };
     return parseDate(b.duration).getTime() - parseDate(a.duration).getTime();
   });

  return (
    <div className="glass-section section-transition space-y-12">
      <h2 className="section-title">
        <FolderGit2 className="w-8 h-8" /> Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
            onExpand={() => setSelectedProject(project)}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
            <DialogContent
              className="sm:max-w-3xl max-h-[90vh] flex flex-col p-0 overflow-hidden bg-card border-border/50"
              aria-labelledby="project-dialog-title"
              aria-describedby="project-dialog-description"
              role="dialog"
            >
               <DialogHeader className="p-6 pb-4 border-b border-border/30 flex-shrink-0 bg-card sticky top-0 z-10">
                 <DialogTitle id="project-dialog-title" className="text-2xl font-heading text-primary">
                   {selectedProject?.title}
                 </DialogTitle>
                 <DialogDescription id="project-dialog-description" className="text-sm font-caption text-foreground/70">
                   {selectedProject?.duration} • {selectedProject?.type}
                 </DialogDescription>
                  <DialogClose asChild>
                       <Button type="button" variant="ghost" size="icon" className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                           <X size={18} />
                           <span className="sr-only">Close</span>
                       </Button>
                   </DialogClose>
               </DialogHeader>

               <div className="flex-grow overflow-y-auto px-6 py-4 space-y-6 custom-scrollbar">
                 {selectedProject.imageUrl && (
                  <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-border/50 shadow-md mb-4">
                    <Image
                        src={selectedProject.imageUrl}
                        alt={`${selectedProject.title} screenshot`}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="transition-transform duration-300"
                    />
                  </div>
                 )}

                  <div>
                    <h4 className="text-lg font-body font-semibold mb-2 text-foreground/90">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                        {selectedProject.techStack.map((tech, index) => (
                            <Badge key={index} variant="secondary" className="font-body text-xs">{tech}</Badge>
                        ))}
                    </div>
                  </div>

                 <div>
                   <h4 className="text-lg font-body font-semibold mb-2 text-foreground/90">Details:</h4>
                    <p className="text-sm font-body text-foreground/80 whitespace-pre-line leading-relaxed">
                      {selectedProject.longDescription || selectedProject.description.join('\n\n')}
                    </p>
                 </div>
               </div>

               <DialogFooter className="p-6 pt-4 border-t border-border/30 flex flex-col sm:flex-row justify-end items-center gap-3 flex-shrink-0 bg-card sticky bottom-0 z-10">
                  <div className="flex gap-3">
                    {selectedProject.githubLink && (
                      <GlowingEffect spread={70} proximity={100}>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="button-glow"
                          asChild
                        >
                          <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer" aria-label="View project on GitHub">
                            <Github size={16} className="mr-1.5" /> GitHub
                          </a>
                        </Button>
                      </GlowingEffect>
                    )}
                    {selectedProject.liveLink && (
                      <GlowingEffect spread={70} proximity={100}>
                        <Button 
                          variant="default" 
                          size="sm" 
                          className="button-glow"
                          asChild
                        >
                          <a href={selectedProject.liveLink} target="_blank" rel="noopener noreferrer" aria-label="View live demo">
                            <ExternalLink size={16} className="mr-1.5" /> Live Demo
                          </a>
                        </Button>
                      </GlowingEffect>
                    )}
                    {selectedProject.comingSoon && !selectedProject.liveLink && (
                      <GlowingEffect spread={70} proximity={100}>
                        <Button 
                          variant="secondary" 
                          size="sm" 
                          disabled 
                          aria-label="Demo coming soon"
                        >
                          <ExternalLink size={16} className="mr-1.5" /> Coming Soon
                        </Button>
                      </GlowingEffect>
                    )}
                  </div>
               </DialogFooter>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;