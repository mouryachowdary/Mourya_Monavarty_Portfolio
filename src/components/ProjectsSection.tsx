import { motion } from "framer-motion";
import { FolderGit2 } from "lucide-react";
import { projects } from "@/data/resumeData";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <p className="font-mono text-primary text-xs sm:text-sm tracking-widest uppercase mb-2">
            &gt; projects.showcase()
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold font-display">
            Automation Testing Project
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="flex flex-col items-start gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }} // ✅ match Experience
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -4 }} // ✅ subtle lift
              whileTap={{ scale: 0.98 }}
              className="group bg-card rounded-lg p-6 gradient-border flex flex-col w-full max-w-2xl 
                         hover:box-glow transition-shadow duration-300"
            >

              {/* Icon */}
              <div className="flex items-center mb-4">
                <motion.div
                  whileHover={{
                    rotate: [0, -10, 10, 0],
                    scale: 1.2,
                    filter: "drop-shadow(0 0 10px hsl(174 72% 50% / 0.8))",
                  }}
                  whileTap={{
                    scale: 0.9,
                    rotate: -10,
                    filter: "drop-shadow(0 0 12px hsl(174 72% 50% / 1))",
                  }}
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <FolderGit2 className="w-8 h-8 text-primary" />
                </motion.div>
              </div>

              {/* Title (NO animation) */}
              <h3 className="text-lg font-bold font-display text-foreground mb-1">
                {project.title.split("(")[0].trim()}
              </h3>

              <p className="text-sm text-primary font-mono mb-3">
                ({project.title.split("(")[1]}
              </p>

              {/* 🔥 DESCRIPTION (FIXED LIKE SKILLS + EXPERIENCE) */}
              <ul className="text-sm text-muted-foreground mb-6 flex-1 space-y-3">
                {project.description.map((point, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3 leading-relaxed transition-all duration-200"
                    whileHover={{
                      x: 6,
                      color: "hsl(174, 72%, 50%)", // ✅ visible highlight
                    }}
                    whileTap={{
                      x: 6,
                    }}
                  >
                    <motion.span
                      className="w-2 h-2 bg-primary rounded-full mt-2"
                      whileHover={{ scale: 1.8 }}
                      whileTap={{ scale: 1.8 }}
                    />
                    <span>{point}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Tags (already perfect) */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <motion.span
                    key={tag}
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "hsl(174 72% 50% / 0.2)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full border border-primary/20"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
