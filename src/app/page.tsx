import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { Skills } from "@/components/skills";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
