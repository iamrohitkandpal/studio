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
      <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
        <Users className="text-primary" /> Extracurricular Activities
      </h2>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="glass-card p-4 rounded-lg border border-border/30">
            <h3 className="text-lg font-medium text-primary">{activity.role}</h3>
            <p className="text-md font-semibold text-foreground/80 mb-1">{activity.organization} ({activity.year})</p>
            <p className="text-sm text-foreground/70">{activity.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Extracurricular;
