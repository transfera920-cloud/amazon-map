import React from 'react';

export const NavCoreDiagram: React.FC = () => {
  return (
    <figure className="my-8 rounded-xl border border-stone-200 bg-white p-4 sm:p-7 shadow-xs">
      <div className="w-full overflow-x-auto">
        <svg
          viewBox="0 0 760 380"
          className="w-full min-w-[540px] max-w-3xl mx-auto h-auto"
          role="img"
          aria-labelledby="svg01-title svg01-desc"
        >
          <title id="svg01-title">導航能力核心模型圖</title>
          <desc id="svg01-desc">
            圖解登山導航的核心本質：從「我現在在哪」到「下一步該往哪走」，結合地圖、地形、方向、位置、路線與判斷，而非單純盲目跟隨一條線。
          </desc>

          {/* Background grid subtle lines */}
          <defs>
            <pattern id="grid-pattern-01" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#f1f5f9" strokeWidth="1" />
            </pattern>
            <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#1b4332" />
            </marker>
            <marker id="arrow-down" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#047857" />
            </marker>
          </defs>
          <rect width="760" height="380" fill="#fafaf9" rx="8" />
          <rect width="760" height="380" fill="url(#grid-pattern-01)" rx="8" />

          {/* Satellite Context Nodes */}
          {/* Top Left: 地圖 */}
          <g transform="translate(90, 70)">
            <rect x="-60" y="-22" width="120" height="44" rx="6" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
            <text x="0" y="5" textAnchor="middle" fill="#334155" fontSize="14" fontWeight="600">地圖 Map</text>
            <path d="M 60 5 L 140 30" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3 3" />
          </g>

          {/* Top Right: 地形 */}
          <g transform="translate(670, 70)">
            <rect x="-60" y="-22" width="120" height="44" rx="6" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
            <text x="0" y="5" textAnchor="middle" fill="#334155" fontSize="14" fontWeight="600">地形 Terrain</text>
            <path d="M -60 5 L -140 30" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3 3" />
          </g>

          {/* Mid Left: 方向 */}
          <g transform="translate(70, 190)">
            <rect x="-55" y="-22" width="110" height="44" rx="6" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
            <text x="0" y="5" textAnchor="middle" fill="#334155" fontSize="14" fontWeight="600">方向 Direction</text>
            <path d="M 55 0 L 145 0" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3 3" />
          </g>

          {/* Mid Right: 路線 */}
          <g transform="translate(690, 190)">
            <rect x="-55" y="-22" width="110" height="44" rx="6" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
            <text x="0" y="5" textAnchor="middle" fill="#334155" fontSize="14" fontWeight="600">路線 Route</text>
            <path d="M -55 0 L -145 0" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3 3" />
          </g>

          {/* Bottom Left: 位置 */}
          <g transform="translate(100, 310)">
            <rect x="-60" y="-22" width="120" height="44" rx="6" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
            <text x="0" y="5" textAnchor="middle" fill="#334155" fontSize="14" fontWeight="600">位置 Position</text>
            <path d="M 60 -5 L 140 -30" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3 3" />
          </g>

          {/* Bottom Right: 判斷 */}
          <g transform="translate(660, 310)">
            <rect x="-60" y="-22" width="120" height="44" rx="6" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
            <text x="0" y="5" textAnchor="middle" fill="#334155" fontSize="14" fontWeight="600">判斷 Judgment</text>
            <path d="M -60 -5 L -140 -30" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3 3" />
          </g>

          {/* Center Navigation Capability Structure */}
          <rect x="210" y="35" width="340" height="310" rx="12" fill="#ffffff" stroke="#1b4332" strokeWidth="2" />
          
          {/* Badge at top of Center Box */}
          <rect x="310" y="23" width="140" height="26" rx="13" fill="#1b4332" />
          <text x="380" y="40" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="700" letterSpacing="0.5">導航能力核心</text>

          {/* Core Question 1 */}
          <g transform="translate(380, 100)">
            <rect x="-135" y="-30" width="270" height="60" rx="8" fill="#f0fdf4" stroke="#86efac" strokeWidth="1.5" />
            <text x="0" y="-6" textAnchor="middle" fill="#14532d" fontSize="12" fontWeight="600" letterSpacing="0.5">核心提問 01</text>
            <text x="0" y="18" textAnchor="middle" fill="#052e16" fontSize="20" fontWeight="700">我現在在哪？</text>
          </g>

          {/* Transition Arrow */}
          <line x1="380" y1="135" x2="380" y2="185" stroke="#047857" strokeWidth="2.5" markerEnd="url(#arrow-down)" />
          <text x="400" y="165" fill="#047857" fontSize="11" fontWeight="700">確認位置後</text>

          {/* Core Question 2 */}
          <g transform="translate(380, 235)">
            <rect x="-135" y="-30" width="270" height="60" rx="8" fill="#ecfdf5" stroke="#6ee7b7" strokeWidth="1.5" />
            <text x="0" y="-6" textAnchor="middle" fill="#047857" fontSize="12" fontWeight="600" letterSpacing="0.5">核心提問 02</text>
            <text x="0" y="18" textAnchor="middle" fill="#064e3b" fontSize="20" fontWeight="700">下一步該往哪走？</text>
          </g>

          {/* Footnote inside container */}
          <text x="380" y="320" textAnchor="middle" fill="#64748b" fontSize="12" fontWeight="500">
            持續循環的動態認知 · 非單次靜態確認
          </text>
        </svg>
      </div>
      <figcaption className="mt-4 pt-3 border-t border-stone-100 text-center text-xs sm:text-sm text-stone-600 font-medium">
        圖 01 · 導航能力核心：導航不是跟著一條線走，而是持續確認自己的位置與下一步方向。
      </figcaption>
    </figure>
  );
};
