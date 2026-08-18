export default function Experience() {
  const points = [
    "Worked on construction site documentation",
    "Understood railway operations & workflow",
    "Team coordination & field work",
  ];

  return (
    <section id="experience" className="section">
      <h2 className="section-title">Experience</h2>
      <div className="card flex flex-col md:flex-row gap-5">
        <div className="w-14 h-14 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center text-2xl shrink-0">
          🚆
        </div>
        <div className="flex-1">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
            <h3 className="font-semibold">Indian Railways – DRM Solapur</h3>
            <span className="badge">Apr 2025 – Jul 2025 (3 months)</span>
          </div>
          <p className="text-sm text-muted mb-3">Construction Field Intern</p>
          <ul className="space-y-1.5">
            {points.map((p) => (
              <li key={p} className="text-sm text-muted flex gap-2">
                <span className="text-accent">•</span> {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
