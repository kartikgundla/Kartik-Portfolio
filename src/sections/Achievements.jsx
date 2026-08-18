import { Trophy, Star, Zap, Users } from "lucide-react";

const achievements = [
  { icon: Trophy, title: "Technical Club Member", desc: "Scheduler" },
  { icon: Star, title: "Event Contribution", desc: "Technosava 2K25, Engineer's Day, Farewell" },
  { icon: Zap, title: "Continuous Learner", desc: "Always exploring new technologies and improving skills." },
  { icon: Users, title: "Team Leadership", desc: "Active in group projects & technical events." },
];

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <h2 className="section-title">Achievements</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {achievements.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="card">
            <Icon className="text-accent mb-3" size={20} />
            <p className="font-semibold text-sm mb-1">{title}</p>
            <p className="text-xs text-muted">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
