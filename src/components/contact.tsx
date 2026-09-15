import { profile } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/icons";

const infoLinks = [
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    value: profile.email,
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    ),
  },
  {
    label: "Phone",
    href: `tel:${profile.phone.replace(/\s+/g, "")}`,
    value: profile.phone,
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
      </svg>
    ),
  },
];

const socialLinks = [
  { label: "GitHub", href: profile.github, icon: GithubIcon },
  { label: "LinkedIn", href: profile.linkedin, icon: LinkedinIcon },
  { label: "WhatsApp", href: profile.whatsapp, icon: WhatsappIcon },
];

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-20">
      <Reveal>
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div>
            <SectionHeading eyebrow="Contact" title="Let's work together" />
            <p className="max-w-xl text-base leading-relaxed text-muted">
              Always happy to talk generative AI, RAG, or agent systems.
              Whichever channel below works best for you.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  title={link.label}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface text-foreground transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-lg hover:shadow-accent-soft"
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {infoLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                className="group flex items-center gap-4 rounded-xl border border-border bg-surface p-5 transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-lg hover:shadow-accent-soft"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent transition-colors">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="flex flex-col">
                  <span className="text-xs font-medium text-muted">{link.label}</span>
                  <span className="mt-0.5 text-sm font-medium">{link.value}</span>
                </span>
              </a>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
