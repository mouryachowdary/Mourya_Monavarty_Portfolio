import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

const ExperienceSection = lazy(() => import("@/components/ExperienceSection"));
const ProjectsSection = lazy(() => import("@/components/ProjectsSection"));
const SkillsSection = lazy(() => import("@/components/SkillsSection"));
const EducationSection = lazy(() => import("@/components/EducationSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));

const SectionFallback = () => (
  <div className="h-40 md:h-56 w-full animate-pulse bg-secondary/30 rounded-lg" aria-hidden="true" />
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
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
    </div>
  );
};

export default Index;
