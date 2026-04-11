import { motion } from "framer-motion";
import { GraduationCap, Lightbulb } from "lucide-react";
import { education, howIWork } from "@/data/resumeData";

const EducationSection = () => {
  return (
    <section id="education" className="py-24 bg-secondary/30">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-2">
            &gt; education.fetch()
          </p>

          <h2 className="text-4xl font-bold font-display">
            Education & How I Work
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <div className="space-y-6">
            <h3 className="text-lg font-mono text-primary mb-4 flex items-center gap-2 group">
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.2 }}
              >
                <GraduationCap className="w-5 h-5" />
              </motion.div>
              Education
            </h3>

            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.15 }}
                className="bg-card rounded-lg p-6 gradient-border"
              >
                <span className="text-primary text-xs">{edu.period}</span>
                <h4 className="font-bold">{edu.degree}</h4>
                <p className="text-muted-foreground text-sm">{edu.school}</p>
              </motion.div>
            ))}
          </div>

          {/* How I Work */}
          <div className="space-y-6">
            <h3 className="text-lg font-mono text-primary mb-4 flex items-center gap-2">
              <Lightbulb className="w-5 h-5" />
              How I Work
            </h3>

            {howIWork.map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.15 }}
                className="bg-card rounded-lg p-6 gradient-border"
              >
                <p className="text-sm">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
