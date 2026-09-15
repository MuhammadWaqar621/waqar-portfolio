import { publications } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function Publications() {
  return (
    <section id="publications" className="mx-auto max-w-5xl px-6 py-20">
      <Reveal>
        <SectionHeading eyebrow="Publications" title="Published research" />

        <div className="space-y-5">
          {publications.map((pub) => (
            <a
              key={pub.doi}
              href={pub.url}
              target="_blank"
              rel="noreferrer"
              className="group block rounded-xl border border-border bg-surface p-6 transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-lg hover:shadow-accent-soft"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <h3 className="font-medium leading-snug group-hover:text-accent">
                  {pub.title}
                </h3>
                <span className="shrink-0 text-xs text-muted">{pub.date}</span>
              </div>
              <p className="mt-1 text-sm text-muted">{pub.authors}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{pub.summary}</p>
              <p className="mt-3 text-xs text-muted">
                {pub.venue} · DOI: {pub.doi}
              </p>
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
