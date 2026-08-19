import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { projects } from "../data/projects";
import Reveal from "../components/Reveal";

export default function Projects() {
  const [activeId, setActiveId] = useState(projects[0].id);
  const active = projects.find((p) => p.id === activeId);

  return (
    <section id="projects" className="section">
      <h2 className="section-title">My Projects</h2>

      {/* Tab bar - slides in from the right */}
      <Reveal type="slideRight">
        <div className="flex flex-wrap gap-3 mb-8">
          {projects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => setActiveId(project.id)}
              className={`flex items-center gap-2 px-4 py-3 rounded-lg border text-sm font-medium transition-all ${
                activeId === project.id
                  ? "border-accent bg-accent/10 text-white"
                  : "border-cardBorder bg-card text-muted hover:border-accent/40 hover:text-white"
              }`}
            >
              <span className="text-accent2 font-mono">{index + 1}.</span>
              {project.title}
              <span
                className={`ml-2 text-xs px-2 py-0.5 rounded-full ${
                  activeId === project.id
                    ? "bg-accent2/20 text-accent2"
                    : "bg-white/5 text-muted"
                }`}
              >
                {project.tag}
              </span>
            </button>
          ))}
        </div>
      </Reveal>

      {/* Detail panel - slides in from the left, re-animates when active project changes */}
      <Reveal key={active.id} type="slideLeft" delay={0.1}>
        <div className="card border-accent/30">
          <span className="badge mb-4 inline-block">{active.badge}</span>

          <h3 className="text-3xl font-bold text-white mb-2">{active.title}</h3>
          <p className="text-accent2 text-sm font-mono mb-5">{active.tag}</p>

          <p className="text-muted leading-relaxed mb-6 max-w-2xl">
            {active.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {active.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 bg-accent/10 text-accent2 border border-accent/30 rounded-full text-xs font-medium"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </Reveal>

      <a
        href="https://github.com/kartikgundla"
        className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-accent2 hover:underline"
      >
        <ExternalLink size={16} />
        View All Projects on GitHub →
      </a>
    </section>
  );
}