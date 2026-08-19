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
  ArrowUpRight,
} from "lucide-react";
import { projects } from "@/data/resumeData";

const getProjectIcon = (title: string) => {
  const normalized = title.toLowerCase();
  if (normalized.includes("automation")) return Activity;
  if (normalized.includes("portfolio")) return Briefcase;
  if (normalized.includes("medicare") || normalized.includes("appointment")) return Stethoscope;
  return FolderGit2;
};

const getProjectAccent = (title: string) => {
  const normalized = title.toLowerCase();
  if (normalized.includes("automation")) return "from-primary/25 via-primary/5 to-transparent";
  if (normalized.includes("appointment")) return "from-sky-400/20 via-primary/5 to-transparent";
  if (normalized.includes("portfolio")) return "from-violet-400/20 via-primary/5 to-transparent";
  return "from-amber-300/20 via-primary/5 to-transparent";
};

const ProjectsSection = () => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  return (
    <section id="projects" className="section-shell py-20 sm:py-24 lg:py-28">
      <div className="container mx-auto px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex flex-col justify-between gap-5 sm:mb-14 sm:flex-row sm:items-end"
        >
          <div>
            <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary sm:text-sm">
              Selected work / evidence
            </p>
            <h2 className="flex items-center gap-3 text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
              <span className="h-10 w-1 rounded-full bg-primary shadow-[0_0_18px_hsl(174_72%_50%_/_0.6)]" />
              Featured Projects
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-muted-foreground sm:text-right">
            Practical tools and automation workflows built to make systems easier to trust, test, and operate.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => {
            const ProjectIcon = getProjectIcon(project.title);
            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/80 bg-card/70 shadow-[0_18px_50px_hsl(220_20%_3%_/_0.18)] transition-colors duration-300 hover:border-primary/35"
              >
                <div className={`relative h-36 overflow-hidden bg-gradient-to-br ${getProjectAccent(project.title)}`}>
                  <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(hsl(174_72%_50%_/_0.12)_1px,transparent_1px),linear-gradient(90deg,hsl(174_72%_50%_/_0.12)_1px,transparent_1px)] [background-size:24px_24px]" />
                  <div className="absolute -right-8 -top-12 h-36 w-36 rounded-full border border-primary/20" />
                  <div className="absolute -right-2 -top-5 h-28 w-28 rounded-full border border-primary/10" />
                  <div className="absolute bottom-5 left-6 flex h-12 w-12 items-center justify-center rounded-xl border border-primary/30 bg-background/70 text-primary shadow-[0_0_25px_hsl(174_72%_50%_/_0.18)] backdrop-blur-sm">
                    <ProjectIcon className="h-6 w-6" />
                  </div>
                  <span className="absolute right-5 top-5 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/60">
                    0{i + 1}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-5">
                    <h3 className="text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary">
                      {project.title}
                    </h3>
                    <div className="mt-3 space-y-2 text-sm leading-6 text-muted-foreground">
                      {project.description.map((point, index) => (
                        <p key={index}>{point}</p>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.tags.slice(0, 5).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-primary/15 bg-primary/[0.06] px-2.5 py-1 font-mono text-[10px] text-primary/90"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 5 ? (
                      <span className="rounded-full border border-border px-2.5 py-1 font-mono text-[10px] text-muted-foreground">
                        +{project.tags.length - 5}
                      </span>
                    ) : null}
                  </div>

                  <div className="mt-auto flex flex-wrap items-center gap-2 border-t border-border/70 pt-5">
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="inline-flex items-center gap-2 rounded-md bg-primary px-3.5 py-2 text-xs font-semibold text-primary-foreground transition hover:shadow-[0_0_20px_hsl(174_72%_50%_/_0.3)]"
                      >
                        Live demo
                        <ExternalLink className="h-3.5 w-3.5" />
                      </motion.a>
                    )}
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="inline-flex items-center gap-2 rounded-md border border-border px-3.5 py-2 text-xs font-semibold text-muted-foreground transition hover:border-primary/40 hover:text-primary"
                      >
                        <Github className="h-3.5 w-3.5" />
                        Source code
                      </motion.a>
                    )}
                    {project.previewImage && (
                      <motion.button
                        type="button"
                        onClick={() => setPreviewImage(project.previewImage)}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="inline-flex items-center gap-2 rounded-md border border-border px-3.5 py-2 text-xs font-semibold text-muted-foreground transition hover:border-primary/40 hover:text-primary"
                      >
                        <Image className="h-3.5 w-3.5" />
                        Preview
                      </motion.button>
                    )}
                    <ArrowUpRight className="ml-auto h-4 w-4 text-primary/60 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true" />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {previewImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm"
          onClick={() => setPreviewImage(null)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2 }}
            onClick={(event) => event.stopPropagation()}
            className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-primary/20 bg-slate-950 shadow-2xl"
          >
            <button
              type="button"
              aria-label="Close project preview"
              onClick={() => setPreviewImage(null)}
              className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-slate-950/95 text-primary transition hover:bg-slate-900"
            >
              <X className="h-5 w-5" />
            </button>
            <img src={previewImage} alt="Project preview" className="w-full rounded-b-3xl object-contain" />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default ProjectsSection;
