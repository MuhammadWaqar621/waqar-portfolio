import { projects } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { GithubIcon } from "@/components/icons";

function ExternalLinkIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <path d="M14 4h6v6M20 4 10 14M6 4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1" />
    </svg>
  );
}

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

              <div className="mt-4 flex flex-wrap items-center gap-4 text-xs">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-muted transition-colors hover:text-accent"
                  >
                    <ExternalLinkIcon className="h-3.5 w-3.5" />
                    {project.liveLabel ?? "Live demo"}
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-muted transition-colors hover:text-accent"
                  >
                    <GithubIcon className="h-3.5 w-3.5" />
                    View code
                  </a>
                )}
                {!project.repoUrl && !project.liveUrl && (
                  <span className="text-muted">Private project</span>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
