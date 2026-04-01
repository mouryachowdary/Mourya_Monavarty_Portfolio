import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/resumeData";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="font-mono text-primary text-xs tracking-widest uppercase mb-2">
            &gt; projects.showcase()
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold font-display">
            Featured Projects
          </h2>
        </motion.div>

        {/* GRID (IMPORTANT CHANGE 🔥) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-card border border-border rounded-xl p-6 flex flex-col justify-between hover:shadow-xl transition-all"
            >

              {/* TITLE */}
              <div>
                <h3 className="text-lg font-bold mb-2">
                  {project.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description[0]}
                </p>
              </div>

              {/* TAGS */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded bg-primary/10 text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* BUTTONS 🔥 */}
              <div className="flex gap-3 mt-auto">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    className="flex items-center gap-1 text-sm px-3 py-1 rounded bg-primary text-white hover:opacity-90"
                  >
                    <ExternalLink size={14} /> Live
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-1 text-sm px-3 py-1 rounded border border-border hover:bg-muted"
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
