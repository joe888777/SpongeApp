'use client';

import { MemeCard, MemeCardHeader, MemeCardEmoji, MemeCardContent } from './ui/MemeCard';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <MemeCard>
      <MemeCardHeader>
        <MemeCardEmoji>{icon}</MemeCardEmoji>
        <div className="space-y-1">
          <h3 className="text-lg font-bold text-black dark:text-white">{title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
        </div>
      </MemeCardHeader>
    </MemeCard>
  );
}