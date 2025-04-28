'use client';

import React from 'react';
import { Wrench, Code, Database, Palette, Cloud, Cog, BrainCircuit, GitBranch, Github, Sigma, MonitorSmartphone, DraftingCompass, Wind } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

// Custom SVG Icons for specific technologies (ensure licenses are compatible)
// Source: https://simpleicons.org/ or similar, or custom SVGs

// Keeping simple text for Express as SVG is complex/unnecessary overhead here
const ExpressIcon = () => <span className="font-bold text-xs text-foreground/80">Express</span>;

// Using Lucide 'Wind' icon as a stand-in for Tailwind, as Palette is generic
const TailwindIcon = () => <Wind size={24} className="text-teal-400" />;

// Basic Bootstrap icon (Letter B)
const BootstrapIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-current text-purple-500">
      <title>Bootstrap</title>
      <path d="M14.01 4.387c-1.25-.426-2.82-.61-4.49-.61-3.2 0-5.907.96-7.794 2.88A9.663 9.663 0 00.08 12a9.66 9.66 0 001.646 5.343c1.887 1.92 4.594 2.88 7.794 2.88 1.67 0 3.24-.184 4.49-.61V4.387zm1.647-1.54v18.306c1.453-.408 2.687-.976 3.701-1.704 2.29-1.646 3.576-4.1 3.576-7.12 0-3.02-.96-5.473-3.576-7.12-1.646-.728-2.248-1.296-3.701-1.705zM8.82 7.027c.24 0 .48.019.71.056v9.834c-.23.037-.47.056-.71.056-1.887 0-3.259-.784-3.259-2.343v-5.26c0-1.56 1.372-2.343 3.26-2.343zm2.847 0c.248 0 .48.018.71.056v9.834c-.23.037-.461.056-.71.056-1.886 0-3.259-.784-3.259-2.343v-5.26c0-1.56 1.373-2.343 3.259-2.343z"/>
    </svg>
);

// Improved SVGs for common tech (simplified/stylized)
const ReactIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-current text-sky-400">
    <title>React</title>
    <circle cx="12" cy="12" r="2.5"/>
    <ellipse cx="12" cy="12" rx="11" ry="4.5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <ellipse cx="12" cy="12" rx="11" ry="4.5" stroke="currentColor" strokeWidth="1.5" fill="none" transform="rotate(60 12 12)"/>
    <ellipse cx="12" cy="12" rx="11" ry="4.5" stroke="currentColor" strokeWidth="1.5" fill="none" transform="rotate(120 12 12)"/>
  </svg>
);

const NextIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-current text-foreground/90">
     <title>Next.js</title>
     <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
     <path d="M11.5 7.5h1v9h-1z"/>
     <path d="m12.5 12.29 4.29 4.29 1.41-1.41-4.29-4.29zM7.21 15.18l4.29-4.29 1.41 1.41-4.29 4.29z"/>
   </svg>
);

const NodeIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-current text-green-500">
      <title>Node.js</title>
      <path d="M11.99 2.25c-1.57 0-3.05.38-4.38.96l-.57.24.57 1.38c.3-.13.61-.25.93-.35 1.07-.33 2.2-.54 3.45-.54s2.38.21 3.45.54c.32.1.63.22.93.35l.57-1.38-.57-.24c-1.33-.58-2.81-.96-4.38-.96zm-6.37 2.3c-.37.18-.73.37-1.07.58l-.57.34.87 1.22c.27-.2.54-.38.83-.55.92-.53 1.95-.91 3.06-1.12l.3-.06-.27-1.4c-.9.17-1.77.43-2.58.75zm12.74 0c-.81-.32-1.68-.58-2.58-.75l-.27 1.4.3.06c1.11.21 2.14.59 3.06 1.12.29.17.56.35.83.55l.87-1.22-.57-.34c-.34-.21-.7-.4-1.07-.58zm-10.71 2.2c-.3.19-.59.4-.86.62l-.56.46.87 1.22c.2-.16.4-.31.61-.45.7-.5 1.48-.84 2.31-1.01l.3-.06-.38-1.38c-.68.13-1.33.35-1.93.6zm8.68 0c-.6-.25-1.25-.47-1.93-.6l-.38 1.38.3.06c.83.17 1.61.51 2.31 1.01.21.14.41.29.61.45l.87-1.22-.56-.46c-.27-.22-.56-.43-.86-.62zm-7.8 2.39c-.24.22-.47.45-.68.7l-.53.56 1.1.96c.16-.19.32-.37.5-.54.55-.52 1.16-.89 1.82-1.09l.29-.08-.48-1.36c-.5.15-.98.37-1.42.65zm6.92 0c-.44-.28-.92-.5-1.42-.65l-.48 1.36.29.08c.66.2 1.27.57 1.82 1.09.18.17.34.35.5.54l1.1-.96-.53-.56c-.21-.25-.44-.48-.68-.7zm-6.14 2.5c-.19.24-.36.5-.51.76l-.48.83 1.25.7c.12-.2.24-.4.38-.6.41-.56.88-.96 1.4-1.18l.29-.11-.57-1.33c-.38.16-.75.38-1.08.63zm5.36 0c-.33-.25-.7-.47-1.08-.63l-.57 1.33.29.11c.52.22.99.62 1.4 1.18.14.2.26.4.38.6l1.25-.7-.48-.83c-.15-.26-.32-.52-.51-.76zm-4.28 2.54c-.14.27-.26.55-.36.83l-.4.96 1.35.46c.08-.22.16-.44.26-.65.3-.6.65-.99 1.03-1.23l.28-.15-.64-1.26c-.29.17-.57.38-.82.6zm3.64 0c-.25-.22-.53-.43-.82-.6l-.64 1.26.28.15c.38.24.73.63 1.03 1.23.1.21.18.43.26.65l1.35-.46-.4-.96c-.1-.28-.22-.56-.36-.83zm-2.4 2.45c-.1.28-.17.57-.21.86l-.29 1.03 1.4.27c.03-.23.08-.45.14-.67.2-.6.44-.99.72-1.25l.28-.22-.7-1.18c-.2.16-.39.35-.55.56zm1.52 0c-.16-.21-.35-.4-.55-.56l-.7 1.18.28.22c.28.26.52.65.72 1.25.06.22.11.44.14.67l1.4-.27-.29-1.03c-.04-.29-.11-.58-.21-.86z"/>
    </svg>
);

const JsIcon = () => <Code size={24} className="text-yellow-400" />;
const PythonIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-current text-blue-400">
    <title>Python</title>
    <path d="M24,12a6,6,0,0,1-6,6H13V6h5a6,6,0,0,1,6,6ZM12,18a6,6,0,0,1-6,6H0V12H6a6,6,0,0,1,6,6Zm0-6H0V0H11a6,6,0,0,1,6,6Z"/>
  </svg>
);
const DartIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-current text-sky-500">
    <title>Dart</title>
    <path d="M11.9 24l-8.8-8.8L11.9 6.4 20.7 15zm0-1.6l6.9-6.9-6.9-6.9-6.9 6.9zM11.9 2.4l-8.8 8.8 8.8 8.8 8.8-8.8Z"/>
  </svg>
);
const CppIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-current text-blue-600">
        <title>C++</title>
        <path d="M14.169 7.948h1.655v1.655h-1.655zm0 4.803h1.655v1.655h-1.655zm4.803-4.803h1.655v1.655h-1.655zm0 4.803h1.655v1.655h-1.655zm-10.98 1.655c-4.39 0-7.947-3.558-7.947-7.948 0-4.39 3.558-7.947 7.947-7.947 4.39 0 7.948 3.557 7.948 7.947 0 4.39-3.558 7.948-7.948 7.948zm0-14.24c-3.468 0-6.292 2.824-6.292 6.292s2.824 6.292 6.292 6.292 6.292-2.824 6.292-6.292-2.824-6.292-6.292-6.292z"/>
    </svg>
);
const HtmlIcon = () => <Code size={24} className="text-orange-500" />;
const CssIcon = () => <Code size={24} className="text-blue-500" />;

const MongoIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-current text-green-500">
        <title>MongoDB</title>
        <path d="M15.63 5.547c-1.172-1.359-2.438-2.297-4.43-2.813.398.859.765 1.687.945 2.578-.781.188-1.594.407-2.313.719 1.602 1.828 2.024 3.875 1.68 6.094-.648.187-1.344.343-2.039.468-.157 1.149-.235 2.29-.352 3.43-.039.489-.078.988-.133 1.485h1.985c.039-.446.078-.891.117-1.336.133-1.79.258-3.531.563-5.265.804-.063 1.617-.188 2.398-.399.235 1.156.352 2.312.485 3.468.063.531.125 1.055.187 1.586h1.985c-.063-.531-.102-1.055-.172-1.586-.086-.828-.172-1.664-.313-2.492.78-.219 1.546-.5 2.25-.844-.765-1.953-.906-4.016-.015-6.016zm-3.638 15.984C7.195 21.531 3.28 18.68 3.28 12c0-1.274.43-2.539 1.125-3.664C7.22 4.398 11.719 2.484 12 2.484s4.781 1.914 7.594 5.852C20.29 9.46 20.719 10.727 20.719 12c0 6.68-4.008 9.531-8.727 9.531z"/>
    </svg>
);
const MySqlIcon = () => <Database size={24} className="text-blue-700" />;
const FlutterIcon = () => <MonitorSmartphone size={24} className="text-sky-500" />;
const GitIcon = () => <GitBranch size={24} className="text-orange-600" />;
const GitHubIcon = () => <Github size={24} className="text-foreground/80" />;
const FigmaIcon = () => <DraftingCompass size={24} className="text-pink-500" />;
const MatlabIcon = () => <Sigma size={24} className="text-red-500" />;
const AwsIcon = () => <Cloud size={24} className="text-orange-400" />;
const NginxIcon = () => <Cog size={24} className="text-green-400" />;
const SocketIOIcon = () => <BrainCircuit size={24} className="text-purple-400" />;

interface SkillCategoryProps {
  title: string;
  skills: { name: string; icon: React.ComponentType<{ className?: string }>; level?: string }[];
}

// Removed tilt effect from SkillItem
const SkillItem: React.FC<{ name: string; icon: React.ComponentType<{ className?: string }>; level?: string }> = ({ name, icon: Icon, level }) => {
  return (
    <motion.div
       // Apply subtle scale and bounce on hover using Framer Motion's whileHover
       whileHover={{ scale: 1.1, y: -4, transition: { type: 'spring', stiffness: 350, damping: 15 } }}
       // Initial animation state (optional, for entrance)
       initial={{ opacity: 0, y: 10 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.3, ease: "easeOut" }} // Entrance animation transition
       className="group flex flex-col items-center justify-center p-3 glass-card rounded-lg border border-border/30 transition-colors duration-200 cursor-pointer text-center aspect-square" // Ensure square shape
    >
      {/* Icon Container */}
      <div className="w-7 h-7 sm:w-8 sm:h-8 text-foreground/80 group-hover:text-primary transition-colors duration-200">
         <Icon className="w-full h-full" />
      </div>
      {/* Skill Name */}
      <span className="mt-2 text-[10px] sm:text-xs font-body leading-tight text-foreground/90 group-hover:text-primary/90 transition-colors duration-200">{name}</span>
      {/* Skill Level (Optional) */}
      {level && <span className="text-[9px] sm:text-[10px] font-caption text-foreground/60 mt-0.5">({level})</span>}
    </motion.div>
  );
};


const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => (
  <div className="mb-6 last:mb-0">
    <h3 className="text-lg font-body font-semibold mb-3 text-primary/90">{title}</h3>
     {/* Slightly adjusted grid columns for potentially better wrapping */}
    <div className="grid grid-cols-4 xs:grid-cols-5 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-8 xl:grid-cols-9 gap-3 md:gap-4">
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
        { name: 'Figma', icon: FigmaIcon, level: 'Basic' },
        { name: 'MATLAB', icon: MatlabIcon, level: 'Basic' },
        { name: 'AWS EC2', icon: AwsIcon, level: 'Basic'},
        { name: 'Nginx', icon: NginxIcon, level: 'Basic'},
        { name: 'Socket.io', icon: SocketIOIcon, level: 'Intermediate'},
      ],
    },
  ];

  return (
    <div className="h-full flex flex-col"> {/* Ensure full height */}
      <h2 className="text-2xl font-heading font-semibold mb-4 flex items-center gap-2">
        <Wrench className="text-primary" /> Technical Skills
      </h2>
      <div className="space-y-5 flex-grow">
        {skillCategories.map((category) => (
          <SkillCategory key={category.title} {...category} />
        ))}
      </div>
    </div>
  );
};

export default TechnicalSkills;
