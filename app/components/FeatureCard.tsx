'use client';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="bg-[#0A0F1C] rounded-xl p-6 transition-all duration-200 hover:bg-[#1A1F2E] border border-gray-800">
        <div className="flex items-start gap-4">
          <div className="p-2 bg-[#1A1F2E] rounded-xl group-hover:bg-[#2A2F3E]">
            <span className="text-2xl">{icon}</span>
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <p className="text-sm text-gray-400">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}