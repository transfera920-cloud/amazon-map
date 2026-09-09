import React from 'react';
import { Compass } from 'lucide-react';

interface KeyPointProps {
  title?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const KeyPoint: React.FC<KeyPointProps> = ({
  title = '導航核心原則',
  children,
  icon,
}) => {
  return (
    <aside
      aria-label={title}
      className="my-6 rounded-lg border border-emerald-800/30 bg-emerald-50/70 p-5 sm:p-6 text-emerald-950"
    >
      <div className="flex items-center gap-2.5 mb-2 font-semibold text-emerald-900 text-base">
        {icon || <Compass className="w-5 h-5 text-emerald-700 shrink-0" aria-hidden="true" />}
        <span>{title}</span>
      </div>
      <div className="text-sm sm:text-base leading-relaxed text-emerald-950 font-normal">
        {children}
      </div>
    </aside>
  );
};
