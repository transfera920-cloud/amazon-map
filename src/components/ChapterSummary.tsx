import React from 'react';
import { CheckCircle2, BookmarkCheck } from 'lucide-react';

export const ChapterSummary: React.FC = () => {
  const points = [
    {
      num: '01',
      title: '地圖是登山者的重要能力，不是可有可無的裝備。',
      detail:
        '紙本地圖不受電池、低溫或潮濕當機影響，能提供超越手機螢幕尺度的宏觀地形與集水脈絡，是山岳行動的空間基石。',
    },
    {
      num: '02',
      title: '導航不是只看 GPS，而是持續判斷位置與方向。',
      detail:
        '不要將導航簡化為「跟著螢幕上的紅線走」；隨時在腦海中比對實體地貌，回答「我現在在哪」與「下一步該往哪走」。',
    },
    {
      num: '03',
      title: '理解地形，才能更有效判斷自己的位置與前進方向。',
      detail:
        '熟記山峰、稜線、鞍部、山谷與坡度疏密的等高線語言，將二維圖紙轉化為腦中立體山體心像，提高環境覺察。',
    },
    {
      num: '04',
      title: '工具可能故障，因此不能讓單一工具成為唯一依賴。',
      detail:
        '落實「電子導航 ＋ 傳統導航」的雙軌備援原則，任何單一設備皆有其限制，備援的目的在於分散單點故障風險。',
    },
    {
      num: '05',
      title: '出發前建立導航能力，比迷路後才開始學習更重要。',
      detail:
        '出發前在地圖上先行「預走」一次，標記叉路、高程落差與水源；行進中建立定時確認的節奏，及早發現異常立即停止處置。',
    },
  ];

  return (
    <section id="summary" aria-labelledby="summary-heading" className="my-16 scroll-mt-24">
      <div className="rounded-2xl border-2 border-emerald-900/40 bg-gradient-to-br from-emerald-950 to-stone-900 text-white p-6 sm:p-10 shadow-lg">
        <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
          <BookmarkCheck className="w-5 h-5" aria-hidden="true" />
          <span>Chapter 03 Takeaways · 亞馬遜國家山岳協會</span>
        </div>

        <h2 id="summary-heading" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-6">
          本章重點整理
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {points.map((p) => (
            <div
              key={p.num}
              className="flex items-start gap-3.5 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-800/80 text-emerald-200 font-mono font-bold text-sm">
                {p.num}
              </span>
              <div>
                <h3 className="text-base font-bold text-white leading-snug">
                  {p.title}
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-stone-300 leading-relaxed">
                  {p.detail}
                </p>
              </div>
            </div>
          ))}

          {/* Core Mantra Highlight Card */}
          <div className="flex flex-col justify-center p-5 rounded-xl bg-emerald-900/60 border border-emerald-500/40">
            <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider mb-1">
              本章最高準則
            </span>
            <p className="text-lg sm:text-xl font-extrabold text-white leading-snug">
              「工具提供資訊，人負責判斷。」
            </p>
            <p className="mt-2 text-xs text-emerald-200/90 leading-relaxed">
              任何先進儀器與離線 APP 皆不能取代登山者的自主風險思維與即時環境感知。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
