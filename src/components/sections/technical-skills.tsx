'use client';

import React from 'react';
import { Wrench } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

// Basic SVG icons for skills - replace with better ones or library if available
const JsIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M0 0h24v24H0z" fill="none"/><path d="M11.4 10.5c-.2-.3-.5-.6-.9-.7-.4-.2-.8-.2-1.3-.2-.7 0-1.3.1-1.7.3-.5.2-.8.5-1.1.9-.3.4-.4.8-.4 1.3 0 .5.1 1 .4 1.3.3.4.7.7 1.1.9.5.2 1 .3 1.7.3.5 0 .9-.1 1.3-.2.4-.1.7-.4.9-.7l.9 1c-.3.4-.7.8-1.1 1-.5.3-1.1.4-1.8.4-1 0-1.8-.2-2.5-.6-.7-.4-1.2-.9-1.6-1.6-.4-.7-.6-1.5-.6-2.4 0-.9.2-1.7.6-2.4.4-.7.9-1.2 1.6-1.6.7-.4 1.5-.6 2.5-.6.7 0 1.3.1 1.8.4.5.2 1 .6 1.3.9l-.8.9zm7.8-1.9h-2.1l-.9 4.5h.9l.1-.7h1.3l.1.7h.9l-.8-4.5zm-.4 3.2h-1.1l.5-2.5.6 2.5z"/></svg>;
const PythonIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v1.5c0 .8.7 1.5 1.5 1.5S14 9.3 14 8.5V7h3v3.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5zm-11 4H5v4c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-1.5c0-.8-.7-1.5-1.5-1.5S12 15.7 12 16.5V18H9v-3.5c0-.8-.7-1.5-1.5-1.5S6 12.7 6 13.5V15zm-1.5-6C3.7 9 3 8.3 3 7.5S3.7 6 4.5 6H7V3c0-1.1.9-2 2-2h1.5c.8 0 1.5.7 1.5 1.5S11.3 4 10.5 4H9v3h1.5c.8 0 1.5.7 1.5 1.5S11.3 10 10.5 10H8v4c0 1.1-.9 2-2 2H4.5c-.8 0-1.5-.7-1.5-1.5S3.7 13 4.5 13H6V9H4.5zm15 6c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5H18v3c0 1.1-.9 2-2 2h-1.5c-.8 0-1.5-.7-1.5-1.5S13.7 19 14.5 19H16v-3h1.5c.8 0 1.5-.7 1.5-1.5S18.3 13 17.5 13H13c-1.1 0-2-.9-2-2v-1.5c0-.8.7-1.5 1.5-1.5S14 10.7 14 11.5V13h5.5z"/></svg>;
const DartIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M13 3l-8 8h6v8l8-8h-6z"/></svg>;
const CppIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M14.5 10.5h-1v1h1v-1zm-2 0h-1v1h1v-1zm6 1c.55 0 1-.45 1-1s-.45-1-1-1h-1.5v-1c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v1H10c-.55 0-1 .45-1 1s.45 1 1 1h1.5v1H10c-.55 0-1 .45-1 1s.45 1 1 1h1.5v1c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-1h1.5c.55 0 1-.45 1-1zm-3.5 3.5h-1v1h1v-1zm0-2h-1v1h1v-1zm0-2h-1v1h1v-1zm2 4h-1v1h1v-1zm0-2h-1v1h1v-1zm0-2h-1v1h1v-1zM7 6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h1.5v1H4c-.55 0-1 .45-1 1s.45 1 1 1h1.5v1H4c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1H5.5v-1H7c.55 0 1-.45 1-1s-.45-1-1-1H5.5V6H7z"/></svg>;
const HtmlIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M13.5 6l-1.4 1.4 4.6 4.6-4.6 4.6L13.5 18l6-6zM4.5 18l1.4-1.4-4.6-4.6 4.6-4.6L4.5 6l-6 6z"/></svg>; // Simple angle bracket placeholder
const CssIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>; // Simple angle bracket placeholder
const ReactIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/><ellipse cx="12" cy="7" rx="2.5" ry="4" transform="rotate(-60 12 7)"/><ellipse cx="12" cy="17" rx="2.5" ry="4" transform="rotate(60 12 17)"/><ellipse cx="6.5" cy="12" rx="4" ry="2.5" /></svg>;
const NextIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M15.7 11.3l-6-6c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l5.3 5.3-5.3 5.3c-.4.4-.4 1 0 1.4.2.2.5.3.7.3s.5-.1.7-.3l6-6c.4-.4.4-1 0-1.4z"/><path d="M10 18h4V6h-4v12z"/></svg>;
const NodeIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M21.7 11.3l-5.8-5.8c-.5-.5-1.4-.5-1.9 0L9.2 10H6c-.6 0-1 .4-1 1s.4 1 1 1h3.2l4.8 4.8c.3.3.6.4.9.4s.7-.1.9-.4l5.9-5.9c.5-.4.5-1.3 0-1.8zM12 3c-1.1 0-2 .9-2 2v3.1l-3.7 3.7c-1 .9-1 2.5 0 3.4l4.2 4.2c.5.5 1.1.7 1.8.7s1.3-.2 1.8-.7l4.2-4.2c.9-1 1.1-2.4.4-3.6L14 9.1V5c0-1.1-.9-2-2-2z"/></svg>;
const ExpressIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-xs"><text x="0" y="18">Express</text></svg>; // Text as icon
const MongoIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/><path d="M12 6c-2.1 0-3.8 1.7-3.8 3.8 0 .8.3 1.6.7 2.2l4.6 4.6c.6-.4 1.4-.7 2.2-.7 2.1 0 3.8-1.7 3.8-3.8S14.1 6 12 6z"/></svg>;
const MySqlIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><path d="M13 16.5V13h-2v3.5c-1.7-.8-3-2.5-3-4.5s1.3-3.7 3-4.5V8h2v1.5c1.7.8 3 2.5 3 4.5s-1.3 3.7-3 4.5zM12 11c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z"/></svg>;
const TailwindIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.91.22 1.4.6 2.4 1.2.61.37 1.2.72 1.8.93 1.6.56 3.1.61 4.5.13C20.101 9.3 21 7.7 21 6c0-1.2-.5-2.7-1.8-3.6-.8-.6-1.8-.9-3-.9-1.6 0-3.17.77-4.2 1.4zM6.001 13.2c-1.6-.4-2.8.4-3.6 1.2-1.3.9-1.8 2.4-1.8 3.6 0 1.7.9 3.3 2.7 4.2.8.6 1.8.9 3 .9 1.6 0 3.1-.8 4.2-1.4 1-.6 1.5-1 2.4-1.2 1.6-.5 3.1-.4 4.5.13 1.8.6 2.7 2.2 2.7 3.9 0 1.2-.5 2.7-1.8 3.6-.8.6-1.8.9-3 .9-1.6 0-3.17-.77-4.2-1.4-1-.6-1.5-1-2.4-1.2-1.6-.5-3.1-.4-4.5.13C7.101 18.7 6.101 17.1 6.001 16.8c0-.1 0-.1 0-.2h-.001z"/></svg>;
const BootstrapIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14h-2V7h2v10zm4 0H9.5c-.8 0-1.5-.7-1.5-1.5S8.7 14 9.5 14H13v-2H9.5c-.8 0-1.5-.7-1.5-1.5S8.7 9 9.5 9H16v8z"/></svg>;
const FlutterIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12.8 4.2L6 11l3.8 3.8L17 7.6zm0 15.6L6 13l6.8-6.8L17 13.4z"/></svg>;
const GitIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 13.5h-7c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h7c.3 0 .5.2.5.5s-.2.5-.5.5zm0-3h-7c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h7c.3 0 .5.2.5.5s-.2.5-.5.5zm0-3h-7c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h7c.3 0 .5.2.5.5s-.2.5-.5.5z"/><circle cx="9.5" cy="9.5" r="1.5"/><circle cx="9.5" cy="12.5" r="1.5"/><circle cx="9.5" cy="15.5" r="1.5"/></svg>;
const GitHubIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.201 2.397.099 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.852 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd"/></svg>;
const FigmaIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>;

interface SkillCategoryProps {
  title: string;
  skills: { name: string; icon: React.ComponentType; level?: string }[];
}

const SkillItem: React.FC<{ name: string; icon: React.ComponentType; level?: string }> = ({ name, icon: Icon, level }) => (
  <motion.div
    whileHover={{ scale: 1.1, y: -5, color: 'hsl(var(--primary))' }}
    transition={{ type: 'spring', stiffness: 300 }}
    className="flex flex-col items-center p-3 glass-card rounded-lg border border-border/30 transition-colors duration-200 cursor-pointer text-center"
  >
    <Icon />
    <span className="mt-2 text-xs sm:text-sm">{name}</span>
     {level && <span className="text-xs text-foreground/60">({level})</span>}
  </motion.div>
);

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => (
  <div className="mb-6">
    <h3 className="text-lg font-medium mb-3 text-primary/80">{title}</h3>
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
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
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'HTML', icon: HtmlIcon },
        { name: 'CSS', icon: CssIcon },
        { name: 'React.js', icon: ReactIcon },
        { name: 'Next.js', icon: NextIcon },
        { name: 'Express.js', icon: ExpressIcon },
        { name: 'Node.js', icon: NodeIcon },
        { name: 'Tailwind CSS', icon: TailwindIcon },
        { name: 'Bootstrap', icon: BootstrapIcon },
        { name: 'Flutter', icon: FlutterIcon },
      ],
    },
     {
      title: 'Databases',
      skills: [
        { name: 'MongoDB', icon: MongoIcon },
        { name: 'MySQL', icon: MySqlIcon },
      ],
    },
    {
      title: 'Miscellaneous',
      skills: [
        { name: 'Git', icon: GitIcon },
        { name: 'GitHub', icon: GitHubIcon },
        { name: 'Flutterflow.io', icon: FlutterIcon }, // Reuse Flutter icon
        { name: 'MATLAB', icon: () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M3 3h18v18H3z"/></svg>, level: 'Elementary' }, // Placeholder icon
        { name: 'Figma', icon: FigmaIcon, level: 'Elementary' },
      ],
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
        <Wrench className="text-primary" /> Technical Skills
      </h2>
      <div className="space-y-6">
        {skillCategories.map((category) => (
          <SkillCategory key={category.title} {...category} />
        ))}
      </div>
    </div>
  );
};

export default TechnicalSkills;
