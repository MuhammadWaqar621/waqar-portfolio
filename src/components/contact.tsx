import { profile } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";

const links = [
  { label: "Email", href: `mailto:${profile.email}`, value: profile.email },
  { label: "Phone", href: `tel:${profile.phone.replace(/\s+/g, "")}`, value: profile.phone },
  { label: "GitHub", href: profile.github, value: "github.com/MuhammadWaqar621" },
  {
    label: "LinkedIn",
    href: profile.linkedin,
    value: "linkedin.com/in/muhammad-waqar-1a594411a",
  },
  { label: "WhatsApp", href: profile.whatsapp, value: profile.phone },
];

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading eyebrow="Contact" title="Let's work together" />

      <p className="max-w-xl text-base leading-relaxed text-muted">
        Open to conversations about generative AI, RAG systems, and agentic
        platforms. Reach out through any of the channels below.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            className="flex flex-col rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent/50"
          >
            <span className="text-xs font-medium text-muted">{link.label}</span>
            <span className="mt-1 text-sm font-medium">{link.value}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
