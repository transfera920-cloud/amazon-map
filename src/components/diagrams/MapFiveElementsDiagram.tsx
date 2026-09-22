import React from 'react';

export const MapFiveElementsDiagram: React.FC = () => {
  return (
    <figure className="my-8 rounded-xl border border-slate-800 bg-slate-900/90 p-4 sm:p-7 shadow-xs">
      <div className="w-full overflow-x-auto">
        <svg
          viewBox="0 0 800 460"
          className="w-full min-w-[600px] max-w-4xl mx-auto h-auto"
          role="img"
          aria-labelledby="svg02-title svg02-desc"
        >
          <title id="svg02-title">登山地圖五大基本元素示意圖</title>
          <desc id="svg02-desc">
            展示地圖上的五個基本核心元素：圖例、比例尺、等高線、座標系統與方位指標，說明一張登山地圖承載的多維度空間資訊。
          </desc>

          <defs>
            <marker id="arrow-pointer" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <polygon points="0 0, 6 3, 0 6" fill="#10b981" />
            </marker>
          </defs>

          {/* Background Map Frame */}
          <rect width="800" height="460" fill="#090d13" rx="8" />

          {/* Simulated Map Sheet (Center Canvas) */}
          <rect
            x="140"
            y="40"
            width="520"
            height="340"
            fill="#0f172a"
            stroke="#334155"
            strokeWidth="2"
            strokeDasharray="none"
            rx="4"
          />

          {/* Coordinate Grid lines inside map */}
          <g stroke="#1e293b" strokeWidth="1">
            <line x1="220" y1="40" x2="220" y2="380" />
            <line x1="320" y1="40" x2="320" y2="380" />
            <line x1="420" y1="40" x2="420" y2="380" />
            <line x1="520" y1="40" x2="520" y2="380" />
            <line x1="620" y1="40" x2="620" y2="380" />
            <line x1="140" y1="100" x2="660" y2="100" />
            <line x1="140" y1="180" x2="660" y2="180" />
            <line x1="140" y1="260" x2="660" y2="260" />
            <line x1="140" y1="340" x2="660" y2="340" />
          </g>

          {/* Simulated Contours (Teaching concept curves) */}
          <g fill="none" stroke="#f59e0b" strokeWidth="1.2" opacity="0.85">
            {/* Hill 1 */}
            <path d="M 240 280 C 260 220, 360 210, 390 270 C 410 310, 310 340, 260 330 Z" />
            <path d="M 270 270 C 285 235, 345 230, 365 270 C 375 295, 310 320, 280 310 Z" />
            <path d="M 295 265 C 305 245, 335 242, 345 265 C 350 280, 320 295, 305 290 Z" />
            {/* Hill 2 */}
            <path d="M 450 160 C 470 110, 570 100, 600 160 C 620 200, 520 230, 470 220 Z" />
            <path d="M 480 155 C 495 125, 555 120, 575 155 C 585 180, 530 205, 495 195 Z" strokeWidth="1.6" />
            <path d="M 505 150 C 515 135, 545 132, 555 150 C 560 165, 540 180, 520 175 Z" />
            {/* Saddle connecting */}
            <path d="M 370 250 C 410 230, 440 210, 470 200" strokeDasharray="3 3" />
          </g>

          {/* Simulated Ridge / Trail path */}
          <path
            d="M 200 340 Q 290 280 340 260 T 450 210 T 540 145 T 620 110"
            fill="none"
            stroke="#f87171"
            strokeWidth="2"
            strokeDasharray="4 3"
          />

          {/* Center Title Badge */}
          <g transform="translate(400, 195)">
            <rect x="-115" y="-18" width="230" height="36" rx="6" fill="#022c22" stroke="#059669" strokeWidth="1" />
            <text x="0" y="5" textAnchor="middle" fill="#ecfdf5" fontSize="13" fontWeight="700" letterSpacing="1">
              一張地圖 = 多種資訊
            </text>
          </g>

          {/* ELEMENT 1: 方位／北方 (North Arrow) - Top Left Callout */}
          <g transform="translate(180, 75)">
            {/* Compass Rose */}
            <circle cx="0" cy="0" r="22" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
            <polygon points="0 -18, 5 0, 0 -3" fill="#10b981" />
            <polygon points="0 18, 5 0, 0 3" fill="#64748b" />
            <polygon points="0 -18, -5 0, 0 -3" fill="#34d399" />
            <polygon points="0 18, -5 0, 0 3" fill="#475569" />
            <text x="0" y="-23" textAnchor="middle" fill="#10b981" fontSize="12" fontWeight="800">N</text>
          </g>
          {/* Label 1 Callout */}
          <g transform="translate(50, 75)">
            <rect x="-40" y="-16" width="80" height="32" rx="4" fill="#022c22" stroke="#059669" strokeWidth="1.5" />
            <text x="0" y="4" textAnchor="middle" fill="#34d399" fontSize="12" fontWeight="700">① 方位指標</text>
            <path d="M 40 0 L 145 0" stroke="#10b981" strokeWidth="1.5" markerEnd="url(#arrow-pointer)" />
            <text x="-40" y="28" fill="#94a3b8" fontSize="10">真北/磁北/方格北</text>
          </g>

          {/* ELEMENT 2: 座標系統 (Coordinates) - Top Right & Borders */}
          <g transform="translate(710, 65)">
            <rect x="-40" y="-16" width="80" height="32" rx="4" fill="#022c22" stroke="#059669" strokeWidth="1.5" />
            <text x="0" y="4" textAnchor="middle" fill="#34d399" fontSize="12" fontWeight="700">② 座標系統</text>
            <path d="M -40 0 L -80 0 L -80 30" fill="none" stroke="#10b981" strokeWidth="1.5" markerEnd="url(#arrow-pointer)" />
            <text x="-40" y="28" fill="#94a3b8" fontSize="10">TWD97 / 經緯度</text>
          </g>
          {/* Coordinate tick values along edges */}
          <text x="140" y="32" fill="#94a3b8" fontSize="9" textAnchor="middle">121°15'E</text>
          <text x="320" y="32" fill="#94a3b8" fontSize="9" textAnchor="middle">121°18'E</text>
          <text x="520" y="32" fill="#94a3b8" fontSize="9" textAnchor="middle">121°21'E</text>
          <text x="125" y="103" fill="#94a3b8" fontSize="9" textAnchor="end">24°10'N</text>
          <text x="125" y="263" fill="#94a3b8" fontSize="9" textAnchor="end">24°05'N</text>

          {/* ELEMENT 3: 等高線 (Contours) - Bottom Right Callout */}
          <g transform="translate(710, 240)">
            <rect x="-40" y="-16" width="80" height="32" rx="4" fill="#022c22" stroke="#059669" strokeWidth="1.5" />
            <text x="0" y="4" textAnchor="middle" fill="#34d399" fontSize="12" fontWeight="700">③ 等高線</text>
            <path d="M -40 0 L -125 0 L -140 -35" fill="none" stroke="#10b981" strokeWidth="1.5" markerEnd="url(#arrow-pointer)" />
            <text x="-40" y="28" fill="#94a3b8" fontSize="10">高程間距·坡度疏密</text>
          </g>

          {/* ELEMENT 4: 圖例 (Legend) - Bottom Left inside map */}
          <g transform="translate(160, 280)">
            <rect x="0" y="0" width="105" height="85" fill="#090d13" stroke="#334155" strokeWidth="1" rx="4" />
            <text x="10" y="18" fill="#f1f5f9" fontSize="10" fontWeight="700">【圖例 Legend】</text>
            <line x1="10" y1="32" x2="35" y2="32" stroke="#f87171" strokeWidth="2" strokeDasharray="3 2" />
            <text x="42" y="35" fill="#cbd5e1" fontSize="9">登山步道</text>
            <line x1="10" y1="48" x2="35" y2="48" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="42" y="51" fill="#cbd5e1" fontSize="9">計曲線 (首曲線)</text>
            <circle cx="20" cy="65" r="4" fill="#38bdf8" />
            <text x="42" y="68" fill="#cbd5e1" fontSize="9">活水源 / 溪流</text>
          </g>
          {/* Label 4 Callout */}
          <g transform="translate(50, 310)">
            <rect x="-40" y="-16" width="80" height="32" rx="4" fill="#022c22" stroke="#059669" strokeWidth="1.5" />
            <text x="0" y="4" textAnchor="middle" fill="#34d399" fontSize="12" fontWeight="700">④ 地圖圖例</text>
            <path d="M 40 0 L 150 0" stroke="#10b981" strokeWidth="1.5" markerEnd="url(#arrow-pointer)" />
            <text x="-40" y="28" fill="#94a3b8" fontSize="10">符號·線條·顏色意義</text>
          </g>

          {/* ELEMENT 5: 比例尺 (Scale) - Bottom Center Callout */}
          <g transform="translate(400, 345)">
            {/* Graphic Scale Bar */}
            <rect x="-90" y="-14" width="180" height="24" fill="#090d13" stroke="#334155" strokeWidth="1" rx="4" />
            <rect x="-70" y="-6" width="35" height="6" fill="#10b981" />
            <rect x="-35" y="-6" width="35" height="6" fill="#334155" />
            <rect x="0" y="-6" width="35" height="6" fill="#10b981" />
            <rect x="35" y="-6" width="35" height="6" fill="#334155" />
            <text x="-70" y="7" fill="#94a3b8" fontSize="8" textAnchor="middle">0</text>
            <text x="0" y="7" fill="#94a3b8" fontSize="8" textAnchor="middle">500m</text>
            <text x="70" y="7" fill="#94a3b8" fontSize="8" textAnchor="middle">1km</text>
          </g>
          {/* Label 5 Callout */}
          <g transform="translate(400, 415)">
            <rect x="-55" y="-14" width="110" height="28" rx="4" fill="#022c22" stroke="#059669" strokeWidth="1.5" />
            <text x="0" y="4" textAnchor="middle" fill="#34d399" fontSize="12" fontWeight="700">⑤ 比例尺 Scale</text>
            <path d="M 0 -14 L 0 -45" stroke="#10b981" strokeWidth="1.5" markerEnd="url(#arrow-pointer)" />
            <text x="0" y="24" textAnchor="middle" fill="#94a3b8" fontSize="10">1:25,000 細緻 ↔ 1:100,000 概覽</text>
          </g>
        </svg>
      </div>
      <figcaption className="mt-4 pt-3 border-t border-slate-800 text-center text-xs sm:text-sm text-slate-400 font-medium">
        圖 02 · 登山地圖五大基本元素：方位、座標、等高線、圖例與比例尺。
      </figcaption>
    </figure>
  );
};
