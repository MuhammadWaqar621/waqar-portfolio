import { experience, education } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-20">
      <Reveal>
        <SectionHeading eyebrow="Experience" title="Where I've worked" />
      </Reveal>

      <div className="relative space-y-10 border-l border-border pl-8">
        {experience.map((job) => (
          <Reveal key={job.company} className="relative">
            <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-accent-soft" />
            <div className="grid gap-2 sm:grid-cols-[200px_1fr] sm:gap-8">
              <div>
                <p className="font-medium">{job.company}</p>
                <p className="mt-1 text-sm text-muted">{job.period}</p>
                <p className="text-sm text-muted">{job.location}</p>
              </div>
              <div>
                <p className="font-medium text-accent">{job.role}</p>
                <ul className="mt-3 space-y-2">
                  {job.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-2 text-sm leading-relaxed text-muted"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}

        <Reveal className="relative">
          <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-muted ring-4 ring-surface" />
          <div className="grid gap-2 sm:grid-cols-[200px_1fr] sm:gap-8">
            <div>
              <p className="font-medium">Education</p>
              <p className="mt-1 text-sm text-muted">{education.period}</p>
            </div>
            <div>
              <p className="font-medium text-accent">{education.degree}</p>
              <p className="mt-1 text-sm text-muted">{education.school}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
