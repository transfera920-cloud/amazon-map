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
      className="my-6 rounded-lg border border-emerald-700/80 bg-emerald-950/40 p-5 sm:p-6 text-slate-200"
    >
      <div className="flex items-center gap-2.5 mb-2 font-semibold text-emerald-300 text-base">
        {icon || <Compass className="w-5 h-5 text-emerald-400 shrink-0" aria-hidden="true" />}
        <span>{title}</span>
      </div>
      <div className="text-sm sm:text-base leading-relaxed text-slate-200 font-normal">
        {children}
      </div>
    </aside>
  );
};
