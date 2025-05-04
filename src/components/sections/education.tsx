'use client';

import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

const Education: React.FC = () => {
  const courses = [
    "Data Structures & Algorithms",
    "Computer Networks",
    "Operating Systems",
    "Cybersecurity Fundamentals",
    "Web Development"
  ];

  const achievements = [
    "Dean's List 2023",
    "Top 5% in class"
  ];

  return (
    <div className="glass-section section-transition space-y-8">
      {/* Section Title */}
      <h2 className="section-title">
        <GraduationCap className="w-8 h-8" /> Education
      </h2>

      {/* Bento Box Layout for Education */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {/* Main Education Card */}
        <motion.div 
          className="bento-box md:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl md:text-2xl font-body font-semibold text-primary">
                  Bachelor of Technology, CSE (Cyber Security)
                </h3>
                <p className="text-md font-body text-foreground/80 mt-2 flex items-center">
                  <MapPin size={16} className="mr-2 text-primary/80" />
                  Silver Oak College of Engineering & Technology, Ahmedabad
                </p>
              </div>
              <Badge variant="gradient" className="ml-2 self-start">Current</Badge>
            </div>
            
            <div className="flex items-center text-sm font-caption text-foreground/70 mb-4">
              <Calendar size={16} className="mr-2 text-primary/80" />
              2022 – Present
              <span className="mx-2">•</span>
              <Award size={16} className="mr-2 text-primary/80" />
              CGPA: 8.91
            </div>
            
            <p className="text-sm font-body text-foreground/80 mb-4">
              Pursuing a comprehensive program focused on computer science fundamentals with 
              specialization in cybersecurity, including both theoretical knowledge and 
              practical applications in secure software development.
            </p>
          </div>
        </motion.div>
        
        {/* Key Courses Card */}
        <motion.div 
          className="bento-box"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold mb-3 flex items-center text-primary">
            <BookOpen size={18} className="mr-2" /> Key Courses
          </h3>
          <ul className="space-y-2">
            {courses.map((course, index) => (
              <li key={index} className="flex items-center text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/80 mr-2"></span>
                {course}
              </li>
            ))}
          </ul>
        </motion.div>
        
        {/* Timeline Card */}
        <motion.div 
          className="bento-box md:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-lg font-semibold mb-3 flex items-center text-primary">
            <Clock size={18} className="mr-2" /> Academic Timeline
          </h3>
          <div className="relative pl-6 border-l border-primary/30">
            <div className="mb-4 relative">
              <div className="absolute w-3 h-3 bg-primary rounded-full -left-[19px] top-1"></div>
              <h4 className="text-md font-medium">First Year</h4>
              <p className="text-sm text-foreground/70">Completed core CS fundamentals and mathematics</p>
            </div>
            <div className="mb-4 relative">
              <div className="absolute w-3 h-3 bg-primary rounded-full -left-[19px] top-1"></div>
              <h4 className="text-md font-medium">Second Year</h4>
              <p className="text-sm text-foreground/70">Specialized in cybersecurity and advanced programming</p>
            </div>
            <div className="relative">
              <div className="absolute w-3 h-3 bg-primary/70 rounded-full -left-[19px] top-1 animate-pulse"></div>
              <h4 className="text-md font-medium">Current</h4>
              <p className="text-sm text-foreground/70">Focusing on practical applications and research</p>
            </div>
          </div>
        </motion.div>
        
        {/* Achievements Card */}
        <motion.div 
          className="bento-box"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold mb-3 flex items-center text-primary">
            <Award size={18} className="mr-2" /> Academic Achievements
          </h3>
          <ul className="space-y-2">
            {achievements.map((achievement, index) => (
              <li key={index} className="flex items-center text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/80 mr-2"></span>
                {achievement}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;
