"use client";

import { ReactNode } from "react";
import {
  MemeCard,
  MemeCardHeader,
  MemeCardEmoji,
  MemeCardContent,
} from "./ui/MemeCard";

interface FeatureCardProps {
  icon: string | ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <MemeCard>
      <MemeCardHeader>
        {typeof icon === "string" ? (
          <MemeCardEmoji>{icon}</MemeCardEmoji>
        ) : (
          <>{icon}</>
        )}
        <div className="space-y-1">
          <h3 className="text-lg font-bold text-black dark:text-white">
            {title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 min-h-[60px]">
            {description}
          </p>
        </div>
      </MemeCardHeader>
    </MemeCard>
  );
}
