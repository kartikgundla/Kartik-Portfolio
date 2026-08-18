import education from "../data/education";
import TimelineItem from "../components/TimelineItem";

export default function Education() {
  return (
    <section id="education" className="section">
      <h2 className="section-title">Education</h2>
      <div className="relative pl-6 space-y-6 before:content-[''] before:absolute before:left-1.5 before:top-2 before:bottom-2 before:w-px before:bg-cardBorder">
        {education.map((item) => (
          <TimelineItem key={item.school} {...item} />
        ))}
      </div>
    </section>
  );
}
