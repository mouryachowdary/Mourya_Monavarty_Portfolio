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
                whileTap={{ scale: 1.15 }}
                transition={{ duration: 0.5 }}
              >
                <GraduationCap className="w-5 h-5 group-hover:drop-shadow-[0_0_8px_hsl(174,72%,50%,0.6)] transition-all duration-300" />
              </motion.div>
              Education
            </h3>

            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{
                  y: -4,
                  boxShadow: "0 0 25px hsl(174 72% 50% / 0.2)",
                }}
                whileTap={{ scale: 0.97 }}
                className="bg-card rounded-lg p-6 gradient-border transition-shadow duration-300 cursor-default"
              >
                <span className="font-mono text-xs text-primary tracking-wider">
                  {edu.period}
                </span>

                <h4 className="text-foreground font-bold mt-1">
                  {edu.degree}
                </h4>

                <p className="text-muted-foreground text-sm mt-1">
                  {edu.school}
                </p>
              </motion.div>
            ))}
          </div>

          {/* How I Work */}
          <div className="space-y-6">
            <h3 className="text-lg font-mono text-primary mb-4 flex items-center gap-2 group">
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.2 }}
                whileTap={{ scale: 1.15 }}
                transition={{ duration: 0.5 }}
              >
                <Lightbulb className="w-5 h-5 group-hover:drop-shadow-[0_0_8px_hsl(174,72%,50%,0.6)] transition-all duration-300" />
              </motion.div>
              How I Work
            </h3>

            {howIWork.map((paragraph, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{
                  y: -4,
                  boxShadow: "0 0 25px hsl(174 72% 50% / 0.2)",
                }}
                whileTap={{ scale: 0.97 }}
                className="bg-card rounded-lg p-6 gradient-border transition-shadow duration-300 cursor-default"
              >
                <p className="text-foreground text-sm leading-relaxed">
                  {paragraph}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default EducationSection;
