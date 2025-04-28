
'use client';

import React from 'react';
import { GraduationCap } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <div className="h-full flex flex-col"> {/* Ensure full height */}
      {/* Section title using heading font (Outfit, 600-700) */}
      <h2 className="text-2xl font-heading font-semibold mb-4 flex items-center gap-2">
        <GraduationCap className="text-primary" /> Education
      </h2>
      {/* Added hover effect */}
      <div className="glass-card p-6 rounded-lg shadow-lg border border-border/30 flex-grow transition-all duration-300 hover:shadow-primary/20 hover:border-primary/30 hover:-translate-y-1">
          {/* Degree title using body font (Inter) with semibold weight (subheading style) */}
          <h3 className="text-xl font-body font-semibold text-primary mb-1">Bachelor of Technology, CSE (Cyber Security)</h3>
          {/* University using body font (Inter, 400-500) */}
          <p className="text-md font-body text-foreground/80 mb-2">Silver Oak College of Engineering & Technology, Ahmedabad, Gujarat</p>
          {/* Details using caption font (Manrope, 400) */}
          <p className="text-sm font-caption text-foreground/60">2022 – Present · CGPA: 8.91</p>
      </div>
    </div>
  );
};

export default Education;
