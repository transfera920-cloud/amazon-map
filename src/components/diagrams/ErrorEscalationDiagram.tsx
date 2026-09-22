import React from 'react';

export const ErrorEscalationDiagram: React.FC = () => {
  return (
    <figure className="my-8 rounded-xl border border-slate-800 bg-slate-900/90 p-4 sm:p-7 shadow-xs">
      <div className="w-full overflow-x-auto">
        <svg
          viewBox="0 0 820 460"
          className="w-full min-w-[640px] max-w-4xl mx-auto h-auto"
          role="img"
          aria-labelledby="svg07-title svg07-desc"
        >
          <title id="svg07-title">導航錯誤擴大與及早處置對比圖</title>
          <desc id="svg07-desc">
            對比兩條分歧路徑：上路徑因忽視微小偏差而導致錯誤擴大進入危險地形；下路徑遵循「停止、確認、判斷」之處置原則，及早校正並確保安全。
          </desc>

          <defs>
            <marker id="red-arr" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
              <polygon points="0 0, 8 4, 0 8" fill="#ef4444" />
            </marker>
            <marker id="green-arr" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
              <polygon points="0 0, 8 4, 0 8" fill="#10b981" />
            </marker>
          </defs>

          {/* Canvas Background */}
          <rect width="820" height="460" fill="#090d13" rx="8" />

          {/* Starting Incident Point (Common Origin) */}
          <g transform="translate(100, 230)">
            <circle cx="0" cy="0" r="10" fill="#f59e0b" stroke="#0f172a" strokeWidth="2.5" />
            <rect x="-65" y="-55" width="130" height="42" rx="6" fill="#422006" fillOpacity="0.4" stroke="#d97706" strokeWidth="1.5" />
            <text x="0" y="-38" fill="#fde68a" fontSize="11" fontWeight="bold" textAnchor="middle">
              起點事件
            </text>
            <text x="0" y="-20" fill="#fde047" fontSize="13" fontWeight="800" textAnchor="middle">
              原本小偏差
            </text>
            <text x="0" y="30" fill="#94a3b8" fontSize="10" textAnchor="middle">
              (錯過路條 / 輕微走離步道)
            </text>
          </g>

          {/* PATH 1: 錯誤擴大路徑 (Top Branch - Danger) */}
          <g transform="translate(0, 0)">
            {/* Background warning tint box */}
            <rect x="200" y="30" width="590" height="175" rx="8" fill="#450a0a" fillOpacity="0.25" stroke="#dc2626" strokeOpacity="0.4" strokeWidth="1.2" />

            <g transform="translate(220, 52)">
              <rect x="0" y="-10" width="130" height="22" rx="3" fill="#7f1d1d" fillOpacity="0.6" />
              <text x="65" y="5" fill="#fca5a5" fontSize="11" fontWeight="700" textAnchor="middle">
                ✕ 錯誤應對模式（持續盲走）
              </text>
            </g>

            {/* Connecting line from origin */}
            <path
              d="M 110 220 C 140 180, 180 130, 230 130"
              fill="none"
              stroke="#ef4444"
              strokeWidth="2.5"
              markerEnd="url(#red-arr)"
            />

            {/* Step 1: 沒有停下確認 */}
            <g transform="translate(240, 130)">
              <rect x="0" y="-22" width="105" height="44" rx="5" fill="#1e1b2e" stroke="#dc2626" strokeWidth="1.2" />
              <text x="52" y="-3" fill="#fca5a5" fontSize="11" fontWeight="700" textAnchor="middle">沒有停下確認</text>
              <text x="52" y="13" fill="#f87171" fontSize="9" textAnchor="middle">心存僥倖繼續走</text>
            </g>

            <line x1="345" y1="130" x2="375" y2="130" stroke="#ef4444" strokeWidth="2" markerEnd="url(#red-arr)" />

            {/* Step 2: 繼續錯誤前進 */}
            <g transform="translate(385, 130)">
              <rect x="0" y="-22" width="105" height="44" rx="5" fill="#1e1b2e" stroke="#dc2626" strokeWidth="1.2" />
              <text x="52" y="-3" fill="#fca5a5" fontSize="11" fontWeight="700" textAnchor="middle">繼續錯誤前進</text>
              <text x="52" y="13" fill="#f87171" fontSize="9" textAnchor="middle">隨踏跡加速下切</text>
            </g>

            <line x1="490" y1="130" x2="520" y2="130" stroke="#ef4444" strokeWidth="2" markerEnd="url(#red-arr)" />

            {/* Step 3: 偏離越來越大 */}
            <g transform="translate(530, 130)">
              <rect x="0" y="-22" width="105" height="44" rx="5" fill="#1e1b2e" stroke="#dc2626" strokeWidth="1.2" />
              <text x="52" y="-3" fill="#fca5a5" fontSize="11" fontWeight="700" textAnchor="middle">偏離越來越大</text>
              <text x="52" y="13" fill="#f87171" fontSize="9" textAnchor="middle">喪失最後已知坐標</text>
            </g>

            <line x1="635" y1="130" x2="665" y2="130" stroke="#ef4444" strokeWidth="2" markerEnd="url(#red-arr)" />

            {/* Danger Final: 進入未知/危險地形 */}
            <g transform="translate(675, 130)">
              <rect x="0" y="-28" width="100" height="56" rx="6" fill="#7f1d1d" stroke="#ef4444" strokeWidth="1.5" />
              <text x="50" y="-8" fill="#ffffff" fontSize="11" fontWeight="800" textAnchor="middle">進入未知</text>
              <text x="50" y="9" fill="#fecaca" fontSize="11" fontWeight="800" textAnchor="middle">危險地形</text>
              <text x="50" y="21" fill="#fca5a5" fontSize="8" textAnchor="middle">峭壁/深潭受困</text>
            </g>
          </g>

          {/* PATH 2: 正確應變路徑 (Bottom Branch - Safety) */}
          <g transform="translate(0, 0)">
            {/* Background safe tint box */}
            <rect x="200" y="235" width="590" height="175" rx="8" fill="#022c22" fillOpacity="0.25" stroke="#059669" strokeOpacity="0.4" strokeWidth="1.2" />

            <g transform="translate(220, 255)">
              <rect x="0" y="-10" width="140" height="22" rx="3" fill="#064e3b" fillOpacity="0.6" />
              <text x="70" y="5" fill="#86efac" fontSize="11" fontWeight="700" textAnchor="middle">
                ✓ 正確應對原則（停止·確認·判斷）
              </text>
            </g>

            {/* Connecting line from origin */}
            <path
              d="M 110 240 C 140 280, 180 330, 230 330"
              fill="none"
              stroke="#10b981"
              strokeWidth="2.5"
              markerEnd="url(#green-arr)"
            />

            {/* Step 1: 發現異常立即停止 */}
            <g transform="translate(240, 330)">
              <rect x="0" y="-22" width="105" height="44" rx="5" fill="#0f291e" stroke="#059669" strokeWidth="1.2" />
              <text x="52" y="-3" fill="#86efac" fontSize="11" fontWeight="700" textAnchor="middle">① 立即停止</text>
              <text x="52" y="13" fill="#34d399" fontSize="9" textAnchor="middle">停止盲目移動</text>
            </g>

            <line x1="345" y1="330" x2="375" y2="330" stroke="#10b981" strokeWidth="2" markerEnd="url(#green-arr)" />

            {/* Step 2: 重新定位核對 */}
            <g transform="translate(385, 330)">
              <rect x="0" y="-22" width="105" height="44" rx="5" fill="#0f291e" stroke="#059669" strokeWidth="1.2" />
              <text x="52" y="-3" fill="#86efac" fontSize="11" fontWeight="700" textAnchor="middle">② 重新定位</text>
              <text x="52" y="13" fill="#34d399" fontSize="9" textAnchor="middle">檢查地圖/電子/地形</text>
            </g>

            <line x1="490" y1="330" x2="520" y2="330" stroke="#10b981" strokeWidth="2" markerEnd="url(#green-arr)" />

            {/* Step 3: 全盤綜合判斷 */}
            <g transform="translate(530, 330)">
              <rect x="0" y="-22" width="105" height="44" rx="5" fill="#0f291e" stroke="#059669" strokeWidth="1.2" />
              <text x="52" y="-3" fill="#86efac" fontSize="11" fontWeight="700" textAnchor="middle">③ 重新判斷</text>
              <text x="52" y="13" fill="#34d399" fontSize="9" textAnchor="middle">評估體力/天候/安全</text>
            </g>

            <line x1="635" y1="330" x2="665" y2="330" stroke="#10b981" strokeWidth="2" markerEnd="url(#green-arr)" />

            {/* Safe Final: 選擇適當處置 */}
            <g transform="translate(675, 330)">
              <rect x="0" y="-28" width="100" height="56" rx="6" fill="#065f46" stroke="#10b981" strokeWidth="1.5" />
              <text x="50" y="-8" fill="#ffffff" fontSize="11" fontWeight="800" textAnchor="middle">選擇適當</text>
              <text x="50" y="9" fill="#a7f3d0" fontSize="11" fontWeight="800" textAnchor="middle">安全處置</text>
              <text x="50" y="21" fill="#86efac" fontSize="8" textAnchor="middle">確保人身安全</text>
            </g>
          </g>

          {/* Bottom Footnote */}
          <g transform="translate(410, 435)">
            <text x="0" y="0" fill="#94a3b8" fontSize="12" fontWeight="700" textAnchor="middle">
              核心準則：「及早發現，比事後修正容易。」
            </text>
          </g>
        </svg>
      </div>
      <figcaption className="mt-4 pt-3 border-t border-slate-800 text-center text-xs sm:text-sm text-slate-400 font-medium">
        圖 07 · 導航錯誤擴大模型：對比「盲目持續移動」與「停止 · 確認 · 判斷」之處置差異。
      </figcaption>
    </figure>
  );
};
