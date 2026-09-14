import { projects } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading eyebrow="Projects" title="Selected work" />

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.name}
            className="flex flex-col rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent/50"
          >
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
        ))}
      </div>
    </section>
  );
}
