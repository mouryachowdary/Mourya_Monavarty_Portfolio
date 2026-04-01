import { motion } from "framer-motion";
import { Server, Network, Shield, Code, Monitor, Settings, Database } from "lucide-react";
import { skillGroups } from "@/data/resumeData";

const iconMap: Record<string, React.ElementType> = {
  "System Administration": Server,
  "Networking & Infrastructure": Network,
  "Security & ITSM": Shield,
  "Languages & Automation": Code,
  "OS & Platforms": Monitor,
  "Tools & Software": Settings,
  "Databases": Database,
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 print:py-3 print:[break-before:page]">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-16 print:mb-3"
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-2 print:mb-1">
            &gt; skills.list()
          </p>
          <h2 className="text-4xl font-bold font-display print:text-xl">
            Technical Skills
          </h2>
        </motion.div>

        <div className="skills-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 print:grid-cols-2 print:gap-2">
          {skillGroups.map((group, i) => {
            const Icon = iconMap[group.title] || Server;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 0 30px hsl(174 72% 50% / 0.25)",
                }}
                whileTap={{ scale: 0.98 }}
                className="skills-card bg-card rounded-lg p-6 print:p-3 gradient-border transition-shadow duration-300 cursor-default group"
              >
                <motion.div
                  className="skills-icon"
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.2 }}
                  whileTap={{ scale: 1.15 }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon className="w-8 h-8 text-primary mb-4 print:mb-2 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_hsl(174,72%,50%,0.6)]" />
                </motion.div>

                <h3 className="text-lg font-bold font-display mb-4 print:mb-2 print:text-sm text-foreground">
                  {group.title}
                </h3>

                <ul className="space-y-2 print:space-y-1">
                  {group.skills.map((skill) => (
                    <motion.li
                      key={skill}
                      className="text-sm print:text-[11px] text-muted-foreground flex items-center gap-2"
                      whileHover={{ x: 4, color: "hsl(200, 20%, 90%)" }}
                      whileTap={{ x: 4 }}
                      transition={{ duration: 0.15 }}
                    >
                      <motion.span
                        className="w-1.5 h-1.5 bg-primary rounded-full"
                        whileHover={{ scale: 2 }}
                        whileTap={{ scale: 2 }}
                      />
                      {skill}
                    </motion.li>
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
