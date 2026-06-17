import type React from "react";
import { skillGroups } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Skills() {
  return (
    <section className="px-6 py-24" id="skills">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <SectionHeading index="04" title="Skills & Technologies" />
        </Reveal>

        <div className="mt-10 grid gap-8">
          {skillGroups.map((group, index) => (
            <Reveal delay={index * 70} key={group.title}>
              <h3 className="mb-3 font-mono text-sm font-semibold uppercase tracking-wider text-portfolio-accent">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, skillIndex) => (
                  <span
                    className="skill-tag rounded-lg border border-portfolio-line bg-portfolio-surface px-3 py-1.5 text-sm text-portfolio-text"
                    key={skill}
                    style={{ "--tag-delay": `${skillIndex * 22}ms` } as React.CSSProperties}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
