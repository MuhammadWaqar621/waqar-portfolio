import Image from "next/image";
import { profile } from "@/lib/data";
import { NeuralBackground } from "@/components/neural-background";
import { Typewriter } from "@/components/typewriter";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/icons";

const rotatingPhrases = [
  "Generative AI",
  "RAG Systems",
  "AI Agents",
  "Multi-Agent Orchestration",
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <NeuralBackground />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      <div
        className="pointer-events-none absolute -top-24 right-[-10%] h-72 w-72 rounded-full opacity-30 blur-3xl animate-float-slow"
        style={{ background: "var(--accent)" }}
      />
      <div
        className="pointer-events-none absolute top-40 left-[-10%] h-72 w-72 rounded-full opacity-20 blur-3xl animate-float-slow"
        style={{ background: "var(--accent-2)", animationDelay: "2s" }}
      />

      <div className="relative mx-auto flex max-w-5xl flex-col-reverse items-start gap-10 px-6 pt-16 pb-20 sm:pt-24 sm:pb-28 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3 py-1 text-xs font-medium text-muted backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Currently AI Lead Engineer @ Softoo
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3 py-1 text-xs font-medium text-muted backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {profile.relocation}
            </span>
          </div>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
            {profile.name}
          </h1>

          <p className="mt-3 h-8 text-lg font-medium text-gradient sm:text-xl">
            <Typewriter phrases={rotatingPhrases} />
          </p>

          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            {profile.bio}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground shadow-lg shadow-accent-soft transition-transform hover:-translate-y-0.5 hover:opacity-90"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-surface"
            >
              Get in touch
            </a>
            <a
              href="/Muhammad-Waqar-Resume.pdf"
              download
              className="rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-surface"
            >
              Download resume
            </a>

            <div className="ml-1 flex items-center gap-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                <GithubIcon className="h-4.5 w-4.5" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                <LinkedinIcon className="h-4.5 w-4.5" />
              </a>
              <a
                href={profile.whatsapp}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                <WhatsappIcon className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

          <p className="mt-8 text-sm text-muted">{profile.location}</p>
        </div>

        <div className="relative shrink-0">
          <div
            className="absolute -inset-1.5 rounded-full opacity-70 blur-md"
            style={{
              background:
                "linear-gradient(135deg, var(--accent), var(--accent-2))",
            }}
          />
          <Image
            src="/profile.jpg"
            alt={profile.name}
            width={192}
            height={192}
            priority
            className="relative h-36 w-36 rounded-full border-2 border-background object-cover object-top sm:h-48 sm:w-48"
          />
        </div>
      </div>
    </section>
  );
}
