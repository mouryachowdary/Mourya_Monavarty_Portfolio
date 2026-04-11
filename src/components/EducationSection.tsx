import { GraduationCap, Lightbulb } from "lucide-react";
import { education, howIWork } from "@/data/resumeData";

const EducationSection = () => {
  return (
    <section id="education" className="py-20 bg-secondary/30">
      <div className="container px-6">
        <div className="mb-12">
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-2">
            &gt; education.fetch()
          </p>

          <h2 className="text-4xl font-bold">
            Education & How I Work
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Education */}
          <div className="space-y-6">
            <h3 className="text-lg font-mono text-primary mb-4 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-primary" />
              Education
            </h3>

            {education.map((edu, i) => (
              <div
                key={i}
                className="bg-card rounded-lg p-6 border border-border hover:scale-[1.02] transition-all duration-200"
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
              </div>
            ))}
          </div>

          {/* How I Work */}
          <div className="space-y-6">
            <h3 className="text-lg font-mono text-primary mb-4 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-primary" />
              How I Work
            </h3>

            {howIWork.map((paragraph, i) => (
              <div
                key={i}
                className="bg-card rounded-lg p-6 border border-border hover:scale-[1.02] transition-all duration-200"
              >
                <p className="text-foreground text-sm leading-relaxed">
                  {paragraph}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default EducationSection;
