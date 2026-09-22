import React from 'react';

export const NavigationCycleDiagram: React.FC = () => {
  return (
    <figure className="my-8 rounded-xl border border-slate-800 bg-slate-900/90 p-4 sm:p-7 shadow-xs">
      <div className="w-full overflow-x-auto">
        <svg
          viewBox="0 0 800 440"
          className="w-full min-w-[620px] max-w-4xl mx-auto h-auto"
          role="img"
          aria-labelledby="svg06-title svg06-desc"
        >
          <title id="svg06-title">登山導航實際循環流程圖</title>
          <desc id="svg06-desc">
            圖解從出發前的「研究地圖、建立預期、開始行進」，銜接至行進中的閉環循環：「確認位置、比對地形、確認方向、繼續或修正」，中央核心為「持續定位」。
          </desc>

          <defs>
            <marker id="loop-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
              <polygon points="0 0, 8 4, 0 8" fill="#10b981" />
            </marker>
            <marker id="entry-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
              <polygon points="0 0, 8 4, 0 8" fill="#94a3b8" />
            </marker>
          </defs>

          {/* Canvas Background */}
          <rect width="800" height="440" fill="#090d13" rx="8" />

          {/* Left Block: 出發前 Pre-trip linear preparation */}
          <g transform="translate(30, 40)">
            <rect x="0" y="0" width="220" height="340" rx="8" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
            
            <g transform="translate(15, 20)">
              <rect x="0" y="-8" width="90" height="22" rx="3" fill="#1e293b" />
              <text x="45" y="7" fill="#f1f5f9" fontSize="11" fontWeight="700" textAnchor="middle">
                出發前階段
              </text>
            </g>

            {/* Step 1 */}
            <g transform="translate(20, 60)">
              <rect x="0" y="0" width="180" height="48" rx="6" fill="#090d13" stroke="#334155" strokeWidth="1.2" />
              <text x="12" y="22" fill="#f1f5f9" fontSize="13" fontWeight="700">1. 研究地圖</text>
              <text x="12" y="38" fill="#94a3b8" fontSize="10">熟悉整段路線走向與地標</text>
            </g>

            {/* Entry Arrow 1 */}
            <line x1="110" y1="110" x2="110" y2="135" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#entry-arrow)" />

            {/* Step 2 */}
            <g transform="translate(20, 140)">
              <rect x="0" y="0" width="180" height="48" rx="6" fill="#090d13" stroke="#334155" strokeWidth="1.2" />
              <text x="12" y="22" fill="#f1f5f9" fontSize="13" fontWeight="700">2. 建立預期</text>
              <text x="12" y="38" fill="#94a3b8" fontSize="10">高度變化·叉路·時程設定</text>
            </g>

            {/* Entry Arrow 2 */}
            <line x1="110" y1="190" x2="110" y2="215" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#entry-arrow)" />

            {/* Step 3 */}
            <g transform="translate(20, 220)">
              <rect x="0" y="0" width="180" height="48" rx="6" fill="#090d13" stroke="#334155" strokeWidth="1.2" />
              <text x="12" y="22" fill="#f1f5f9" fontSize="13" fontWeight="700">3. 開始行進</text>
              <text x="12" y="38" fill="#94a3b8" fontSize="10">攜帶雙重備援導航工具</text>
            </g>

            {/* Transition to Loop */}
            <path
              d="M 110 270 L 110 305 L 265 305"
              fill="none"
              stroke="#10b981"
              strokeWidth="2.5"
              markerEnd="url(#loop-arrow)"
            />
            <text x="180" y="325" fill="#34d399" fontSize="11" fontWeight="700">切入行進循環</text>
          </g>

          {/* Right Block: 行進中 Continuous In-route Navigation Loop */}
          <g transform="translate(275, 40)">
            <rect x="0" y="0" width="490" height="340" rx="8" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />

            <g transform="translate(20, 20)">
              <rect x="0" y="-8" width="105" height="22" rx="3" fill="#022c22" />
              <text x="52" y="7" fill="#34d399" fontSize="11" fontWeight="700" textAnchor="middle">
                行進中動態循環
              </text>
            </g>

            {/* Center Core Hub: 持續定位 */}
            <g transform="translate(245, 175)">
              <circle cx="0" cy="0" r="48" fill="#059669" stroke="#10b981" strokeWidth="2" />
              <text x="0" y="-5" fill="#ffffff" fontSize="15" fontWeight="800" textAnchor="middle">
                持續定位
              </text>
              <text x="0" y="14" fill="#a7f3d0" fontSize="10" textAnchor="middle">
                位置認知中心
              </text>
            </g>

            {/* Node A: 確認位置 (Top) */}
            <g transform="translate(245, 60)">
              <rect x="-85" y="-22" width="170" height="44" rx="6" fill="#022c22" stroke="#059669" strokeWidth="1.5" />
              <text x="0" y="0" fill="#34d399" fontSize="13" fontWeight="700" textAnchor="middle">
                ① 確認位置
              </text>
              <text x="0" y="15" fill="#a7f3d0" fontSize="9" textAnchor="middle">
                比對目前座標或地形特徵
              </text>
            </g>

            {/* Node B: 比對地形 (Right) */}
            <g transform="translate(400, 175)">
              <rect x="-65" y="-22" width="130" height="44" rx="6" fill="#022c22" stroke="#059669" strokeWidth="1.5" />
              <text x="0" y="0" fill="#34d399" fontSize="13" fontWeight="700" textAnchor="middle">
                ② 比對地形
              </text>
              <text x="0" y="15" fill="#a7f3d0" fontSize="9" textAnchor="middle">
                眼前山勢與地圖等高線
              </text>
            </g>

            {/* Node C: 確認方向 (Bottom) */}
            <g transform="translate(245, 290)">
              <rect x="-85" y="-22" width="170" height="44" rx="6" fill="#022c22" stroke="#059669" strokeWidth="1.5" />
              <text x="0" y="0" fill="#34d399" fontSize="13" fontWeight="700" textAnchor="middle">
                ③ 確認方向
              </text>
              <text x="0" y="15" fill="#a7f3d0" fontSize="9" textAnchor="middle">
                羅盤方位角或山徑走向
              </text>
            </g>

            {/* Node D: 繼續／修正 (Left) */}
            <g transform="translate(90, 175)">
              <rect x="-65" y="-22" width="130" height="44" rx="6" fill="#022c22" stroke="#059669" strokeWidth="1.5" />
              <text x="0" y="0" fill="#34d399" fontSize="13" fontWeight="700" textAnchor="middle">
                ④ 繼續／及早修正
              </text>
              <text x="0" y="15" fill="#a7f3d0" fontSize="9" textAnchor="middle">
                維持軌跡或及早停下
              </text>
            </g>

            {/* Curved Cycle Connecting Arrows */}
            {/* A -> B */}
            <path
              d="M 330 60 Q 400 60 400 145"
              fill="none"
              stroke="#10b981"
              strokeWidth="2"
              markerEnd="url(#loop-arrow)"
            />
            {/* B -> C */}
            <path
              d="M 400 205 Q 400 290 335 290"
              fill="none"
              stroke="#10b981"
              strokeWidth="2"
              markerEnd="url(#loop-arrow)"
            />
            {/* C -> D */}
            <path
              d="M 155 290 Q 90 290 90 205"
              fill="none"
              stroke="#10b981"
              strokeWidth="2"
              markerEnd="url(#loop-arrow)"
            />
            {/* D -> A */}
            <path
              d="M 90 145 Q 90 60 155 60"
              fill="none"
              stroke="#10b981"
              strokeWidth="2"
              markerEnd="url(#loop-arrow)"
            />
          </g>

          {/* Bottom Footnote */}
          <g transform="translate(400, 415)">
            <text x="0" y="0" fill="#94a3b8" fontSize="12" fontWeight="600" textAnchor="middle">
              核心教學觀念：「導航不是迷路後才開始，而是從出發前持續到行程結束。」
            </text>
          </g>
        </svg>
      </div>
      <figcaption className="mt-4 pt-3 border-t border-slate-800 text-center text-xs sm:text-sm text-slate-400 font-medium">
        圖 06 · 導航循環流程：從行前研究到行進中「確認位置 ⟲ 比對地形 ⟲ 確認方向 ⟲ 繼續/修正」的閉環系統。
      </figcaption>
    </figure>
  );
};
