import { motion } from "framer-motion";
import { experiences } from "@/data/resumeData";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-secondary/30">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary text-sm">&gt; career.history</p>
          <h2 className="text-4xl font-bold">Professional Experience</h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-card p-6 rounded-lg gradient-border"
            >
              <h3 className="text-xl font-bold">{exp.title}</h3>
              <p className="text-primary text-sm">{exp.company}</p>

              <ul className="mt-4 space-y-2">
                {exp.tasks.map((task, j) => (
                  <li key={j}>▸ {task}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
