'use client';

import React from 'react';
import { Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'; // Use Card

const Extracurricular: React.FC = () => {
  const activities = [
    {
      role: 'Manager & Designer',
      organization: 'Radiance Club (College Cultural Club)',
      year: 2023,
      description: 'Led event organization, designed promotional materials, managed club meetings.',
    },
    {
      role: 'Member',
      organization: 'IEEE Club',
      year: 2021,
      description: 'Actively participated in technical events and workshops, gaining knowledge in emerging tech.',
    },
  ];

  return (
     <div className="glass-section section-transition space-y-12"> {/* Add spacing */}
       {/* Section Title */}
        <h2 className="animated-accent-bg text-3xl md:text-4xl font-heading font-bold text-center mb-8 flex items-center justify-center gap-3 text-primary">
          <Users className="w-8 h-8" /> Extracurricular Activities
        </h2>

       {/* Activities Grid */}
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
         {activities.map((activity, index) => (
          <Card key={index} className="bg-card/50 border-border/30 shadow-sm hover:shadow-md hover:border-primary/30 transition-all">
            <CardHeader className="pb-2">
               <CardTitle className="text-lg font-body font-semibold text-primary">{activity.role}</CardTitle>
               <CardDescription className="text-sm font-body font-medium text-foreground/80 pt-1">
                  {activity.organization} <span className="font-caption text-foreground/60">({activity.year})</span>
               </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm font-body text-foreground/70">{activity.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Extracurricular;
