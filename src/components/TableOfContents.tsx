import React from 'react';
import { SECTIONS } from '../data/chapterData';
import { ListFilter } from 'lucide-react';

interface TableOfContentsProps {
  activeId: string;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ activeId }) => {
  return (
    <nav
      aria-label="章節綱要目錄"
      className="rounded-xl border border-slate-800 bg-slate-900/80 p-6 shadow-xs my-8"
    >
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-800">
        <ListFilter className="w-5 h-5 text-emerald-400" aria-hidden="true" />
        <h2 className="text-lg font-bold text-slate-100">本章目錄索引</h2>
        <span className="text-xs text-slate-400 ml-auto">全章 9 個核心主題 ＋ 總結</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
        {SECTIONS.map((sec) => {
          const isActive = activeId === sec.id;
          return (
            <a
              key={sec.id}
              href={`#${sec.id}`}
              className={`flex items-baseline gap-2.5 p-2.5 rounded-lg text-sm transition-all ${
                isActive
                  ? 'bg-emerald-950/80 border border-emerald-700/80 text-emerald-200 font-semibold shadow-xs'
                  : 'text-slate-300 hover:bg-slate-800/80 hover:text-emerald-300 font-medium'
              }`}
            >
              <span
                className={`font-mono text-xs font-bold shrink-0 ${
                  isActive ? 'text-emerald-400' : 'text-emerald-500'
                }`}
              >
                {sec.number}
              </span>
              <span className="truncate">{sec.title}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
};
