import { projects } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { GithubIcon } from "@/components/icons";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-20">
      <Reveal>
        <SectionHeading eyebrow="Projects" title="Projects I've built" />
      </Reveal>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => {
          const Wrapper = project.url ? "a" : "div";
          return (
            <Reveal key={project.name} className={i % 2 === 1 ? "sm:!delay-100" : ""}>
              <Wrapper
                {...(project.url
                  ? { href: project.url, target: "_blank", rel: "noreferrer" }
                  : {})}
                className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-accent-soft"
              >
                <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-accent to-accent-2 transition-transform duration-300 group-hover:scale-x-100" />
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-medium leading-snug group-hover:text-accent">
                    {project.name}
                  </h3>
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
                <div className="mt-4 flex items-center gap-1.5 text-xs text-muted">
                  {project.url ? (
                    <>
                      <GithubIcon className="h-3.5 w-3.5" />
                      <span className="group-hover:text-accent">View code on GitHub</span>
                    </>
                  ) : (
                    <span>Private project</span>
                  )}
                </div>
              </Wrapper>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
