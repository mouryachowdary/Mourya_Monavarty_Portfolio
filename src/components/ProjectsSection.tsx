import { motion } from "framer-motion";
import {
  Activity,
  Briefcase,
  FolderGit2,
  Github,
  ExternalLink,
  Rocket,
  Stethoscope,
} from "lucide-react";
import { projects } from "@/data/resumeData";

const getProjectIcon = (title: string) => {
  const normalized = title.toLowerCase();
  if (normalized.includes("automation")) {
    return Activity;
  }
  if (normalized.includes("portfolio")) {
    return Briefcase;
  }
  if (normalized.includes("medicare") || normalized.includes("appointment")) {
    return Stethoscope;
  }
  return FolderGit2;
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 section-shell">
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

          <h2 className="text-3xl sm:text-4xl font-bold font-display flex items-center gap-3">
            <Rocket className="w-8 h-8 text-primary icon-glow" />
            Featured Projects
          </h2>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => {
            const ProjectIcon = getProjectIcon(project.title);
            return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="group bg-card rounded-lg p-6 gradient-border 
                         card-hover-glow flex flex-col"
            >

              {/* Icon */}
              <div className="flex items-center mb-4">
                <motion.div
                  whileHover={{
                    rotate: [0, -10, 10, 0],
                    scale: 1.15,
                    filter: "drop-shadow(0 0 10px hsl(174 72% 50% / 0.8))",
                  }}
                  whileTap={{
                    scale: 0.9,
                    rotate: -10,
                    filter: "drop-shadow(0 0 12px hsl(174 72% 50% / 1))",
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <ProjectIcon className="w-8 h-8 text-primary" />
                </motion.div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold font-display text-foreground mb-3">
                {project.title}
              </h3>

              {/* Description */}
              <div className="text-sm text-muted-foreground mb-6 space-y-2">
                {project.description.map((point, index) => (
                  <motion.p
                    key={index}
                    whileHover={{
                      x: 6,
                      color: "hsl(174, 72%, 50%)",
                    }}
                    whileTap={{
                      x: 6,
                      color: "hsl(174, 72%, 50%)",
                    }}
                    transition={{ duration: 0.2 }}
                    className="leading-relaxed cursor-default"
                  >
                    {point}
                  </motion.p>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <motion.span
                    key={tag}
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "hsl(174 72% 50% / 0.2)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary 
                               rounded-full border border-primary/20"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              {/* 🔥 LINKS SECTION */}
              <div className="flex gap-3 mt-auto">

                {/* GitHub */}
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 12px hsl(174 72% 50% / 0.6)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-mono 
                               border border-primary/30 rounded-md text-primary 
                               hover:bg-primary/10 transition"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </motion.a>
                )}

                {/* Live Demo */}
                {project.live && (
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 12px hsl(174 72% 50% / 0.6)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-mono 
                               border border-primary/30 rounded-md text-primary 
                               hover:bg-primary/10 transition"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live
                  </motion.a>
                )}

              </div>

            </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
