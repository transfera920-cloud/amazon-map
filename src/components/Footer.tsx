import React from 'react';
import { Compass, ShieldAlert, BookOpen } from 'lucide-react';
import { CURRICULUM_CHAPTERS } from '../data/chapterData';

interface FooterProps {
  onOpenCurriculum: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCurriculum }) => {
  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800 pt-12 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-10 border-b border-stone-800">
          {/* Col 1: Brand & Mission */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5 text-white">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-800 text-emerald-100">
                <Compass className="w-4 h-4 text-emerald-300" aria-hidden="true" />
              </span>
              <a
                href="https://amazon-hike.com/intro"
                className="text-lg font-bold tracking-tight text-white hover:text-emerald-300 transition-colors"
              >
                亞馬遜國家山岳協會
              </a>
            </div>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed max-w-md">
              致力於推廣客觀、嚴謹、不依賴單一工具的專業登山安全教育。透過系統性實務教材，協助山岳活動者建立扎實的現地觀察、風險預判與空間定位能力。
            </p>
            <div className="pt-2 text-xs text-stone-400">
              教材版本：登山通識系列 · 第三章 地圖與導航
            </div>
          </div>

          {/* Col 2: Curriculum Outline Fast Links */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-300 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
              <span>教材章節索引</span>
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              {CURRICULUM_CHAPTERS.map((ch) => (
                <li key={ch.id}>
                  <button
                    type="button"
                    onClick={onOpenCurriculum}
                    className={`text-left transition-colors flex items-baseline gap-2 ${
                      ch.isCurrent
                        ? 'text-emerald-400 font-bold'
                        : 'text-stone-400 hover:text-white'
                    }`}
                  >
                    <span className="font-mono text-xs">{ch.number}</span>
                    <span>{ch.title}</span>
                    {ch.isCurrent && (
                      <span className="text-[10px] bg-emerald-950 text-emerald-300 px-1.5 py-0.5 rounded border border-emerald-800">
                        目前頁面
                      </span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Safety Disclaimer & Core Policy */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-300 flex items-center gap-1.5">
              <ShieldAlert className="w-3.5 h-3.5 text-amber-400" aria-hidden="true" />
              <span>教育免責與安全宣告</span>
            </h3>
            <p className="text-xs text-stone-400 leading-relaxed">
              山區環境瞬息萬變，天候、地貌侵蝕、體能極限皆為客觀風險。本教材旨在傳授通識定位原理，絕不能被視為特定山徑之現場絕對保證。任何活動皆須自主做好行程規劃、裝備備援與隊伍安全評估。
            </p>
          </div>
        </div>

        {/* Bottom Copyright & Design System Alignment */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>© {new Date().getFullYear()} <a href="https://amazon-hike.com/intro" className="hover:text-stone-300 underline underline-offset-2 transition-colors">亞馬遜國家山岳協會</a>. 保留所有教育教材權利.</p>
          <div className="flex items-center gap-4">
            <span>專業登山教育系列</span>
            <span aria-hidden="true">·</span>
            <span>開放公益安全教材</span>
            <span aria-hidden="true">·</span>
            <span>無第三方商業置入</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
