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
    <div>
      {/* Section title using heading font */}
      <h2 className="text-2xl font-heading font-semibold mb-6 flex items-center gap-2">
        <Users className="text-primary" /> Extracurricular Activities
      </h2>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="glass-card p-4 rounded-lg border border-border/30">
            {/* Role using body font (could be heading if needed) */}
            <h3 className="text-lg font-body font-medium text-primary">{activity.role}</h3>
            {/* Organization and year using body/caption fonts */}
            <p className="text-md font-body font-semibold text-foreground/80 mb-1">{activity.organization} <span className="font-caption text-foreground/60">({activity.year})</span></p>
            {/* Description using body font */}
            <p className="text-sm font-body text-foreground/70">{activity.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Extracurricular;
