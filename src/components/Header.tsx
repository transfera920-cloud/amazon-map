import React, { useState, useEffect } from 'react';
import { Compass, BookOpen, Menu, X, ChevronDown, List } from 'lucide-react';
import { SECTIONS } from '../data/chapterData';

interface HeaderProps {
  onOpenCurriculum: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCurriculum }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTocOpen, setIsTocOpen] = useState(false);

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

  const handleNavClick = (id: string) => {
    setIsMenuOpen(false);
    setIsTocOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
              href="https://amazon-hike.com/intro"
              className="flex items-center gap-2.5 text-stone-900 hover:text-emerald-900 transition-colors focus:outline-hidden focus:ring-2 focus:ring-emerald-700 rounded-sm"
              aria-label="前往亞馬遜國家山岳協會介紹"
            >
              <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-emerald-900 text-emerald-100 shadow-xs">
                <Compass className="w-5 h-5 text-emerald-300" aria-hidden="true" />
              </span>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-bold tracking-tight text-stone-900 leading-none">
                  亞馬遜國家山岳協會
                </span>
                <span className="text-xs text-stone-500 font-medium tracking-wide mt-1">
                  登山教育教材 · Chapter 03
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-2" aria-label="章節導覽">
            {/* Table of contents popover toggle */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsTocOpen(!isTocOpen)}
                className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-stone-700 hover:text-emerald-900 hover:bg-stone-100 rounded-md transition-colors"
                aria-expanded={isTocOpen}
                aria-haspopup="true"
              >
                <List className="w-4 h-4 text-emerald-800" aria-hidden="true" />
                <span>本章節錄目錄</span>
                <ChevronDown className="w-3.5 h-3.5 text-stone-400" aria-hidden="true" />
              </button>

              {isTocOpen && (
                <div
                  className="absolute right-0 mt-2 w-72 max-h-[75vh] overflow-y-auto bg-white rounded-lg shadow-lg border border-stone-200 py-2 z-50 animate-in fade-in zoom-in-95 duration-100"
                  role="menu"
                >
                  <div className="px-3 py-1.5 text-xs font-bold text-stone-400 uppercase tracking-wider border-b border-stone-100">
                    第三章 目錄索引
                  </div>
                  {SECTIONS.map((sec) => (
                    <button
                      key={sec.id}
                      onClick={() => handleNavClick(sec.id)}
                      className="w-full text-left px-3 py-2 text-xs sm:text-sm text-stone-700 hover:bg-emerald-50 hover:text-emerald-900 flex items-baseline gap-2 transition-colors"
                      role="menuitem"
                    >
                      <span className="text-emerald-800 font-mono font-semibold text-xs">
                        {sec.number}
                      </span>
                      <span className="truncate">{sec.title}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Curriculum Drawer Toggle */}
            <button
              type="button"
              onClick={onOpenCurriculum}
              className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-stone-700 hover:text-emerald-900 hover:bg-stone-100 rounded-md transition-colors"
            >
              <BookOpen className="w-4 h-4 text-emerald-800" aria-hidden="true" />
              <span>全教材總覽</span>
            </button>

            {/* Current Chapter Badge */}
            <span className="ml-2 inline-flex items-center px-2.5 py-1 text-xs font-semibold rounded bg-emerald-100 text-emerald-900">
              第 03 章 閱讀中
            </span>
          </nav>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-1">
            <button
              type="button"
              onClick={onOpenCurriculum}
              className="p-2 text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-md"
              aria-label="查看全套教材章節"
            >
              <BookOpen className="w-5 h-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-md"
              aria-label={isMenuOpen ? '關閉選單' : '開啟目錄選單'}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-stone-200 bg-white px-4 pt-3 pb-6 max-h-[80vh] overflow-y-auto">
          <div className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-2">
            第三章 快速目錄跳轉
          </div>
          <div className="space-y-1">
            {SECTIONS.map((sec) => (
              <button
                key={sec.id}
                onClick={() => handleNavClick(sec.id)}
                className="w-full text-left px-3 py-2 rounded text-sm text-stone-800 hover:bg-emerald-50 hover:text-emerald-900 flex items-center gap-2.5 font-medium"
              >
                <span className="text-emerald-800 font-mono font-bold text-xs">
                  {sec.number}
                </span>
                <span>{sec.title}</span>
              </button>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-stone-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setIsMenuOpen(false);
                onOpenCurriculum();
              }}
              className="w-full py-2 px-3 text-center text-sm font-semibold rounded bg-emerald-900 text-emerald-50 hover:bg-emerald-800"
            >
              查看亞馬遜國家山岳協會完整章節
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
