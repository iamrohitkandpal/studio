
'use client';

import React from 'react';
import { Wrench, Code, Database, Palette, Cloud, Cog, BrainCircuit, GitBranch, Github, Sigma, MonitorSmartphone, DraftingCompass } from 'lucide-react'; // Added more Lucide icons
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

// Using Lucide icons where possible, fallback SVGs adjusted
const JsIcon = () => <Code size={24} className="text-yellow-400" />;
const PythonIcon = () => <Code size={24} className="text-blue-400" />;
const DartIcon = () => <Code size={24} className="text-sky-400" />; // Generic Code icon
const CppIcon = () => <Code size={24} className="text-blue-600" />; // Generic Code icon
const HtmlIcon = () => <Code size={24} className="text-orange-500" />;
const CssIcon = () => <Code size={24} className="text-blue-500" />;
const ReactIcon = () => <Code size={24} className="text-cyan-400" />; // Generic Code icon, Lucide doesn't have specific React
const NextIcon = () => <Code size={24} className="text-foreground" />; // Generic Code icon, Lucide doesn't have specific Next.js
const NodeIcon = () => <Code size={24} className="text-green-500" />; // Generic Code icon, Lucide doesn't have specific Node.js
const ExpressIcon = () => <span className="font-bold text-xs">Express</span>; // Text icon as fallback
const MongoIcon = () => <Database size={24} className="text-green-600" />;
const MySqlIcon = () => <Database size={24} className="text-blue-700" />;
const TailwindIcon = () => <Palette size={24} className="text-teal-400" />; // Palette icon for CSS framework
const BootstrapIcon = () => <Palette size={24} className="text-purple-500" />; // Palette icon
const FlutterIcon = () => <MonitorSmartphone size={24} className="text-sky-500" />; // Mobile icon for Flutter
const GitIcon = () => <GitBranch size={24} className="text-orange-600" />;
const GitHubIcon = () => <Github size={24} className="text-foreground" />;
const FigmaIcon = () => <DraftingCompass size={24} className="text-pink-500" />; // Drafting compass for design tool
const MatlabIcon = () => <Sigma size={24} className="text-red-500" />; // Sigma for mathematical software


interface SkillCategoryProps {
  title: string;
  skills: { name: string; icon: React.ComponentType<{ className?: string }>; level?: string }[]; // Added className prop type for icons
}

const SkillItem: React.FC<{ name: string; icon: React.ComponentType<{ className?: string }>; level?: string }> = ({ name, icon: Icon, level }) => (
  <motion.div
    // Enhanced hover effect with more pronounced 3D rotation, scale, and glow
    whileHover={{
      scale: 1.15, // Increased scale
      y: -8, // Increased lift
      rotateX: 15, // Increased rotation
      rotateY: -15, // Increased rotation
      color: 'hsl(var(--primary))',
      boxShadow: '0 15px 30px hsla(var(--primary) / 0.4)', // Stronger shadow
      zIndex: 10, // Bring to front on hover
    }}
    transition={{ type: 'spring', stiffness: 300, damping: 15 }} // Adjusted spring physics
    className="flex flex-col items-center justify-center p-3 glass-card rounded-lg border border-border/30 transition-colors duration-200 cursor-pointer text-center aspect-square" // Ensure square shape
    style={{ transformStyle: 'preserve-3d', perspective: '500px' }} // Added perspective for better 3D
  >
    {/* Elevate icon and apply 3D perspective */}
    <motion.div style={{ transform: 'translateZ(20px)' }}>
      <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-foreground/80 group-hover:text-primary transition-colors" /> {/* Pass className for styling */}
    </motion.div>
    {/* Skill name using body font (Inter, 400-500) */}
    <span className="mt-2 text-[10px] sm:text-xs font-body leading-tight">{name}</span>
     {/* Level indicator using caption font (Manrope, 400) */}
     {level && <span className="text-[9px] sm:text-[10px] font-caption text-foreground/60">({level})</span>}
  </motion.div>
);

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => (
  <div className="mb-6 last:mb-0">
    {/* Category title using body font (Inter) with semibold weight (subheading style) */}
    <h3 className="text-lg font-body font-semibold mb-3 text-primary/90">{title}</h3>
    {/* Adjusted grid columns for better density */}
    <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-3 md:gap-4">
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
        { name: 'Flutter', icon: FlutterIcon }, // Moved Flutter here
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
        { name: 'FlutterFlow', icon: FlutterIcon }, // Reuse Flutter icon
        { name: 'Figma', icon: FigmaIcon, level: 'Elementary' },
        { name: 'MATLAB', icon: MatlabIcon, level: 'Elementary' }, // Use Lucide Sigma
        // Can add others like AWS, Nginx, Socket.io if desired
        { name: 'AWS EC2', icon: Cloud, level: 'Basic'},
        { name: 'Nginx', icon: Cog, level: 'Basic'}, // Cog for server config
        { name: 'Socket.io', icon: BrainCircuit, level: 'Basic'}, // Brain for real-time/AI
      ],
    },
  ];

  return (
    <div className="h-full flex flex-col"> {/* Ensure full height */}
      {/* Section title using heading font (Outfit, 600-700) */}
      <h2 className="text-2xl font-heading font-semibold mb-4 flex items-center gap-2">
        <Wrench className="text-primary" /> Technical Skills
      </h2>
      <div className="space-y-5 flex-grow overflow-y-auto pr-2"> {/* Allow scrolling */}
        {skillCategories.map((category) => (
          <SkillCategory key={category.title} {...category} />
        ))}
      </div>
    </div>
  );
};

export default TechnicalSkills;
