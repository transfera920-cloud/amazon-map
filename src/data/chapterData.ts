import { SectionItem, ChapterMeta, CurriculumChapter } from '../types';

export const CHAPTER_META: ChapterMeta = {
  number: 'Chapter 03',
  title: '登山地圖與導航',
  englishTitle: 'Map & Navigation',
  subtitle: '學習閱讀地圖、理解地形，建立登山者基本定位能力。',
  coreQuote: '導航不是依賴工具，而是建立位置判斷能力。',
  positioning: '專業登山基礎導航教育教材',
  learningGoal: '建立地圖閱讀、地形判讀與定位能力',
  corePhilosophy: '工具可能故障，判斷能力是導航的核心。',
};

export const SECTIONS: SectionItem[] = [
  { id: 's1', number: '01', title: '為什麼登山需要導航能力' },
  { id: 's2', number: '02', title: '認識登山地圖' },
  { id: 's3', number: '03', title: '等高線與地形判讀' },
  { id: 's4', number: '04', title: '方向與定位基礎' },
  { id: 's5', number: '05', title: '登山路線判讀' },
  { id: 's6', number: '06', title: '登山導航的實際流程' },
  { id: 's7', number: '07', title: '常見導航錯誤' },
  { id: 's8', number: '08', title: '導航工具介紹基礎' },
  { id: 's9', number: '09', title: '導航安全觀念' },
  { id: 'summary', number: '10', title: '本章重點整理' },
];

export const CURRICULUM_CHAPTERS: CurriculumChapter[] = [
  {
    id: 'ch1',
    number: '第 01 章',
    title: '登山安全核心思維與風險管理',
    desc: '行前規劃、自我評估與登山風險決策心態。',
    status: 'published',
    isAvailable: true,
  },
  {
    id: 'ch2',
    number: '第 02 章',
    title: '基礎登山裝備系統與行前打包',
    desc: '三層式穿著、行進裝備、緊急求生用品配置原則。',
    status: 'published',
    isAvailable: true,
  },
  {
    id: 'ch3',
    number: '第 03 章',
    title: '登山地圖與導航',
    desc: '紙本地圖、等高線地形判讀、方位校正與導航循環。',
    status: 'current',
    isCurrent: true,
    isAvailable: true,
  },
  {
    id: 'ch4',
    number: '第 04 章',
    title: '步態節奏、呼吸與體能分配',
    desc: '上下坡步伐重心控制、體能節奏與休息策略。',
    status: 'upcoming',
    isAvailable: false,
  },
  {
    id: 'ch12',
    number: '第 12 章',
    title: '導航與地圖進階',
    desc: '離線地圖、APP 操作實務與數位導航工具實務應用。',
    status: 'upcoming',
    isAvailable: false,
  },
  {
    id: 'ch13',
    number: '第 13 章',
    title: 'GPX 軌跡分析與實務教學',
    desc: 'GPX 格式標準、軌跡資料解讀、匯入匯出與路線剖析。',
    status: 'upcoming',
    isAvailable: false,
  },
];
