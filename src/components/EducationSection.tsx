import { motion } from "framer-motion";
import { CheckCircle2, GraduationCap, Lightbulb, ShieldCheck } from "lucide-react";
import { education, howIWork } from "@/data/resumeData";

const EducationSection = () => {
  return (
    <section id="education" className="section-shell bg-secondary/30 py-20 sm:py-24 lg:py-28 print:py-2">
      <div className="container mx-auto px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex flex-col justify-between gap-5 sm:mb-14 sm:flex-row sm:items-end print:mb-3"
        >
          <div>
            <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary sm:text-sm print:mb-1">
              Credentials / operating principles
            </p>
            <h2 className="flex items-center gap-3 text-3xl font-bold tracking-tight text-foreground sm:text-5xl print:text-xl">
              <span className="h-10 w-1 rounded-full bg-primary shadow-[0_0_18px_hsl(174_72%_50%_/_0.6)] print:hidden" />
              Education &amp; How I Work
            </h2>
          </div>
          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground sm:text-right">
            <span className="flex items-center gap-2 text-primary">
              <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_hsl(174_72%_50%_/_0.8)]" />
              Continuous learning active
            </span>
          </div>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          <div className="rounded-2xl border border-border/80 bg-card/60 p-5 sm:p-7">
            <div className="mb-6 flex items-center justify-between border-b border-border/70 pb-4">
              <h3 className="flex items-center gap-2 font-mono text-sm uppercase tracking-[0.16em] text-primary">
                <GraduationCap className="h-5 w-5" />
                Credentials
              </h3>
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">{education.length} records</span>
            </div>
            <div className="space-y-4">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  whileHover={{ y: -3 }}
                  className="group relative overflow-hidden rounded-xl border border-border/80 bg-background/40 p-5 transition-colors hover:border-primary/35"
                >
                  <div className="absolute inset-y-0 left-0 w-1 bg-primary/50 transition-all group-hover:w-2" aria-hidden="true" />
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">{edu.period}</p>
                      <h4 className="mt-2 font-semibold text-foreground">{edu.degree}</h4>
                      <p className="mt-1 text-sm text-muted-foreground">{edu.school}</p>
                    </div>
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary transition-transform group-hover:scale-110" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border/80 bg-card/60 p-5 sm:p-7">
            <div className="mb-6 flex items-center justify-between border-b border-border/70 pb-4">
              <h3 className="flex items-center gap-2 font-mono text-sm uppercase tracking-[0.16em] text-primary">
                <Lightbulb className="h-5 w-5" />
                Operating principles
              </h3>
              <ShieldCheck className="h-5 w-5 text-primary" />
            </div>
            <div className="space-y-4">
              {howIWork.map((paragraph, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  whileHover={{ y: -3 }}
                  className="group relative overflow-hidden rounded-xl border border-border/80 bg-background/40 p-5 transition-colors hover:border-primary/35"
                >
                  <div className="mb-3 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-primary/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    Principle 0{i + 1}
                  </div>
                  <p className="text-sm leading-relaxed text-secondary-foreground">{paragraph}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
