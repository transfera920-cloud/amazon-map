export interface SectionItem {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
}

export interface ChapterMeta {
  number: string;
  title: string;
  englishTitle: string;
  subtitle: string;
  coreQuote: string;
  positioning: string;
  learningGoal: string;
  corePhilosophy: string;
}

export interface CurriculumChapter {
  id: string;
  number: string;
  title: string;
  desc: string;
  isCurrent?: boolean;
  isAvailable?: boolean;
  status: 'published' | 'current' | 'upcoming';
}
