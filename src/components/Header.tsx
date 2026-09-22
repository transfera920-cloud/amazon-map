import React, { useState, useEffect } from 'react';
import { Compass } from 'lucide-react';

interface HeaderProps {
  onOpenCurriculum?: () => void;
}

export const Header: React.FC<HeaderProps> = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-stone-200 transition-shadow duration-200">
      {/* Scroll Progress Bar */}
      <div
        className="h-1 bg-emerald-700 transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="頁面閱讀進度"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Association Brand & Chapter Identity */}
          <div className="flex items-center gap-3">
            <a
              href="https://amazon-hike.com/"
              className="flex items-center gap-2.5 text-stone-900 hover:text-emerald-900 transition-colors focus:outline-hidden focus:ring-2 focus:ring-emerald-700 rounded-sm"
              aria-label="前往亞馬遜國家山岳協會首頁"
            >
              <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-emerald-900 text-emerald-100 shadow-xs">
                <Compass className="w-5 h-5 text-emerald-300" aria-hidden="true" />
              </span>
              <span className="text-base sm:text-lg font-bold tracking-tight text-stone-900 leading-none">
                亞馬遜國家山岳協會
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

