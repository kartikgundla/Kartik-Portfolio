import { Rocket, Target, TrendingUp, Star } from "lucide-react";
import { goals } from "../data/goals";
import Reveal from "../components/Reveal";

const icons = { rocket: Rocket, target: Target, trending: TrendingUp, star: Star };

export default function Goals() {
  return (
    <section id="goals" className="section">
      <h2 className="section-title">Future Goals</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {goals.map((goal, i) => {
          const Icon = icons[goal.icon];
          return (
            <Reveal key={goal.term} type="fadeUp" delay={i * 0.1}>
              <div className="card flex flex-col items-center text-center min-h-[260px]">
                <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center mb-5">
                  <Icon className="text-accent2" size={26} />
                </div>

                <span className="badge text-xs mb-3">{goal.duration}</span>

                <h3 className="text-lg font-bold text-white mb-3">
                  {goal.term}
                </h3>

                <p className="text-sm text-muted leading-relaxed">
                  {goal.desc}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}