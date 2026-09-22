import React from 'react';

export const RedundantNavDiagram: React.FC = () => {
  return (
    <figure className="my-8 rounded-xl border border-slate-800 bg-slate-900/90 p-4 sm:p-7 shadow-xs">
      <div className="w-full overflow-x-auto">
        <svg
          viewBox="0 0 820 440"
          className="w-full min-w-[620px] max-w-4xl mx-auto h-auto"
          role="img"
          aria-labelledby="svg09-title svg09-desc"
        >
          <title id="svg09-title">雙軌導航備援架構圖</title>
          <desc id="svg09-desc">
            圖解雙軌獨立備援架構：路徑A為電子導航（GPS/手機取得位置資訊），路徑B為傳統導航（紙本地圖、指南針與地形判讀），兩條獨立路徑共同匯入人的決策判斷，降低單一工具失效造成的影響。
          </desc>

          <defs>
            <marker id="redundant-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
              <polygon points="0 0, 8 4, 0 8" fill="#10b981" />
            </marker>
          </defs>

          {/* Canvas Background */}
          <rect width="820" height="440" fill="#090d13" rx="8" />

          {/* Top Title Banner */}
          <g transform="translate(40, 30)">
            <rect x="0" y="0" width="165" height="26" rx="4" fill="#064e3b" />
            <text x="82" y="17" fill="#a7f3d0" fontSize="12" fontWeight="700" textAnchor="middle">
              Redundant Navigation
            </text>
            <text x="180" y="18" fill="#f1f5f9" fontSize="13" fontWeight="bold">
              雙軌獨立導航備援系統
            </text>
          </g>

          {/* PATH A: 電子導航 (Top Track) */}
          <g transform="translate(40, 75)">
            <rect x="0" y="0" width="460" height="135" rx="8" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
            
            <g transform="translate(20, 15)">
              <rect x="0" y="-8" width="160" height="22" rx="3" fill="#1e293b" />
              <text x="80" y="7" fill="#f1f5f9" fontSize="11" fontWeight="800" textAnchor="middle">
                路徑 A · 電子導航系統
              </text>
            </g>

            {/* Subnode 1 */}
            <g transform="translate(20, 48)">
              <rect x="0" y="0" width="175" height="65" rx="6" fill="#090d13" stroke="#334155" strokeWidth="1" />
              <text x="14" y="24" fill="#f1f5f9" fontSize="13" fontWeight="700">GPS / 手機 APP</text>
              <text x="14" y="44" fill="#94a3b8" fontSize="10">• 離線地圖與衛星接收</text>
              <text x="14" y="58" fill="#94a3b8" fontSize="10">• 備妥行動電源與防水袋</text>
            </g>

            {/* Arrow */}
            <line x1="200" y1="80" x2="235" y2="80" stroke="#10b981" strokeWidth="1.5" markerEnd="url(#redundant-arrow)" />

            {/* Subnode 2 */}
            <g transform="translate(245, 48)">
              <rect x="0" y="0" width="195" height="65" rx="6" fill="#022c22" stroke="#059669" strokeWidth="1" />
              <text x="14" y="24" fill="#34d399" fontSize="13" fontWeight="700">即時位置資訊</text>
              <text x="14" y="44" fill="#a7f3d0" fontSize="10">• 經緯度 / TWD97 坐標</text>
              <text x="14" y="58" fill="#a7f3d0" fontSize="10">• 航跡疊加與高度紀錄</text>
            </g>
          </g>

          {/* PATH B: 傳統導航 (Bottom Track) */}
          <g transform="translate(40, 230)">
            <rect x="0" y="0" width="460" height="145" rx="8" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
            
            <g transform="translate(20, 15)">
              <rect x="0" y="-8" width="160" height="22" rx="3" fill="#1e293b" />
              <text x="80" y="7" fill="#f1f5f9" fontSize="11" fontWeight="800" textAnchor="middle">
                路徑 B · 傳統導航系統
              </text>
            </g>

            {/* Subnode 1 */}
            <g transform="translate(20, 48)">
              <rect x="0" y="0" width="175" height="75" rx="6" fill="#090d13" stroke="#334155" strokeWidth="1" />
              <text x="14" y="24" fill="#f1f5f9" fontSize="13" fontWeight="700">紙本地圖 ＋ 指南針</text>
              <text x="14" y="44" fill="#94a3b8" fontSize="10">• 防水袋密封收納</text>
              <text x="14" y="58" fill="#94a3b8" fontSize="10">• 具備方向基準刻度</text>
              <text x="14" y="70" fill="#94a3b8" fontSize="9">＋ 基本地形判讀能力</text>
            </g>

            {/* Arrow */}
            <line x1="200" y1="85" x2="235" y2="85" stroke="#10b981" strokeWidth="1.5" markerEnd="url(#redundant-arrow)" />

            {/* Subnode 2 */}
            <g transform="translate(245, 48)">
              <rect x="0" y="0" width="195" height="75" rx="6" fill="#022c22" stroke="#059669" strokeWidth="1" />
              <text x="14" y="24" fill="#34d399" fontSize="13" fontWeight="700">位置與方向判斷</text>
              <text x="14" y="44" fill="#a7f3d0" fontSize="10">• 稜脈/鞍部/谷地山勢比對</text>
              <text x="14" y="58" fill="#a7f3d0" fontSize="10">• 磁北地圖對正與方位角</text>
              <text x="14" y="70" fill="#a7f3d0" fontSize="10">• 不受無電無訊號限制</text>
            </g>
          </g>

          {/* Converging Connectors to Right Central Box */}
          <path
            d="M 500 142 C 530 142, 545 195, 565 210"
            fill="none"
            stroke="#10b981"
            strokeWidth="3"
            markerEnd="url(#redundant-arrow)"
          />
          <path
            d="M 500 302 C 530 302, 545 250, 565 235"
            fill="none"
            stroke="#10b981"
            strokeWidth="3"
            markerEnd="url(#redundant-arrow)"
          />

          {/* Terminal Destination: 人的判斷 */}
          <g transform="translate(575, 115)">
            <rect x="0" y="0" width="205" height="210" rx="10" fill="#022c22" stroke="#059669" strokeWidth="2.5" />
            
            <rect x="25" y="-12" width="155" height="24" rx="12" fill="#059669" />
            <text x="102" y="4" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">
              共同最終決策
            </text>

            <text x="102" y="48" fill="#34d399" fontSize="20" fontWeight="900" textAnchor="middle">
              人的判斷
            </text>
            <text x="102" y="68" fill="#a7f3d0" fontSize="11" fontWeight="700" textAnchor="middle">
              Human Judgment
            </text>

            <line x1="20" y1="84" x2="185" y2="84" stroke="#059669" strokeWidth="1" />

            <text x="20" y="108" fill="#d1fae5" fontSize="11" fontWeight="600">✓ 降低單一故障風險</text>
            <text x="20" y="130" fill="#d1fae5" fontSize="11" fontWeight="600">✓ 手機沒電有紙本看</text>
            <text x="20" y="152" fill="#d1fae5" fontSize="11" fontWeight="600">✓ 起霧迷茫有羅盤校</text>
            <text x="20" y="174" fill="#d1fae5" fontSize="11" fontWeight="600">✓ 隨時交叉雙向校核</text>
            <text x="20" y="196" fill="#d1fae5" fontSize="11" fontWeight="600">✓ 保持自主決策清醒</text>
          </g>

          {/* Bottom Banner */}
          <g transform="translate(410, 415)">
            <text x="0" y="0" fill="#94a3b8" fontSize="12" fontWeight="700" textAnchor="middle">
              核心觀念：「不要讓單一工具成為唯一的導航依賴；備援的目的，是降低單一工具失效造成的影響。」
            </text>
          </g>
        </svg>
      </div>
      <figcaption className="mt-4 pt-3 border-t border-slate-800 text-center text-xs sm:text-sm text-slate-400 font-medium">
        圖 09 · 導航備援架構：電子導航與傳統導航雙軌並存，共同匯入登山者的安全判斷。
      </figcaption>
    </figure>
  );
};
