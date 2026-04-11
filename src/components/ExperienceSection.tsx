import { experiences } from "@/data/resumeData";

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="py-20 bg-secondary/30 print:py-2"
    >
      <div className="container px-6">

        {/* Section Header */}
        <div className="mb-12 print:mb-3">
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-2 print:mb-1">
            &gt; career.history
          </p>

          <h2 className="text-4xl font-bold print:text-xl">
            Professional Experience
          </h2>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6 print:space-y-4">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="relative bg-card rounded-lg p-6 print:p-4 border border-border hover:scale-[1.01] transition-all duration-200"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4 print:gap-3">

                {/* Number */}
                <span className="text-5xl font-bold text-primary/20 font-mono print:hidden">
                  {exp.number}
                </span>

                <div className="flex-1">

                  {/* Title + Period */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 print:mb-1">
                    <h3 className="text-xl font-bold text-foreground print:text-base">
                      {exp.title}
                    </h3>

                    <span className="font-mono text-xs text-primary tracking-wider">
                      {exp.period}
                    </span>
                  </div>

                  {/* Company */}
                  <p className="text-primary font-semibold text-sm print:text-xs mb-1">
                    {exp.company}
                  </p>

                  {/* Location */}
                  <p className="text-muted-foreground text-xs mb-4 print:mb-2">
                    {exp.Location}
                  </p>

                  {/* Tasks */}
                  <ul className="space-y-1.5 print:space-y-1 mb-4 print:mb-2">
                    {exp.tasks.map((task, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-sm print:text-xs text-secondary-foreground leading-relaxed print:leading-tight"
                      >
                        <span className="text-primary mt-1">▸</span>
                        {task}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 print:gap-1">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full border border-primary/20 print:px-2 print:py-0.5 print:text-[10px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;
