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
          ? 'border-red-300 bg-red-50/80 text-red-950'
          : 'border-amber-300 bg-amber-50/80 text-amber-950'
      }`}
    >
      <div className="flex items-center gap-2.5 mb-2 font-bold text-sm sm:text-base">
        <AlertTriangle
          className={`w-5 h-5 shrink-0 ${isDanger ? 'text-red-700' : 'text-amber-700'}`}
          aria-hidden="true"
        />
        <span className={isDanger ? 'text-red-900' : 'text-amber-900'}>
          {title}
        </span>
      </div>
      <div
        className={`text-sm sm:text-base leading-relaxed ${
          isDanger ? 'text-red-900' : 'text-amber-950'
        }`}
      >
        {children}
      </div>
    </div>
  );
};
