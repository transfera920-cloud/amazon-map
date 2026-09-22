import React from 'react';

interface SectionHeadingProps {
  number: string;
  title: string;
  subtitle?: string;
  id?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  number,
  title,
  subtitle,
}) => {
  return (
    <div className="mb-8 border-b border-slate-800 pb-5">
      <div className="flex items-center gap-3 mb-2">
        <span className="inline-flex items-center justify-center px-2.5 py-1 text-xs font-semibold tracking-wider text-emerald-300 bg-emerald-950/80 border border-emerald-800/80 rounded">
          SECTION {number}
        </span>
        <span className="text-xs font-medium tracking-wider text-slate-400 uppercase">
          亞馬遜國家山岳協會 · 登山教育教材
        </span>
      </div>
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-100 leading-snug">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-base text-slate-400 leading-relaxed max-w-3xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};
