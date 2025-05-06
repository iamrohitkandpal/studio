'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wrench, Code, Database, Cloud, Cog, GitBranch, Github, Wind, MonitorSmartphone, DraftingCompass, Sigma, ChevronDown, ChevronUp, Sparkles, Zap, Layers, PenTool } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';

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
            whileHover={{ 
              scale: 1.08, 
              y: -5,
              boxShadow: "0 10px 25px -5px rgba(var(--primary-rgb), 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ 
              type: "spring", 
              stiffness: 400, 
              damping: 17,
              duration: 0.2
            }}
            className="group flex flex-col items-center justify-center p-3 bg-card/80 rounded-lg border border-border/30 shadow-sm transition-all duration-300 hover:bg-accent/30 hover:border-primary/40 hover:shadow-md text-center aspect-square relative overflow-hidden"
          >
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
            
            {/* Icon with hover animation instead of continuous */}
            <div className="w-8 h-8 mb-2 text-primary/80 group-hover:text-primary transition-all duration-200 group-hover:-translate-y-1">
              <Icon className="w-full h-full" />
            </div>
            
            {/* Skill name */}
            <span className="text-xs sm:text-sm font-body font-medium leading-tight text-foreground/90 group-hover:text-primary/90 transition-colors duration-200">
              {name}
            </span>
            
            {/* Skill level badge */}
            {level && (
              <Badge 
                variant="outline" 
                className="text-[10px] font-caption text-foreground/60 mt-1.5 px-1.5 py-0 border-primary/20 group-hover:border-primary/40 transition-colors duration-300"
              >
                {level}
              </Badge>
            )}
            
            {/* Sparkle effect only on hover */}
            <div className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:animate-pulse">
              <Sparkles size={12} className="text-primary/70" />
            </div>
          </motion.div>
        </TooltipTrigger>
        <TooltipContent side="top" className="bg-card/95 backdrop-blur-sm border-primary/20">
          <p className="font-medium">{name}</p>
          {level && <p className="text-xs opacity-80">{level}</p>}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

// New Canva-inspired language skill item
const LanguageSkillItem: React.FC<{ language: Language; index: number }> = ({ language, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ 
        y: -5,
        boxShadow: "0 10px 25px -5px rgba(var(--primary-rgb), 0.2)"
      }}
      className="flex flex-col space-y-2 bg-card/60 p-4 rounded-lg border border-border/30 hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-md relative overflow-hidden group"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Code className="w-5 h-5 text-primary/80" />
          <span className="text-sm font-medium">{language.name}</span>
        </div>
        <Badge variant="outline" className="text-xs border-primary/20">
          {language.proficiency}%
        </Badge>
      </div>
      
      {/* Animated progress bar with hover effect */}
      <div className="h-2 w-full bg-secondary/50 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${language.proficiency}%` }}
          transition={{ 
            duration: 1.2, 
            delay: 0.2 + index * 0.1, 
            ease: [0.34, 1.56, 0.64, 1]
          }}
          className="h-full bg-gradient-to-r from-primary/90 to-primary relative group-hover:bg-gradient-to-r group-hover:from-primary/80 group-hover:via-purple-500/90 group-hover:to-primary transition-all duration-500"
        >
          {/* Shine effect on hover */}
          <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shimmer"></div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Redesigned skill category component with Canva-inspired UI
interface SkillCategoryProps {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  skills: SkillItemProps[];
  description?: string;
  accentColor?: string;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, icon: CategoryIcon, skills, description, accentColor = "from-primary/10 to-primary/5" }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
      className="overflow-hidden rounded-xl"
    >
      <Card className={`bg-gradient-to-br ${accentColor} border-border/30 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden`}>
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <CardTitle className="text-xl font-heading flex items-center gap-2 text-primary">
              <CategoryIcon className="w-5 h-5" /> {title}
            </CardTitle>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1 rounded-full hover:bg-accent/50 transition-colors"
            >
              {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </motion.button>
          </div>
          {description && (
            <CardDescription className="text-sm text-foreground/70 mt-1">
              {description}
            </CardDescription>
          )}
        </CardHeader>
        
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <CardContent className="pt-4">
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
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </motion.div>
  );
};

// Main component with Canva-inspired design
const TechnicalSkills: React.FC<TechnicalSkillsProps> = ({ languages }) => {
  // Map languages to SkillItemProps format
  const languageSkills: SkillItemProps[] = languages.map((lang) => ({
    name: lang.name,
    icon: () => <Code size={20} className="text-blue-400" />,
    level: `${lang.proficiency}%`,
  }));

  const skillCategories: SkillCategoryProps[] = [
    {
      title: 'Frontend Development',
      icon: MonitorSmartphone,
      description: 'Technologies I use to build beautiful, responsive user interfaces',
      accentColor: "from-blue-500/10 to-blue-400/5",
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
      description: 'Technologies I use to build robust server-side applications',
      accentColor: "from-green-500/10 to-green-400/5",
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
      description: 'Additional tools and technologies in my development workflow',
      accentColor: "from-purple-500/10 to-purple-400/5",
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
    <div id="skills" className="glass-section section-transition space-y-12">
      {/* Canva-inspired section header */}
      <div className="relative">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-heading font-bold text-center mb-8 flex items-center justify-center gap-3 text-primary relative"
        >
          <div className="absolute -z-10 w-16 h-16 bg-primary/10 rounded-full blur-xl"></div>
          <Wrench className="w-8 h-8" /> Technical Skills
        </motion.h2>
        <motion.div 
          className="absolute -bottom-2 left-1/2 h-1 bg-gradient-to-r from-transparent via-primary/60 to-transparent rounded-full"
          initial={{ width: 0, x: "-50%" }}
          whileInView={{ width: "120px", x: "-50%" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        />
      </div>
      
      {/* ChaiAurCode-inspired skill showcase */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Left column: Feature card */}
          <div className="md:col-span-1">
            <Card className="bg-gradient-to-br from-primary/20 to-primary/5 border-border/30 h-full flex flex-col justify-between overflow-hidden">
              <CardHeader>
                <CardTitle className="text-xl font-heading flex items-center gap-2 text-primary">
                  <Zap className="w-5 h-5" /> My Expertise
                </CardTitle>
                <CardDescription className="text-sm text-foreground/70">
                  Areas where I excel and continuously improve
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="mt-1 bg-primary/20 p-1 rounded-full">
                      <Layers size={14} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Full-Stack Development</h4>
                      <p className="text-xs text-foreground/70">Building end-to-end web applications</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 bg-primary/20 p-1 rounded-full">
                      <PenTool size={14} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">UI/UX Implementation</h4>
                      <p className="text-xs text-foreground/70">Creating responsive and intuitive interfaces</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 bg-primary/20 p-1 rounded-full">
                      <Database size={14} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Database Design</h4>
                      <p className="text-xs text-foreground/70">Structuring efficient data models</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          {/* Right column: Languages with progress bars */}
          <div className="md:col-span-2">
            <Card className="bg-card/50 border-border/30 shadow-md hover:shadow-lg transition-all duration-300 h-full overflow-hidden">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-heading flex items-center gap-2 text-primary">
                  <Code className="w-5 h-5" /> Programming Languages
                </CardTitle>
                <CardDescription className="text-sm text-foreground/70">
                  Languages I've worked with and my proficiency levels
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[280px] pr-4">
                  <div className="grid grid-cols-1 gap-4">
                    {languages.map((language, index) => (
                      <LanguageSkillItem key={language.name} language={language} index={index} />
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.div>
      
      {/* Skill Categories */}
      <div className="grid gap-8 max-w-6xl mx-auto">
        {skillCategories.map((category, index) => (
          <SkillCategory 
            key={category.title} 
            {...category} 
          />
        ))}
      </div>
    </div>
  );
};

export default TechnicalSkills;
