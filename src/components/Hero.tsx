import React from 'react';
import { Target, ShieldCheck, Compass, ArrowRight, Layers } from 'lucide-react';
import { CHAPTER_META } from '../data/chapterData';

interface HeroProps {
  onStartReading: () => void;
  onOpenCurriculum: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartReading, onOpenCurriculum }) => {
  return (
    <section id="hero" aria-labelledby="chapter-h1" className="relative bg-stone-100/60 pt-6 pb-12 sm:pb-16 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="麵包屑導覽" className="mb-6">
          <ol className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-stone-500 font-medium">
            <li>
              <a
                href="#hero"
                className="hover:text-stone-900 transition-colors"
              >
                首頁
              </a>
            </li>
            <li aria-hidden="true" className="text-stone-300">/</li>
            <li>
              <button
                type="button"
                onClick={onOpenCurriculum}
                className="hover:text-stone-900 transition-colors inline-flex items-center gap-1"
              >
                <span>登山教育教材</span>
              </button>
            </li>
            <li aria-hidden="true" className="text-stone-300">/</li>
            <li className="text-emerald-900 font-semibold" aria-current="page">
              第三章 地圖與導航
            </li>
          </ol>
        </nav>

        {/* Top Chapter Metadata Pill */}
        <div className="flex items-center gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider text-emerald-950 bg-emerald-100 border border-emerald-300">
            <Compass className="w-3.5 h-3.5 text-emerald-800" aria-hidden="true" />
            {CHAPTER_META.number} · {CHAPTER_META.englishTitle}
          </span>
          <span className="text-xs text-stone-500 font-medium hidden sm:inline">
            亞馬遜國家山岳協會 官方教材系列
          </span>
        </div>

        {/* H1 & Lead Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            <h1
              id="chapter-h1"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-stone-900 leading-tight sm:leading-tight"
            >
              {CHAPTER_META.title}
            </h1>

            <p className="mt-4 text-lg sm:text-xl text-stone-600 leading-relaxed font-normal">
              {CHAPTER_META.subtitle}
            </p>

            {/* Core Philosophy Blockquote */}
            <div className="mt-6 p-4 sm:p-5 rounded-lg border-l-4 border-emerald-800 bg-white shadow-xs">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block mb-1">
                本章核心理念
              </span>
              <p className="text-base sm:text-lg font-medium text-stone-800 leading-relaxed">
                導航不是依賴工具，而是建立<strong className="text-emerald-900 font-bold underline decoration-emerald-500 decoration-2 underline-offset-4">位置判斷能力</strong>。
              </p>
            </div>

            {/* CTA Quick Buttons */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={onStartReading}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-900 text-emerald-50 text-sm font-semibold hover:bg-emerald-800 transition-colors shadow-xs"
              >
                <span>開始研讀本章</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
              <a
                href="#s3"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-stone-300 bg-white text-stone-700 text-sm font-medium hover:bg-stone-50 hover:text-stone-900 transition-colors"
              >
                <Layers className="w-4 h-4 text-emerald-800" aria-hidden="true" />
                <span>等高線立體化教學</span>
              </a>
            </div>
          </div>

          {/* Hero Image Card with fallback */}
          <div className="lg:col-span-5">
            <div className="relative rounded-xl overflow-hidden border border-stone-300 bg-stone-200 shadow-md">
              <img
                src="/assets/ch3-hero-DIiQP4lg.jpg"
                alt="登山者在山脊上研讀紙本地圖與導航工具"
                className="w-full h-64 sm:h-80 object-cover object-center"
                loading="eager"
                onError={(e) => {
                  // If ch3-hero-DIiQP4lg fails for any reason, use local generated image
                  const target = e.target as HTMLImageElement;
                  target.src = '/src/assets/images/ch3_hero_mountaineer_1788933358806.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/15 to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="inline-block px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-900/90 text-emerald-100 mb-1">
                  山野導航現場實務
                </span>
                <p className="text-xs text-stone-200 leading-snug line-clamp-2">
                  在山稜與開闊處比對紙本地圖、等高線與周遭山勢，落實行進間的動態位置確認。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Three Required Info Blocks */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {/* Card 1: 本章定位 */}
          <div className="rounded-lg border border-stone-200 bg-white p-5 shadow-xs">
            <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-wider text-stone-500">
              <Compass className="w-4 h-4 text-emerald-800" aria-hidden="true" />
              <span>本章定位</span>
            </div>
            <p className="text-base font-bold text-stone-900">
              {CHAPTER_META.positioning}
            </p>
            <p className="mt-1 text-xs sm:text-sm text-stone-600 leading-relaxed">
              循序漸進建立不依賴單一電子設備的實體判讀直覺。
            </p>
          </div>

          {/* Card 2: 學習目標 */}
          <div className="rounded-lg border border-stone-200 bg-white p-5 shadow-xs">
            <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-wider text-stone-500">
              <Target className="w-4 h-4 text-emerald-800" aria-hidden="true" />
              <span>學習目標</span>
            </div>
            <p className="text-base font-bold text-stone-900">
              {CHAPTER_META.learningGoal}
            </p>
            <p className="mt-1 text-xs sm:text-sm text-stone-600 leading-relaxed">
              掌握等高線語言、方向方位角與路線預判之循環節奏。
            </p>
          </div>

          {/* Card 3: 核心理念 */}
          <div className="rounded-lg border border-stone-200 bg-white p-5 shadow-xs">
            <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-wider text-stone-500">
              <ShieldCheck className="w-4 h-4 text-emerald-800" aria-hidden="true" />
              <span>核心理念</span>
            </div>
            <p className="text-base font-bold text-stone-900">
              {CHAPTER_META.corePhilosophy}
            </p>
            <p className="mt-1 text-xs sm:text-sm text-stone-600 leading-relaxed">
              所有工具皆為輔助，真正做出行進決策與風險權衡的是人。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
