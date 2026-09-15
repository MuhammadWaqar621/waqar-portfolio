import { projects } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-20">
      <Reveal>
        <SectionHeading eyebrow="Projects" title="Projects I've built" />
      </Reveal>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.name} className={i % 2 === 1 ? "sm:!delay-100" : ""}>
            <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-accent-soft">
              <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-accent to-accent-2 transition-transform duration-300 group-hover:scale-x-100" />
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-medium leading-snug">{project.name}</h3>
                <span className="shrink-0 text-xs text-muted">{project.period}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border px-2.5 py-1 text-xs text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
