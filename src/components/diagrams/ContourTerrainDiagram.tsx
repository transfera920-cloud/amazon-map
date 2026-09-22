import React from 'react';

export const ContourTerrainDiagram: React.FC = () => {
  return (
    <figure className="my-8 rounded-xl border border-slate-800 bg-slate-900/90 p-4 sm:p-7 shadow-xs">
      <div className="w-full overflow-x-auto">
        <svg
          viewBox="0 0 880 500"
          className="w-full min-w-[700px] max-w-4xl mx-auto h-auto"
          role="img"
          aria-labelledby="svg03-title svg03-desc"
        >
          <title id="svg03-title">等高線與立體地形對照教學圖</title>
          <desc id="svg03-desc">
            左側為平面等高線圖，右側為對應之三維立體地形透視圖，清楚標示山峰、山谷、稜線、鞍部以及線密坡陡、線疏坡緩的空間對應關係。
          </desc>

          <defs>
            {/* Gradients for 3D terrain shading */}
            <linearGradient id="ridge-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#047857" stopOpacity="0.9" />
            </linearGradient>
            <marker id="corr-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <polygon points="0 0, 6 3, 0 6" fill="#38bdf8" />
            </marker>
          </defs>

          {/* Canvas Background */}
          <rect width="880" height="500" fill="#090d13" rx="8" />

          {/* Panel Dividers */}
          <rect x="20" y="20" width="400" height="430" rx="8" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
          <rect x="460" y="20" width="400" height="430" rx="8" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />

          {/* Panel Headers */}
          <g transform="translate(40, 50)">
            <rect x="0" y="-14" width="140" height="26" rx="4" fill="#1e293b" />
            <text x="70" y="4" textAnchor="middle" fill="#f1f5f9" fontSize="13" fontWeight="700">
              【左】平面等高線圖
            </text>
          </g>

          <g transform="translate(480, 50)">
            <rect x="0" y="-14" width="140" height="26" rx="4" fill="#1e293b" />
            <text x="70" y="4" textAnchor="middle" fill="#f1f5f9" fontSize="13" fontWeight="700">
              【右】對應立體地形模型
            </text>
          </g>

          {/* ================= LEFT PANEL: 2D CONTOURS ================= */}
          <g transform="translate(220, 240)">
            {/* Contour lines base: 1000m */}
            <path
              d="M -150 120 C -120 40, -90 0, -40 -20 C 10 -40, 60 -10, 110 30 C 150 70, 140 130, 80 150 C 0 170, -80 160, -150 120 Z"
              fill="none"
              stroke="#d97706"
              strokeWidth="1.2"
            />
            {/* 1100m */}
            <path
              d="M -130 90 C -105 30, -75 -5, -35 -15 C 5 -25, 45 0, 85 30 C 120 60, 110 110, 60 125 C -10 140, -70 130, -130 90 Z"
              fill="none"
              stroke="#f59e0b"
              strokeWidth="1.2"
            />
            {/* 1200m - Hourglass dividing into two peaks */}
            <path
              d="M -110 60 C -90 15, -60 5, -25 0 C -10 -2, 5 -2, 20 5 C 45 15, 75 35, 80 75 C 80 95, 45 105, 10 100 C -20 95, -45 80, -70 85 C -95 90, -110 80, -110 60 Z"
              fill="none"
              stroke="#fbbf24"
              strokeWidth="1.8"
            />
            <text x="-80" y="55" fill="#fde68a" fontSize="9" fontWeight="bold">1200m</text>

            {/* Peak A contours (West Peak: 1300m, 1400m) */}
            <path
              d="M -100 40 C -85 10, -50 5, -40 25 C -35 45, -65 60, -85 55 C -98 52, -103 48, -100 40 Z"
              fill="none"
              stroke="#f59e0b"
              strokeWidth="1.2"
            />
            <path
              d="M -85 30 C -75 18, -55 15, -50 28 C -45 40, -65 48, -75 45 Z"
              fill="#78350f"
              fillOpacity="0.4"
              stroke="#fde047"
              strokeWidth="1.5"
            />
            <circle cx="-65" cy="30" r="2.5" fill="#fde047" />
            <text x="-65" y="22" fill="#fef08a" fontSize="10" fontWeight="bold" textAnchor="middle">▲ 主峰 1420m</text>

            {/* Peak B contours (East Peak: 1300m) */}
            <path
              d="M 25 35 C 35 15, 65 20, 70 45 C 72 60, 50 70, 35 60 C 25 52, 20 45, 25 35 Z"
              fill="#78350f"
              fillOpacity="0.4"
              stroke="#fde047"
              strokeWidth="1.5"
            />
            <circle cx="48" cy="42" r="2.5" fill="#fde047" />
            <text x="50" y="32" fill="#fef08a" fontSize="10" fontWeight="bold" textAnchor="middle">▲ 副峰 1310m</text>

            {/* Ridge line highlight (West to East over saddle) */}
            <path
              d="M -65 30 Q -10 38 48 42"
              fill="none"
              stroke="#10b981"
              strokeWidth="2.5"
              strokeDasharray="4 2"
            />

            {/* Valley V-contours (cutting South to North) */}
            <path
              d="M -20 160 Q -15 110 -10 70 Q -5 110 5 160"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="2"
              strokeDasharray="3 2"
            />
            {/* Stream arrow pointing downhill */}
            <line x1="-10" y1="90" x2="-10" y2="135" stroke="#38bdf8" strokeWidth="1.5" markerEnd="url(#corr-arrow)" />
            <text x="5" y="115" fill="#38bdf8" fontSize="9" fontWeight="bold">溪流集水線</text>

            {/* Feature Callouts in 2D */}
            {/* 1. 山峰 */}
            <g transform="translate(-140, -40)">
              <rect x="-35" y="-12" width="70" height="24" rx="4" fill="#450a0a" stroke="#dc2626" strokeWidth="1" />
              <text x="0" y="4" fill="#fca5a5" fontSize="11" fontWeight="700" textAnchor="middle">① 山峰 Peak</text>
              <line x1="20" y1="12" x2="65" y2="60" stroke="#ef4444" strokeWidth="1" strokeDasharray="2 2" />
            </g>

            {/* 2. 鞍部 */}
            <g transform="translate(-8, -40)">
              <rect x="-35" y="-12" width="70" height="24" rx="4" fill="#422006" stroke="#d97706" strokeWidth="1" />
              <text x="0" y="4" fill="#fde047" fontSize="11" fontWeight="700" textAnchor="middle">② 鞍部 Col</text>
              <line x1="0" y1="12" x2="-10" y2="72" stroke="#ca8a04" strokeWidth="1" strokeDasharray="2 2" />
            </g>

            {/* 3. 稜線 */}
            <g transform="translate(100, -20)">
              <rect x="-35" y="-12" width="70" height="24" rx="4" fill="#022c22" stroke="#16a34a" strokeWidth="1" />
              <text x="0" y="4" fill="#86efac" fontSize="11" fontWeight="700" textAnchor="middle">③ 稜線 Ridge</text>
              <line x1="-15" y1="12" x2="-60" y2="55" stroke="#16a34a" strokeWidth="1" strokeDasharray="2 2" />
            </g>

            {/* 4. 山谷 */}
            <g transform="translate(-110, 180)">
              <rect x="-35" y="-12" width="70" height="24" rx="4" fill="#082f49" stroke="#0284c7" strokeWidth="1" />
              <text x="0" y="4" fill="#7dd3fc" fontSize="11" fontWeight="700" textAnchor="middle">④ 山谷 Valley</text>
              <line x1="30" y1="-8" x2="85" y2="-50" stroke="#0284c7" strokeWidth="1" strokeDasharray="2 2" />
            </g>

            {/* Slope Density Indicator Bar */}
            <g transform="translate(-160, 200)">
              <rect x="0" y="0" width="320" height="30" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1" />
              <text x="15" y="19" fill="#cbd5e1" fontSize="10" fontWeight="600">
                【坡度法則】 等高線密集 ＝ <tspan fill="#f87171" fontWeight="bold">坡陡</tspan>　｜　等高線稀疏 ＝ <tspan fill="#34d399" fontWeight="bold">坡緩</tspan>
              </text>
            </g>
          </g>

          {/* Central Connecting Arrows (2D to 3D mapping) */}
          <g transform="translate(425, 230)">
            <path d="M -5 -60 L 30 -60" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#corr-arrow)" />
            <path d="M -5 10 L 30 10" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#corr-arrow)" />
            <path d="M -5 80 L 30 80" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#corr-arrow)" />
            <text x="12" y="-70" fill="#38bdf8" fontSize="10" fontWeight="bold" textAnchor="middle">空間投影</text>
          </g>

          {/* ================= RIGHT PANEL: 3D TERRAIN ================= */}
          <g transform="translate(660, 240)">
            {/* Ground Contour Bases (Stepped Iso-mountains) */}
            {/* Mountain 1: West (Main Peak) */}
            <path
              d="M -160 140 L -80 -70 L 0 60 L 30 140 Z"
              fill="#1e293b"
              stroke="#334155"
              strokeWidth="1"
            />
            {/* Mountain Flanks with shaded relief */}
            {/* West peak left slope (sunlit) */}
            <polygon
              points="-80,-70 -160,140 -60,150 -70,20"
              fill="#1e293b"
              stroke="#475569"
              strokeWidth="1.2"
            />
            {/* West peak right slope (ridge side) */}
            <polygon
              points="-80,-70 -70,20 -10,35 -20,-10"
              fill="#0f172a"
              stroke="#334155"
              strokeWidth="1.2"
            />

            {/* Saddle connecting */}
            <polygon
              points="-20,-10 -10,35 40,45 35,5"
              fill="#064e3b"
              stroke="#059669"
              strokeWidth="1.2"
            />

            {/* Mountain 2: East (Secondary Peak) */}
            {/* East peak sunny */}
            <polygon
              points="75,-40 35,5 40,45 60,150 140,135"
              fill="#1e293b"
              stroke="#475569"
              strokeWidth="1.2"
            />
            {/* East peak shadow */}
            <polygon
              points="75,-40 140,135 150,140"
              fill="#090d16"
              stroke="#1e293b"
              strokeWidth="1"
            />

            {/* 3D Ridge Crest highlight line */}
            <path
              d="M -140 110 L -80 -70 L -20 -10 L 35 5 L 75 -40 L 130 100"
              fill="none"
              stroke="#10b981"
              strokeWidth="3.5"
            />

            {/* 3D Valley Gulley descending forward */}
            <path
              d="M 5 22 Q 10 70 30 155"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="3"
            />

            {/* 3D Labels & Pins */}
            {/* Peak 1 Pin */}
            <g transform="translate(-80, -70)">
              <circle cx="0" cy="0" r="4" fill="#ef4444" />
              <line x1="0" y1="0" x2="0" y2="-25" stroke="#ef4444" strokeWidth="1.5" />
              <rect x="-40" y="-45" width="80" height="20" rx="3" fill="#dc2626" />
              <text x="0" y="-31" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">主峰 1420m</text>
            </g>

            {/* Peak 2 Pin */}
            <g transform="translate(75, -40)">
              <circle cx="0" cy="0" r="4" fill="#ef4444" />
              <line x1="0" y1="0" x2="0" y2="-25" stroke="#ef4444" strokeWidth="1.5" />
              <rect x="-40" y="-45" width="80" height="20" rx="3" fill="#dc2626" />
              <text x="0" y="-31" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">副峰 1310m</text>
            </g>

            {/* Saddle Label */}
            <g transform="translate(10, 5)">
              <rect x="-35" y="-12" width="70" height="22" rx="3" fill="#422006" stroke="#d97706" strokeWidth="1" />
              <text x="0" y="3" fill="#fde047" fontSize="10" fontWeight="bold" textAnchor="middle">鞍部 (鞍形窪凹)</text>
            </g>

            {/* Ridge Label */}
            <g transform="translate(-50, -25)">
              <rect x="-30" y="-10" width="60" height="20" rx="3" fill="#022c22" stroke="#16a34a" strokeWidth="1" />
              <text x="0" y="4" fill="#86efac" fontSize="10" fontWeight="bold" textAnchor="middle">稜線山脊</text>
            </g>

            {/* Valley Label */}
            <g transform="translate(25, 100)">
              <rect x="-30" y="-10" width="60" height="20" rx="3" fill="#082f49" stroke="#0284c7" strokeWidth="1" />
              <text x="0" y="4" fill="#7dd3fc" fontSize="10" fontWeight="bold" textAnchor="middle">溪谷集水</text>
            </g>

            {/* Bottom 3D Footnote */}
            <g transform="translate(-160, 200)">
              <rect x="0" y="0" width="320" height="30" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1" />
              <text x="160" y="19" fill="#cbd5e1" fontSize="10" fontWeight="600" textAnchor="middle">
                立體山體心像：由二維同心線條在腦中自動重構為三維空間
              </text>
            </g>
          </g>

          {/* Bottom Banner */}
          <g transform="translate(440, 475)">
            <text x="0" y="0" fill="#94a3b8" fontSize="12" fontWeight="600" textAnchor="middle">
              核心教學觀念：「等高線不是很多圈線，而是地形的平面語言。」
            </text>
          </g>
        </svg>
      </div>
      <figcaption className="mt-4 pt-3 border-t border-slate-800 text-center text-xs sm:text-sm text-slate-400 font-medium">
        圖 03 · 等高線立體化：平面等高線與立體地形特徵（山峰、山谷、稜線、鞍部）之空間對應模型。
      </figcaption>
    </figure>
  );
};
