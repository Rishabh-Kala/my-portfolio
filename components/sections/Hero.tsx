import { Code2, Send, SquareUser } from "lucide-react";
import { profile, stats } from "@/data/portfolio";

export function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center px-6 pt-20"
      id="hero"
    >
      <div aria-hidden="true" className="hero-grid pointer-events-none absolute inset-0" />
      <div aria-hidden="true" className="hero-sweep pointer-events-none absolute inset-x-0 top-0 h-full" />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-20">
        <div className="animate-orbit-ring h-[300px] w-[300px] rounded-full border border-portfolio-line" />
        <div className="animate-orbit absolute h-3 w-3 rounded-full bg-portfolio-accent" />
      </div>

      <div className="relative z-10 max-w-4xl text-center md:text-left">
        <p className="animate-fade-up mb-4 font-mono text-sm text-portfolio-accent md:text-base">
          Hi, my name is
        </p>
        <h1 className="animate-fade-up delay-2 mb-3 text-4xl font-extrabold text-portfolio-heading md:text-6xl lg:text-7xl">
          {profile.name}
        </h1>
        <h2 className="animate-fade-up delay-3 mb-8 text-2xl font-semibold text-portfolio-muted md:text-4xl lg:text-5xl">
          {profile.role}
        </h2>
        <p className="animate-fade-up delay-4 mb-10 max-w-2xl text-base leading-relaxed text-portfolio-muted md:text-lg">
          {profile.intro}
        </p>

        <div className="animate-fade-up delay-5 mb-10 flex flex-wrap justify-center gap-6 md:justify-start md:gap-10">
          {stats.map((stat) => (
            <div className="text-center md:text-left" key={stat.label}>
              <div className="text-3xl font-bold text-portfolio-accent md:text-4xl">{stat.value}</div>
              <div className="mt-1 text-xs text-portfolio-muted">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="animate-fade-up delay-6 flex flex-wrap justify-center gap-4 md:justify-start">
          <a
            className="magnetic-btn inline-flex items-center gap-2 rounded-lg border-2 border-portfolio-accent px-7 py-3.5 font-medium text-portfolio-accent transition-all hover:bg-portfolio-accent/10"
            href="#contact"
          >
            <Send size={18} />
            Say Hello
          </a>
          <a
            className="magnetic-btn inline-flex items-center gap-2 px-5 py-3.5 text-portfolio-muted transition-colors hover:text-portfolio-accent"
            href={profile.github}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Code2 size={20} />
            GitHub
          </a>
          <a
            className="magnetic-btn inline-flex items-center gap-2 px-5 py-3.5 text-portfolio-muted transition-colors hover:text-portfolio-accent"
            href={profile.linkedin}
            rel="noopener noreferrer"
            target="_blank"
          >
            <SquareUser size={20} />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
