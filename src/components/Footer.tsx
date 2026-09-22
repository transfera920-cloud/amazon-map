import React from 'react';
import { Compass } from 'lucide-react';

interface FooterProps {
  onOpenCurriculum?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-[#080c10] text-slate-400 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center space-y-4">
        {/* Centered Brand */}
        <div className="flex items-center justify-center gap-2.5 text-slate-100">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-950 border border-emerald-800/80 text-emerald-300">
            <Compass className="w-4 h-4 text-emerald-300" aria-hidden="true" />
          </span>
          <a
            href="https://amazon-hike.com/"
            className="text-lg font-bold tracking-tight text-slate-100 hover:text-emerald-400 transition-colors"
          >
            亞馬遜國家山岳協會
          </a>
        </div>
      </div>
    </footer>
  );
};

