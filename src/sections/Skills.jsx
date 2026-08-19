import { useState } from "react";
import { skills, categories } from "../data/skills";
import SkillRing from "../components/SkillRing";
import Reveal from "../components/Reveal";

const categoryColors = {
  Languages: "#22d3ee",
  "Web Development": "#a855f7",
  "Databases & Tools": "#ec4899",
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="section">
      {/* min-h-screen flex items-center"> */}
      <div className="w-full">
        <h2 className="section-title">Skills</h2>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full border text-sm font-medium transition-all ${activeCategory === cat
                ? "border-accent bg-accent/15 text-white"
                : "border-cardBorder bg-card text-muted hover:border-accent/40 hover:text-white"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((skill, i) => (
            <Reveal key={skill.name} type="scaleUp" delay={i * 0.05}>
              <div
                key={skill.name}
                className="card flex items-center justify-between hover:border-accent/40 transition-colors"
              >
                <div>
                  <p className="text-xs text-muted font-mono uppercase mb-1">
                    {skill.category}
                  </p>
                  <h3 className="text-lg font-bold text-white mb-3">
                    {skill.name}
                  </h3>
                  <div className="w-32 h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${skill.level}%`,
                        backgroundColor: categoryColors[skill.category],
                      }}
                    />
                  </div>
                </div>

                <SkillRing
                  percent={skill.level}
                  color={categoryColors[skill.category]}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}