import React from 'react';

export const ToolsComplementaryDiagram: React.FC = () => {
  return (
    <figure className="my-8 rounded-xl border border-stone-200 bg-white p-4 sm:p-7 shadow-xs">
      <div className="w-full overflow-x-auto">
        <svg
          viewBox="0 0 800 420"
          className="w-full min-w-[620px] max-w-4xl mx-auto h-auto"
          role="img"
          aria-labelledby="svg08-title svg08-desc"
        >
          <title id="svg08-title">導航工具互補模型示意圖</title>
          <desc id="svg08-desc">
            展示紙本地圖提供宏觀地形視野、指南針建立方向基準、GPS與手機快速確認位置，三者各有專長並最終匯聚於登山者之主觀綜合判斷。
          </desc>

          <defs>
            <marker id="converge-arr" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
              <polygon points="0 0, 8 4, 0 8" fill="#1b4332" />
            </marker>
          </defs>

          {/* Canvas Background */}
          <rect width="800" height="420" fill="#fafaf9" rx="8" />

          {/* Tool 1: 紙本地圖 (Top Left) */}
          <g transform="translate(60, 50)">
            <rect x="0" y="0" width="220" height="85" rx="8" fill="#ffffff" stroke="#94a3b8" strokeWidth="1.5" />
            <rect x="14" y="-10" width="90" height="20" rx="3" fill="#f1f5f9" />
            <text x="59" y="4" fill="#334155" fontSize="11" fontWeight="700" textAnchor="middle">紙本地圖</text>
            <text x="14" y="32" fill="#0f172a" fontSize="13" fontWeight="800">宏觀整體地形視野</text>
            <text x="14" y="52" fill="#64748b" fontSize="11">• 無需電力、不受低溫斷電影響</text>
            <text x="14" y="68" fill="#64748b" fontSize="11">• 掌握山脈大走勢與分水嶺</text>
          </g>

          {/* Tool 2: 指南針 (Mid Left) */}
          <g transform="translate(60, 165)">
            <rect x="0" y="0" width="220" height="85" rx="8" fill="#ffffff" stroke="#94a3b8" strokeWidth="1.5" />
            <rect x="14" y="-10" width="90" height="20" rx="3" fill="#f1f5f9" />
            <text x="59" y="4" fill="#334155" fontSize="11" fontWeight="700" textAnchor="middle">磁性指南針</text>
            <text x="14" y="32" fill="#0f172a" fontSize="13" fontWeight="800">建立物理方向基準</text>
            <text x="14" y="52" fill="#64748b" fontSize="11">• 地圖對正 (Orienting the map)</text>
            <text x="14" y="68" fill="#64748b" fontSize="11">• 鎖定前進目標方位角</text>
          </g>

          {/* Tool 3: GPS／手機導航 APP (Bottom Left) */}
          <g transform="translate(60, 280)">
            <rect x="0" y="0" width="220" height="85" rx="8" fill="#ffffff" stroke="#94a3b8" strokeWidth="1.5" />
            <rect x="14" y="-10" width="115" height="20" rx="3" fill="#f1f5f9" />
            <text x="71" y="4" fill="#334155" fontSize="11" fontWeight="700" textAnchor="middle">GPS／手機 APP</text>
            <text x="14" y="32" fill="#0f172a" fontSize="13" fontWeight="800">快速即時坐標確認</text>
            <text x="14" y="52" fill="#64748b" fontSize="11">• 迅速取得即時定位與航跡紀錄</text>
            <text x="14" y="68" fill="#64748b" fontSize="11">• 需注意電量管理與防水抗凍</text>
          </g>

          {/* Connecting Vectors (Lines converging to Center Right) */}
          {/* Path 1 */}
          <path
            d="M 280 92 C 370 92, 430 160, 500 180"
            fill="none"
            stroke="#1b4332"
            strokeWidth="2.5"
            markerEnd="url(#converge-arr)"
          />
          <text x="360" y="82" fill="#475569" fontSize="11" fontWeight="600">地形空間關係</text>

          {/* Path 2 */}
          <path
            d="M 280 207 L 495 207"
            fill="none"
            stroke="#1b4332"
            strokeWidth="2.5"
            markerEnd="url(#converge-arr)"
          />
          <text x="360" y="200" fill="#475569" fontSize="11" fontWeight="600">絕對方位基準</text>

          {/* Path 3 */}
          <path
            d="M 280 322 C 370 322, 430 255, 500 235"
            fill="none"
            stroke="#1b4332"
            strokeWidth="2.5"
            markerEnd="url(#converge-arr)"
          />
          <text x="360" y="338" fill="#475569" fontSize="11" fontWeight="600">即時坐標資訊</text>

          {/* Central Target: 人的判斷 (Human Judgment) */}
          <g transform="translate(510, 105)">
            <rect x="0" y="0" width="240" height="205" rx="12" fill="#f0fdf4" stroke="#047857" strokeWidth="2.5" />
            
            <g transform="translate(25, -12)">
              <rect x="0" y="0" width="190" height="26" rx="13" fill="#047857" />
              <text x="95" y="17" fill="#ffffff" fontSize="12" fontWeight="700" textAnchor="middle">
                導航決策核心
              </text>
            </g>

            <text x="120" y="55" fill="#064e3b" fontSize="22" fontWeight="900" textAnchor="middle">
              人的綜合判斷
            </text>
            <text x="120" y="78" fill="#047857" fontSize="12" fontWeight="700" textAnchor="middle">
              Human Judgment
            </text>

            <line x1="30" y1="95" x2="210" y2="95" stroke="#86efac" strokeWidth="1" />

            <text x="30" y="120" fill="#14532d" fontSize="11" fontWeight="600">✓ 交叉比對三方資訊</text>
            <text x="30" y="142" fill="#14532d" fontSize="11" fontWeight="600">✓ 觀察眼前環境與天候狀態</text>
            <text x="30" y="164" fill="#14532d" fontSize="11" fontWeight="600">✓ 評估隊伍體力與撤退時限</text>
            <text x="30" y="186" fill="#14532d" fontSize="11" fontWeight="600">✓ 做出前進、停步或應變決策</text>
          </g>

          {/* Bottom Footnote Banner */}
          <g transform="translate(400, 395)">
            <text x="0" y="0" fill="#475569" fontSize="12" fontWeight="700" textAnchor="middle">
              核心精神：「不同工具互補，而不是互相取代；工具提供資訊，人負責判斷。」
            </text>
          </g>
        </svg>
      </div>
      <figcaption className="mt-4 pt-3 border-t border-stone-100 text-center text-xs sm:text-sm text-stone-600 font-medium">
        圖 08 · 導航工具互補關係：紙本地圖、指南針、GPS/手機三者各司其職，共同匯聚於人的判斷。
      </figcaption>
    </figure>
  );
};
