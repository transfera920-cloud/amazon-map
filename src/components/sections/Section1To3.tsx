import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { KeyPoint } from '../ui/KeyPoint';
import { EducationalCard } from '../ui/EducationalCard';
import { WarningBox } from '../ui/WarningBox';
import { NavCoreDiagram } from '../diagrams/NavCoreDiagram';
import { MapFiveElementsDiagram } from '../diagrams/MapFiveElementsDiagram';
import { ContourTerrainDiagram } from '../diagrams/ContourTerrainDiagram';
import { Eye, CloudRain, Split, MapPinOff, Layers, Map, Compass } from 'lucide-react';

export const Section1To3: React.FC = () => {
  return (
    <>
      {/* ================= SECTION 01 ================= */}
      <section id="s1" aria-labelledby="heading-s1" className="scroll-mt-24 mb-20">
        <SectionHeading
          number="01"
          title="為什麼登山需要導航能力"
          subtitle="理解山區環境的不確定性，建立動態位置判讀的主動思維。"
        />

        <div className="prose prose-stone max-w-none text-stone-700 text-base sm:text-lg leading-relaxed space-y-5">
          <p>
            登山環境不像市區道路具備清楚的路牌與筆直的街道，地形起伏、植被覆蓋、天候劇變與標示缺失，都可能在極短時間內改變我們對自身位置的感知。在山區活動，方向感往往不可靠，視覺地標也可能因為雲霧而完全隱沒。
          </p>

          <h3 className="text-xl font-bold text-stone-900 mt-8 mb-4">
            山區常見的空間判斷挑戰
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6 not-prose">
            <div className="p-4 rounded-lg border border-stone-200 bg-white flex items-start gap-3">
              <div className="p-2 rounded-md bg-stone-100 text-stone-700 shrink-0">
                <MapPinOff className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <h4 className="font-bold text-stone-900 text-base">路徑不明顯</h4>
                <p className="text-xs sm:text-sm text-stone-600 mt-1">
                  山徑踏跡淡薄、落葉或倒木覆蓋、獸徑與廢棄林道交雜，容易誤導前進方向。
                </p>
              </div>
            </div>

            <div className="p-4 rounded-lg border border-stone-200 bg-white flex items-start gap-3">
              <div className="p-2 rounded-md bg-stone-100 text-stone-700 shrink-0">
                <CloudRain className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <h4 className="font-bold text-stone-900 text-base">天氣降低視線</h4>
                <p className="text-xs sm:text-sm text-stone-600 mt-1">
                  山谷起霧、突發暴雨或降雪，會讓遠方山頭、鞍部等地貌地標在數分鐘內完全消失。
                </p>
              </div>
            </div>

            <div className="p-4 rounded-lg border border-stone-200 bg-white flex items-start gap-3">
              <div className="p-2 rounded-md bg-stone-100 text-stone-700 shrink-0">
                <Split className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <h4 className="font-bold text-stone-900 text-base">叉路增加判斷難度</h4>
                <p className="text-xs sm:text-sm text-stone-600 mt-1">
                  山區常有獵徑、水管路或舊採伐道，一旦在分岔點依賴直覺，極可能步入錯誤路段。
                </p>
              </div>
            </div>

            <div className="p-4 rounded-lg border border-stone-200 bg-white flex items-start gap-3">
              <div className="p-2 rounded-md bg-stone-100 text-stone-700 shrink-0">
                <Eye className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <h4 className="font-bold text-stone-900 text-base">標示不足或損毀</h4>
                <p className="text-xs sm:text-sm text-stone-600 mt-1">
                  路條經日曬風化常褪色斷裂，官方木樁指標亦可能受倒木崩塌損壞或指向偏移。
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold text-stone-900 mt-8 mb-2">
            導航能力的目的
          </h3>
          <p>
            導航能力的終極目的，並不是<strong>「看著地圖或螢幕跟著走一條線」</strong>，因為螢幕上的軌跡無法替你觀察腳下的地形懸崖。真正的導航能力，是讓登山者在任何時刻都能持續回答兩個核心問題：
          </p>

          <ul className="list-disc pl-6 space-y-2 font-medium text-stone-900">
            <li><strong>「我現在在哪？」</strong>（確認當下空間位置與周遭地形特徵）</li>
            <li><strong>「下一步該往哪走？」</strong>（依據計畫路線與現地安全，確認前進的方位與路徑）</li>
          </ul>
        </div>

        {/* SVG 01 */}
        <NavCoreDiagram />

        <KeyPoint title="導航核心本質">
          導航不是跟著一條線走，而是持續確認自己的位置與下一步方向。把導航當成動態的情境感知，而非被動的路線跟隨。
        </KeyPoint>
      </section>

      {/* ================= SECTION 02 ================= */}
      <section id="s2" aria-labelledby="heading-s2" className="scroll-mt-24 mb-20">
        <SectionHeading
          number="02"
          title="認識登山地圖"
          subtitle="登山地圖承載了地形、比例與方位等立體維度，是山岳行動的共同語言。"
        />

        <div className="prose prose-stone max-w-none text-stone-700 text-base sm:text-lg leading-relaxed space-y-5">
          <p>
            許多初學者常將地圖視為「路線指示圖」，但真正的登山地形圖遠比這豐富。它在有限的二維紙面上，壓縮了三維地勢起伏、相對距離、磁偏角與人文地景。在開始判讀路線前，必須先熟練地圖的五大基本元素：
          </p>

          {/* 5 Elements Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6 not-prose">
            <EducationalCard title="圖例 (Legend)" badge="符號語言">
              <p>說明地圖上符號、線條、顏色與文字所代表的意義。例如實線代表主步道、虛線代表次要路徑、藍色代表溪流集水、三角符號代表三角點高程。</p>
            </EducationalCard>

            <EducationalCard title="比例尺 (Scale)" badge="距離轉換">
              <p>表示地圖上的圖上距離與實地水平距離的縮小比例。掌握比例尺才能正確估算水平行進里程、地形跨度與行程耗時。</p>
            </EducationalCard>

            <EducationalCard title="等高線 (Contours)" badge="地勢高低">
              <p>將地面上海拔高度相同的各點連接而成的封閉曲線。藉由等高線的疏密與形狀，可以在腦中重構出山脈的立體模型。</p>
            </EducationalCard>

            <EducationalCard title="座標系統 (Coordinates)" badge="空間定位">
              <p>用於精確描述地球表面位置的數學基準，例如台灣常用的二度分帶 TWD97、TWD67 方格網，或全球通用的 WGS84 經緯度座標。</p>
            </EducationalCard>

            <EducationalCard title="方位基準 (Orientation)" badge="北方定義">
              <p>地圖通常以上方為北方基準。判讀時須注意「真北（地理北極）」、「磁北（指南針指向）」與「方格北（圖幅坐標網北）」之差異。</p>
            </EducationalCard>
          </div>

          <h3 className="text-xl font-bold text-stone-900 mt-8 mb-3">
            比例尺核心概念：大比例尺 vs 小比例尺
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4 not-prose">
            <div className="p-5 rounded-lg border border-stone-200 bg-white">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-stone-900 text-base">大比例尺（例如 1:25,000）</span>
                <span className="px-2 py-0.5 rounded text-xs font-semibold bg-emerald-100 text-emerald-900">細節豐富</span>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed">
                圖上 1 公分等於實地 250 公尺。涵蓋的地理範圍較小，但能展現細緻的微地形起伏、細小支稜、鞍部與溪谷轉折，適合於現場進行精確的路線導航與定位核對。
              </p>
            </div>

            <div className="p-5 rounded-lg border border-stone-200 bg-white">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-stone-900 text-base">小比例尺（例如 1:100,000）</span>
                <span className="px-2 py-0.5 rounded text-xs font-semibold bg-stone-100 text-stone-700">區域全覽</span>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed">
                圖上 1 公分等於實地 1,000 公尺。涵蓋範圍極廣，微地形被適度平滑省略，適合用於行前整體行程規劃、主要山脈縱走走向概覽與大範圍撤退路線評估。
              </p>
            </div>
          </div>
        </div>

        {/* SVG 02 */}
        <MapFiveElementsDiagram />
      </section>

      {/* ================= SECTION 03 ================= */}
      <section id="s3" aria-labelledby="heading-s3" className="scroll-mt-24 mb-20">
        <SectionHeading
          number="03"
          title="等高線與地形判讀"
          subtitle="等高線不是平面上隨意勾勒的同心圈，而是地表起伏在圖紙上的投射密碼。"
        />

        <div className="prose prose-stone max-w-none text-stone-700 text-base sm:text-lg leading-relaxed space-y-5">
          <p>
            等高線是登山地圖的核心靈魂，它是將抽象圖紙轉化為真實地表三維心像的唯一橋樑。登山者若能看懂等高線，就能在尚未起步前，便「看見」眼前即將面對的陡坡、稜線與峽谷。
          </p>

          <h3 className="text-xl font-bold text-stone-900 mt-8 mb-4">
            五大等高線地形辨別法則
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-6 not-prose">
            <div className="p-4 rounded-lg border border-stone-200 bg-white">
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block mb-1">基本坡度</span>
              <h4 className="font-bold text-stone-900 text-base">線密＝坡陡 · 線疏＝坡緩</h4>
              <p className="text-xs sm:text-sm text-stone-600 mt-1.5 leading-relaxed">
                等高線水平間距越窄，代表在短距離內高度急遽變化，地勢陡峭；間距越開闊，代表坡度平緩，行走較省力。
              </p>
            </div>

            <div className="p-4 rounded-lg border border-stone-200 bg-white">
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block mb-1">封閉高點</span>
              <h4 className="font-bold text-stone-900 text-base">山峰 (Peak / Summit)</h4>
              <p className="text-xs sm:text-sm text-stone-600 mt-1.5 leading-relaxed">
                由一組封閉的同心曲線組成，其高程數值通常由外圍向中心依序增加，最內圈往往標註三角點或最高標高數值。
              </p>
            </div>

            <div className="p-4 rounded-lg border border-stone-200 bg-white">
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block mb-1">集水低窪</span>
              <h4 className="font-bold text-stone-900 text-base">山谷 (Valley / Gully)</h4>
              <p className="text-xs sm:text-sm text-stone-600 mt-1.5 leading-relaxed">
                等高線通常呈明確的「V」字形或「U」字形，其 V 字尖端大多指向<strong>地勢較高處（上游集水方向）</strong>。
              </p>
            </div>

            <div className="p-4 rounded-lg border border-stone-200 bg-white">
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block mb-1">山脊骨幹</span>
              <h4 className="font-bold text-stone-900 text-base">稜線 (Ridge)</h4>
              <p className="text-xs sm:text-sm text-stone-600 mt-1.5 leading-relaxed">
                山脊延伸的方向，兩側地勢通常急轉向下。等高線的突起部通常指向<strong>地勢較低處</strong>，視野開闊但易受強風吹襲。
              </p>
            </div>

            <div className="p-4 rounded-lg border border-stone-200 bg-white">
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block mb-1">過渡低點</span>
              <h4 className="font-bold text-stone-900 text-base">鞍部 (Col / Saddle)</h4>
              <p className="text-xs sm:text-sm text-stone-600 mt-1.5 leading-relaxed">
                介於兩個相對山頭或高點之間的馬鞍形較低平處，常為稜線上的天然過渡點，或是傳統翻山越嶺的隘口與營地。
              </p>
            </div>

            <div className="p-4 rounded-lg border border-stone-200 bg-white">
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block mb-1">特殊地貌</span>
              <h4 className="font-bold text-stone-900 text-base">斷崖與峭壁 (Cliff)</h4>
              <p className="text-xs sm:text-sm text-stone-600 mt-1.5 leading-relaxed">
                數條等高線極度密合甚至重疊，或附有鋸齒狀小齒標記，代表幾乎垂直的岩壁地形，行進時須嚴格避開或提早繞行。
              </p>
            </div>
          </div>
        </div>

        {/* SVG 03 */}
        <ContourTerrainDiagram />

        <KeyPoint title="地形判讀核心認知">
          能從等高線在腦中建立地形模型，是導航的重要基礎。在現場走每一步前，先在腦中比對「我身在稜線上、谷地中，還是正橫切過陡坡」，能大幅降低空間茫然感。
        </KeyPoint>
      </section>
    </>
  );
};
