import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Activity, ArrowDownRight, ArrowUpRight, Download, Server, ShieldCheck } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profilePic from "@/assets/profile.jpg";
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
  { value: "6+", label: "years experience", icon: Activity },
  { value: "500+", label: "endpoints managed", icon: Server },
  { value: "99.5%", label: "availability SLA", icon: ShieldCheck },
];

const HeroSection = () => {
  const [showBackgroundImage, setShowBackgroundImage] = useState(false);

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

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-4rem)] overflow-hidden section-shell print:min-h-0 print:py-4"
    >
      <div className="absolute inset-0 print:hidden" aria-hidden="true">
        {showBackgroundImage ? (
          <img
            src={heroBg}
            alt=""
            loading="lazy"
            fetchPriority="low"
            decoding="async"
            className="h-full w-full object-cover object-center opacity-30"
          />
        ) : null}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,hsl(174_72%_50%_/_0.12),transparent_30%),linear-gradient(180deg,hsl(220_20%_6%_/_0.72),hsl(220_20%_6%_/_0.96))]" />
        <div className="hero-grid absolute inset-0 opacity-40" />
      </div>

      <div className="container relative z-10 mx-auto px-5 pb-20 pt-28 sm:px-6 lg:pb-28 lg:pt-36 print:py-4">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(380px,0.95fr)] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl print:max-w-none"
          >
            <p className="mb-5 font-mono text-xs font-semibold uppercase tracking-[0.24em] text-primary sm:text-sm">
              IT Operations / Automation Testing
            </p>

            <h1 className="max-w-3xl text-5xl font-bold leading-[0.96] tracking-tight text-foreground sm:text-7xl lg:text-8xl print:text-4xl">
              <span className="block text-primary text-glow-strong">Mourya</span>
              <span className="block">Monavarty</span>
            </h1>

            <p className="mt-7 max-w-2xl text-xl leading-relaxed text-muted-foreground sm:text-2xl print:mt-2 print:text-base">
              I build reliable systems, streamline IT operations, and create resilient Playwright-based automation for real-world environments.
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
                  className="rounded-full border border-primary/20 bg-primary/[0.07] px-3 py-1.5 font-mono text-xs text-primary/90"
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="relative mx-auto w-full max-w-xl print:hidden"
          >
            <div className="absolute -inset-8 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />
            <div className="relative grid grid-cols-[minmax(0,1fr)_132px] items-center gap-4 sm:gap-6">
              <motion.div
                whileHover={{ y: -5 }}
                className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-primary/55 bg-card/80 shadow-[0_0_50px_hsl(174_72%_50%_/_0.2)]"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-background/55 via-transparent to-primary/10" />
                <img
                  src={profilePic}
                  alt={personalInfo.name}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  sizes="(max-width: 768px) 70vw, 420px"
                  className="h-full w-full object-cover object-top"
                />
                <div className="absolute bottom-4 left-4 rounded-full border border-primary/25 bg-background/80 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-primary backdrop-blur-md">
                  Systems / QA
                </div>
              </motion.div>

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
