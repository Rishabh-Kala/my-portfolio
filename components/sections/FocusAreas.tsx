import { focusAreas } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FocusAreas() {
  return (
    <section className="bg-portfolio-band/50 px-6 py-24" id="projects">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <SectionHeading index="04" title="Focus Areas" />
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {focusAreas.map(({ title, description, icon: Icon }, index) => (
            <Reveal
              className="card-hover rounded-xl border border-portfolio-line bg-portfolio-surface p-5"
              delay={index * 80}
              key={title}
            >
              <Icon className="focus-icon mb-3 text-portfolio-accent" size={28} />
              <h3 className="mb-2 text-sm font-semibold text-portfolio-heading">{title}</h3>
              <p className="text-xs leading-relaxed text-portfolio-muted">{description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
