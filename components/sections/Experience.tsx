import type React from "react";
import { ChevronRight } from "lucide-react";
import { experience } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  return (
    <section className="bg-portfolio-band/50 px-6 py-24" id="experience">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <SectionHeading index="02" title="Experience" />
        </Reveal>

        <Reveal className="mt-10">
          <div className="card-hover rounded-xl border border-portfolio-line bg-portfolio-surface p-6 md:p-8">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-2">
              <div>
                <h3 className="text-xl font-bold text-portfolio-heading">{experience.title}</h3>
                <p className="mt-1 font-mono text-sm text-portfolio-accent">{experience.company}</p>
              </div>
              <span className="rounded-full border border-portfolio-line bg-portfolio-bg px-3 py-1 text-sm text-portfolio-muted">
                {experience.dates}
              </span>
            </div>

            <div className="space-y-4">
              {experience.bullets.map((item, index) => (
                <div
                  className="experience-item flex gap-3"
                  key={item.title}
                  style={{ "--item-delay": `${index * 45}ms` } as React.CSSProperties}
                >
                  <ChevronRight className="mt-1 shrink-0 text-portfolio-accent" size={14} />
                  <p className="text-sm leading-relaxed text-portfolio-muted">
                    <strong className="text-portfolio-text">{item.title}</strong> - {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
