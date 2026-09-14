import { experience, education } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading eyebrow="Experience" title="Where I've worked" />

      <div className="space-y-10">
        {experience.map((job) => (
          <div
            key={job.company}
            className="grid gap-2 border-b border-border pb-10 last:border-0 last:pb-0 sm:grid-cols-[200px_1fr] sm:gap-8"
          >
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
        ))}
      </div>

      <div className="mt-12 grid gap-2 sm:grid-cols-[200px_1fr] sm:gap-8">
        <div>
          <p className="font-medium">Education</p>
          <p className="mt-1 text-sm text-muted">{education.period}</p>
        </div>
        <div>
          <p className="font-medium text-accent">{education.degree}</p>
          <p className="mt-1 text-sm text-muted">{education.school}</p>
        </div>
      </div>
    </section>
  );
}
