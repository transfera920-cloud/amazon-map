import React from 'react';

export const RoutePreReadingDiagram: React.FC = () => {
  return (
    <figure className="my-8 rounded-xl border border-stone-200 bg-white p-4 sm:p-7 shadow-xs">
      <div className="w-full overflow-x-auto">
        <svg
          viewBox="0 0 840 450"
          className="w-full min-w-[640px] max-w-4xl mx-auto h-auto"
          role="img"
          aria-labelledby="svg05-title svg05-desc"
        >
          <title id="svg05-title">登山路線判讀示意圖：在地圖上先走一遍</title>
          <desc id="svg05-desc">
            虛構登山路徑剖面與平面示意，涵蓋起點、陡升上坡、展望稜線、平緩鞍部、叉路警示、下降碎石坡與終點營地，並同步標示方向、高程變化、地標與特別注意路段。
          </desc>

          <defs>
            <linearGradient id="elev-fill" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#ecfdf5" stopOpacity="0.05" />
            </linearGradient>
            <marker id="route-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <polygon points="0 0, 6 3, 0 6" fill="#1b4332" />
            </marker>
          </defs>

          {/* Background Canvas */}
          <rect width="840" height="450" fill="#fafaf9" rx="8" />

          {/* Top Header */}
          <g transform="translate(30, 25)">
            <rect x="0" y="0" width="160" height="26" rx="4" fill="#1b4332" />
            <text x="80" y="17" fill="#ffffff" fontSize="12" fontWeight="700" textAnchor="middle">
              虛擬路線判讀實例
            </text>
            <text x="175" y="18" fill="#64748b" fontSize="12">
              示範：在出發前，於地圖紙面上完整「預走」一次
            </text>
          </g>

          {/* Elevation Profile & Trail Graph Area */}
          <g transform="translate(60, 60)">
            {/* Elevation Axis */}
            <line x1="0" y1="20" x2="0" y2="240" stroke="#cbd5e1" strokeWidth="1.5" />
            <line x1="0" y1="240" x2="720" y2="240" stroke="#cbd5e1" strokeWidth="1.5" />

            <text x="-10" y="30" fill="#64748b" fontSize="10" textAnchor="end">1600m</text>
            <text x="-10" y="90" fill="#64748b" fontSize="10" textAnchor="end">1400m</text>
            <text x="-10" y="150" fill="#64748b" fontSize="10" textAnchor="end">1200m</text>
            <text x="-10" y="210" fill="#64748b" fontSize="10" textAnchor="end">1000m</text>

            {/* Elevation fill area */}
            <path
              d="M 20 220 L 140 130 L 260 40 L 380 90 L 490 85 L 610 170 L 700 190 L 700 240 L 20 240 Z"
              fill="url(#elev-fill)"
            />

            {/* Trail Line */}
            <path
              d="M 20 220 L 140 130 L 260 40 L 380 90 L 490 85 L 610 170 L 700 190"
              fill="none"
              stroke="#047857"
              strokeWidth="3.5"
            />

            {/* Key Stage Nodes */}
            {/* 1. 起點 */}
            <g transform="translate(20, 220)">
              <circle cx="0" cy="0" r="6" fill="#047857" stroke="#ffffff" strokeWidth="2" />
              <text x="0" y="-12" fill="#0f172a" fontSize="11" fontWeight="bold" textAnchor="middle">① 起點</text>
              <text x="0" y="18" fill="#64748b" fontSize="9" textAnchor="middle">登山口 950m</text>
            </g>

            {/* 2. 上坡段 */}
            <g transform="translate(130, 140)">
              <rect x="-35" y="-22" width="70" height="20" rx="3" fill="#f0fdf4" stroke="#86efac" strokeWidth="1" />
              <text x="0" y="-8" fill="#166534" fontSize="10" fontWeight="bold" textAnchor="middle">② 持續上坡</text>
              <text x="0" y="18" fill="#475569" fontSize="9" textAnchor="middle">線密·坡度陡</text>
            </g>

            {/* 3. 稜線 */}
            <g transform="translate(260, 40)">
              <circle cx="0" cy="0" r="6" fill="#047857" stroke="#ffffff" strokeWidth="2" />
              <text x="0" y="-12" fill="#0f172a" fontSize="11" fontWeight="bold" textAnchor="middle">③ 主稜線</text>
              <text x="0" y="18" fill="#64748b" fontSize="9" textAnchor="middle">展望點 1580m</text>
            </g>

            {/* 4. 鞍部 */}
            <g transform="translate(380, 90)">
              <circle cx="0" cy="0" r="5" fill="#ca8a04" stroke="#ffffff" strokeWidth="2" />
              <text x="0" y="-12" fill="#854d0e" fontSize="11" fontWeight="bold" textAnchor="middle">④ 鞍部過渡</text>
              <text x="0" y="18" fill="#64748b" fontSize="9" textAnchor="middle">地勢平緩 1410m</text>
            </g>

            {/* 5. 叉路 (特別注意路段) */}
            <g transform="translate(490, 85)">
              <rect x="-42" y="-36" width="84" height="24" rx="4" fill="#fef2f2" stroke="#ef4444" strokeWidth="1.5" />
              <text x="0" y="-20" fill="#b91c1c" fontSize="10" fontWeight="800" textAnchor="middle">⚠ ⑤ 稜線叉路</text>
              <circle cx="0" cy="0" r="6" fill="#dc2626" stroke="#ffffff" strokeWidth="2" />
              {/* Diverging wrong path dotted */}
              <line x1="0" y1="0" x2="45" y2="40" stroke="#ef4444" strokeWidth="2" strokeDasharray="3 3" />
              <text x="50" y="48" fill="#ef4444" fontSize="9">廢棄林道 (易走錯)</text>
            </g>

            {/* 6. 下降 */}
            <g transform="translate(605, 160)">
              <rect x="-35" y="-22" width="70" height="20" rx="3" fill="#f0fdf4" stroke="#86efac" strokeWidth="1" />
              <text x="0" y="-8" fill="#166534" fontSize="10" fontWeight="bold" textAnchor="middle">⑥ 連續下降</text>
              <text x="0" y="18" fill="#475569" fontSize="9" textAnchor="middle">碎石坡·濕滑</text>
            </g>

            {/* 7. 終點 */}
            <g transform="translate(700, 190)">
              <circle cx="0" cy="0" r="6" fill="#047857" stroke="#ffffff" strokeWidth="2" />
              <text x="0" y="-12" fill="#0f172a" fontSize="11" fontWeight="bold" textAnchor="middle">⑦ 終點</text>
              <text x="0" y="18" fill="#64748b" fontSize="9" textAnchor="middle">鞍部營地 1050m</text>
            </g>
          </g>

          {/* Synchronized Analytical Readouts (4 Cards at Bottom) */}
          <g transform="translate(40, 325)">
            {/* Card 1: 方向走向 */}
            <g transform="translate(0, 0)">
              <rect x="0" y="0" width="180" height="75" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.2" />
              <text x="14" y="22" fill="#0f172a" fontSize="12" fontWeight="700">1. 大致走向</text>
              <text x="14" y="42" fill="#15803d" fontSize="11" fontWeight="600">東北走向 ➔ 東南轉折</text>
              <text x="14" y="60" fill="#64748b" fontSize="10">行進時羅盤方位基準應吻合</text>
            </g>

            {/* Card 2: 高度變化 */}
            <g transform="translate(193, 0)">
              <rect x="0" y="0" width="180" height="75" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.2" />
              <text x="14" y="22" fill="#0f172a" fontSize="12" fontWeight="700">2. 高程累計變化</text>
              <text x="14" y="42" fill="#0284c7" fontSize="11" fontWeight="600">爬升 +630m ｜ 下降 -530m</text>
              <text x="14" y="60" fill="#64748b" fontSize="10">評估體能配速與預估耗時</text>
            </g>

            {/* Card 3: 主要地標 */}
            <g transform="translate(386, 0)">
              <rect x="0" y="0" width="180" height="75" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.2" />
              <text x="14" y="22" fill="#0f172a" fontSize="12" fontWeight="700">3. 沿途主要地標</text>
              <text x="14" y="42" fill="#78350f" fontSize="11" fontWeight="600">登山口、主稜山頭、鞍部</text>
              <text x="14" y="60" fill="#64748b" fontSize="10">作為行進時的定位檢核點</text>
            </g>

            {/* Card 4: 注意路段 */}
            <g transform="translate(579, 0)">
              <rect x="0" y="0" width="180" height="75" rx="6" fill="#fef2f2" stroke="#fca5a5" strokeWidth="1.2" />
              <text x="14" y="22" fill="#991b1b" fontSize="12" fontWeight="700">4. 特別注意路段</text>
              <text x="14" y="42" fill="#dc2626" fontSize="11" fontWeight="600">⑤ 叉路口 (廢林道交會)</text>
              <text x="14" y="60" fill="#b91c1c" fontSize="10">事先註記，行經時停步確認</text>
            </g>
          </g>

          {/* Footnote */}
          <g transform="translate(420, 428)">
            <text x="0" y="0" fill="#475569" fontSize="11" fontWeight="600" textAnchor="middle">
              核心原則：「先在地圖上建立路線模型，再進入現場。」
            </text>
          </g>
        </svg>
      </div>
      <figcaption className="mt-4 pt-3 border-t border-stone-100 text-center text-xs sm:text-sm text-stone-600 font-medium">
        圖 05 · 在地圖上先走一遍：虛擬路線剖面、方位走向、高程變化、主要地標與注意路段同步判讀。
      </figcaption>
    </figure>
  );
};
