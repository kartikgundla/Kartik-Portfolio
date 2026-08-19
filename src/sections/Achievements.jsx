import { Trophy, Star, Zap, Users } from "lucide-react";
import { achievements } from "../data/achievements";
import Reveal from "../components/Reveal";

const icons = { trophy: Trophy, star: Star, zap: Zap, users: Users };

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <h2 className="section-title">Achievements</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {achievements.map((item, i) => {
          const Icon = icons[item.icon];
          return (
            <Reveal key={item.title} type="fadeUp" delay={i * 0.1}>
              <div className="card flex flex-col justify-between min-h-[280px] hover:border-accent/40 transition-colors">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                    <Icon className="text-accent2" size={22} />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-6 pt-4 border-t border-cardBorder">
                  <span className="text-xs text-muted font-mono uppercase">
                    {item.metricLabel}
                  </span>
                  <span className="text-xs font-bold text-accent2 font-mono">
                    {item.metricValue}
                  </span>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}