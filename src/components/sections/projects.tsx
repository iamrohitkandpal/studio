
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
  // DialogClose removed as it's handled by default X button in DialogContent
} from '@/components/ui/dialog';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'; // Use Card
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ProjectItemProps {
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
}

// Project Card Component
const ProjectCard: React.FC<ProjectItemProps & { onExpand: () => void }> = ({
  title, duration, type, techStack, description, onExpand, imageUrl, githubLink, liveLink, comingSoon
}) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="group flex flex-col h-full" // Ensure card takes full height if needed in grid
  >
    <Card className="bg-card/50 border-border/30 shadow-md hover:shadow-lg hover:border-primary/40 transition-all duration-300 flex flex-col flex-grow h-full overflow-hidden">
      {/* Optional Image Header */}
       {imageUrl && (
        <div className="relative w-full h-48 overflow-hidden border-b border-border/20"> {/* Added border */}
          <Image
            src={imageUrl}
            alt={`${title} preview`}
            fill // Use fill for responsive image sizing within container
            style={{ objectFit: 'cover' }} // Cover maintains aspect ratio
            className="transition-transform duration-300 group-hover:scale-105"
          />
           {/* Subtle overlay on hover */}
           <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
        </div>
      )}

      <CardHeader className="pb-3 pt-4 px-5"> {/* Adjusted padding */}
        <CardTitle className="text-xl font-heading text-primary flex justify-between items-center">
           <span>{title}</span>
           {/* Subtle Expand Icon */}
           <Maximize2 size={18} className="text-foreground/40 group-hover:text-primary transition-colors duration-200 cursor-pointer" onClick={onExpand} />
        </CardTitle>
        <CardDescription className="text-xs font-caption text-foreground/60 pt-1">
            {duration} • {type}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-grow mb-4 px-5 pt-0"> {/* Adjusted padding */}
        {/* Short description */}
        <p className="text-sm font-body text-foreground/80 mb-3 line-clamp-3">
           {description.join(' ')}
        </p>
         {/* Tech stack badges */}
        <div className="flex flex-wrap gap-2"> {/* Increased gap */}
          {techStack.slice(0, 4).map((tech, index) => ( // Show 4 initially
              <Badge
                 key={index}
                 variant="outline" // Use outline variant
                 className="font-body text-xs px-2.5 py-0.5 border-primary/30 text-primary/80 hover:bg-primary/10 transition-colors cursor-default" // Improved styling
              >
                 {tech}
              </Badge>
          ))}
          {techStack.length > 4 && ( // Adjust threshold
             <Badge
                 variant="outline"
                 className="font-body text-xs px-2.5 py-0.5 border-border/50 text-foreground/60 hover:bg-accent/50 transition-colors cursor-default" // Different style for "+more"
             >
                +{techStack.length - 4}
             </Badge>
          )}
        </div>
      </CardContent>

      <CardFooter className="px-5 pb-5 pt-0 mt-auto flex justify-end gap-2"> {/* Adjusted padding */}
         {/* Links (optional here, main in modal) */}
          <Button variant="link" size="sm" className="text-primary hover:text-primary/80 px-0" onClick={onExpand}>
             Learn More <ExternalLink size={14} className="ml-1" />
          </Button>
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
      imageUrl: 'https://picsum.photos/seed/taskflow/600/400', // Placeholder
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
      imageUrl: 'https://picsum.photos/seed/aakashvani/600/400', // Placeholder
      githubLink: 'https://github.com/iRohitKandpal/AakashVaani',
      // liveLink: '#',
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
      imageUrl: 'https://picsum.photos/seed/rakshak/600/400', // Placeholder
      githubLink: 'https://github.com/iRohitKandpal/Rakshak',
      comingSoon: true,
    }
  ];

   // Sort projects (most recent first) - Keep sorting logic
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
    <div className="space-y-12">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-8 flex items-center justify-center gap-3 text-primary">
        <FolderGit2 className="w-8 h-8" /> Projects
      </h2>

       {/* Projects Grid */}
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((proj, index) => (
          <ProjectCard key={index} {...proj} onExpand={() => setSelectedProject(proj)} />
        ))}
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
             {/* Standard Dialog Content, adjusted padding */}
            <DialogContent className="sm:max-w-3xl max-h-[90vh] flex flex-col p-0 overflow-hidden bg-card border-border/50">
               {/* Header */}
               <DialogHeader className="p-6 pb-4 border-b border-border/30 flex-shrink-0 bg-card sticky top-0 z-10">
                 <DialogTitle className="text-2xl font-heading text-primary">{selectedProject.title}</DialogTitle>
                 <DialogDescription className="text-sm font-caption text-foreground/70">
                   {selectedProject.duration} • {selectedProject.type}
                 </DialogDescription>
                  {/* Default Close button provided by DialogContent is in the top-right */}
               </DialogHeader>

               {/* Scrollable Content */}
               <div className="flex-grow overflow-y-auto px-6 py-4 space-y-6 custom-scrollbar">
                 {/* Image */}
                 {selectedProject.imageUrl && (
                  <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-border/50 shadow-md mb-4">
                    <Image
                        src={selectedProject.imageUrl}
                        alt={`${selectedProject.title} screenshot`}
                        fill // Use fill layout
                        style={{ objectFit: 'cover' }} // Ensure image covers the area
                        className="transition-transform duration-300"
                    />
                  </div>
                 )}

                 {/* Tech Stack */}
                  <div>
                    <h4 className="text-lg font-body font-semibold mb-3 text-foreground/90">Technologies Used:</h4> {/* Adjusted margin */}
                    <div className="flex flex-wrap gap-2"> {/* Use consistent gap */}
                        {selectedProject.techStack.map((tech, index) => (
                             <Badge
                                key={index}
                                variant="outline" // Use outline variant
                                className="font-body text-xs px-2.5 py-0.5 border-primary/30 text-primary/80 hover:bg-primary/10 transition-colors cursor-default" // Consistent styling
                             >
                                {tech}
                             </Badge>
                        ))}
                    </div>
                  </div>

                 {/* Detailed Description */}
                 <div>
                   <h4 className="text-lg font-body font-semibold mb-2 text-foreground/90">Details:</h4>
                    <p className="text-sm font-body text-foreground/80 whitespace-pre-line leading-relaxed">
                      {selectedProject.longDescription || selectedProject.description.join('\n\n')}
                    </p>
                 </div>
               </div>

               {/* Footer with Links */}
               <DialogFooter className="p-6 pt-4 border-t border-border/30 flex flex-col sm:flex-row justify-end items-center gap-3 flex-shrink-0 bg-card sticky bottom-0 z-10">
                  <div className="flex gap-3">
                    {selectedProject.githubLink && (
                      <Button variant="outline" size="sm" asChild>
                         <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer">
                           <Github size={16} className="mr-1.5" /> GitHub
                         </a>
                      </Button>
                    )}
                    {selectedProject.liveLink && (
                      <Button variant="default" size="sm" asChild>
                         <a href={selectedProject.liveLink} target="_blank" rel="noopener noreferrer">
                           <ExternalLink size={16} className="mr-1.5" /> Live Demo
                         </a>
                      </Button>
                    )}
                    {selectedProject.comingSoon && !selectedProject.liveLink && (
                        <Button variant="secondary" size="sm" disabled>
                         <ExternalLink size={16} className="mr-1.5" /> Coming Soon
                        </Button>
                    )}
                  </div>
                  {/* Explicit DialogClose button removed from footer */}
               </DialogFooter>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>

       {/* Add custom scrollbar styles locally if needed */}
       <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: hsl(var(--card)); /* Match modal background */
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: hsla(var(--primary-hsl), 0.5); /* Use primary color with transparency */
          border-radius: 10px;
          border: 2px solid hsl(var(--card)); /* Add padding */
        }
         .custom-scrollbar::-webkit-scrollbar-thumb:hover {
           background-color: hsla(var(--primary-hsl), 0.7); /* More opaque on hover */
        }
         .custom-scrollbar {
            scrollbar-width: thin;
            scrollbar-color: hsla(var(--primary-hsl), 0.5) hsl(var(--card)); /* thumb color track color */
         }
      `}</style>

    </div>
  );
};

export default Projects;

