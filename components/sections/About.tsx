import { Download } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section className="px-6 py-24" id="about">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <SectionHeading index="01" title="About Me" />
        </Reveal>

        <div className="mt-8 grid gap-10 md:grid-cols-[3fr_2fr]">
          <Reveal>
            {profile.about.map((paragraph) => (
              <p className="mb-4 text-base leading-relaxed text-portfolio-muted" key={paragraph}>
                {paragraph}
              </p>
            ))}
            <a
              className="magnetic-btn mt-4 inline-flex items-center gap-2 rounded-lg border border-portfolio-line bg-portfolio-surface/70 px-5 py-3.5 font-medium text-portfolio-text transition-all hover:border-portfolio-accent hover:text-portfolio-accent"
              download
              href={profile.resume}
            >
              <Download size={18} />
              Download Resume
            </a>
          </Reveal>

          <Reveal className="flex justify-center md:justify-end">
            <div className="relative h-48 w-48 md:h-56 md:w-56">
              <div className="animate-pulse-glow absolute inset-0 rounded-xl bg-gradient-to-br from-portfolio-accent/20 to-portfolio-bg" />
              <div className="absolute inset-2 flex items-center justify-center rounded-lg border border-portfolio-line bg-portfolio-surface">
                <div className="text-center">
                  <div className="mb-2 text-5xl" aria-hidden="true">
                    {"</>"}
                  </div>
                  <div className="font-mono text-xs text-portfolio-accent">{profile.location}</div>
                  <div className="mt-1 text-xs text-portfolio-muted">Remote-ready</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
