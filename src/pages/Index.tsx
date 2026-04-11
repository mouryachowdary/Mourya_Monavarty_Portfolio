import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

// Lazy load BELOW-THE-FOLD sections
const ExperienceSection = lazy(() => import("@/components/ExperienceSection"));
const ProjectsSection = lazy(() => import("@/components/ProjectsSection"));
const SkillsSection = lazy(() => import("@/components/SkillsSection"));
const EducationSection = lazy(() => import("@/components/EducationSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Load instantly (important for LCP) */}
      <Navbar />
      <HeroSection />

      {/* Lazy load rest (performance boost) */}
      <Suspense fallback={<div className="text-center mt-10">Loading...</div>}>
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </Suspense>
    </div>
  );
};

export default Index;
