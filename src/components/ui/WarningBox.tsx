import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface WarningBoxProps {
  title?: string;
  children: React.ReactNode;
  severity?: 'warning' | 'danger';
}

export const WarningBox: React.FC<WarningBoxProps> = ({
  title = '導航安全注意',
  children,
  severity = 'warning',
}) => {
  const isDanger = severity === 'danger';

  return (
    <div
      role="alert"
      className={`my-6 rounded-lg border p-5 sm:p-6 ${
        isDanger
          ? 'border-red-900/70 bg-red-950/40 text-red-200'
          : 'border-amber-900/70 bg-amber-950/40 text-amber-200'
      }`}
    >
      <div className="flex items-center gap-2.5 mb-2 font-bold text-sm sm:text-base">
        <AlertTriangle
          className={`w-5 h-5 shrink-0 ${isDanger ? 'text-red-400' : 'text-amber-400'}`}
          aria-hidden="true"
        />
        <span className={isDanger ? 'text-red-200 font-bold' : 'text-amber-200 font-bold'}>
          {title}
        </span>
      </div>
      <div
        className={`text-sm sm:text-base leading-relaxed ${
          isDanger ? 'text-red-100/90' : 'text-amber-100/90'
        }`}
      >
        {children}
      </div>
    </div>
  );
};
