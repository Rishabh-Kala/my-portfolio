import { education } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Education() {
  const Icon = education.icon;
  const AwardIcon = education.awardIcon;

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <SectionHeading index="06" title="Education" />
        </Reveal>

        <Reveal className="mt-8">
          <div className="card-hover rounded-xl border border-portfolio-line bg-portfolio-surface p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-portfolio-line bg-portfolio-bg">
                <Icon className="text-portfolio-accent" size={22} />
              </div>
              <div>
                <h3 className="font-semibold text-portfolio-heading">{education.degree}</h3>
                <p className="mt-1 text-sm text-portfolio-muted">{education.school}</p>
                <p className="mt-2 font-mono text-xs text-portfolio-accent">
                  {education.dates} / {education.cgpa}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {education.awards.map((award) => (
                    <div
                      className="inline-flex items-center gap-2 rounded-full border border-portfolio-line bg-portfolio-bg px-3 py-1 text-xs text-portfolio-accent"
                      key={award}
                    >
                      <AwardIcon size={12} />
                      {award}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
