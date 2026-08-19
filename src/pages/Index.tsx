import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

const ExperienceSection = lazy(() => import("@/components/ExperienceSection"));
const ProjectsSection = lazy(() => import("@/components/ProjectsSection"));
const SkillsSection = lazy(() => import("@/components/SkillsSection"));
const EducationSection = lazy(() => import("@/components/EducationSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));

const SectionFallback = () => (
  <div className="h-40 w-full animate-pulse rounded-lg bg-secondary/30 md:h-56" aria-hidden="true" />
);

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

        <Suspense fallback={<SectionFallback />}>
          <ExperienceSection />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <ProjectsSection />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <SkillsSection />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <EducationSection />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <ContactSection />
        </Suspense>
      </main>
    </div>
  );
};

export default Index;
