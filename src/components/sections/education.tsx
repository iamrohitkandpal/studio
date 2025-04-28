'use client';

import React from 'react';
import { GraduationCap } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'; // Use Card components for structure if desired, or just divs

const Education: React.FC = () => {
  return (
    <div>
      {/* Section title using heading font */}
      <h2 className="text-2xl font-heading font-semibold mb-6 flex items-center gap-2">
        <GraduationCap className="text-primary" /> Education
      </h2>
      <div className="glass-card p-6 rounded-lg shadow-lg border border-border/30">
          {/* Degree title using body font (could be heading too, depends on visual hierarchy preference) */}
          <h3 className="text-xl font-body font-medium text-primary">Bachelor of Technology, CSE (Cyber Security)</h3>
          {/* University using body font */}
          <p className="text-md font-body text-foreground/80 mb-1">Silver Oak College of Engineering & Technology, Ahmedabad, Gujarat</p>
          {/* Details using caption font */}
          <p className="text-sm font-caption text-foreground/60">2022 – Present · CGPA: 8.91</p>
      </div>
    </div>
  );
};

export default Education;
