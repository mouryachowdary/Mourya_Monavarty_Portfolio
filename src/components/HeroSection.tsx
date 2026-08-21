import { useEffect, useState, type PointerEvent, type CSSProperties } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  Activity,
  ArrowDownRight,
  ArrowUpRight,
  Download,
  ScanLine,
  Server,
  ShieldCheck,
} from "lucide-react";
import heroBgFallback from "@/assets/hero-bg.jpg";
import heroBg1280Webp from "@/assets/hero-bg-1280.webp";
import heroBg1280Avif from "@/assets/hero-bg-1280.avif";
import heroBg1920Webp from "@/assets/hero-bg-1920.webp";
import heroBg1920Avif from "@/assets/hero-bg-1920.avif";
import profileFallback from "@/assets/profile.jpg";
import { personalInfo } from "@/data/resumeData";

const tagContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const tagItem: Variants = {
  hidden: { opacity: 0, y: 12, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 260, damping: 18 },
  },
};

const metrics = [
  { value: "6+", label: "years in enterprise IT", icon: Activity },
  { value: "500+", label: "endpoints managed", icon: Server },
  { value: "99.5%", label: "availability SLA", icon: ShieldCheck },
];

const HeroSection = () => {
  const [showBackgroundImage, setShowBackgroundImage] = useState(false);
  const [revealActive, setRevealActive] = useState(false);

  useEffect(() => {
    const schedule = () => setShowBackgroundImage(true);
    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(schedule, { timeout: 2000 });
      return () => window.cancelIdleCallback(id);
    }

    const timeoutId = window.setTimeout(schedule, 1200);
    return () => window.clearTimeout(timeoutId);
  }, []);

  const handleResume = async () => {
    const { generateResume } = await import("@/lib/generateResume");
    generateResume();
  };

  const startReveal = () => setRevealActive(true);

  const handleRevealStart = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "touch") startReveal();
  };

  const handleMobileReveal = () => setRevealActive((active) => !active);

  const portraitStyle = {
    filter: revealActive ? "saturate(1) contrast(1)" : "brightness(0.2) saturate(0)",
    opacity: revealActive ? 1 : 0,
    transform: revealActive ? "scale(1)" : "scale(1.015)",
  } as CSSProperties;

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-4rem)] overflow-hidden section-shell print:min-h-0 print:py-4"
    >
      <div className="absolute inset-0 print:hidden" aria-hidden="true">
        {showBackgroundImage ? (
          <picture className="absolute inset-0 block">
            <source media="(max-width: 768px)" type="image/avif" srcSet={heroBg1280Avif} />
            <source media="(max-width: 768px)" type="image/webp" srcSet={heroBg1280Webp} />
            <source type="image/avif" srcSet={heroBg1920Avif} />
            <source type="image/webp" srcSet={heroBg1920Webp} />
            <img
              src={heroBgFallback}
              alt=""
              width={1920}
              height={1080}
              loading="lazy"
              fetchPriority="low"
              decoding="async"
              className="h-full w-full object-cover object-center opacity-25"
            />
          </picture>
        ) : null}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,hsl(174_72%_50%_/_0.13),transparent_30%),linear-gradient(180deg,hsl(220_20%_6%_/_0.7),hsl(220_20%_6%_/_0.98))]" />
        <div className="hero-grid absolute inset-0 opacity-40" />
      </div>

      <div className="container relative z-10 mx-auto px-5 pb-20 pt-28 sm:px-6 lg:pb-28 lg:pt-36 print:py-4">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.02fr)_minmax(430px,0.98fr)] lg:gap-16">
          <div className="max-w-3xl print:max-w-none">
            <div className="mb-5 flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary sm:text-sm">
              <span className="relative flex h-3 w-3 items-center justify-center">
                <span className="absolute h-3 w-3 animate-ping rounded-full bg-primary/30" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_12px_hsl(174_72%_50%_/_0.9)]" />
              </span>
              System status: online
            </div>

            <h1 className="max-w-3xl text-5xl font-bold leading-[0.94] tracking-tight text-foreground sm:text-7xl lg:text-8xl print:text-4xl">
              <span className="block text-primary text-glow-strong">Mourya</span>
              <span className="block">Monavarty</span>
            </h1>

            <p className="mt-7 max-w-2xl text-xl font-medium leading-relaxed text-primary/90 sm:text-2xl print:mt-2 print:text-base">
              IT Operations &amp; Test Automation
            </p>

            <p className="mt-3 max-w-2xl text-xl leading-relaxed text-muted-foreground sm:text-2xl print:mt-2 print:text-base">
              I build systems that stay up—and tests that prove it.
            </p>

            <p className="mt-5 max-w-2xl text-base leading-7 text-secondary-foreground/85 print:mt-2 print:text-sm">
              {personalInfo.summary}
            </p>

            <div className="mt-8 flex flex-wrap gap-3 print:hidden">
              <motion.a
                href="#projects"
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[0_0_24px_hsl(174_72%_50%_/_0.24)] transition hover:shadow-[0_0_34px_hsl(174_72%_50%_/_0.4)]"
              >
                View my work
                <ArrowUpRight className="h-4 w-4" />
              </motion.a>
              <motion.button
                type="button"
                onClick={handleResume}
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-md border border-primary/35 bg-background/30 px-5 py-3 text-sm font-semibold text-foreground transition hover:border-primary/70 hover:bg-primary/10"
              >
                Download resume
                <Download className="h-4 w-4 text-primary" />
              </motion.button>
            </div>

            <motion.div
              variants={tagContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-9 flex flex-wrap gap-2 print:hidden"
            >
              {personalInfo.highlights.map((highlight) => (
                <motion.span
                  key={highlight}
                  variants={tagItem}
                  whileHover={{ y: -3, scale: 1.04, boxShadow: "0 0 18px hsl(174 72% 50% / 0.22)" }}
                  whileTap={{ scale: 0.96 }}
                  className="cursor-default rounded-full border border-primary/20 bg-primary/[0.07] px-3 py-1.5 font-mono text-xs text-primary/90 transition-colors hover:border-primary/45"
                >
                  {highlight}
                </motion.span>
              ))}
            </motion.div>

            <div className="mt-10 grid max-w-2xl grid-cols-3 border-y border-border/70 py-5 print:hidden">
              {metrics.map(({ value, label, icon: Icon }, index) => (
                <div key={label} className={`pr-4 ${index > 0 ? "border-l border-border/70 pl-4" : ""}`}>
                  <Icon className="mb-3 h-4 w-4 text-primary" />
                  <p className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">{value}</p>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground sm:text-sm">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="relative mx-auto w-full max-w-2xl print:hidden"
          >
            <div className="pointer-events-none absolute -inset-8 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />
            <div className="relative grid grid-cols-[minmax(0,1fr)_132px] items-center gap-4 sm:gap-6">
              <div
                className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-primary/55 bg-card/80 shadow-[0_0_50px_hsl(174_72%_50%_/_0.2)]"
                onPointerEnter={handleRevealStart}
                onFocus={startReveal}
                tabIndex={0}
                aria-label="System reveal portrait. Hover or focus to initialize the reveal."
              >
                <div className="absolute inset-0 bg-gradient-to-t from-background/65 via-transparent to-primary/10" />
                <div className="absolute inset-0 bg-[linear-gradient(hsl(174_72%_50%_/_0.09)_1px,transparent_1px),linear-gradient(90deg,hsl(174_72%_50%_/_0.09)_1px,transparent_1px)] [background-size:28px_28px] opacity-60" />
                <picture className="block h-full w-full">
                  <source media="(max-width: 640px)" type="image/avif" srcSet="/portfolio/profile-480.avif" />
                  <source media="(max-width: 640px)" type="image/webp" srcSet="/portfolio/profile-480.webp" />
                  <source type="image/avif" srcSet="/portfolio/profile-768.avif" />
                  <source type="image/webp" srcSet="/portfolio/profile-768.webp" />
                  <img
                    src={profileFallback}
                    alt={personalInfo.name}
                    width={768}
                    height={1152}
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    sizes="(max-width: 640px) 82vw, 460px"
                    className="h-full w-full object-cover object-top transition-[filter,opacity,transform] duration-700 ease-out"
                    style={portraitStyle}
                  />
                </picture>

                <img
                  src="/portfolio/profile-wireframe.webp"
                  alt=""
                  aria-hidden="true"
                  width={768}
                  height={1152}
                  className={`pointer-events-none absolute inset-0 z-10 h-full w-full object-cover object-top transition-[opacity,transform] duration-700 ease-out ${revealActive ? "scale-105 opacity-0" : "scale-100 opacity-100"}`}
                />

                <div
                  className={`pointer-events-none absolute inset-0 z-20 transition-[opacity,transform] duration-700 ease-out ${revealActive ? "scale-110 opacity-0" : "scale-100 opacity-100"}`}
                  aria-hidden="true"
                >
                  <div className="absolute inset-0 bg-[linear-gradient(115deg,hsl(220_20%_6%_/_0.22),hsl(220_20%_6%_/_0.08))]" />
                  <div className="absolute inset-[9%_12%_10%] border border-primary/35 [background-image:linear-gradient(hsl(174_72%_50%_/_0.1)_1px,transparent_1px),linear-gradient(90deg,hsl(174_72%_50%_/_0.1)_1px,transparent_1px)] [background-size:22px_22px]" />
                  <div className="absolute left-[15%] top-[16%] h-[62%] w-px bg-primary/55 shadow-[0_0_12px_hsl(174_72%_50%_/_0.7)]" />
                  <div className="absolute right-[15%] top-[16%] h-[62%] w-px bg-primary/55 shadow-[0_0_12px_hsl(174_72%_50%_/_0.7)]" />
                  <div className="absolute left-1/2 top-[12%] h-[76%] w-px -translate-x-1/2 bg-primary/20" />
                  <span className="absolute left-[13%] top-[14%] h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_hsl(174_72%_50%_/_0.8)]" />
                  <span className="absolute right-[13%] top-[14%] h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_hsl(174_72%_50%_/_0.8)]" />
                  <span className="absolute bottom-[20%] left-[13%] h-2 w-2 rounded-full border border-primary bg-background" />
                  <span className="absolute bottom-[20%] right-[13%] h-2 w-2 rounded-full border border-primary bg-background" />
                </div>
                <div className="pointer-events-none absolute inset-0 z-20 opacity-30 [background-image:repeating-linear-gradient(0deg,transparent,transparent_3px,hsl(174_72%_50%_/_0.12)_4px)]" aria-hidden="true" />

                <div className="absolute left-5 top-5 z-30 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                  <div className="flex items-center gap-2">
                    <ScanLine className="h-4 w-4" />
                    Blueprint morph
                  </div>
                  <div className="mt-2 flex gap-1.5 opacity-70" aria-hidden="true">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span className="h-1.5 w-1.5 rounded-full bg-primary/50" />
                    <span className="h-1.5 w-1.5 rounded-full bg-primary/20" />
                  </div>
                </div>


                <div className="absolute bottom-5 left-1/2 z-30 hidden -translate-x-1/2 whitespace-nowrap rounded-full border border-primary/30 bg-background/75 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-primary backdrop-blur-md lg:block">
                  {revealActive ? "Model verified" : "Align blueprint"}
                </div>
              </div>

              <div className="space-y-3">
                <div className="rounded-xl border border-primary/20 bg-card/80 p-3 backdrop-blur-md">
                  <p className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">System health</p>
                  <p className="mt-2 text-2xl font-semibold text-primary">99.5%</p>
                  <p className="text-[10px] text-muted-foreground">availability</p>
                </div>
                <div className="rounded-xl border border-primary/20 bg-card/80 p-3 backdrop-blur-md">
                  <p className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">Endpoints</p>
                  <p className="mt-2 text-2xl font-semibold text-primary">500+</p>
                  <div className="mt-3 flex items-end gap-1" aria-hidden="true">
                    {[30, 42, 36, 57, 49, 70, 64, 82].map((height, index) => (
                      <span key={index} className="h-8 flex-1 rounded-sm bg-primary/15" style={{ height: `${height}%` }} />
                    ))}
                  </div>
                </div>
                <div className="rounded-xl border border-primary/20 bg-card/80 p-3 backdrop-blur-md">
                  <p className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">Focus</p>
                  <p className="mt-2 text-sm font-semibold text-foreground">Reliable automation</p>
                  <ArrowDownRight className="mt-3 h-4 w-4 text-primary" />
                </div>
              </div>
            </div>

            <button
              type="button"
              aria-pressed={revealActive}
              onClick={handleMobileReveal}
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md border border-primary/25 bg-primary/[0.06] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-primary transition hover:border-primary/60 hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary lg:hidden"
            >
              <ScanLine className="h-4 w-4" />
              {revealActive ? "Reset blueprint morph" : "Tap to align blueprint"}
            </button>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#experience"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground transition hover:text-primary lg:flex print:hidden"
      >
        Scroll to explore
        <ArrowDownRight className="h-4 w-4 rotate-45 text-primary" />
      </motion.a>
    </section>
  );
};

export default HeroSection;
