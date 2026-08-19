import { Briefcase, Calendar } from "lucide-react";
import Reveal from "../components/Reveal";
export default function Experience() {
  return (
    <section id="experience" className="section">
       {/* min-h-screen flex flex-col justify-center"> */}
      <h2 className="section-title">Experience</h2>
      <Reveal type="slideLeft">
      <div className="card max-w-4xl">
        <div className="flex flex-col md:flex-row md:items-start gap-6">
          <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
            <Briefcase className="text-accent2" size={28} />
          </div>

          <div className="flex-1">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
              <h3 className="text-2xl font-bold text-white">
                Indian Railways – DRM Solapur
              </h3>
              <span className="badge flex items-center gap-1">
                <Calendar size={12} />
                Apr 2025 – Jul 2025 (3 months)
              </span>
            </div>

            <p className="text-accent2 font-medium mb-6">
              Construction Field Intern
            </p>

            <ul className="space-y-3">
              <li className="flex gap-3 text-muted leading-relaxed">
                <span className="text-accent2 mt-1">▸</span>
                Worked on construction site documentation, maintaining
                accurate records of ongoing railway infrastructure projects.
              </li>
              <li className="flex gap-3 text-muted leading-relaxed">
                <span className="text-accent2 mt-1">▸</span>
                Understood railway operations & workflow through hands-on
                exposure to the Construction Department.
              </li>
              <li className="flex gap-3 text-muted leading-relaxed">
                <span className="text-accent2 mt-1">▸</span>
                Contributed to team coordination & field work, bridging
                classroom knowledge with real-world engineering practices.
              </li>
            </ul>
          </div>
        </div>
      </div>
      </Reveal>
    </section>
  );
}