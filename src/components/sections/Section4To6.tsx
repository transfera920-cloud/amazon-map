import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { KeyPoint } from '../ui/KeyPoint';
import { EducationalCard } from '../ui/EducationalCard';
import { WarningBox } from '../ui/WarningBox';
import { OrientationBearingDiagram } from '../diagrams/OrientationBearingDiagram';
import { RoutePreReadingDiagram } from '../diagrams/RoutePreReadingDiagram';
import { NavigationCycleDiagram } from '../diagrams/NavigationCycleDiagram';
import { Compass, Navigation, TrendingUp, AlertCircle, RefreshCw, CheckCircle2 } from 'lucide-react';

export const Section4To6: React.FC = () => {
  return (
    <>
      {/* ================= SECTION 04 ================= */}
      <section id="s4" aria-labelledby="heading-s4" className="scroll-mt-24 mb-20">
        <SectionHeading
          number="04"
          title="方向與定位基礎"
          subtitle="建立標準羅盤方位共通語言，連動自身坐標、目標航向與行進路徑。"
        />

        <div className="prose prose-stone max-w-none text-stone-700 text-base sm:text-lg leading-relaxed space-y-5">
          <p>
            在毫無人工標誌的荒野中，「向左走」或「往前走」是缺乏客觀意義的主觀描述。方位角（Bearing）是所有導航工作者溝通與決策的共同語言。
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-4 not-prose">
            <div className="p-3.5 rounded-lg border border-stone-200 bg-white text-center">
              <span className="font-mono text-xs font-bold text-red-600 block">0° / 360°</span>
              <span className="text-lg font-extrabold text-stone-900 block mt-0.5">北 (N)</span>
              <span className="text-[11px] text-stone-500">基準方位</span>
            </div>
            <div className="p-3.5 rounded-lg border border-stone-200 bg-white text-center">
              <span className="font-mono text-xs font-bold text-emerald-700 block">90°</span>
              <span className="text-lg font-extrabold text-stone-900 block mt-0.5">東 (E)</span>
              <span className="text-[11px] text-stone-500">右側直角</span>
            </div>
            <div className="p-3.5 rounded-lg border border-stone-200 bg-white text-center">
              <span className="font-mono text-xs font-bold text-stone-700 block">180°</span>
              <span className="text-lg font-extrabold text-stone-900 block mt-0.5">南 (S)</span>
              <span className="text-[11px] text-stone-500">反向對稱</span>
            </div>
            <div className="p-3.5 rounded-lg border border-stone-200 bg-white text-center">
              <span className="font-mono text-xs font-bold text-stone-700 block">270°</span>
              <span className="text-lg font-extrabold text-stone-900 block mt-0.5">西 (W)</span>
              <span className="text-[11px] text-stone-500">左側直角</span>
            </div>
          </div>

          <h3 className="text-xl font-bold text-stone-900 mt-8 mb-3">
            指南工具的正確角色
          </h3>
          <p>
            磁性指南針（Compass）不受電量限制，是荒野中最純粹的物理方向依據。然而，<strong>單純手持指南針並不能告訴你目前身在何處</strong>。指南針必須與地圖進行「方位對正（Orienting the Map）」，讓地圖上的磁北線與指南針的磁針平行，此時地圖上的所有山頭與眼前實景的方向才會完全一致。
          </p>

          <h3 className="text-xl font-bold text-stone-900 mt-8 mb-3">
            完整定位的三大連動核心
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6 not-prose">
            <EducationalCard title="1. 自己的位置" badge="當下起點">
              <p>透過地貌對比、坐標讀數或已知地標，精確回答「我現在在哪」。若不知自身位置，任何方向角都無法導出正確的前進路線。</p>
            </EducationalCard>

            <EducationalCard title="2. 目標方向" badge="預計航向">
              <p>從地圖上量測目前位置到下一個中繼點（如山頭、鞍部或叉路）的方位角，作為前進的基準磁偏航向。</p>
            </EducationalCard>

            <EducationalCard title="3. 移動路線" badge="實體軌跡">
              <p>在現場依據植被、倒木、陡坡與安全路跡動態調整的實際行進路徑。實體路線常隨地形蜿蜒，但整體向量需受目標方向約束。</p>
            </EducationalCard>
          </div>
        </div>

        {/* SVG 04 */}
        <OrientationBearingDiagram />

        <WarningBox title="不可將「看太陽找方向」視為可靠登山導航法">
          山區地形崎嶇且林相茂密，樹冠層常完全遮蔽天際；再者，山區天候變化迅速，午後濃霧與陰雨常使日光散射。若僅憑「太陽大概在東邊或西邊」行進，極容易因視線盲區或地勢起伏而產生數十度以上的嚴重航向偏差。
        </WarningBox>
      </section>

      {/* ================= SECTION 05 ================= */}
      <section id="s5" aria-labelledby="heading-s5" className="scroll-mt-24 mb-20">
        <SectionHeading
          number="05"
          title="登山路線判讀"
          subtitle="在出發前於地圖上完整預走一遍，建立立體路線心像與安全防線。"
        />

        <div className="prose prose-stone max-w-none text-stone-700 text-base sm:text-lg leading-relaxed space-y-5">
          <p>
            優秀登山者在收拾背包之前，往往已經在地圖上將整條路線「走過一遍」。出發前在地圖上的仔細推演，能讓你在踏入山野時，把未知的環境轉化為早已熟悉的檢核清單。
          </p>

          <h3 className="text-xl font-bold text-stone-900 mt-8 mb-3">
            路線判讀的五大必備檢核點
          </h3>

          <div className="space-y-3 my-6 not-prose">
            <div className="p-4 rounded-lg border border-stone-200 bg-white flex items-start gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-900 text-white font-mono text-xs font-bold shrink-0 mt-0.5">
                1
              </span>
              <div>
                <strong className="text-stone-900 text-base">起點與終點的位置與環境</strong>
                <p className="text-xs sm:text-sm text-stone-600 mt-1">
                  確認登山口聯外道路是否通暢、是否有管制哨或公車班次，並掌握終點預計抵達的營地或山屋配置。
                </p>
              </div>
            </div>

            <div className="p-4 rounded-lg border border-stone-200 bg-white flex items-start gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-900 text-white font-mono text-xs font-bold shrink-0 mt-0.5">
                2
              </span>
              <div>
                <strong className="text-stone-900 text-base">路線的大致走向與轉折處</strong>
                <p className="text-xs sm:text-sm text-stone-600 mt-1">
                  掌握全日行進的總體羅盤方向（如大致朝東北走），並在稜線大轉折點（如由東北轉為正南下切）特別做上記號。
                </p>
              </div>
            </div>

            <div className="p-4 rounded-lg border border-stone-200 bg-white flex items-start gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-900 text-white font-mono text-xs font-bold shrink-0 mt-0.5">
                3
              </span>
              <div>
                <strong className="text-stone-900 text-base">高度變化：累積爬升與累積下降</strong>
                <p className="text-xs sm:text-sm text-stone-600 mt-1">
                  不能只看總里程。水平 5 公里爬升 1,200 公尺的陡升路段，體力負荷遠高於水平 10 公里的平緩林道。
                </p>
              </div>
            </div>

            <div className="p-4 rounded-lg border border-stone-200 bg-white flex items-start gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-900 text-white font-mono text-xs font-bold shrink-0 mt-0.5">
                4
              </span>
              <div>
                <strong className="text-stone-900 text-base">沿途主要地標檢核點</strong>
                <p className="text-xs sm:text-sm text-stone-600 mt-1">
                  標記具辨識度的特徵點：第一座山頭、稜線鞍部、重要水源過溪點、避風巨石或廢棄獵寮，作為行進時的進度校正點。
                </p>
              </div>
            </div>

            <div className="p-4 rounded-lg border border-stone-200 bg-white flex items-start gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-900 text-white font-mono text-xs font-bold shrink-0 mt-0.5">
                5
              </span>
              <div>
                <strong className="text-stone-900 text-base">需要特別注意的風險路段</strong>
                <p className="text-xs sm:text-sm text-stone-600 mt-1">
                  叉路交會口、等高線重疊之斷崖、容易起霧迷航的寬廣鞍部，以及午後易暴漲之野溪，須於行前制定對應時限。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SVG 05 */}
        <RoutePreReadingDiagram />

        <KeyPoint title="路線判讀的核心行動">
          先在地圖上建立路線模型，再進入現場。當你在現場看見第一塊巨石、抵達第一處鞍部時，若能與圖紙上的預判完全吻合，你便掌握了導航的主動權。
        </KeyPoint>
      </section>

      {/* ================= SECTION 06 ================= */}
      <section id="s6" aria-labelledby="heading-s6" className="scroll-mt-24 mb-20">
        <SectionHeading
          number="06"
          title="登山導航的實際流程"
          subtitle="導航不是迷路時的緊急搶救，而是從出發前貫穿至行程結束的動態循環。"
        />

        <div className="prose prose-stone max-w-none text-stone-700 text-base sm:text-lg leading-relaxed space-y-5">
          <p>
            許多新手登山者只有在「感覺怪怪的」或是「找不到路條」時，才慌張地拿出手機或地圖；然而在那個時刻，往往已經偏離主線許久。真正安全的導航，是一種有節奏的、主動的常態行為。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 not-prose">
            {/* Box 1: 出發前 */}
            <div className="p-6 rounded-xl border border-stone-200 bg-white shadow-xs">
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block mb-2">
                階段一 · 出發前建立預期
              </span>
              <h3 className="text-lg font-bold text-stone-900 mb-3">出發前準備作業</h3>
              <ul className="space-y-2.5 text-sm text-stone-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>研究地圖：</strong>熟悉整段路線走勢、分水嶺方向與可能撤退點。</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>了解特徵：</strong>詳查爬升落差、里程、難行地形與預估耗時。</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>確認地標：</strong>找出各航段的主要山頭、鞍部、溪流與關鍵叉路。</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>準備工具：</strong>妥善攜帶紙本地圖、指北針、離線地圖與充足備用電源。</span>
                </li>
              </ul>
            </div>

            {/* Box 2: 行進中 */}
            <div className="p-6 rounded-xl border border-stone-200 bg-white shadow-xs">
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block mb-2">
                階段二 · 行進間循環核對
              </span>
              <h3 className="text-lg font-bold text-stone-900 mb-3">行進中持續確認</h3>
              <ul className="space-y-2.5 text-sm text-stone-600">
                <li className="flex items-start gap-2">
                  <RefreshCw className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>方向校對：</strong>定時比對前進方向是否符合計畫中的方位角走向。</span>
                </li>
                <li className="flex items-start gap-2">
                  <RefreshCw className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>地形比對：</strong>抬頭確認眼前山稜、陡坡、乾溪溝是否與等高線相符。</span>
                </li>
                <li className="flex items-start gap-2">
                  <RefreshCw className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>定期確認：</strong>在休息、過溪或抵達地標時，固定檢核當前座標。</span>
                </li>
                <li className="flex items-start gap-2">
                  <RefreshCw className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>及早停步：</strong>一旦發現現地特徵與地圖出現分歧，立即停步重新判斷。</span>
                </li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-bold text-stone-900 mt-8 mb-2">
            養成規律的定位節奏
          </h3>
          <p>
            將「確認位置」融入登山節奏中：每次小休息喝水時、每次抵達路標或叉路時、每次地形發生明顯轉折（例如由森林走出開闊稜線）時，都花 30 秒核對地圖與指南針。這 30 秒的習慣，能省去後續數小時迷途摸索的巨大代價。
          </p>
        </div>

        {/* SVG 06 */}
        <NavigationCycleDiagram />

        <KeyPoint title="導航循環理念">
          導航不是迷路後才開始，而是從出發前持續到行程結束。持續維持對自身位置的敏銳感知，就是最安全的導航機制。
        </KeyPoint>
      </section>
    </>
  );
};
