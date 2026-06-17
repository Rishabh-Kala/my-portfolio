import { Code2, ExternalLink } from "lucide-react";
import { projects } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Projects() {
  return (
    <section className="px-6 py-24" id="projects">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <SectionHeading index="03" title="Projects" />
        </Reveal>

        <div className="mt-10 grid gap-5">
          {projects.map((project, index) => (
            <Reveal
              className="card-hover flex h-full flex-col rounded-lg border border-portfolio-line bg-portfolio-surface p-6"
              delay={index * 80}
              key={project.title}
            >
              <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                  <p className="mb-2 font-mono text-xs text-portfolio-accent">{project.type}</p>
                  <h3 className="text-lg font-bold text-portfolio-heading">{project.title}</h3>
                </div>
                {project.href ? (
                  <a
                    aria-label={`Open ${project.title}`}
                    className="shrink-0 text-portfolio-muted transition-colors hover:text-portfolio-accent"
                    href={project.href}
                    rel="noopener noreferrer"
                    target="_blank"
                    title={`Open ${project.title}`}
                  >
                    {project.href.includes("github.com") ? <Code2 size={20} /> : <ExternalLink size={20} />}
                  </a>
                ) : null}
              </div>

              <p className="text-sm leading-relaxed text-portfolio-muted">{project.description}</p>
              <p className="mt-3 text-xs leading-relaxed text-portfolio-text">{project.highlights}</p>

              <div className="mt-auto flex flex-wrap gap-x-3 gap-y-1 pt-5 font-mono text-xs text-portfolio-accent">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
