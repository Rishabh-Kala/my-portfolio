const particles = [
  ["10%", "20%", "0s"],
  ["30%", "70%", "1s"],
  ["60%", "40%", "2s"],
  ["80%", "80%", "3s"],
  ["45%", "15%", "4s"],
  ["20%", "90%", "1.5s"],
  ["70%", "55%", "2.5s"],
  ["90%", "30%", "3.5s"],
];

export function Particles() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {particles.map(([top, left, delay]) => (
        <span
          aria-hidden="true"
          className="particle"
          key={`${top}-${left}`}
          style={{ top, left, animationDelay: delay }}
        />
      ))}
    </div>
  );
}
