import { motion } from "framer-motion";
import {
  Code,
  Database,
  Network,
  Server,
  Settings,
  Shield,
  Monitor,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { skillGroups } from "@/data/resumeData";

const iconMap: Record<string, LucideIcon> = {
  "System Administration": Server,
  "Networking & Infrastructure": Network,
  "Security & ITSM": Shield,
  "Languages & Automation": Code,
  "OS & Platforms": Monitor,
  "Tools & Software": Settings,
  "AI & Automation": Wrench,
  Databases: Database,
};

const coreStack = ["Microsoft 365", "Intune", "Windows Server", "PowerShell", "Playwright", "TypeScript", "API Testing", "Azure"];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-shell bg-secondary/20 py-20 sm:py-24 lg:py-28 print:py-3 print:[break-before:page]">
      <div className="container mx-auto px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex flex-col justify-between gap-5 sm:mb-10 sm:flex-row sm:items-end print:mb-3"
        >
          <div>
            <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary sm:text-sm print:mb-1">
              Capability map / core stack
            </p>
            <h2 className="flex items-center gap-3 text-3xl font-bold tracking-tight text-foreground sm:text-5xl print:text-xl">
              <span className="h-10 w-1 rounded-full bg-primary shadow-[0_0_18px_hsl(174_72%_50%_/_0.6)] print:hidden" />
              Technical Skills
            </h2>
          </div>
          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground sm:text-right">
            <span className="text-primary">{skillGroups.length} capability domains</span>
            <span className="hidden text-border sm:inline">/</span>
            <span className="hidden sm:inline">Ready for deployment</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 overflow-hidden rounded-2xl border border-primary/20 bg-primary/[0.05] p-5 sm:p-6 print:hidden"
        >
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-lg border border-primary/25 bg-background/60 text-primary">
                <Code className="h-4 w-4" />
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">Core stack / loaded</p>
                <p className="mt-1 text-sm text-muted-foreground">The tools I reach for most often.</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 lg:max-w-3xl lg:justify-end">
              {coreStack.map((skill, skillIndex) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.25, delay: skillIndex * 0.035 }}
                  whileHover={{ y: -3, scale: 1.05, borderColor: "hsl(174 72% 50% / 0.65)" }}
                  whileTap={{ scale: 0.96 }}
                  className="cursor-default rounded-full border border-primary/20 bg-background/50 px-3 py-1.5 font-mono text-xs text-foreground transition-colors"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="skills-grid grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 print:grid-cols-2 print:gap-2">
          {skillGroups.map((group, i) => {
            const Icon = iconMap[group.title] || Server;
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                whileHover={{ y: -4 }}
                className="skills-card group relative overflow-hidden rounded-2xl border border-border/80 bg-card/65 p-5 transition-colors hover:border-primary/35 print:rounded-lg print:p-3"
              >
                <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-primary/[0.04] blur-2xl transition-opacity group-hover:opacity-0" aria-hidden="true" />
                <div className="relative mb-5 flex items-start justify-between print:mb-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/[0.07] print:h-7 print:w-7">
                    <Icon className="skills-icon h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 print:h-4 print:w-4" />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">0{i + 1} / ready</span>
                </div>

                <h3 className="relative mb-4 text-base font-semibold tracking-tight text-foreground print:mb-2 print:text-sm">
                  {group.title}
                </h3>

                <ul className="relative space-y-2 print:space-y-1">
                  {group.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2 text-sm text-muted-foreground print:text-[11px]">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" aria-hidden="true" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
