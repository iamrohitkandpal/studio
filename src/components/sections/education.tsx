'use client';

import React from 'react';
import { GraduationCap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Education: React.FC = () => {
  return (
    <div className="glass-section section-transition space-y-8"> {/* Add spacing */}
      {/* Section Title */}
      <h2 className="animated-accent-bg text-3xl md:text-4xl font-heading font-bold text-center mb-8 flex items-center justify-center gap-3 text-primary">
        <GraduationCap className="w-8 h-8" /> Education
      </h2>

      {/* Education Details */}
      <Card className="glass-card shadow-md w-full max-w-2xl mx-auto"> {/* Use glass-card class */}
        <CardHeader className="pb-2">
           <CardTitle className="text-xl md:text-2xl font-body font-semibold text-primary mb-1">
              Bachelor of Technology, CSE (Cyber Security)
            </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-md font-body text-foreground/80 mb-2">
            Silver Oak College of Engineering & Technology, Ahmedabad, Gujarat
          </p>
          <p className="text-sm font-caption text-foreground/60">
            2022 – Present · CGPA: 8.91
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Education;
