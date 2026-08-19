import { useState } from "react";
import { GraduationCap, Award, Calendar, ChevronDown, ChevronUp } from "lucide-react";
import { education } from "../data/education";
import Reveal from "../components/Reveal";

const icons = {
  graduation: GraduationCap,
  award: Award,
};

export default function Education() {
  const [openId, setOpenId] = useState(education[0].id);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="education" className="section">
      <h2 className="section-title">Education</h2>

      <div className="relative pl-10">
        <div className="absolute left-4 top-4 bottom-4 w-px bg-gradient-to-b from-accent via-accent2 to-transparent" />

        <div className="space-y-6">
          {education.map((item, i) => {
            const Icon = icons[item.icon];
            const isOpen = openId === item.id;

            return (
              <Reveal key={item.id} type="slideLeft" delay={i * 0.15}>
                <div className="relative">
                  <div className="absolute -left-10 top-4 w-8 h-8 rounded-full bg-card border border-accent/40 flex items-center justify-center">
                    <Icon size={16} className="text-accent2" />
                  </div>

                  <div
                    className="card cursor-pointer transition-colors hover:border-accent/40"
                    onClick={() => toggle(item.id)}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <span className="flex items-center gap-1 text-xs text-accent2 font-mono">
                            <Calendar size={12} />
                            {item.period}
                          </span>
                          <span className="badge text-xs">{item.badge}</span>
                        </div>

                        <h3 className="text-xl font-bold text-accent2 mb-1">
                          {item.school}
                        </h3>
                        <p className="text-muted text-sm">{item.course}</p>
                      </div>

                      <button className="text-muted hover:text-white transition-colors mt-1">
                        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      </button>
                    </div>

                    {isOpen && (
                      <ul className="mt-4 pt-4 border-t border-cardBorder space-y-2">
                        {item.details.map((detail, idx) => (
                          <li key={idx} className="flex gap-2 text-sm text-muted">
                            <span className="text-accent2">•</span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}