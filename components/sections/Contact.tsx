import { Mail } from "lucide-react";
import { contactLinks, profile } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";

export function Contact() {
  return (
    <section className="bg-portfolio-band/50 px-6 py-24" id="contact">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <p className="mb-3 font-mono text-sm text-portfolio-accent">06. What&apos;s Next?</p>
          <h2 className="mb-4 text-3xl font-bold text-portfolio-heading md:text-4xl">Get In Touch</h2>
          <p className="mb-10 leading-relaxed text-portfolio-muted">
            I&apos;m open to Software Engineer and Full-Stack Software Engineer opportunities. Whether you&apos;re a
            recruiter, founder, or engineering team lead, let&apos;s connect and build something impactful.
          </p>
        </Reveal>

        <Reveal>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              className="magnetic-btn inline-flex items-center gap-2 rounded-lg border-2 border-portfolio-accent px-8 py-4 text-lg font-medium text-portfolio-accent transition-all hover:bg-portfolio-accent/10"
              href={`mailto:${profile.email}`}
            >
              <Mail size={20} />
              Say Hello
            </a>
          </div>
        </Reveal>

        <Reveal className="mt-10 flex flex-wrap justify-center gap-6">
          {contactLinks.map(({ href, label, icon: Icon }) => (
            <a
              className="flex items-center gap-2 text-sm text-portfolio-muted transition-colors hover:text-portfolio-accent"
              href={href}
              key={href}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              target={href.startsWith("http") ? "_blank" : undefined}
            >
              <Icon size={16} />
              {label}
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
