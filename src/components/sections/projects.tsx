'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FolderGit2, ExternalLink, Github, X, Maximize2, Minimize2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from '@/components/ui/dialog';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ProjectItemProps {
  title: string;
  duration: string;
  type: string; // e.g., Full-Stack, Hackathon, College Team
  techStack: string[];
  description: string[];
  longDescription?: string; // Optional more detailed description for modal
  imageUrl?: string; // Optional image URL
  githubLink?: string; // Optional GitHub repo link
  liveLink?: string; // Optional live project link
  comingSoon?: boolean; // Flag for live link
}

const ProjectItem: React.FC<ProjectItemProps & { onExpand: () => void }> = ({ title, duration, type, techStack, description, onExpand }) => (
  // Added hover effect, pointer cursor, and onClick handler
  <motion.div
    layout // Enable layout animation for smoother resizing/positioning
    onClick={onExpand}
    className="group mb-6 last:mb-0 glass-card p-4 sm:p-6 rounded-lg shadow-lg border border-border/30 transition-all duration-300 hover:shadow-primary/20 hover:border-primary/30 hover:-translate-y-1 cursor-pointer"
    whileHover={{ scale: 1.02 }} // Slightly reduced scale on hover
    transition={{ type: 'spring', stiffness: 400, damping: 15 }}
  >
    <div className="flex justify-between items-start mb-2">
       <div>
          {/* Project title using body font (Inter) with semibold weight (subheading style) */}
          <h3 className="text-lg sm:text-xl font-body font-semibold text-primary">{title}</h3>
          {/* Duration and type using caption font (Manrope, 400) */}
          <p className="text-xs sm:text-sm font-caption text-foreground/60 mb-1">{duration} • {type}</p>
       </div>
        {/* Indicate expandability - subtly fades in on hover */}
        <Maximize2 size={18} className="text-foreground/50 flex-shrink-0 ml-2 mt-1 opacity-50 group-hover:opacity-100 transition-opacity duration-200" />
    </div>
     {/* Short description */}
     <p className="text-sm font-body text-foreground/80 mb-3 line-clamp-2">
       {description.join(' ')}
     </p>
    {/* Tech stack badges using body font (Inter, 400) */}
    <div className="flex flex-wrap gap-1.5 sm:gap-2">
        {techStack.slice(0, 5).map((tech, index) => ( // Show limited badges initially
            <Badge key={index} variant="secondary" className="font-body text-[10px] sm:text-xs px-1.5 py-0.5 sm:px-2.5 sm:py-0.5">{tech}</Badge>
        ))}
        {techStack.length > 5 && (
           <Badge variant="outline" className="font-body text-[10px] sm:text-xs px-1.5 py-0.5 sm:px-2.5 sm:py-0.5">+{techStack.length - 5} more</Badge>
        )}
    </div>
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
        'Developed a real-time task management platform featuring AI-powered prioritization and summarization via Hugging Face models.',
        'Implemented automation using Node-cron for scheduled tasks, linked tasks with GitHub issues via GitHub API, and enabled calendar synchronization through CalDAV integration.'
      ],
      longDescription: 'TaskFlow is a comprehensive task management solution designed for individuals and teams. It offers real-time collaboration features powered by Socket.io, ensuring seamless updates across connected clients. The integration with Hugging Face allows for intelligent task prioritization based on urgency and importance, as well as automatic summarization of lengthy task descriptions. Automation features include scheduled reminders and task generation using Node-cron, direct linking of tasks to GitHub issues for better development workflow tracking, and CalDAV support for syncing tasks with popular calendar applications. The backend is built with Node.js, Express, and MongoDB, while the frontend uses React with Redux Toolkit for state management and Material UI for the user interface.',
      imageUrl: 'https://picsum.photos/seed/taskflow/600/400', // Placeholder
      githubLink: 'https://github.com/iRohitKandpal/TaskFlow', // Example link
      comingSoon: true,
    },
    {
      title: 'Aakash Vaani',
      duration: 'Sep 2023 – Dec 2023',
      type: 'ISRO Hackathon Project',
      techStack: ['JavaScript (ES6+)', 'Leaflet.js', 'Web Speech API', 'Nominatim API', 'Overpass API', 'Natural Language Processing (NLP)', 'HTML5', 'CSS3'],
      description: [
        'Engineered a voice-controlled navigation system using the Web Speech API for hands-free operation.',
        'Integrated Leaflet.js with Nominatim and Overpass APIs for real-time geolocation, mapping, and point-of-interest data retrieval.'
      ],
      longDescription: 'Aakash Vaani was developed for an ISRO Hackathon, aiming to provide an accessible navigation solution. It leverages the Web Speech API for voice command recognition and speech synthesis, allowing users to interact with the map and receive directions without manual input. The application uses Leaflet.js for map rendering. Real-time user location is tracked, and routes are generated using data fetched from the Nominatim API (for geocoding) and Overpass API (for querying OpenStreetMap data like roads and points of interest). Basic Natural Language Processing techniques were employed to understand user commands more intuitively.',
      imageUrl: 'https://picsum.photos/seed/aakashvani/600/400', // Placeholder
      githubLink: 'https://github.com/iRohitKandpal/AakashVaani', // Example link
      // liveLink: '#', // Example live link
    },
    {
      title: 'Rakshak',
      duration: 'Sep 2023 – Nov 2023',
      type: 'College Team Project',
      techStack: ['MERN Stack (MongoDB, Express.js, React, Node.js)', 'AWS EC2', 'Nginx', 'Load Balancing', 'IP Logging', 'Rate Limiting', 'Web Sockets'],
      description: [
        'Led a college team project to build a web application focused on DDoS mitigation strategies.',
        'Deployed the MERN stack application on AWS EC2 instances, configured with Nginx for reverse proxying and load balancing.'
      ],
      longDescription: 'Rakshak is a proof-of-concept web application designed to demonstrate and implement basic DDoS mitigation techniques. Built using the MERN stack, it features a dashboard for monitoring incoming traffic and potential threats. Key features include IP address logging, rule-based traffic filtering, rate limiting to prevent overwhelming server resources, and real-time alerts pushed to administrators via Web Sockets. The application was deployed on AWS EC2 for scalability and availability, utilizing Nginx as a reverse proxy and load balancer to distribute traffic and enhance security.',
      imageUrl: 'https://picsum.photos/seed/rakshak/600/400', // Placeholder
      githubLink: 'https://github.com/iRohitKandpal/Rakshak', // Example link
      comingSoon: true,
    }
  ];

   // Sort projects (most recent first based on end date/present)
   projects.sort((a, b) => {
     const parseDate = (duration: string) => {
       const endDateStr = duration.includes('–') ? duration.split('–')[1]?.trim() : duration.trim();
       if (endDateStr.toLowerCase() === 'present') {
         return new Date(); // Use current date for "Present"
       }
       const parts = endDateStr.split(' ');
       const monthMap: { [key: string]: number } = { Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5, Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11 };
       // Ensure parts[0] is a valid month and parts[1] is a number
       if (parts.length === 2 && monthMap[parts[0]] !== undefined && !isNaN(parseInt(parts[1]))) {
         // Create date for the last day of the month for consistent comparison
         return new Date(parseInt(parts[1]), monthMap[parts[0]] + 1, 0);
       }
       return new Date(0); // Fallback for invalid dates
     };
     return parseDate(b.duration).getTime() - parseDate(a.duration).getTime();
   });

  return (
    <div className="h-full flex flex-col"> {/* Ensure full height */}
      {/* Section title using heading font (Outfit, 600-700) */}
      <h2 className="text-2xl font-heading font-semibold mb-4 flex items-center gap-2">
        <FolderGit2 className="text-primary" /> Projects
      </h2>
      <div className="flex-grow space-y-4 overflow-y-auto pr-2 custom-scrollbar"> {/* Allow scrolling */}
        {projects.map((proj, index) => (
          <ProjectItem key={index} {...proj} onExpand={() => setSelectedProject(proj)} />
        ))}
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
            {/* Added custom class for better styling */}
            <DialogContent className="sm:max-w-3xl max-h-[90vh] flex flex-col project-modal-content p-0 overflow-hidden">
               {/* Non-scrolling Header */}
               <DialogHeader className="p-6 pb-4 border-b border-border/20 flex-shrink-0">
                 <DialogTitle className="text-2xl font-heading text-primary">{selectedProject.title}</DialogTitle>
                 <DialogDescription className="text-sm font-caption text-foreground/70">
                   {selectedProject.duration} • {selectedProject.type}
                 </DialogDescription>
               </DialogHeader>

               {/* Scrollable Content Area */}
               <div className="flex-grow overflow-y-auto px-6 py-4 space-y-4 custom-scrollbar">
                 {/* Image Placeholder */}
                 {selectedProject.imageUrl && (
                  <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-border/50 shadow-lg mb-4">
                    <Image
                        src={selectedProject.imageUrl}
                        alt={`${selectedProject.title} screenshot`}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 group-hover:scale-105" // Keep hover effect if desired
                    />
                  </div>
                 )}

                 {/* Tech Stack */}
                  <div>
                    <h4 className="text-md font-body font-semibold mb-2 text-foreground/90">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                        {selectedProject.techStack.map((tech, index) => (
                            <Badge key={index} variant="secondary" className="font-body text-xs">{tech}</Badge>
                        ))}
                    </div>
                  </div>


                 {/* Detailed Description */}
                 <div>
                   <h4 className="text-md font-body font-semibold mb-2 text-foreground/90">Details:</h4>
                    <p className="text-sm font-body text-foreground/80 whitespace-pre-line leading-relaxed">
                      {selectedProject.longDescription || selectedProject.description.join('\n\n')}
                    </p>
                 </div>
               </div>

               {/* Non-scrolling Footer */}
               <DialogFooter className="p-6 pt-4 border-t border-border/20 flex flex-col sm:flex-row justify-between items-center gap-3 flex-shrink-0">
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
                         <ExternalLink size={16} className="mr-1.5" /> Live Demo Coming Soon
                        </Button>
                    )}
                  </div>
                  <DialogClose asChild>
                      <Button type="button" variant="ghost" size="sm">
                           <X size={16} className="mr-1.5" /> Close
                      </Button>
                  </DialogClose>
               </DialogFooter>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Projects;
