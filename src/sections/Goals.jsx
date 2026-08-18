import { Rocket, Compass, Target, Star } from "lucide-react";
import goals from "../data/goals";

const icons = { Rocket, Compass, Target, Star };

export default function Goals() {
  return (
    <section id="goals" className="section">
      <h2 className="section-title">Future Goals</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative">
        <div className="hidden md:block absolute top-8 left-[12%] right-[12%] h-px border-t border-dashed border-cardBorder -z-0" />
        {goals.map(({ title, period, desc, iconName }) => {
          const Icon = icons[iconName];
          return (
            <div key={title} className="text-center relative z-10">
              <div className="w-16 h-16 mx-auto rounded-full bg-card border border-accent/30 flex items-center justify-center mb-4">
                <Icon className="text-accent" size={24} />
              </div>
              <p className="font-semibold">{title}</p>
              {period && <p className="text-xs text-muted mb-2">{period}</p>}
              <p className="text-xs text-muted">{desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
