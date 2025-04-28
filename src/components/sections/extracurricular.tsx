
'use client';

import React from 'react';
import { Users } from 'lucide-react';

const Extracurricular: React.FC = () => {
  const activities = [
    {
      role: 'Manager & Designer',
      organization: 'Radiance Club (College Cultural Club)',
      year: 2023,
      description: 'Led the organization of cultural events, designed promotional flyers and posters, and managed club meetings effectively.',
    },
    {
      role: 'Member',
      organization: 'IEEE Club',
      year: 2021,
      description: 'Actively participated in technical events and workshops, gaining valuable knowledge in emerging technologies and networking with peers.',
    },
  ];

  return (
    <div className="h-full flex flex-col"> {/* Ensure full height */}
      {/* Section title using heading font (Outfit, 600-700) */}
      <h2 className="text-2xl font-heading font-semibold mb-4 flex items-center gap-2">
        <Users className="text-primary" /> Extracurricular Activities
      </h2>
      <div className="space-y-4 flex-grow"> {/* Allow content to grow */}
        {activities.map((activity, index) => (
           // Added hover effect
          <div key={index} className="glass-card p-4 rounded-lg border border-border/30 transition-all duration-300 hover:shadow-primary/20 hover:border-primary/30 hover:-translate-y-1">
            {/* Role using body font (Inter) with semibold weight (subheading style) */}
            <h3 className="text-lg font-body font-semibold text-primary">{activity.role}</h3>
            {/* Organization using body font, slightly bolder (Inter, 500) */}
            <p className="text-md font-body font-medium text-foreground/80 mb-1">
                {activity.organization}
                 {/* Year using caption font (Manrope, 400) */}
                <span className="font-caption text-foreground/60 ml-1">({activity.year})</span>
            </p>
            {/* Description using body font (Inter, 400) */}
            <p className="text-sm font-body text-foreground/70">{activity.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Extracurricular;

