'use client';

import React from 'react';
import { Star } from 'lucide-react';

const Achievements: React.FC = () => {
  const achievements = [
    { text: 'Maintained a 100-day streak in Data Structures and Algorithms practice on LeetCode.', year: 2024 },
    { text: 'Secured 85.35 percentile in JEE Mains-I amongst approximately 1 million candidates.', year: 2022 },
  ];

  return (
    <div className="h-full flex flex-col"> {/* Ensure full height for flex */}
      {/* Section title using heading font (Satoshi/Outfit, 600-700) */}
      <h2 className="text-2xl font-heading font-semibold mb-4 flex items-center gap-2">
        <Star className="text-primary" /> Achievements
      </h2>
      <ul className="space-y-3 flex-grow"> {/* Allow list to grow */}
        {achievements.map((ach, index) => (
          <li key={index} className="flex items-start gap-3 glass-card p-4 rounded-lg border border-border/30 transition-shadow hover:shadow-primary/20 hover:shadow-md"> {/* Add hover effect */}
             <Star size={18} className="text-amber-400 mt-1 flex-shrink-0" />
            <div>
                {/* Achievement text using body font (Inter/General Sans, 400-500) */}
                <p className="font-body text-foreground/90 text-sm">{ach.text}</p>
                {/* Year using caption font (Manrope, 400) */}
                <p className="text-xs font-caption text-foreground/60 mt-1">({ach.year})</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Achievements;
