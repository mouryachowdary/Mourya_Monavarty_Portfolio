import { motion } from "framer-motion";
import { BriefcaseBusiness, ChevronDown, MapPin } from "lucide-react";
import { experiences } from "@/data/resumeData";

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-shell bg-secondary/20 py-20 sm:py-24 lg:py-28 print:py-2">
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
              Career history / measurable impact
            </p>
            <h2 className="flex items-center gap-3 text-3xl font-bold tracking-tight text-foreground sm:text-5xl print:text-xl">
              <span className="h-10 w-1 rounded-full bg-primary shadow-[0_0_18px_hsl(174_72%_50%_/_0.6)] print:hidden" />
              <BriefcaseBusiness className="hidden h-7 w-7 text-primary print:hidden" />
              Professional Experience
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-muted-foreground sm:text-right">
            Infrastructure, security, and automation work across enterprise environments.
          </p>
        </motion.div>

        <div className="space-y-5 print:space-y-4">
          {experiences.map((exp, i) => {
            const visibleTasks = exp.tasks.slice(0, 5);
            const additionalTasks = exp.tasks.slice(5);

            return (
              <motion.article
                key={exp.number}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-border/80 bg-card/70 p-5 shadow-[0_18px_50px_hsl(220_20%_3%_/_0.14)] transition-colors hover:border-primary/35 sm:p-7 print:rounded-lg print:p-4"
              >
                <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-primary via-primary/40 to-transparent opacity-70" aria-hidden="true" />
                <div className="flex flex-col gap-5 sm:flex-row sm:gap-7">
                  <div className="flex shrink-0 items-start justify-between sm:block">
                    <span className="font-mono text-4xl font-bold tracking-tight text-primary/25 sm:text-5xl print:text-3xl">
                      {exp.number}
                    </span>
                    <span className="rounded-full border border-primary/20 bg-primary/[0.06] px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-primary sm:hidden">
                      {exp.period}
                    </span>
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                      <div>
                        <h3 className="text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary print:text-base">
                          {exp.title}
                        </h3>
                        <p className="mt-1 text-sm font-medium text-primary">{exp.company}</p>
                        <p className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                          <MapPin className="h-3.5 w-3.5 text-primary/70" />
                          {exp.Location}
                        </p>
                      </div>
                      <span className="hidden rounded-full border border-primary/20 bg-primary/[0.06] px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-primary sm:inline-flex print:inline-flex">
                        {exp.period}
                      </span>
                    </div>

                    <ul className="mt-5 space-y-2 print:mt-2 print:space-y-1">
                      {visibleTasks.map((task) => (
                        <li key={task} className="flex items-start gap-2 text-sm leading-6 text-secondary-foreground print:text-xs print:leading-tight">
                          <span className="mt-1 text-primary" aria-hidden="true">▸</span>
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>

                    {additionalTasks.length > 0 && (
                      <details className="group mt-4 print:mt-2 print:block">
                        <summary className="inline-flex cursor-pointer list-none items-center gap-2 rounded-md border border-border px-3 py-2 text-xs font-semibold text-muted-foreground transition hover:border-primary/40 hover:text-primary [&::-webkit-details-marker]:hidden print:hidden">
                          View {additionalTasks.length} more responsibilities
                          <ChevronDown className="h-3.5 w-3.5 transition-transform group-open:rotate-180" />
                        </summary>
                        <ul className="mt-3 space-y-2 print:mt-0 print:space-y-1">
                          {additionalTasks.map((task) => (
                            <li key={task} className="flex items-start gap-2 text-sm leading-6 text-secondary-foreground print:text-xs print:leading-tight">
                              <span className="mt-1 text-primary" aria-hidden="true">▸</span>
                              <span>{task}</span>
                            </li>
                          ))}
                        </ul>
                      </details>
                    )}

                    <div className="mt-5 flex flex-wrap gap-2 border-t border-border/70 pt-4 print:mt-2 print:pt-2">
                      {exp.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tag}
                          initial={{ opacity: 0, y: 5 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.25, delay: tagIndex * 0.035 }}
                          whileHover={{ y: -3, scale: 1.05, backgroundColor: "hsl(174 72% 50% / 0.16)" }}
                          whileTap={{ scale: 0.96 }}
                          className="cursor-default rounded-full border border-primary/15 bg-primary/[0.06] px-2.5 py-1 font-mono text-[10px] text-primary/90 transition-colors print:px-2 print:py-0.5 print:text-[10px]"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
