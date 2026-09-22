import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { KeyPoint } from '../ui/KeyPoint';
import { EducationalCard } from '../ui/EducationalCard';
import { WarningBox } from '../ui/WarningBox';
import { ErrorEscalationDiagram } from '../diagrams/ErrorEscalationDiagram';
import { ToolsComplementaryDiagram } from '../diagrams/ToolsComplementaryDiagram';
import { RedundantNavDiagram } from '../diagrams/RedundantNavDiagram';
import {
  Smartphone,
  Map as MapIcon,
  Compass,
  AlertTriangle,
  StopCircle,
  Search,
  CheckSquare,
  Shield,
  Layers,
  BatteryCharging
} from 'lucide-react';

export const Section7To9: React.FC = () => {
  return (
    <>
      {/* ================= SECTION 07 ================= */}
      <section id="s7" aria-labelledby="heading-s7" className="scroll-mt-24 mb-20">
        <SectionHeading
          number="07"
          title="常見導航錯誤與迷途處置"
          subtitle="多數迷航源於錯誤的依賴模式；學會及早辨認偏差，以冷靜應變截斷錯誤骨牌。"
        />

        <div className="prose prose-invert max-w-none text-slate-300 text-base sm:text-lg leading-relaxed space-y-5">
          <p>
            在山難與迷途案例統計中，登山者往往不是因為完全沒帶地圖，而是出於對單一線索的過度信賴，或是在察覺異常時未能及時止步。
          </p>

          <h3 className="text-xl font-bold text-slate-100 mt-8 mb-4">
            常見的四大導航思維盲點
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6 not-prose">
            <div className="p-4 rounded-lg border border-slate-800 bg-slate-900/90">
              <span className="text-xs font-bold text-red-400 uppercase tracking-wider block mb-1">
                依賴盲點 1
              </span>
              <h4 className="font-bold text-slate-100 text-base">只依靠布條（路條）</h4>
              <p className="text-xs sm:text-sm text-slate-400 mt-1.5 leading-relaxed">
                路條容易隨日曬風化、被倒木遮蔽或扯斷。更危險的是，路條可能是採藥者、獵人或舊時搜救隊留下的非正式支線，跟隨路條可能直接將隊伍帶往絕壁。
              </p>
            </div>

            <div className="p-4 rounded-lg border border-slate-800 bg-slate-900/90">
              <span className="text-xs font-bold text-red-400 uppercase tracking-wider block mb-1">
                依賴盲點 2
              </span>
              <h4 className="font-bold text-slate-100 text-base">只依靠單一手機 APP</h4>
              <p className="text-xs sm:text-sm text-slate-400 mt-1.5 leading-relaxed">
                手機在低溫下電量會急遽衰竭、遇雨可能觸控失靈或受潮當機；強光下螢幕不易辨識，且在深邃峽谷可能因衛星遮蔽產生定位飄移。
              </p>
            </div>

            <div className="p-4 rounded-lg border border-slate-800 bg-slate-900/90">
              <span className="text-xs font-bold text-red-400 uppercase tracking-wider block mb-1">
                依賴盲點 3
              </span>
              <h4 className="font-bold text-slate-100 text-base">不提前研究路線</h4>
              <p className="text-xs sm:text-sm text-slate-400 mt-1.5 leading-relaxed">
                抵達現場才第一次打開離線地圖，對沿途地貌完全沒有心像認知。一旦遭遇天候轉壞或突發狀況，容易因緊張恐慌而做出錯誤解讀。
              </p>
            </div>

            <div className="p-4 rounded-lg border border-slate-800 bg-slate-900/90">
              <span className="text-xs font-bold text-red-400 uppercase tracking-wider block mb-1">
                依賴盲點 4
              </span>
              <h4 className="font-bold text-slate-100 text-base">發現迷路後盲目移動</h4>
              <p className="text-xs sm:text-sm text-slate-400 mt-1.5 leading-relaxed">
                「再往前走幾步看會不會有路」的賭徒心理，是錯誤持續擴大的主要推手。盲目下切只會迅速消耗寶貴體力，並將自身推入難以折返的險境。
              </p>
            </div>
          </div>
        </div>

        {/* SVG 07 */}
        <ErrorEscalationDiagram />

        {/* Section 16 迷途處置原則修正 */}
        <div className="my-8 p-6 rounded-xl border border-slate-800 bg-slate-900/70 shadow-xs">
          <div className="flex items-center gap-2 mb-3">
            <Shield className="w-5 h-5 text-emerald-400" aria-hidden="true" />
            <h3 className="text-lg font-bold text-slate-100">
              迷途應對核心流程：停止 · 確認 · 判斷
            </h3>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed mb-4">
            當察覺周遭地形與地圖不符，或已無法看見明確路跡時，必須依照客觀程序處理。請注意：<strong className="text-slate-100">「原地等待」或「原路折返」並非在所有情境下都適用的固定教條</strong>，關鍵在於依據客觀條件綜合權衡。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 not-prose">
            <div className="p-4 rounded-lg bg-slate-900/90 border border-slate-800">
              <div className="flex items-center gap-2 text-red-400 font-bold text-sm mb-1.5">
                <StopCircle className="w-4 h-4" />
                <span>1. 停止 (Stop)</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                <strong className="text-slate-100">立即停止無目的的盲目移動。</strong>坐下深呼吸，喝口溫水，穩定心率與恐慌情緒，防止體力在慌亂探索中無謂耗盡。
              </p>
            </div>

            <div className="p-4 rounded-lg bg-slate-900/90 border border-slate-800">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm mb-1.5">
                <Search className="w-4 h-4" />
                <span>2. 確認 (Check)</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                回想最後一次完全確定位置的確切地點與時間。檢查紙本地圖、指南針方位角、電子 GPS 座標，並抬頭仔細觀察身邊的脊稜與坡向。
              </p>
            </div>

            <div className="p-4 rounded-lg bg-slate-900/90 border border-slate-800">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm mb-1.5">
                <CheckSquare className="w-4 h-4" />
                <span>3. 判斷 (Assess)</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                全盤評估：當前位置是否安全（無落石、避風寒）？天候與日照剩餘幾小時？若折返，體力與路跡是否允許？若無法確認方向，切莫為「繼續走」而走。
              </p>
            </div>
          </div>
        </div>

        {/* 嚴禁下切溪流安全警語 */}
        <WarningBox title="重要安全禁忌：溪流不是通用的撤退路線">
          在登山迷途案例中，<strong>「順著溪流往下走」是極度危險且常見的致命迷思</strong>。山區溪流通常伴隨著陡峭狹窄的峽谷、無法攀越的瀑布斷層、深潭巨石以及潛在的山洪暴發。一旦下切溪谷往往陷入「進退兩難」的絕境，上方陡坡滑落後無法回攀，下方又逢垂直斷崖。若非具備溯溪下攀專門技術與裝備，絕不可將溪流視為求生路線。
        </WarningBox>
      </section>

      {/* ================= SECTION 08 ================= */}
      <section id="s8" aria-labelledby="heading-s8" className="scroll-mt-24 mb-20">
        <SectionHeading
          number="08"
          title="導航工具介紹基礎"
          subtitle="各項裝備皆有其物理專長與運作極限；工具提供資訊，人負責最終判斷。"
        />

        <div className="prose prose-invert max-w-none text-slate-300 text-base sm:text-lg leading-relaxed space-y-5">
          <p>
            在現代登山活動中，各類導航工具琳瑯滿目。然而，成熟的登山者從不問「哪一種工具最好」，而是清楚掌握每一項工具的優勢與邊界，將它們組合為相輔相成的安全系統。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-6 not-prose">
            {/* Tool 1 */}
            <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/90 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2 text-slate-100 font-bold text-base">
                  <MapIcon className="w-5 h-5 text-emerald-400" />
                  <span>紙本地圖 (Paper Map)</span>
                </div>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300 mt-3">
                  <li className="text-emerald-400 font-medium">✓ 優點：不需任何電力，低溫不關機</li>
                  <li className="text-emerald-400 font-medium">✓ 優點：展開視野大，掌握宏觀山勢</li>
                  <li className="text-slate-400">✕ 限制：需投入時間學習等高線判讀</li>
                  <li className="text-slate-400">✕ 限制：需使用防水袋密封防潮防撕裂</li>
                </ul>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-slate-400">
                定位角色：空間全景與絕對地形基準
              </div>
            </div>

            {/* Tool 2 */}
            <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/90 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2 text-slate-100 font-bold text-base">
                  <Compass className="w-5 h-5 text-emerald-400" />
                  <span>磁性指南針 (Compass)</span>
                </div>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300 mt-3">
                  <li className="text-emerald-400 font-medium">✓ 優點：純物理磁力指示，反應即時</li>
                  <li className="text-emerald-400 font-medium">✓ 優點：協助地圖與現場山勢精準對正</li>
                  <li className="text-slate-400">✕ 限制：易受金屬裝備、高壓電磁干擾</li>
                  <li className="text-slate-400">✕ 限制：無法單獨告知使用者自身座標</li>
                </ul>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-slate-400">
                定位角色：提供客觀物理北方與航向方位角
              </div>
            </div>

            {/* Tool 3 */}
            <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/90 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2 text-slate-100 font-bold text-base">
                  <Smartphone className="w-5 h-5 text-emerald-400" />
                  <span>GPS / 手機導航 APP</span>
                </div>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300 mt-3">
                  <li className="text-emerald-400 font-medium">✓ 優點：定位迅速，即時呈現坐標數值</li>
                  <li className="text-emerald-400 font-medium">✓ 優點：自動記錄並疊加航跡軌跡圖</li>
                  <li className="text-slate-400">✕ 限制：極度依賴電池，強光低溫易失常</li>
                  <li className="text-slate-400">✕ 限制：需防摔防水，深谷衛星可能遮蔽</li>
                </ul>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-slate-400">
                定位角色：快速查核當前位置與航跡偏移
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold text-slate-100 mt-8 mb-3">
            電子導航工具的實務使用要點
          </h3>
          <p>
            若在行程中使用手機或 GPS 設備，務必於行前落實四大管理：
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4 not-prose">
            <div className="p-3.5 rounded-lg bg-slate-900/90 border border-slate-800 flex items-start gap-2.5">
              <BatteryCharging className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-slate-300">
                <strong className="text-slate-100">電量與保暖：</strong>攜帶充足且認證之行動電源；高山低溫環境下將手機置於貼身內層衣物保暖。
              </div>
            </div>
            <div className="p-3.5 rounded-lg bg-slate-900/90 border border-slate-800 flex items-start gap-2.5">
              <Layers className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-slate-300">
                <strong className="text-slate-100">離線圖資預載：</strong>山區通常無電信訊號，出發前必須在家中將完整區域地圖與 GPX 檔案下載至本地端。
              </div>
            </div>
          </div>
        </div>

        {/* SVG 08 */}
        <ToolsComplementaryDiagram />

        <KeyPoint title="工具互補哲學">
          不同工具互補，而不是互相取代。紙本地圖給予大視野，指南針給予方向，電子工具給予快速坐標，但真正進行導航決策的永遠是登山者的大腦。
        </KeyPoint>
      </section>

      {/* ================= SECTION 09 ================= */}
      <section id="s9" aria-labelledby="heading-s9" className="scroll-mt-24 mb-20">
        <SectionHeading
          number="09"
          title="導航安全觀念：建立雙軌備援"
          subtitle="不讓單一設備成為唯一的生命線；備援的目的在於分散單點失效風險。"
        />

        <div className="prose prose-invert max-w-none text-slate-300 text-base sm:text-lg leading-relaxed space-y-5">
          <p>
            登山安全的基石是「風險冗餘（Redundancy）」。在所有裝備考量中，沒有任何單一裝置是永不故障的——手機可能在滑倒時摔裂螢幕，電子設備可能在滂沱大雨中進水，紙本地圖亦可能在狂風中被吹走。
          </p>

          <p>
            因此，專業登山者從不依靠單一導航方案，而是落實<strong>「Redundant Navigation｜雙軌導航備援」</strong>架構：
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 not-prose">
            <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/90">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-1">
                主要導航軌道 (Primary Track)
              </span>
              <h4 className="text-base font-bold text-slate-100 mb-2">GPS 專用機 / 手機離線導航 APP</h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-3">
                在正常行程中擔任第一線定位確認工具，提供快速坐標回報、里程記錄與預載航跡比對，大幅提升行進效率。
              </p>
              <div className="p-2.5 rounded bg-slate-950/80 border border-slate-800 text-xs text-slate-300">
                搭配配套：充飽電的手機 ＋ 專用行動電源 ＋ 密封防水袋。
              </div>
            </div>

            <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/90">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-1">
                實體備援軌道 (Redundant Backup Track)
              </span>
              <h4 className="text-base font-bold text-slate-100 mb-2">紙本地圖 ＋ 磁性指南針 ＋ 地形判讀</h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-3">
                作為堅不可摧的後盾。一旦電子設備遭遇沒電、低溫關機、摔毀或當機，能立即無縫接手，持續提供方向與空間定位。
              </p>
              <div className="p-2.5 rounded bg-slate-950/80 border border-slate-800 text-xs text-slate-300">
                搭配配套：密封防水地圖袋 ＋ 隨身掛繩指南針 ＋ 平日鍛鍊之等高線判讀能力。
              </div>
            </div>
          </div>
        </div>

        {/* SVG 09 */}
        <RedundantNavDiagram />

        <KeyPoint title="導航備援的核心真諦">
          我們不能宣稱「兩者一定不會同時失效」，但備援的目的，是盡可能降低單一工具失效時所造成的整體衝擊。擁有備援與自主判斷力，才能在自然環境的不可測中，守護整支隊伍的平安。
        </KeyPoint>
      </section>
    </>
  );
};
