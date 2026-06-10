type SectionHeadingProps = {
  index: string;
  title: string;
};

export function SectionHeading({ index, title }: SectionHeadingProps) {
  return (
    <h2 className="flex items-center gap-3 text-2xl font-bold text-portfolio-heading md:text-3xl">
      <span className="font-mono text-lg text-portfolio-accent">{index}.</span>
      {title}
      <span className="ml-4 h-px flex-1 bg-portfolio-line" />
    </h2>
  );
}
