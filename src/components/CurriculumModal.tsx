import React from 'react';
import { X, BookOpen, CheckCircle, Clock, Compass } from 'lucide-react';
import { CURRICULUM_CHAPTERS } from '../data/chapterData';

interface CurriculumModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CurriculumModal: React.FC<CurriculumModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="curriculum-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
    >
      <div className="relative w-full max-w-2xl rounded-2xl bg-slate-900 shadow-2xl border border-slate-800 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-slate-800 bg-slate-950/60">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-emerald-950 border border-emerald-800 text-emerald-300">
              <Compass className="w-5 h-5 text-emerald-400" aria-hidden="true" />
            </div>
            <div>
              <h2 id="curriculum-title" className="text-lg sm:text-xl font-bold text-slate-100 leading-tight">
                亞馬遜國家山岳協會 · 登山教育教材總綱
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                完整系統化登山者培育課綱章節列表
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors"
            aria-label="關閉教材總覽"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-5 sm:p-6 space-y-3 max-h-[70vh] overflow-y-auto">
          {CURRICULUM_CHAPTERS.map((ch) => (
            <div
              key={ch.id}
              className={`p-4 rounded-xl border transition-all ${
                ch.isCurrent
                  ? 'border-emerald-600 bg-emerald-950/40 ring-1 ring-emerald-500/50'
                  : 'border-slate-800 bg-slate-900/60 hover:border-slate-700'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${
                        ch.isCurrent
                          ? 'bg-emerald-900 text-emerald-200'
                          : 'bg-slate-800 text-slate-300'
                      }`}
                    >
                      {ch.number}
                    </span>
                    <h3 className="text-base font-bold text-slate-100">
                      {ch.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mt-1">
                    {ch.desc}
                  </p>
                </div>

                <div className="shrink-0 pt-0.5">
                  {ch.isCurrent ? (
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-300 bg-emerald-950 border border-emerald-800 px-2.5 py-1 rounded-full">
                      <CheckCircle className="w-3.5 h-3.5" /> 正在閱讀
                    </span>
                  ) : ch.status === 'published' ? (
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-300 bg-slate-800 border border-slate-700 px-2.5 py-1 rounded-full">
                      已發布
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-amber-300 bg-amber-950/80 border border-amber-800/80 px-2.5 py-1 rounded-full">
                      <Clock className="w-3 h-3 text-amber-400" /> 編撰預留中
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-950/60 border-t border-slate-800 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-sm font-semibold rounded-lg bg-slate-800 text-slate-200 border border-slate-700 hover:bg-slate-700 hover:text-white transition-colors"
          >
            關閉視窗
          </button>
        </div>
      </div>
    </div>
  );
};
