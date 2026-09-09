import React from 'react';
import { ArrowLeft, ArrowRight, ExternalLink, Bookmark } from 'lucide-react';

interface ChapterNavigationProps {
  onOpenCurriculum: () => void;
}

export const ChapterNavigation: React.FC<ChapterNavigationProps> = ({ onOpenCurriculum }) => {
  return (
    <nav aria-label="前後章節跳轉" className="my-12 border-t border-stone-200 pt-8">
      {/* Primary Prev/Next Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Previous Chapter: Chapter 02 */}
        <div className="flex flex-col p-4 sm:p-5 rounded-xl border border-stone-200 bg-white hover:border-stone-300 transition-colors shadow-xs">
          <span className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-1 flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" /> 上一章 · Chapter 02
          </span>
          <span className="text-base font-bold text-stone-900">
            基礎登山裝備系統與行前打包
          </span>
          <p className="mt-1 text-xs text-stone-500 leading-relaxed">
            三層式穿著原理、防水透氣系統與背包重心配置。
          </p>
          <button
            type="button"
            onClick={onOpenCurriculum}
            className="mt-3 text-xs font-semibold text-emerald-800 hover:text-emerald-950 inline-flex items-center gap-1 self-start"
          >
            <span>由教材總覽閱讀第二章</span>
            <ExternalLink className="w-3 h-3" />
          </button>
        </div>

        {/* Next Chapter: Chapter 04 */}
        <div className="flex flex-col p-4 sm:p-5 rounded-xl border border-stone-200 bg-white hover:border-stone-300 transition-colors shadow-xs sm:text-right">
          <span className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-1 flex items-center gap-1 sm:justify-end">
            下一章 · Chapter 04 <ArrowRight className="w-3.5 h-3.5" />
          </span>
          <span className="text-base font-bold text-stone-900">
            步態節奏、呼吸與體能分配
          </span>
          <p className="mt-1 text-xs text-stone-500 leading-relaxed">
            上下坡步伐重心、登山杖支撐節律與耗能調控。
          </p>
          <button
            type="button"
            onClick={onOpenCurriculum}
            className="mt-3 text-xs font-semibold text-emerald-800 hover:text-emerald-950 inline-flex items-center gap-1 self-start sm:self-end"
          >
            <span>由教材總覽查看課綱預告</span>
            <ExternalLink className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Cross Reference to Advanced Modules (Section 19: Ch 12 & Ch 13) */}
      <div className="mt-6 p-4 sm:p-5 rounded-xl bg-stone-100/80 border border-stone-200">
        <div className="flex items-center gap-2 mb-2 text-stone-800 font-bold text-sm">
          <Bookmark className="w-4 h-4 text-emerald-800" />
          <span>導航主題進階章節預留銜接</span>
        </div>
        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
          本第三章專注於「紙本地圖與等高線基礎定位判讀」。深入的數位工具、手機 APP 實測與軌跡檔案解析，已規劃於後續專題章節：
        </p>
        <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="p-3 rounded-lg bg-white border border-stone-200">
            <span className="text-[11px] font-bold text-emerald-800 tracking-wide uppercase block">
              第 12 章 · 預留章節
            </span>
            <span className="text-sm font-bold text-stone-900 block mt-0.5">
              導航與地圖進階
            </span>
            <span className="text-xs text-stone-500 block mt-1">
              涵蓋：離線地圖實作、APP 操作細節、省電設定與數位輔助實務。
            </span>
          </div>
          <div className="p-3 rounded-lg bg-white border border-stone-200">
            <span className="text-[11px] font-bold text-emerald-800 tracking-wide uppercase block">
              第 13 章 · 預留章節
            </span>
            <span className="text-sm font-bold text-stone-900 block mt-0.5">
              GPX 軌跡分析與實務教學
            </span>
            <span className="text-xs text-stone-500 block mt-1">
              涵蓋：GPX 格式結構、軌跡標記點（Waypoints）、匯出匯入與現場判讀校正。
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};
