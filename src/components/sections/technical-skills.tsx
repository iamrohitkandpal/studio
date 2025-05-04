'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Code, Database, Cloud, Cog, GitBranch, Github, Wind, MonitorSmartphone, DraftingCompass, Sigma } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

// Define the Language type (matching the Home component)
type Language = {
  name: string;
  proficiency: number;
};

// Define props for TechnicalSkills
interface TechnicalSkillsProps {
  languages: Language[];
}

interface SkillItemProps {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  level?: string;
}

const SkillItem: React.FC<SkillItemProps> = ({ name, icon: Icon, level }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="group flex flex-col items-center justify-center p-3 bg-card/80 rounded-lg border border-border/30 shadow-sm transition-all duration-300 hover:bg-accent/30 hover:border-primary/40 hover:shadow-md text-center aspect-square shine-effect"
          >
            <div className="w-8 h-8 mb-2 text-primary/80 group-hover:text-primary transition-colors duration-200">
              <Icon className="w-full h-full" />
            </div>
            <span className="text-xs sm:text-sm font-body font-medium leading-tight text-foreground/90 group-hover:text-primary/90 transition-colors duration-200">
              {name}
            </span>
            {level && (
              <span className="text-[10px] font-caption text-foreground/60 mt-1">({level})</span>
            )}
          </motion.div>
        </TooltipTrigger>
        <TooltipContent>
          <p className="font-medium">{name}</p>
          {level && <p className="text-xs opacity-80">{level}</p>}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

const LanguageSkillItem: React.FC<{ language: Language }> = ({ language }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col space-y-1.5 bg-card/60 p-3 rounded-lg border border-border/30 hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-md"
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Code className="w-4 h-4 text-primary/80" />
          <span className="text-sm font-medium">{language.name}</span>
        </div>
        <span className="text-xs text-foreground/60">{language.proficiency}%</span>
      </div>
      <Progress value={language.proficiency} className="h-2" />
    </motion.div>
  );
};

interface SkillCategoryProps {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  skills: SkillItemProps[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, icon: CategoryIcon, skills }) => (
  <Card className="bg-card/50 border-border/30 shadow-md hover:shadow-lg transition-all duration-300">
    <CardHeader className="pb-3">
      <CardTitle className="text-xl font-heading flex items-center gap-2 text-primary">
        <CategoryIcon className="w-5 h-5" /> {title}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05, ease: 'easeOut' }}
          >
            <SkillItem {...skill} />
          </motion.div>
        ))}
      </div>
    </CardContent>
  </Card>
);

const TechnicalSkills: React.FC<TechnicalSkillsProps> = ({ languages }) => {
  // Map languages to SkillItemProps format
  const languageSkills: SkillItemProps[] = languages.map((lang) => ({
    name: lang.name,
    icon: () => <Code size={20} className="text-blue-400" />,
    level: `${lang.proficiency}%`,
  }));

  const skillCategories: SkillCategoryProps[] = [
    {
      title: 'Frontend',
      icon: MonitorSmartphone,
      skills: [
        { name: 'HTML', icon: () => <Code size={20} className="text-orange-500" /> },
        { name: 'CSS', icon: () => <Code size={20} className="text-blue-500" /> },
        { name: 'React.js', icon: () => <Code size={20} className="text-sky-400" /> },
        { name: 'Next.js', icon: () => <Code size={20} className="text-foreground/90" /> },
        { name: 'Tailwind CSS', icon: () => <Wind size={20} className="text-teal-400" /> },
        { name: 'Bootstrap', icon: () => <Code size={20} className="text-purple-500" /> },
        { name: 'Flutter', icon: () => <MonitorSmartphone size={20} className="text-sky-500" /> },
      ],
    },
    {
      title: 'Backend & Databases',
      icon: Database,
      skills: [
        { name: 'Node.js', icon: () => <Code size={20} className="text-green-500" /> },
        { name: 'Express.js', icon: () => <Code size={20} className="text-foreground/80" /> },
        { name: 'MongoDB', icon: () => <Database size={20} className="text-green-500" /> },
        { name: 'MySQL', icon: () => <Database size={20} className="text-blue-700" /> },
      ],
    },
    {
      title: 'Tools & Miscellaneous',
      icon: Wrench,
      skills: [
        { name: 'Git', icon: () => <GitBranch size={20} className="text-orange-600" /> },
        { name: 'GitHub', icon: () => <Github size={20} className="text-foreground/80" /> },
        { name: 'Figma', icon: () => <DraftingCompass size={20} className="text-pink-500" />, level: 'Basic' },
        { name: 'MATLAB', icon: () => <Sigma size={20} className="text-red-500" />, level: 'Basic' },
        { name: 'AWS EC2', icon: () => <Cloud size={20} className="text-orange-400" />, level: 'Basic' },
        { name: 'Nginx', icon: () => <Cog size={20} className="text-green-400" />, level: 'Basic' },
        { name: 'Socket.io', icon: () => <Code size={20} className="text-purple-400" />, level: 'Intermediate' },
      ],
    },
  ];

  return (
    <div className="glass-section section-transition space-y-12">
      {/* Section Title */}
      <h2 className="animated-accent-bg text-3xl md:text-4xl font-heading font-bold text-center mb-8 flex items-center justify-center gap-3 text-primary">
        <Wrench className="w-8 h-8" /> Technical Skills
      </h2>
      
      {/* Languages with Progress Bars */}
      <div className="max-w-4xl mx-auto">
        <Card className="bg-card/50 border-border/30 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
          <CardHeader className="pb-3">
            <CardTitle className="text-xl font-heading flex items-center gap-2 text-primary">
              <Code className="w-5 h-5" /> Programming Languages
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {languages.map((language, index) => (
                <LanguageSkillItem key={language.name} language={language} />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Other Skill Categories */}
      <div className="grid gap-8 max-w-6xl mx-auto">
        {skillCategories.map((category) => (
          <SkillCategory key={category.title} {...category} />
        ))}
      </div>
    </div>
  );
};

export default TechnicalSkills;