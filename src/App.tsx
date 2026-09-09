import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TableOfContents } from './components/TableOfContents';
import { Section1To3 } from './components/sections/Section1To3';
import { Section4To6 } from './components/sections/Section4To6';
import { Section7To9 } from './components/sections/Section7To9';
import { ChapterSummary } from './components/ChapterSummary';
import { ChapterNavigation } from './components/ChapterNavigation';
import { Footer } from './components/Footer';
import { CurriculumModal } from './components/CurriculumModal';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('s1');
  const [isCurriculumOpen, setIsCurriculumOpen] = useState<boolean>(false);

  // IntersectionObserver to dynamically track active section for TOC highlighting
  useEffect(() => {
    const sectionIds = ['s1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9', 'summary'];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-10% 0px -70% 0px',
        threshold: 0,
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleStartReading = () => {
    const el = document.getElementById('s1');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800 antialiased selection:bg-emerald-200 selection:text-emerald-950">
      {/* Sticky Header with Navigation & Progress Bar */}
      <Header onOpenCurriculum={() => setIsCurriculumOpen(true)} />

      <main id="main-content">
        {/* Chapter 03 Hero */}
        <Hero
          onStartReading={handleStartReading}
          onOpenCurriculum={() => setIsCurriculumOpen(true)}
        />

        {/* Central Reading Column Container */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Table of contents quick navigation */}
          <TableOfContents activeId={activeSection} />

          {/* Sections 01 ~ 03 */}
          <Section1To3 />

          {/* Sections 04 ~ 06 */}
          <Section4To6 />

          {/* Sections 07 ~ 09 */}
          <Section7To9 />

          {/* Chapter Summary (ID: summary) */}
          <ChapterSummary />

          {/* Previous / Next Chapter and Reserved Future Chapters */}
          <ChapterNavigation onOpenCurriculum={() => setIsCurriculumOpen(true)} />
        </div>
      </main>

      {/* Global Curriculum Modal */}
      <CurriculumModal
        isOpen={isCurriculumOpen}
        onClose={() => setIsCurriculumOpen(false)}
      />

      {/* Footer */}
      <Footer onOpenCurriculum={() => setIsCurriculumOpen(true)} />
    </div>
  );
};

export default App;
