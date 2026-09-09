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
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
    >
      <div className="relative w-full max-w-2xl rounded-2xl bg-white shadow-2xl border border-stone-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-stone-200 bg-stone-50">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-emerald-900 text-emerald-100">
              <Compass className="w-5 h-5 text-emerald-300" aria-hidden="true" />
            </div>
            <div>
              <h2 id="curriculum-title" className="text-lg sm:text-xl font-bold text-stone-900 leading-tight">
                亞馬遜國家山岳協會 · 登山教育教材總綱
              </h2>
              <p className="text-xs text-stone-500 mt-0.5">
                完整系統化登山者培育課綱章節列表
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-200 transition-colors"
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
                  ? 'border-emerald-600 bg-emerald-50/70 ring-1 ring-emerald-600'
                  : 'border-stone-200 bg-white hover:border-stone-300'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${
                        ch.isCurrent
                          ? 'bg-emerald-900 text-emerald-100'
                          : 'bg-stone-100 text-stone-700'
                      }`}
                    >
                      {ch.number}
                    </span>
                    <h3 className="text-base font-bold text-stone-900">
                      {ch.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mt-1">
                    {ch.desc}
                  </p>
                </div>

                <div className="shrink-0 pt-0.5">
                  {ch.isCurrent ? (
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-full">
                      <CheckCircle className="w-3.5 h-3.5" /> 正在閱讀
                    </span>
                  ) : ch.status === 'published' ? (
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-stone-600 bg-stone-100 px-2.5 py-1 rounded-full">
                      已發布
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-amber-800 bg-amber-50 px-2.5 py-1 rounded-full">
                      <Clock className="w-3 h-3 text-amber-600" /> 編撰預留中
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-stone-50 border-t border-stone-200 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-sm font-semibold rounded-lg bg-stone-800 text-white hover:bg-stone-700 transition-colors"
          >
            關閉視窗
          </button>
        </div>
      </div>
    </div>
  );
};
