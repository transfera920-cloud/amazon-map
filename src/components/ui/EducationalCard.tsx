import React from 'react';

interface EducationalCardProps {
  title: string;
  badge?: string;
  children: React.ReactNode;
  footerText?: string;
}

export const EducationalCard: React.FC<EducationalCardProps> = ({
  title,
  badge,
  children,
  footerText,
}) => {
  return (
    <div className="flex flex-col rounded-lg border border-slate-800 bg-slate-900/90 p-5 sm:p-6 shadow-xs hover:border-slate-700 transition-colors">
      <div className="flex items-start justify-between gap-2 mb-3">
        <h3 className="text-base sm:text-lg font-bold text-slate-100 leading-tight">
          {title}
        </h3>
        {badge && (
          <span className="shrink-0 px-2 py-0.5 text-xs font-semibold rounded bg-emerald-950/80 border border-emerald-800/60 text-emerald-300">
            {badge}
          </span>
        )}
      </div>
      <div className="text-sm sm:text-base text-slate-300 leading-relaxed space-y-2 grow">
        {children}
      </div>
      {footerText && (
        <div className="mt-4 pt-3 border-t border-slate-800 text-xs font-medium text-slate-400">
          {footerText}
        </div>
      )}
    </div>
  );
};
