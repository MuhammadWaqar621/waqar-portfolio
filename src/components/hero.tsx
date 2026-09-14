import Image from "next/image";
import { profile } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex max-w-5xl flex-col-reverse items-start gap-10 px-6 pt-16 pb-20 sm:pt-24 sm:pb-28 md:flex-row md:items-center md:justify-between"
    >
      <div className="max-w-2xl">
        <p className="text-sm font-medium text-accent">{profile.tagline}</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-3 text-lg text-muted sm:text-xl">{profile.title}</p>
        <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
          {profile.bio}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            View projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-surface"
          >
            Get in touch
          </a>
        </div>

        <p className="mt-8 text-sm text-muted">{profile.location}</p>
      </div>

      <Image
        src="/profile.jpg"
        alt={profile.name}
        width={192}
        height={192}
        priority
        className="h-36 w-36 shrink-0 rounded-full border border-border object-cover sm:h-48 sm:w-48"
      />
    </section>
  );
}
