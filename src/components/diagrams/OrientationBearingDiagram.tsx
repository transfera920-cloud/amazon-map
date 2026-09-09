import React from 'react';

export const OrientationBearingDiagram: React.FC = () => {
  return (
    <figure className="my-8 rounded-xl border border-stone-200 bg-white p-4 sm:p-7 shadow-xs">
      <div className="w-full overflow-x-auto">
        <svg
          viewBox="0 0 780 400"
          className="w-full min-w-[560px] max-w-3xl mx-auto h-auto"
          role="img"
          aria-labelledby="svg04-title svg04-desc"
        >
          <title id="svg04-title">方向與定位三要素示意圖</title>
          <desc id="svg04-desc">
            圖解羅盤基準方位 N、E、S、W，以及導航定位的三個連動核心：目前位置、目標方向與前進路線。
          </desc>

          <defs>
            <marker id="bearing-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
              <polygon points="0 0, 8 4, 0 8" fill="#047857" />
            </marker>
            <marker id="course-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
              <polygon points="0 0, 8 4, 0 8" fill="#d97706" />
            </marker>
          </defs>

          {/* Background Canvas */}
          <rect width="780" height="400" fill="#fafaf9" rx="8" />

          {/* Left: Compass Bezel Dial */}
          <g transform="translate(190, 200)">
            {/* Outer ring */}
            <circle cx="0" cy="0" r="140" fill="#ffffff" stroke="#cbd5e1" strokeWidth="3" />
            <circle cx="0" cy="0" r="125" fill="#f8fafc" stroke="#94a3b8" strokeWidth="1.5" />
            <circle cx="0" cy="0" r="110" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />

            {/* Degree Ticks */}
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => {
              const rad = (deg - 90) * (Math.PI / 180);
              const x1 = Math.cos(rad) * 115;
              const y1 = Math.sin(rad) * 115;
              const x2 = Math.cos(rad) * 125;
              const y2 = Math.sin(rad) * 125;
              return (
                <line
                  key={deg}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="#64748b"
                  strokeWidth={deg % 90 === 0 ? '2.5' : '1.5'}
                />
              );
            })}

            {/* Cardinal Points */}
            <text x="0" y="-88" textAnchor="middle" fill="#dc2626" fontSize="18" fontWeight="800">
              N (0°)
            </text>
            <text x="96" y="6" textAnchor="middle" fill="#0f172a" fontSize="16" fontWeight="700">
              E (90°)
            </text>
            <text x="0" y="102" textAnchor="middle" fill="#0f172a" fontSize="16" fontWeight="700">
              S (180°)
            </text>
            <text x="-96" y="6" textAnchor="middle" fill="#0f172a" fontSize="16" fontWeight="700">
              W (270°)
            </text>

            {/* Compass Needle (Pointing North-East target bearing: 45°) */}
            <g transform="rotate(45)">
              {/* North half */}
              <polygon points="0,-100 10,0 0,-15" fill="#dc2626" />
              <polygon points="0,-100 -10,0 0,-15" fill="#ef4444" />
              {/* South half */}
              <polygon points="0,100 10,0 0,15" fill="#64748b" />
              <polygon points="0,100 -10,0 0,15" fill="#94a3b8" />
              <circle cx="0" cy="0" r="7" fill="#0f172a" stroke="#ffffff" strokeWidth="2" />
            </g>

            {/* Target bearing angle indicator arc */}
            <path
              d="M 0 -70 A 70 70 0 0 1 49.5 -49.5"
              fill="none"
              stroke="#047857"
              strokeWidth="2.5"
              strokeDasharray="3 2"
            />
            <text x="25" y="-76" fill="#047857" fontSize="12" fontWeight="700">
              方位角 045°
            </text>
          </g>

          {/* Right: The 3 Core Positioning Elements Architecture */}
          <g transform="translate(380, 50)">
            <rect x="0" y="0" width="370" height="300" rx="10" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
            
            <g transform="translate(20, 25)">
              <rect x="0" y="-8" width="135" height="24" rx="4" fill="#f0fdf4" />
              <text x="67" y="8" fill="#166534" fontSize="12" fontWeight="700" textAnchor="middle">
                定位連動三大要素
              </text>
            </g>

            {/* Element 1: 目前位置 */}
            <g transform="translate(30, 80)">
              <rect x="0" y="0" width="310" height="52" rx="6" fill="#f8fafc" stroke="#94a3b8" strokeWidth="1.5" />
              <circle cx="28" cy="26" r="12" fill="#0284c7" />
              <text x="28" y="30" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">1</text>
              <text x="52" y="24" fill="#0f172a" fontSize="14" fontWeight="700">目前位置 Current Position</text>
              <text x="52" y="42" fill="#64748b" fontSize="11">經由地形比對、標的物或坐標確認「我現在在哪」</text>
            </g>

            {/* Link Arrow 1 */}
            <line x1="185" y1="135" x2="185" y2="155" stroke="#047857" strokeWidth="2" markerEnd="url(#bearing-arrow)" />

            {/* Element 2: 目標方向 */}
            <g transform="translate(30, 160)">
              <rect x="0" y="0" width="310" height="52" rx="6" fill="#f0fdf4" stroke="#86efac" strokeWidth="1.5" />
              <circle cx="28" cy="26" r="12" fill="#047857" />
              <text x="28" y="30" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">2</text>
              <text x="52" y="24" fill="#065f46" fontSize="14" fontWeight="700">目標方向 Target Bearing</text>
              <text x="52" y="42" fill="#047857" fontSize="11">由地圖求得通往目的地、鞍部或山頭之基準角度</text>
            </g>

            {/* Link Arrow 2 */}
            <line x1="185" y1="215" x2="185" y2="235" stroke="#d97706" strokeWidth="2" markerEnd="url(#course-arrow)" />

            {/* Element 3: 前進路線 */}
            <g transform="translate(30, 240)">
              <rect x="0" y="0" width="310" height="52" rx="6" fill="#fffbeb" stroke="#fde68a" strokeWidth="1.5" />
              <circle cx="28" cy="26" r="12" fill="#d97706" />
              <text x="28" y="30" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">3</text>
              <text x="52" y="24" fill="#92400e" fontSize="14" fontWeight="700">前進路線 Course of Travel</text>
              <text x="52" y="42" fill="#b45309" fontSize="11">沿途避開峭壁/密林，隨地形起伏動態行進的實體軌跡</text>
            </g>
          </g>

          {/* Bottom Callout Banner */}
          <g transform="translate(390, 375)">
            <text x="0" y="0" fill="#475569" fontSize="12" fontWeight="600" textAnchor="middle">
              方位角是導航的共通語言 · 需同時掌握「目前位置 → 目標方向 → 前進路線」
            </text>
          </g>
        </svg>
      </div>
      <figcaption className="mt-4 pt-3 border-t border-stone-100 text-center text-xs sm:text-sm text-stone-600 font-medium">
        圖 04 · 方向與定位基礎：羅盤方位與「目前位置 → 目標方向 → 前進路線」三要素連動模型。
      </figcaption>
    </figure>
  );
};
