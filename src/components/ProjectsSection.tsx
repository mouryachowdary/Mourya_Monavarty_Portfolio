import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/resumeData";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="font-mono text-primary text-xs tracking-widest uppercase mb-2">
            &gt; projects.showcase()
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold font-display">
            Featured Projects
          </h2>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="group bg-card rounded-lg p-6 flex flex-col justify-between gradient-border hover:box-glow transition-shadow duration-300"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: i * 0.15,
                ease: "easeOut",
              }}
              tabIndex={0}
            >
              {/* CONTENT */}
              <div>
                {/* TITLE */}
                <h3 className="text-lg font-bold mb-2 text-foreground">
                  {project.title}
                </h3>

                {/* DESCRIPTION with hover glow */}
                <p
                  className="text-sm text-muted-foreground mb-4 leading-relaxed px-2 py-1 rounded-md transition-all duration-300 group-hover:text-foreground group-hover:bg-primary/10 group-hover:[text-shadow:0_0_12px_rgba(34,211,238,0.8)]"
                  tabIndex={0}
                >
                  {project.description[0]}
                </p>
              </div>

              {/* TAGS */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full border border-primary/20 cursor-default"
                    tabIndex={0}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* BUTTONS */}
              <div className="flex gap-3 mt-auto">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm px-3 py-1 rounded bg-primary text-primary-foreground hover:opacity-90 transition"
                  >
                    <ExternalLink size={14} /> Live
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm px-3 py-1 rounded border border-border hover:bg-muted transition"
                  >
                    <Github size={14} /> Code
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
