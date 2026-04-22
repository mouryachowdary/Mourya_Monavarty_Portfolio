import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import profilePic from "@/assets/profile.jpg";
import { personalInfo } from "@/data/resumeData";

const tagContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const tagItem: Variants = {
  hidden: { opacity: 0, y: 12, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 260,
      damping: 18,
    },
  },
};

const HeroSection = () => {
  const [showBackgroundImage, setShowBackgroundImage] = useState(false);

  useEffect(() => {
    const schedule = () => setShowBackgroundImage(true);
    const fallbackToTimeout = () => {
      const timeoutId = window.setTimeout(schedule, 1200);
      return () => window.clearTimeout(timeoutId);
    };

    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(schedule, { timeout: 2000 });
      return () => window.cancelIdleCallback(id);
    }

    return fallbackToTimeout();
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen print:min-h-0 flex items-center justify-center overflow-hidden print:py-4 section-shell"
    >
      {/* Background */}
      <div className="absolute inset-0 print:hidden">
        {showBackgroundImage ? (
          <img
            src={heroBg}
            alt=""
            loading="lazy"
            fetchPriority="low"
            decoding="async"
            className="w-full h-full object-cover opacity-40"
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="container relative z-10 px-6 py-20 print:py-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl flex flex-col md:flex-row items-center gap-10 print:gap-4"
        >
          {/* 🔥 Profile Image (FINAL) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1.05 }}
            className="shrink-0 print:hidden"
          >
            <div className="relative w-40 h-48 md:w-52 md:h-60 rounded-xl overflow-hidden border border-primary/40 transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,255,200,0.45)] active:shadow-[0_0_40px_rgba(0,255,200,0.45)]">

              {/* Glow Border */}
              <div className="absolute inset-0 rounded-xl border border-primary/40 pointer-events-none" />

              <img
                src={profilePic}
                alt={personalInfo.name}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                sizes="(max-width: 768px) 160px, 208px"
                className="w-full h-full object-cover object-top transition-transform duration-300"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <div>
            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-mono text-primary text-sm tracking-widest uppercase mb-4 print:mb-1"
            >
              &gt; Hello, I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-5xl md:text-7xl font-bold font-display mb-4 print:mb-2 text-glow-strong print:text-3xl"
            >
              {personalInfo.name.split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  className={`${
                    i === 0 ? "text-primary" : "text-foreground"
                  } inline-block`}
                  whileHover={{
                    scale: 1.1,
                    textShadow:
                      i === 0
                        ? "0 0 30px hsl(174 72% 50% / 0.6)"
                        : "0 0 20px rgba(255,255,255,0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.h1>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-xl md:text-2xl text-muted-foreground font-display font-light mb-8 print:mb-2 print:text-base"
            >
              {personalInfo.title}
            </motion.h2>

            {/* Summary */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="text-secondary-foreground leading-relaxed print:leading-tight max-w-2xl mb-10 print:mb-3 text-base print:text-sm"
            >
              {personalInfo.summary}
            </motion.p>

            <motion.div
              variants={tagContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-3 mb-10 print:hidden"
            >
              {personalInfo.highlights.map((highlight, index) => (
                <motion.span
                  key={highlight}
                  variants={tagItem}
                  animate={{ y: [0, index % 2 === 0 ? -3 : 3, 0] }}
                  transition={{
                    y: {
                      duration: 3 + index * 0.35,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                  whileHover={{
                    y: -4,
                    scale: 1.06,
                    boxShadow: "0 0 24px hsl(174 72% 50% / 0.32)",
                    borderColor: "hsl(174 72% 50% / 0.55)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  className="rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-sm font-mono text-primary"
                >
                  {highlight}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 print:hidden"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-5 h-8 border-2 border-primary/40 rounded-full flex justify-center pt-1"
        >
          <div className="w-1 h-2 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
