import { projects } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { GithubIcon } from "@/components/icons";
import { LinkPreview } from "@/components/link-preview";

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
            <article className="relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface p-6">
              <span className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-accent to-accent-2" />
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

              <div className="mt-5 flex flex-wrap items-center gap-2 text-xs">
                {project.liveUrl && (
                  <LinkPreview href={project.liveUrl}>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-accent to-accent-2 px-3 py-1.5 font-medium text-accent-foreground transition-transform hover:-translate-y-0.5 hover:opacity-90"
                    >
                      <ExternalLinkIcon className="h-3.5 w-3.5" />
                      {project.liveLabel ?? "Live demo"}
                    </a>
                  </LinkPreview>
                )}
                {project.repoUrl && (
                  <LinkPreview href={project.repoUrl}>
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="hover-accent-border hover-accent-text flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 font-medium text-foreground transition-colors"
                    >
                      <GithubIcon className="h-3.5 w-3.5" />
                      View code
                    </a>
                  </LinkPreview>
                )}
                {!project.repoUrl && !project.liveUrl && (
                  <span className="rounded-full border border-border px-3 py-1.5 text-muted">
                    Private project
                  </span>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
