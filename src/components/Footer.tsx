import React from 'react';
import { Compass } from 'lucide-react';

interface FooterProps {
  onOpenCurriculum?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center space-y-4">
        {/* Centered Brand */}
        <div className="flex items-center justify-center gap-2.5 text-white">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-800 text-emerald-100">
            <Compass className="w-4 h-4 text-emerald-300" aria-hidden="true" />
          </span>
          <a
            href="https://amazon-hike.com/chapter01/"
            className="text-lg font-bold tracking-tight text-white hover:text-emerald-300 transition-colors"
          >
            亞馬遜國家山岳協會
          </a>
        </div>
      </div>
    </footer>
  );
};

