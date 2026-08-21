import { useEffect, useState } from "react";
import type { ComponentType } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

type SectionLoader = () => Promise<{ default: ComponentType }>;

const SectionFallback = () => (
  <div className="h-40 w-full animate-pulse rounded-lg bg-secondary/30 md:h-56" aria-hidden="true" />
);

const DeferredSection = ({ id, load }: { id: string; load: SectionLoader }) => {
  const [target, setTarget] = useState<HTMLDivElement | null>(null);
  const [Section, setSection] = useState<ComponentType | null>(null);

  useEffect(() => {
    if (!target || Section) return;

    let cancelled = false;
    const loadSection = () => {
      void load().then(({ default: LoadedSection }) => {
        if (!cancelled) setSection(() => LoadedSection);
      });
    };

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            observer.disconnect();
            loadSection();
          }
        },
        { rootMargin: "220px 0px" },
      );
      observer.observe(target);
      return () => {
        cancelled = true;
        observer.disconnect();
      };
    }

    loadSection();
    return () => {
      cancelled = true;
    };
  }, [Section, load, target]);

  return <div id={Section ? undefined : id} ref={setTarget}>{Section ? <Section /> : <SectionFallback />}</div>;
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <a
        href="#main-content"
        className="sr-only fixed left-4 top-4 z-[100] rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground focus:not-sr-only"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <DeferredSection id="experience" load={() => import("@/components/ExperienceSection")} />
        <DeferredSection id="projects" load={() => import("@/components/ProjectsSection")} />
        <DeferredSection id="skills" load={() => import("@/components/SkillsSection")} />
        <DeferredSection id="education" load={() => import("@/components/EducationSection")} />
        <DeferredSection id="contact" load={() => import("@/components/ContactSection")} />
      </main>
    </div>
  );
};

export default Index;
