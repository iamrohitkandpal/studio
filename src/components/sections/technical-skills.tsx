
'use client';

import React from 'react';
import { Wrench, Code, Database, Palette, Cloud, Cog, BrainCircuit, GitBranch, Github, Sigma, MonitorSmartphone, DraftingCompass } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'; // Ensure Framer Motion imports are present
import { cn } from '@/lib/utils';

// Custom SVG Icons for specific technologies (if Lucide doesn't have them)
// Source: Simple Icons (https://simpleicons.org/) or similar, ensure licenses are compatible

const ReactIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-current">
    <title>React</title>
    <path d="M12.001 4.495a8.492 8.492 0 0 0-7.435 4.414 8.48 8.48 0 0 0-.537 4.675 8.498 8.498 0 0 0 4.41 7.432 8.49 8.49 0 0 0 9.11-.001 8.496 8.496 0 0 0 4.411-7.429 8.48 8.48 0 0 0-.537-4.678 8.492 8.492 0 0 0-7.436-4.413zm0 1.59a6.902 6.902 0 0 1 6.037 3.58 6.89 6.89 0 0 1 .437 3.803 6.906 6.906 0 0 1-3.58 6.036 6.902 6.902 0 0 1-7.413.001A6.905 6.905 0 0 1 4.9 17.921a6.89 6.89 0 0 1-.437-3.805A6.901 6.901 0 0 1 12 6.084zm4.086 6.416a.798.798 0 1 0-1.129 1.127l-1.914-1.915a.798.798 0 0 0-1.128 0l-1.914 1.915a.798.798 0 1 0 1.128 1.127l1.914-1.914 1.915 1.914a.798.798 0 1 0 1.128-1.127zm-7.043-2.77a.798.798 0 1 0-1.128 1.128L9.83 12.77a.798.798 0 0 0 1.128 0l1.915-1.915a.798.798 0 0 0-1.128-1.128l-1.915 1.915-1.914-1.915zm0 4.676a.798.798 0 1 0-1.128 1.128l1.914 1.914a.798.798 0 0 0 1.128 0l1.915-1.914a.798.798 0 1 0-1.128-1.128l-1.915 1.914-1.914-1.914zM12 1.195a.8.8 0 0 0-.8.8v2.4a.8.8 0 0 0 1.6 0v-2.4a.8.8 0 0 0-.8-.8zm0 17.61a.8.8 0 0 0-.8.8v2.4a.8.8 0 1 0 1.6 0v-2.4a.8.8 0 0 0-.8-.8zM4.595 4.595a.8.8 0 0 0-1.131 0L2.333 5.726a.8.8 0 1 0 1.131 1.131l1.131-1.131a.8.8 0 0 0 0-1.131zm14.81 14.81a.8.8 0 0 0-1.131 0l-1.131 1.131a.8.8 0 1 0 1.131 1.131l1.131-1.131a.8.8 0 0 0 0-1.131zM1.195 12a.8.8 0 0 0-.8.8v1.6a.8.8 0 1 0 1.6 0v-1.6a.8.8 0 0 0-.8-.8zm21.61 0a.8.8 0 0 0-.8.8v1.6a.8.8 0 1 0 1.6 0v-1.6a.8.8 0 0 0-.8-.8zM19.405 4.595a.8.8 0 0 0 0 1.131l1.131 1.131a.8.8 0 1 0 1.131-1.131L20.536 4.595a.8.8 0 0 0-1.131 0zM5.726 21.667a.8.8 0 0 0 0 1.131l1.131 1.131a.8.8 0 1 0 1.131-1.131L6.857 21.667a.8.8 0 0 0-1.131 0z"/>
  </svg>
);

const NextIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-current">
    <title>Next.js</title>
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.24 19.2V7.2h.48l4.8 7.2V7.2h1.44v12h-.48l-4.8-7.2v7.2h-1.44z"/>
  </svg>
);


const NodeIcon = () => (
   <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-current">
     <title>Node.js</title>
     <path d="M11.72 16.1c0 1.634-1.31 2.944-2.944 2.944H4.964V4.956h3.812c1.634 0 2.944 1.31 2.944 2.944v8.197zM12.003 0A12 12 0 0 0 0 12a12 12 0 0 0 12.003 12A12 12 0 0 0 24 12 12 12 0 0 0 12.003 0zm-3.13 16.1c0 .88.72 1.6 1.6 1.6h1.544c.88 0 1.6-.72 1.6-1.6V7.897c0-.88-.72-1.6-1.6-1.6h-1.54c-.88 0-1.6.72-1.6 1.6v8.203zm7.32-6.015c0-.45.24-.86.62-1.09.38-.24.86-.25 1.26-.04l1.55 1.07c.41.28.66.74.66 1.23v3.19c0 .45-.24.86-.62 1.1-.38.23-.86.24-1.26.03l-1.55-1.08c-.4-.28-.65-.74-.65-1.22v-3.19z"/>
   </svg>
);

const JsIcon = () => <Code size={24} className="text-yellow-400" />;
const PythonIcon = () => <Code size={24} className="text-blue-400" />;
const DartIcon = () => <Code size={24} className="text-sky-400" />;
const CppIcon = () => <Code size={24} className="text-blue-600" />;
const HtmlIcon = () => <Code size={24} className="text-orange-500" />;
const CssIcon = () => <Code size={24} className="text-blue-500" />;
const ExpressIcon = () => <span className="font-bold text-xs text-foreground/80">Express</span>; // Text icon
const MongoIcon = () => <Database size={24} className="text-green-600" />;
const MySqlIcon = () => <Database size={24} className="text-blue-700" />;
const TailwindIcon = () => <Palette size={24} className="text-teal-400" />;
const BootstrapIcon = () => <Palette size={24} className="text-purple-500" />;
const FlutterIcon = () => <MonitorSmartphone size={24} className="text-sky-500" />;
const GitIcon = () => <GitBranch size={24} className="text-orange-600" />;
const GitHubIcon = () => <Github size={24} className="text-foreground/80" />;
const FigmaIcon = () => <DraftingCompass size={24} className="text-pink-500" />;
const MatlabIcon = () => <Sigma size={24} className="text-red-500" />;
const AwsIcon = () => <Cloud size={24} className="text-orange-400" />;
const NginxIcon = () => <Cog size={24} className="text-green-400" />;
const SocketIOIcon = () => <BrainCircuit size={24} className="text-purple-400" />; // Using BrainCircuit for real-time


interface SkillCategoryProps {
  title: string;
  skills: { name: string; icon: React.ComponentType<{ className?: string }>; level?: string }[];
}

// Apply subtle tilt effect directly to SkillItem
const SkillItem: React.FC<{ name: string; icon: React.ComponentType<{ className?: string }>; level?: string }> = ({ name, icon: Icon, level }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 30 }); // Tighter spring
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 30 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["6deg", "-6deg"]); // Less rotation
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-6deg", "6deg"]); // Less rotation

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    const xPct = mouseX / (width / 1.8); // Adjusted sensitivity
    const yPct = mouseY / (height / 1.8); // Adjusted sensitivity
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };


  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      whileHover={{ scale: 1.1, y: -5, transition: { type: 'spring', stiffness: 400, damping: 15 } }} // Subtle lift and scale
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      className="flex flex-col items-center justify-center p-3 glass-card rounded-lg border border-border/30 transition-colors duration-200 cursor-pointer text-center aspect-square" // Ensure square shape
    >
      <motion.div style={{ transform: 'translateZ(15px)' }} className="w-7 h-7 sm:w-8 sm:h-8 text-foreground/80 group-hover:text-primary transition-colors">
         <Icon className="w-full h-full" />
      </motion.div>
      <span className="mt-2 text-[10px] sm:text-xs font-body leading-tight text-foreground/90">{name}</span>
      {level && <span className="text-[9px] sm:text-[10px] font-caption text-foreground/60 mt-0.5">({level})</span>}
    </motion.div>
  );
};


const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => (
  <div className="mb-6 last:mb-0">
    <h3 className="text-lg font-body font-semibold mb-3 text-primary/90">{title}</h3>
    {/* Adjusted grid columns for slightly more space */}
    <div className="grid grid-cols-4 xs:grid-cols-5 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-9 gap-3 md:gap-4">
      {skills.map((skill) => (
        <SkillItem key={skill.name} {...skill} />
      ))}
    </div>
  </div>
);

const TechnicalSkills: React.FC = () => {
  const skillCategories: SkillCategoryProps[] = [
    {
      title: 'Languages',
      skills: [
        { name: 'JavaScript', icon: JsIcon },
        { name: 'Python', icon: PythonIcon },
        { name: 'Dart', icon: DartIcon },
        { name: 'C/C++', icon: CppIcon },
      ],
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML', icon: HtmlIcon },
        { name: 'CSS', icon: CssIcon },
        { name: 'React.js', icon: ReactIcon },
        { name: 'Next.js', icon: NextIcon },
        { name: 'Tailwind CSS', icon: TailwindIcon },
        { name: 'Bootstrap', icon: BootstrapIcon },
        { name: 'Flutter', icon: FlutterIcon },
      ],
    },
     {
      title: 'Backend & Databases',
      skills: [
        { name: 'Node.js', icon: NodeIcon },
        { name: 'Express.js', icon: ExpressIcon },
        { name: 'MongoDB', icon: MongoIcon },
        { name: 'MySQL', icon: MySqlIcon },
      ],
    },
    {
      title: 'Tools & Miscellaneous',
      skills: [
        { name: 'Git', icon: GitIcon },
        { name: 'GitHub', icon: GitHubIcon },
        // { name: 'FlutterFlow', icon: FlutterIcon }, // Can be redundant if Flutter is listed
        { name: 'Figma', icon: FigmaIcon, level: 'Basic' }, // Adjusted level
        { name: 'MATLAB', icon: MatlabIcon, level: 'Basic' }, // Adjusted level
        { name: 'AWS EC2', icon: AwsIcon, level: 'Basic'},
        { name: 'Nginx', icon: NginxIcon, level: 'Basic'},
        { name: 'Socket.io', icon: SocketIOIcon, level: 'Intermediate'}, // Updated level
      ],
    },
  ];

  return (
    <div className="h-full flex flex-col"> {/* Ensure full height */}
      <h2 className="text-2xl font-heading font-semibold mb-4 flex items-center gap-2">
        <Wrench className="text-primary" /> Technical Skills
      </h2>
      {/* Removed overflow-y-auto as the section itself doesn't need to scroll if page scrolls */}
      <div className="space-y-5 flex-grow">
        {skillCategories.map((category) => (
          <SkillCategory key={category.title} {...category} />
        ))}
      </div>
    </div>
  );
};

export default TechnicalSkills;

