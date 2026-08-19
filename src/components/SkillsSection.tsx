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
    <section id="skills" className="section-shell py-20 sm:py-24 lg:py-28 print:py-3 print:[break-before:page]">
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
              Capability map / toolbelt
            </p>
            <h2 className="flex items-center gap-3 text-3xl font-bold tracking-tight text-foreground sm:text-5xl print:text-xl">
              <span className="h-10 w-1 rounded-full bg-primary shadow-[0_0_18px_hsl(174_72%_50%_/_0.6)] print:hidden" />
              Technical Skills
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-muted-foreground sm:text-right">
            A practical stack spanning infrastructure, security, automation, and application quality.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 rounded-2xl border border-primary/20 bg-primary/[0.05] p-5 sm:p-6 print:hidden"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">Core stack</p>
              <p className="mt-1 text-sm text-muted-foreground">The tools I reach for most often.</p>
            </div>
            <div className="flex flex-wrap gap-2 sm:justify-end">
              {coreStack.map((skill) => (
                <span key={skill} className="rounded-full border border-primary/20 bg-background/50 px-3 py-1.5 font-mono text-xs text-foreground">
                  {skill}
                </span>
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
                className="skills-card group rounded-2xl border border-border/80 bg-card/65 p-5 transition-colors hover:border-primary/35 print:rounded-lg print:p-3"
              >
                <div className="mb-5 flex items-start justify-between print:mb-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/[0.07] print:h-7 print:w-7">
                    <Icon className="skills-icon h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110 print:h-4 print:w-4" />
                  </div>
                  <span className="font-mono text-[10px] text-muted-foreground">0{i + 1}</span>
                </div>

                <h3 className="mb-4 text-base font-semibold tracking-tight text-foreground print:mb-2 print:text-sm">
                  {group.title}
                </h3>

                <ul className="space-y-2 print:space-y-1">
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
