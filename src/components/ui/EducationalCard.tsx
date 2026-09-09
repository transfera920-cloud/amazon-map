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
    <div className="flex flex-col rounded-lg border border-stone-200 bg-white p-5 sm:p-6 shadow-xs hover:border-stone-300 transition-colors">
      <div className="flex items-start justify-between gap-2 mb-3">
        <h3 className="text-base sm:text-lg font-bold text-stone-900 leading-tight">
          {title}
        </h3>
        {badge && (
          <span className="shrink-0 px-2 py-0.5 text-xs font-semibold rounded bg-stone-100 text-stone-700">
            {badge}
          </span>
        )}
      </div>
      <div className="text-sm sm:text-base text-stone-600 leading-relaxed space-y-2 grow">
        {children}
      </div>
      {footerText && (
        <div className="mt-4 pt-3 border-t border-stone-100 text-xs font-medium text-stone-500">
          {footerText}
        </div>
      )}
    </div>
  );
};
