import { MapPin, GraduationCap, User, Calendar, Target, Users, Star, CheckCircle2 } from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";

const infoRows = [
  { icon: MapPin, label: "Location", value: "Solapur, Maharashtra, India" },
  { icon: GraduationCap, label: "Department", value: "Computer Technology" },
  { icon: User, label: "Status", value: "Student" },
  { icon: Calendar, label: "Year", value: "2nd Year" },
];

const traits = [
  { icon: Target, title: "Problem Solver", desc: "I love solving logic based problems." },
  { icon: Users, title: "Team Player", desc: "I enjoy working in teams & collaborating." },
  { icon: Star, title: "Quick Learner", desc: "I quickly adapt to new technologies." },
  { icon: CheckCircle2, title: "Detail Oriented", desc: "I focus on writing clean & efficient code." },
];

export default function About() {
  return (
    <section id="about" className="section">
      <h2 className="section-title">About Me</h2>
      <SectionWrapper direction="left">
        <div className="md:col-span-2">
          <div className="grid md:grid-cols-[1.3fr_1fr] gap-6 mb-6">
            <div>
              <p className="text-accent italic text-lg mb-4 border-l-2 border-accent pl-4">
                "Code with Purpose, Build for Impact."
              </p>
              <p className="text-muted leading-relaxed mb-4">
                I'm Kartik Gundla, a 2nd Year Diploma student in Computer
                Technology at Government Polytechnic, Solapur.
              </p>
              <p className="text-muted leading-relaxed">
                I enjoy turning ideas into code and building useful solutions
                that solve real-world problems. I'm passionate about learning,
                exploring new tech and improving everyday.
              </p>
            </div>

            <div className="card space-y-5">
              {infoRows.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-3">
                  <Icon className="text-accent mt-1" size={18} />
                  <div>
                    <p className="text-xs text-muted">{label}</p>
                    <p className="font-medium">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper direction="right">
        <div className="bg-[#15121F] border border-white/10 rounded-xl p-5 ...">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {traits.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="card text-center">
              <Icon className="text-accent mx-auto mb-3" size={22} />
              <p className="font-semibold mb-1">{title}</p>
              <p className="text-xs text-muted">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
    </section >
  );
}
