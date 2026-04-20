import { motion } from "framer-motion";
import { BriefcaseBusiness } from "lucide-react";
import { experiences } from "@/data/resumeData";

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="py-24 bg-secondary/30 print:py-2 section-shell"
    >
      <div className="container px-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-16 print:mb-3"
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-2 print:mb-1">
            &gt; career.history
          </p>

          <h2 className="text-4xl font-bold font-display print:text-xl flex items-center gap-3">
            <BriefcaseBusiness className="w-8 h-8 text-primary icon-glow print:hidden" />
            Professional Experience
          </h2>
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-8 print:space-y-4">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="relative bg-card rounded-lg p-6 print:p-4 gradient-border card-hover-glow"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4 print:gap-3">

                {/* Number */}
                <span className="text-5xl font-bold text-primary/20 font-mono print:hidden">
                  {exp.number}
                </span>

                <div className="flex-1">

                  {/* Title + Period */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 print:mb-1">
                    <h3 className="text-xl font-bold font-display text-foreground print:text-base">
                      {exp.title}
                    </h3>

                    <span className="font-mono text-xs text-primary tracking-wider">
                      {exp.period}
                    </span>
                  </div>

                  {/* Company */}
                  <p className="text-primary font-semibold text-sm print:text-xs mb-1">
                    {exp.company}
                  </p>

                  {/* Location */}
                  <p className="text-muted-foreground text-xs mb-4 print:mb-2">
                    {exp.Location}
                  </p>

                  {/* Tasks */}
                  <ul className="space-y-1.5 print:space-y-1 mb-4 print:mb-2">
                    {exp.tasks.map((task, j) => (
                      <motion.li
                        key={j}
                        className="flex items-start gap-2 text-sm print:text-xs text-secondary-foreground leading-relaxed print:leading-tight"
                        whileHover={{ x: 6, color: "hsl(174, 72%, 50%)" }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="text-primary mt-1">▸</span>
                        {task}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 print:gap-1">
                    {exp.tags.map((tag) => (
                      <motion.span
                        key={tag}
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: "hsl(174 72% 50% / 0.2)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400 }}
                        className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full border border-primary/20 cursor-default print:px-2 print:py-0.5 print:text-[10px]"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;
