import { useState } from "react";
import { motion } from "framer-motion";
import {
  Activity,
  Briefcase,
  FolderGit2,
  Github,
  ExternalLink,
  Image,
  Rocket,
  Stethoscope,
  X,
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
  const [previewImage, setPreviewImage] = useState<string | null>(null);

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

              {project.features?.length ? (
                <div className="mb-6 text-sm text-muted-foreground space-y-2">
                  <p className="text-xs uppercase tracking-[0.35em] text-primary/70 mb-2">
                    Features
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {/* 🔥 LINKS SECTION */}
              <div className="flex flex-wrap gap-3 mt-auto">

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

                {project.previewImage && (
                  <motion.button
                    type="button"
                    onClick={() => setPreviewImage(project.previewImage)}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 12px hsl(174 72% 50% / 0.6)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-mono 
                               border border-primary/30 rounded-md text-primary 
                               hover:bg-primary/10 transition"
                  >
                    <Image className="w-4 h-4" />
                    Preview
                  </motion.button>
                )}

              </div>

            </motion.div>
            );
          })}
        </div>

      </div>

      {previewImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-primary/20 bg-slate-950 shadow-2xl"
          >
            <button
              type="button"
              onClick={() => setPreviewImage(null)}
              className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-slate-950/95 text-primary transition hover:bg-slate-900"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={previewImage}
              alt="Project preview"
              className="w-full rounded-b-3xl object-contain"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default ProjectsSection;
