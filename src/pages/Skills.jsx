import { skills } from "../data/skills";
import SkillTag from "../components/SkillTag";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <SkillTag key={skill.name} label={skill.name} />
        ))}
      </div>
    </section>
  );
}