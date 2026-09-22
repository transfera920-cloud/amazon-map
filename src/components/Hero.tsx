import React from 'react';
import { Target, ShieldCheck, Compass, ArrowRight, Layers } from 'lucide-react';
import { CHAPTER_META } from '../data/chapterData';
import heroImg from '../assets/images/ch3_hero_mountaineer_1788933358806.jpg';

interface HeroProps {
  onStartReading: () => void;
  onOpenCurriculum?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartReading }) => {
  return (
    <section id="hero" aria-labelledby="chapter-h1" className="relative bg-[#0c1015] pt-8 sm:pt-12 pb-12 sm:pb-16 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* H1 & Lead Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            <h1
              id="chapter-h1"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-100 leading-tight sm:leading-tight"
            >
              {CHAPTER_META.title}
            </h1>

            <p className="mt-4 text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
              {CHAPTER_META.subtitle}
            </p>

            {/* Core Philosophy Blockquote */}
            <div className="mt-6 p-4 sm:p-5 rounded-lg border-l-4 border-emerald-500 bg-slate-900/90 border border-slate-800 shadow-xs">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                本章核心理念
              </span>
              <p className="text-base sm:text-lg font-medium text-slate-200 leading-relaxed">
                導航不是依賴工具，而是建立<strong className="text-emerald-300 font-bold underline decoration-emerald-500 decoration-2 underline-offset-4">位置判斷能力</strong>。
              </p>
            </div>

            {/* CTA Quick Buttons */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={onStartReading}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-500 transition-colors shadow-xs"
              >
                <span>開始研讀本章</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
              <a
                href="#s3"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-slate-700 bg-slate-800/80 text-slate-200 text-sm font-medium hover:bg-slate-700 hover:text-white transition-colors"
              >
                <Layers className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                <span>等高線立體化教學</span>
              </a>
            </div>
          </div>

          {/* Hero Image Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-900 shadow-md">
              <img
                src={heroImg}
                alt="登山者在山脊上研讀紙本地圖與導航工具"
                className="w-full h-64 sm:h-80 object-cover object-center"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="inline-block px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-950/90 border border-emerald-800/80 text-emerald-200 mb-1">
                  山野導航現場實務
                </span>
                <p className="text-xs text-slate-300 leading-snug line-clamp-2">
                  在山稜與開闊處比對紙本地圖、等高線與周遭山勢，落實行進間的動態位置確認。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Three Required Info Blocks */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {/* Card 1: 本章定位 */}
          <div className="rounded-lg border border-slate-800 bg-slate-900/80 p-5 shadow-xs">
            <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-wider text-slate-400">
              <Compass className="w-4 h-4 text-emerald-400" aria-hidden="true" />
              <span>本章定位</span>
            </div>
            <p className="text-base font-bold text-slate-100">
              {CHAPTER_META.positioning}
            </p>
            <p className="mt-1 text-xs sm:text-sm text-slate-400 leading-relaxed">
              循序漸進建立不依賴單一電子設備的實體判讀直覺。
            </p>
          </div>

          {/* Card 2: 學習目標 */}
          <div className="rounded-lg border border-slate-800 bg-slate-900/80 p-5 shadow-xs">
            <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-wider text-slate-400">
              <Target className="w-4 h-4 text-emerald-400" aria-hidden="true" />
              <span>學習目標</span>
            </div>
            <p className="text-base font-bold text-slate-100">
              {CHAPTER_META.learningGoal}
            </p>
            <p className="mt-1 text-xs sm:text-sm text-slate-400 leading-relaxed">
              掌握等高線語言、方向方位角與路線預判之循環節奏。
            </p>
          </div>

          {/* Card 3: 核心理念 */}
          <div className="rounded-lg border border-slate-800 bg-slate-900/80 p-5 shadow-xs">
            <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-wider text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" aria-hidden="true" />
              <span>核心理念</span>
            </div>
            <p className="text-base font-bold text-slate-100">
              {CHAPTER_META.corePhilosophy}
            </p>
            <p className="mt-1 text-xs sm:text-sm text-slate-400 leading-relaxed">
              所有工具皆為輔助，真正做出行進決策與風險權衡的是人。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
