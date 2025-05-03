'use client';

import React from 'react';
import { Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'; // Use Card

const Achievements: React.FC = () => {
  const achievements = [
    { text: 'Maintained a 100-day streak in Data Structures and Algorithms practice on LeetCode.', year: 2024 },
    { text: 'Secured 85.35 percentile in JEE Mains-I amongst approximately 1 million candidates.', year: 2022 },
  ];

  return (
    <div className="glass-section section-transition space-y-12"> {/* Add spacing */}
      {/* Section Title */}
      <h2 className="animated-accent-bg text-3xl md:text-4xl font-heading font-bold text-center mb-8 flex items-center justify-center gap-3 text-primary">
        <Star className="w-8 h-8" /> Achievements
      </h2>

      {/* Achievements List within a Card */}
      <Card className="bg-card/50 border-border/30 shadow-md max-w-3xl mx-auto">
        <CardHeader>
           <CardTitle className="text-xl font-body font-semibold text-foreground/90">Key Accomplishments</CardTitle>
        </CardHeader>
        <CardContent>
           <ul className="space-y-4">
            {achievements.map((ach, index) => (
              <li key={index} className="flex items-start gap-3 border-l-2 border-primary pl-4 py-1">
                 <Star size={18} className="text-amber-400 mt-1 flex-shrink-0" />
                <div>
                    <p className="font-body text-foreground/90 text-sm">{ach.text}</p>
                    <p className="text-xs font-caption text-foreground/60 mt-1">({ach.year})</p>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default Achievements;
