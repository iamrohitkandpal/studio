
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Code, Database, Cloud, Cog, GitBranch, Github, Wind, MonitorSmartphone, DraftingCompass, Sigma } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AwsIcon, BootstrapIcon, CppIcon, CssIcon, DartIcon, ExpressIcon, FigmaIcon, FlutterIcon, GitIcon, GitHubIcon, HtmlIcon, JsIcon, MatlabIcon, MongoIcon, MySqlIcon, NextIcon, NginxIcon, NodeIcon, PythonIcon, ReactIcon, SocketIOIcon, TailwindIcon } from '@/components/skill-icons';


interface SkillItemProps {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  level?: string;
}

// Enhanced animation variants with 3D tilt
const skillItemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.6, 0.01, 0.05, 0.95],
    },
  },
  hover: {
    y: -5, // Slightly more lift
    scale: 1.08, // Slightly more scale
    rotateX: 10, // Add a subtle 3D tilt on X-axis
    rotateY: 5, // Add a subtle 3D tilt on Y-axis
    boxShadow: "0px 10px 20px -5px hsla(var(--primary-hsl), 0.2)", // Enhance shadow on hover
    transition: { type: "spring", stiffness: 300, damping: 15 }, // Spring animation for smoothness
  },
};

const SkillItem: React.FC<SkillItemProps> = ({ name, icon: Icon, level }) => {
  return (
    <motion.div
      className={cn(
        "group flex flex-col items-center justify-center p-2 bg-card rounded-lg border border-border/20 text-center aspect-square",
        "transition-all duration-200 hover:bg-accent/50 hover:border-primary/30 hover:shadow-elegant-md", // Use elegant shadow
        "transform-gpu" // Ensure smooth GPU-accelerated transforms
        )}
      style={{ perspective: 800 }} // Add perspective for 3D effect
      variants={skillItemVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Icon Container */}
      <div className="w-6 h-6 mb-1.5 text-foreground/70 group-hover:text-primary transition-colors duration-200">
         <Icon className="w-full h-full" />
      </div>
      {/* Skill Name */}
      <span className="text-[10px] sm:text-xs font-body leading-tight text-foreground/90 group-hover:text-primary/90 transition-colors duration-200">{name}</span>
      {/* Skill Level (Optional) */}
      {level && <span className="text-[9px] font-caption text-foreground/60 mt-0.5">({level})</span>}
    </motion.div>
  );
};

interface SkillCategoryProps {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  skills: SkillItemProps[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, icon: CategoryIcon, skills }) => (
  <Card className="bg-card/50 border-border/30 overflow-hidden"> {/* Add overflow-hidden */}
    <CardHeader className="pb-3">
      <CardTitle className="text-xl font-heading flex items-center gap-2 text-primary">
         <CategoryIcon className="w-5 h-5" /> {title}
      </CardTitle>
    </CardHeader>
    <CardContent>
      {/* Grid for skills within the category */}
      <div className="grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-3">
        {skills.map((skill) => (
          <SkillItem key={skill.name} {...skill} />
        ))}
      </div>
    </CardContent>
  </Card>
);

const TechnicalSkills: React.FC = () => {
  const skillCategories: SkillCategoryProps[] = [
    {
      title: 'Languages',
      icon: Code,
      skills: [
        { name: 'JavaScript', icon: JsIcon },
        { name: 'Python', icon: PythonIcon },
        { name: 'Dart', icon: DartIcon },
        { name: 'C/C++', icon: CppIcon },
      ],
    },
    {
      title: 'Frontend',
       icon: MonitorSmartphone,
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
      icon: Database,
      skills: [
        { name: 'Node.js', icon: NodeIcon },
        { name: 'Express.js', icon: ExpressIcon },
        { name: 'MongoDB', icon: MongoIcon },
        { name: 'MySQL', icon: MySqlIcon },
        { name: 'Socket.io', icon: SocketIOIcon, level: 'Intermediate'}, // Moved here
      ],
    },
    {
      title: 'Tools & Cloud', // Renamed category
      icon: Wrench, // Could use Cloud or Cog icon too
      skills: [
        { name: 'Git', icon: GitIcon },
        { name: 'GitHub', icon: GitHubIcon },
        { name: 'AWS EC2', icon: AwsIcon, level: 'Basic'},
        { name: 'Nginx', icon: NginxIcon, level: 'Basic'},
        { name: 'Figma', icon: FigmaIcon, level: 'Basic' },
        { name: 'MATLAB', icon: MatlabIcon, level: 'Basic' },
      ],
    },
  ];

  return (
    <div className="space-y-12">
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-8 flex items-center justify-center gap-3 text-primary">
        <Wrench className="w-8 h-8" /> Technical Skills
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {skillCategories.map((category) => (
          <SkillCategory key={category.title} {...category} />
        ))}
      </div>
    </div>
  );
};

export default TechnicalSkills;
